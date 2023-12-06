export abstract class Money {
  public amount: number
  public currency: string

  constructor (amount: number, currency: string) {
    this.amount = amount
    this.currency = currency
  }

  equals (money: Money): boolean {
    if (this.constructor !== money.constructor) {
      return false
    }

    return money.amount === this.amount
  }

  static dollar (quantity: number): Dollar {
    return new Dollar(quantity, 'USD')
  }

  static euro (quantity: number): Euro {
    return new Euro(quantity, 'EUR')
  }

  getCurrency (): string {
    return this.currency
  }

  abstract times (multiplier: number): Money
}

export class Euro extends Money {
  times (multiplier: number): Euro {
    return Money.euro(this.amount * multiplier)
  }
}

export class Dollar extends Money {
  times (multiplier: number): Dollar {
    return Money.dollar(this.amount * multiplier)
  }
}
