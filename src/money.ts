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

  static dollar (quantity: number): Dollar {
    return new Dollar(quantity, 'USD')
  }

  static euro (quantity: number): Euro {
    return new Euro(quantity, 'EUR')
  }

  getCurrency (): string {
    return this.currency
  }

  times (multiplier: number): Money {
    return new Money(this.amount * multiplier, this.getCurrency())
  }
}

export class Euro extends Money {
  times (multiplier: number): Euro {
    return new Money(this.amount * multiplier, this.getCurrency())
  }
}

export class Dollar extends Money {
  times (multiplier: number): Dollar {
    return new Money(this.amount * multiplier, this.getCurrency())
  }
}
