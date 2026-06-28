class Bird {
    fly() {
        console.log("Flying");
    }
}

class Penguin extends Bird {
    fly() {
        throw new Error("Penguins cannot fly");
    }
}

let b = new Bird();
b.fly();

b = new Penguin();
b.fly()