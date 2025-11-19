<template>
  <article>
    <header>
      <h2>Boletos</h2>
    </header>

    <div class="tools">
      <MultiSelect
        item-name="status"
        :items="boletosStore.allStatus()"
        ref="statusSelectRef"
        style="width: 300px"
      />
      <button v-on:click="filtrar">Filtrar</button>
    </div>

    <div class="table-container overflow-auto">
      <BoletoTabela :boletos="boletos" />
    </div>

    <p class="text-end">{{ boletos.length }} registros</p>
  </article>
</template>

<script setup lang="ts">
import BoletoTabela from '@/components/boleto/BoletoTabela.vue'
import MultiSelect from '@/components/ui/MultiSelect.vue'
import { useBoletosStore } from '@/stores/boletos'
import type { BoletoType } from '@/types/BoletoType'
import { ref, type Ref } from 'vue'

const boletosStore = useBoletosStore()
const boletos = ref([]) as Ref<BoletoType[]>
boletos.value = boletosStore.all()

const statusSelectRef = ref<typeof MultiSelect | null>(null)

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

function filtrar() {
  if (statusSelectRef.value) {
    const selectedStatus: string[] = statusSelectRef.value.selectedItems()
    if (selectedStatus.length === 0) {
      alert('Selecione ao menos status')
      return
    }

    boletos.value = []
    sleep(500).then(() => (boletos.value = boletosStore.filterStatus(selectedStatus)))
  }
}
</script>

<style scoped>
.tools {
  display: flex;
  gap: 2;
  justify-content: flex-end;

  &:first-child {
    border: 10px solid white;
  }

  & button {
    margin-bottom: 21px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}

.table-container {
  height: 400px;
}
</style>
