import { Expression } from './expression'

export class Money implements Expression {
  private readonly amount: number
  private readonly currency: string

  constructor (amount: number, currency: string) {
    this.amount = amount
    this.currency = currency
  }

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
    return new Money(this.amount + addend.getAmount(), this.getCurrency())
  }

  getCurrency (): string {
    return this.currency
  }

  getAmount (): number {
    return this.amount
  }
}
