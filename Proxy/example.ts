interface Subject {
  request(): void;
}

class RealObject implements Subject {
  request(): void {
    console.log("This request is processed");
  }
}

class ProxySubject implements Subject {
  private realObj: RealObject;

  constructor(realObj: RealObject) {
    this.realObj = realObj;
  }

  request(): void {
    if (true) {
      this.realObj.request();
    }
    console.log("Noo");
  }
}

function clientCode(obj: Subject) {
  obj.request();
}

let sub1 = new RealObject();
let proxy = new ProxySubject(sub1);
clientCode(proxy);
