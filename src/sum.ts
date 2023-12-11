import { Money } from './money'
import { type Bank } from './bank'
import { type Expression } from './expression'

export class Sum implements Expression {
  constructor (public augend: Money, public addend: Money) {}

  reduce (bank: Bank, to: string): Money {
    const amount = this.augend.getAmount() + this.addend.getAmount()
    return new Money(amount, to)
  }
}
