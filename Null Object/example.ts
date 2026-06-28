interface Bird {
  sound(): void;
}

class Sparrow implements Bird {
  sound() {
    console.log("Chirp Chirp");
  }
}

class Ostrich implements Bird {
  sound() {
    console.log("Beh Beh Beh");
  }
}

class NullBird implements Bird {
  sound() {
    console.log("No sound");
  }
}

class BirdFactory {
  getBird(type: string) {
    switch (type) {
      case "Sparrow":
        return new Sparrow();
      case "Ostrich":
        return new Ostrich();
      default:
        // return null
        return new NullBird();
    }
  }
}

function clientCode(b: Bird) {
  // Null check
  //   if (b !== null) {
  //     b.sound();
  //   }
  // Null object avoids null check
  b.sound();
}

const bf = new BirdFactory();
clientCode(bf.getBird("Sparrow"));
clientCode(bf.getBird("Ostrich"));
clientCode(bf.getBird("Lion"));
