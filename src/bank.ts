import { type Money } from './money'
import { type Sum } from './sum'
import { type Expression } from './expression'

const currenciesToKey = (currencies: Pair): string => {
  return `${currencies.from}-${currencies.to}`
}

interface Pair {
  from: string
  to: string
}

type Rates = Record<string, number>

export class Bank {
  private rates: Rates = {}

  reduce (source: Expression, to: string): Money {
    const sum: Sum = source as Sum
    return sum.reduce(this, to)
  }

  addRate (from: string, to: string, rate: number): void {
    const currencies: Pair = { from, to }
    this.rates[currenciesToKey(currencies)] = rate
  }

  getRate (from: string, to: string): number {
    if (from === to) {
      return 1
    }

    return this.rates[currenciesToKey({ from, to })]
  }
}
