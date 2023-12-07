import { Money } from './money'

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
})
