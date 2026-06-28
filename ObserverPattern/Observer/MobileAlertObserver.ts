import { StockObservable } from "../Observable/StockObservable";
import { NotificationAlertOberver } from "./NotificationAlertObserver";

class MobileAlertObserver implements NotificationAlertOberver {

    private username: string;
    private observable: StockObservable;
    constructor(username: string, stockObserver: StockObservable) {
        this.username = username;
        this.observable = stockObserver;
    }

    notify(): void {
        console.log('Sending mobile alert to ', this.username)
    }
}

export default MobileAlertObserver;