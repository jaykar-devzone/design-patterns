import { StockObservable } from "../Observable/StockObservable";
import { NotificationAlertOberver } from "./NotificationAlertObserver";

class EmailAlertObserver implements NotificationAlertOberver {

    private email: string;
    private observable: StockObservable;
    constructor(email: string, stockObserver: StockObservable) {
        this.email = email;
        this.observable = stockObserver;
    }

    notify(): void {
        console.log('Sending mail to ', this.email)
    }
}

export default EmailAlertObserver;