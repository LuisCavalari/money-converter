import { type Money } from './money'
import { type Sum } from './sum'
import { type Expression } from './expression'

export class Bank {
  reduce (source: Expression, to: string): Money {
    const sum: Sum = source as Sum
    return sum.reduce(to)
  }
}
