import { Money } from './money'

export class Dollar extends Money {
  constructor (amount: number) {
    super()
    this.amount = amount
  }

  times (multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier)
  }
}
