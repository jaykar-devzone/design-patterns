import { PaymentContext } from "./payment-contex";
import { ApplyPayStrategy } from "./strategy/applePay";
import { PayPalStrategy } from "./strategy/paypal";

class Main {}

const main = new Main();
const context = new PaymentContext(new PayPalStrategy());
context.executePayment(100);
