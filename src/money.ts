export class Money {
  public amount: number
  public currency: string

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

  getCurrency (): string {
    return this.currency
  }

  times (multiplier: number): Money {
    return new Money(this.amount * multiplier, this.getCurrency())
  }
}
