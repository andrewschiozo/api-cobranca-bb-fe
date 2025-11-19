<template>
  <table class="striped">
    <thead>
      <tr>
        <th class="text-center">Convênio</th>
        <th class="text-center">Nosso Número</th>
        <th class="text-end">Valor (R$)</th>
        <th class="text-end">Vencimento</th>
        <th class="text-start">Pagador</th>
        <th class="text-center">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td v-if="props.boletos.length === 0" class="loader" colspan="6" aria-busy="true"></td>
      </tr>
      <tr v-for="(boleto, index) in props.boletos" :key="index">
        <td class="text-center">Convênio</td>
        <td class="text-center">{{ boleto.nossoNumero }}</td>
        <td class="text-end">
          {{
            new Intl.NumberFormat('pt-BR', { style: 'decimal', minimumFractionDigits: 2 }).format(
              boleto.valorTitulo,
            )
          }}
        </td>
        <td class="text-end">{{ new Date(boleto.dataVencimento).toLocaleDateString() }}</td>
        <td class="text-start">{{ boleto.pagador.nome }}</td>
        <td class="text-center">
          <BoletoStatus :status-name="boleto.status" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import type { BoletoType } from '@/types/BoletoType'
// import { ref, type Ref } from 'vue'
import BoletoStatus from './BoletoStatus.vue'

const props = defineProps({
  boletos: {
    type: Array as () => BoletoType[],
    default: () => [],
  },
})
</script>

<style scoped>
table {
  & th,
  td {
    white-space: nowrap;
  }
}
</style>
