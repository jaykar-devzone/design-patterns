import { PaymentStrategy } from "./stratgy.interface";

export class PayPalStrategy implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount} using PayPal`);
  }
}
