import { NotificationAlertOberver } from "../Observer/NotificationAlertObserver";
import { StockObservable } from "./StockObservable";

class IphoneObservable implements StockObservable {

    private iphoneObservr: NotificationAlertOberver[] = []
    private stockCount: number = 0
    add(observer: NotificationAlertOberver): void {
        this.iphoneObservr.push(observer)
    }

    remove(observer: NotificationAlertOberver): void {
        this.iphoneObservr.pop()
    }

    notifySubscriber(): void {
        for (const observer of this.iphoneObservr) {
            observer.notify();
        }
    }

    setStock(count: number): void {
        if (this.stockCount === 0) {
            this.notifySubscriber()
        }
        this.stockCount += count
    }

    getStock(): number {
        return this.stockCount;
    }

}
export default IphoneObservable;