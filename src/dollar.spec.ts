import { Dollar } from './dollar'

describe('Dollar', () => {
  it('should return 10 when five dollars are multiplied by 2', () => {
    const five: Dollar = new Dollar(5)
    let product: Dollar = five.times(2)

    expect(product.amount).toEqual(10)

    product = five.times(3)
    expect(product.amount).toEqual(15)
  })

  it('should return true if dollars has the same value', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy()
  })

  it('should return false dollar has differents values', () => {
    expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy()
  })
})
