class Payment {
  static executePayment(amount: number, type: string): void {
    if (type === "paypal") {
      console.log(`Paid ${amount} using PayPal`);
    } else if (type === "applePay") {
      console.log(`Paid ${amount} using ApplePay`);
    }
  }
}

Payment.executePayment(100, "paypal");
