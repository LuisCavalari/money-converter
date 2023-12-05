import { Dollar } from './dollar'
import { Euro } from './euro'

describe('Money', () => {
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

  it('should return 10 when five Euros are multiplied by 2 and 15 when is multiplied by 3', () => {
    const five: Euro = new Euro(5)

    expect(five.times(2).equals(new Euro(10))).toBeTruthy()

    expect(five.times(3).equals(new Euro(15))).toBeTruthy()
  })

  it('should return true if Euros has the same value', () => {
    expect(new Euro(5).equals(new Euro(5))).toBeTruthy()
  })

  it('should return false Euro has differents values', () => {
    expect(new Euro(5).equals(new Euro(6))).toBeFalsy()
  })
})
