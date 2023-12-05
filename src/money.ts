export class Money {
  public amount: number

  equals (money: Money): boolean {
    return money.amount === this.amount
  }
}
