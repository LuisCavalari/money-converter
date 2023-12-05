export abstract class Money {
  public amount: number

  equals (money: Money): boolean {
    if (this.constructor !== money.constructor) {
      return false
    }

    return money.amount === this.amount
  }

  static dollar (quantity: number): Dollar {
    return new Dollar(quantity)
  }

  static euro (quantity: number): Euro {
    return new Euro(quantity)
  }

  abstract times (multiplier: number): Money
}

export class Euro extends Money {
  constructor (amount: number) {
    super()
    this.amount = amount
  }

  times (multiplier: number): Euro {
    return new Euro(this.amount * multiplier)
  }
}

export class Dollar extends Money {
  constructor (amount: number) {
    super()
    this.amount = amount
  }

  times (multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier)
  }
}
