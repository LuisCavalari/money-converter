import { Money } from './money'

export class Sum {
  constructor (public augend: Money, public addend: Money) {}

  reduce (to: string): Money {
    const amount = this.augend.getAmount() + this.addend.getAmount()
    return new Money(amount, to)
  }
}
