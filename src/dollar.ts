export class Dollar {
  private readonly amount: number

  constructor (amount: number) {
    this.amount = amount
  }

  times (multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier)
  }

  equals (money: Dollar): boolean {
    return money.amount === this.amount
  }
}
