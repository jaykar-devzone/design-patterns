// Define a Handler base interface
interface Handler {
  setNext(h: Handler): Handler;
  handle(request: any): string | null;
}

// Each handler must have a base methods to define a common logic
class BaseHandler implements Handler {
  private nextHandler: Handler | null = null;

  setNext(h: Handler): Handler {
    this.nextHandler = h;
    return h;
  }
  handle(request: any): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return null;
  }
}

// Each handler will check if they can handle else call the parent handle method to pass the request to the next handler in chain
class MonkeyHandler extends BaseHandler {
  handle(request: any): string | null {
    if (request === "Banana") {
      return "Monkey eating banana";
    }
    return super.handle(request);
  }
}

class SquirrelHandler extends BaseHandler {
  public handle(request: string): string | null {
    if (request === "Nut") {
      return `Squirrel: I'll eat the ${request}.`;
    }
    return super.handle(request);
  }
}

/** ------------------- client code ------------------------ */
function ClientCode(handler: Handler) {
  // will pass the start handler obj of the chain
  const foods = ["Nut", "Banana", "Cup of coffee"];

  for (const food of foods) {
    console.log(`Client: Who wants a ${food}?`);

    const result = handler.handle(food);
    if (result) {
      console.log(`  ${result}`);
    } else {
      console.log(`  ${food} was left untouched.`);
    }
  }
}

const monkey = new MonkeyHandler();
const squirrel = new SquirrelHandler();
monkey.setNext(squirrel); // buiild a chain and pass to the client

ClientCode(monkey);
