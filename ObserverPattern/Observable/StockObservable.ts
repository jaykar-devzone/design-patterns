import { NotificationAlertOberver } from "../Observer/NotificationAlertObserver";
export interface StockObservable {
    add(observer: NotificationAlertOberver): void;
    remove(observer: NotificationAlertOberver): void;
    notifySubscriber(): void;
    setStock(count: number): void
    getStock(): void
}