import IphoneObservable from "./Observable/IphoneStockObervable"
import EmailAlertObserver from "./Observer/EmailAlertObserver"
import MobileAlertObserver from "./Observer/MobileAlertObserver"
class main {
    iphoneObservable = new IphoneObservable()

    constructor() {

        const o1 = new EmailAlertObserver("jaydip@york.ie", this.iphoneObservable);
        const o2 = new EmailAlertObserver("jaydip+1@york.ie", this.iphoneObservable)
        const o3 = new MobileAlertObserver("jaydip+1@york.ie", this.iphoneObservable)

        this.iphoneObservable.add(o1)
        this.iphoneObservable.add(o2)
        this.iphoneObservable.add(o3)
        this.iphoneObservable.setStock(10)
    }

}

new main()