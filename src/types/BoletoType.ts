import type { PagadorType } from './PagadorType'

export interface BoletoType {
  numeroConvenio: number
  dataVencimento: string
  valorTitulo: number
  nossoNumero: number
  status: string
  pagador: PagadorType
}
