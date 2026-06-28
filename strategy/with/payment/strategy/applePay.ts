import { PaymentStrategy } from "./stratgy.interface";

export class ApplyPayStrategy implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount} using ApplePay`);
  }
}
