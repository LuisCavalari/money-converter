import { Bank } from './bank'
import { type Expression } from './expression'
import { Money } from './money'
import { Sum } from './sum'

describe('Money', () => {
  it('should return 10 when five dollars are multiplied by 2 and 15 when is multiplied by 3', () => {
    const five: Money = Money.dollar(5)

    expect(five.times(2).equals(Money.dollar(10))).toBeTruthy()

    expect(five.times(3).equals(Money.dollar(15))).toBeTruthy()
  })

  it('should return true if dollars has the same value', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy()
  })

  it('should return false dollar has differents values', () => {
    expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy()
  })

  it('should return true when money equalty is correct', () => {
    const randomMoneyQuantity = Math.abs(Math.random())
    expect(Money.euro(randomMoneyQuantity).equals(Money.euro(randomMoneyQuantity))).toBeTruthy()
    expect(Money.dollar(randomMoneyQuantity).equals(Money.dollar(randomMoneyQuantity))).toBeTruthy()
  })

  it('should return true when money equalty is invalid', () => {
    const randomMoneyQuantity = Math.abs(Math.random())
    const offset = 30

    expect(Money.euro(randomMoneyQuantity).equals(Money.euro(randomMoneyQuantity + offset))).toBeFalsy()
    expect(Money.dollar(randomMoneyQuantity).equals(Money.dollar(randomMoneyQuantity + offset))).toBeFalsy()
    expect(Money.dollar(randomMoneyQuantity).equals(Money.euro(randomMoneyQuantity))).toBeFalsy()
  })

  it('should correctly handle currencies', () => {
    expect(Money.dollar(5).getCurrency()).toEqual('USD')
  })

  it('should correctly handle currencies', () => {
    expect(Money.dollar(5).getCurrency()).toEqual('USD')
    expect(Money.euro(5).getCurrency()).toEqual('EUR')
  })

  it('should return false when distincts currencies are compared with same value', () => {
    expect(Money.dollar(5).equals(Money.euro(5))).toBeFalsy()
  })

  it('should sum two dollars amount', () => {
    const five: Money = Money.dollar(5)
    const result: Expression = five.add(five)
    const sum = result as Sum
    expect(sum.augend).toEqual(five)
    expect(sum.addend).toEqual(five)
  })

  it('should reduce a sum', () => {
    const sum: Expression = new Sum(Money.dollar(3), Money.dollar(4))
    const bank = new Bank()
    const result = bank.reduce(sum, 'USD')
    expect(result).toEqual(Money.dollar(7))
  })

  it('should reduce a money', () => {
    const bank = new Bank()
    const result = bank.reduce(Money.dollar(7), 'USD')
    expect(result).toEqual(Money.dollar(7))
  })

  it('should reduce from different currencies', () => {
    const bank = new Bank()
    bank.addRate('EUR', 'USD', 2)

    const result = bank.reduce(Money.euro(2), 'USD')
    expect(result).toEqual(Money.dollar(1))
  })

  it('should handle idenity rate', () => {
    expect(new Bank().getRate('USD', 'USD')).toEqual(1)
  })
})
