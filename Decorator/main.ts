
// BasePizza.ts
interface BasePizza {
    description(): string
    cost(): number
}

class Margrita implements BasePizza {
    public description(): string {
        return "Margrita Pizza"
    }

    public cost(): number {
        return 200;
    }
}

class PlainPizza implements BasePizza {
    public description(): string {
        return "Plain Pizza"
    }

    public cost(): number {
        return 100;
    }
}

class FarmHouse implements BasePizza {
    public description(): string {
        return "Farmhouse Pizza"
    }

    public cost(): number {
        return 500;
    }
}


/**
 * Toppin Decorator
 * To apply layer of features
 */
abstract class ToppinDecorator {
    pizza: BasePizza

    constructor(pizza: BasePizza) {
        this.pizza = pizza
    }

    abstract cost(): number
}

class Cheese extends ToppinDecorator {
    constructor(pizza: BasePizza) {
        super(pizza)
    }

    public cost(): number {
        return this.pizza.cost() + 50;
    }
}

class Mashroom extends ToppinDecorator {
    constructor(pizza: BasePizza) {
        super(pizza)
    }

    public cost(): number {
        return this.pizza.cost() + 100;
    }
}

class PepperoniTopping extends ToppinDecorator {
    constructor(pizza: BasePizza) {
        super(pizza)
    }

    public cost(): number {
        return this.pizza.cost() + 200;
    }
}

/**
 * Client Code
 */

class main {
    constructor() {
        console.log('==== Decorator design pattern ====');

        const plainPizza = new PlainPizza();
        console.log('Order 1', plainPizza.description(), plainPizza.cost());

        // Applied a extra cheeze layer
        const margrita = new Cheese(new Margrita())
        console.log('Order 2', margrita.cost());

    }
}

new main();