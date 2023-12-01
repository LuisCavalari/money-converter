import { Dollar } from './dollar'

describe('Dollar', () => {
  it('should return 10 when five dollars are multiplied by 2 and 15 when is multiplied by 3', () => {
    const five: Dollar = new Dollar(5)

    expect(five.times(2).equals(new Dollar(10))).toBeTruthy()

    expect(five.times(3).equals(new Dollar(15))).toBeTruthy()
  })

  it('should return true if dollars has the same value', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy()
  })

  it('should return false dollar has differents values', () => {
    expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy()
  })
})
