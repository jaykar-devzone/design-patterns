import { PaymentStrategy } from "./strategy/stratgy.interface";

export class PaymentContext {
  private strategy: PaymentStrategy;

  constructor(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  executePayment(amount: number): void {
    this.strategy.pay(amount);
  }
}
