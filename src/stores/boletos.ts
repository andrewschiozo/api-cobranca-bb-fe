import type { BoletoType } from '@/types/BoletoType'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
import boletosMock from '@/stores/mock/boletos.json'

export const useBoletosStore = defineStore('boletos', () => {
  const boletos = ref(boletosMock) as Ref<BoletoType[]>

  function pendentes(): BoletoType[] {
    return boletos.value.filter((boleto) => boleto.status === 'pendente')
  }

  function all(): BoletoType[] {
    return boletos.value
  }

  function filter(boletoStatus: string): BoletoType[] {
    if (boletoStatus === 'pendente') {
      return pendentes()
    }
    return all()
  }

  return { all, filter }
})
