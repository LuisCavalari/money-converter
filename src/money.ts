import { type Bank } from './bank'
import { type Expression } from './expression'
import { Sum } from './sum'

export class Money implements Expression {
  constructor (private readonly amount: number, private readonly currency: string) {}

  equals (money: Money): boolean {
    if (this.currency !== money.getCurrency()) {
      return false
    }

    return money.amount === this.amount
  }

  static dollar (quantity: number): Money {
    return new Money(quantity, 'USD')
  }

  static euro (quantity: number): Money {
    return new Money(quantity, 'EUR')
  }

  times (multiplier: number): Money {
    return new Money(this.amount * multiplier, this.getCurrency())
  }

  add (addend: Money): Expression {
    return new Sum(this, addend)
  }

  reduce (bank: Bank, to: string): Money {
    const rate = bank.getRate(this.getCurrency(), to)
    return new Money(this.getAmount() / rate, to)
  }

  getCurrency (): string {
    return this.currency
  }

  getAmount (): number {
    return this.amount
  }
}
