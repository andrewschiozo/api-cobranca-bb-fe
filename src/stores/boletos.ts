import type { BoletoType } from '@/types/BoletoType'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
import boletosMock from '@/stores/mock/boletos.json'

export const useBoletosStore = defineStore('boletos', () => {
  const boletos = ref(boletosMock) as Ref<BoletoType[]>

  function all(): BoletoType[] {
    return boletos.value
  }

  function filterStatus(boletoStatus: string[]): BoletoType[] {
    return boletos.value.filter((boleto) => boletoStatus.includes(boleto.status))
  }

  function allStatus(): string[] {
    return boletos.value.reduce((distinctStatus, boleto) => {
      if (!distinctStatus.includes(boleto.status)) {
        distinctStatus.push(boleto.status)
      }
      return distinctStatus
    }, [] as string[])
  }

  return { all, filterStatus, allStatus }
})
