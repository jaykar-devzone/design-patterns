interface TrafficLightState {
  action(obj: TrafficLight): void;
}

class RedState implements TrafficLightState {
  action(obj: TrafficLight): void {
    obj.setState(new GreenState());
    console.log("state changed to Green");
  }
}

class GreenState implements TrafficLightState {
  action(obj: TrafficLight): void {
    obj.setState(new YellowState());
    console.log("state changed to Yellow");
  }
}

class YellowState implements TrafficLightState {
  action(obj: TrafficLight): void {
    obj.setState(new RedState());
    console.log("state changed to Red");
  }
}

class TrafficLight {
  state: TrafficLightState | null = null;
  constructor() {
    this.state = new RedState();
  }

  setState(obj: TrafficLightState) {
    this.state = obj;
  }

  change() {
    this.state.action(this);
  }
}

const obj = new TrafficLight();
obj.change();
obj.change();
obj.change();
