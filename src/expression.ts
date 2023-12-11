import { type Bank } from './bank'
import { type Money } from './money'

export interface Expression {
  reduce: (bank: Bank, to: string) => Money
}
