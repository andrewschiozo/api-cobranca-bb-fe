<template>
  <section>
    <h2>Boletos</h2>
    <div class="card">
      <button v-on:click="all()">Todos</button>
      <button v-on:click="pendentes()">Pendentes</button>
    </div>
    <ul>
      <li v-for="boleto in boletosPagina" :key="boleto.nossoNumero">
        {{ boleto.nossoNumero }} | {{ boleto.status }} |
        {{ new Date(boleto.dataVencimento).toLocaleDateString() }}
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { useBoletosStore } from '@/stores/boletos'
import type { BoletoType } from '@/types/BoletoType'
import { ref, type Ref } from 'vue'

const boletosStore = useBoletosStore()
const boletosPagina = ref([]) as Ref<BoletoType[]>
boletosPagina.value = boletosStore.all()

function all() {
  boletosPagina.value = boletosStore.all()
}

function pendentes() {
  boletosPagina.value = boletosStore.filter('pendente')
}
</script>

<style scoped>
.card {
  border-radius: 5px;
  border: 1px solid var(--dark-blue);
  padding: 10px 5px;

  & button:first-child {
    margin-left: 0;
  }
}

.card button {
  padding: 5px;
  min-width: 80px;
  margin-left: 10px;
  background-color: transparent;
  border: 1px solid var(--dark-blue);

  &:hover {
    background-color: var(--primary-blue);
    color: #fff;
  }
}
</style>
