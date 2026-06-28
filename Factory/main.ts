import ShapeFactory from "./ShapeFactory"
class main {

    constructor() {
        const shape = new ShapeFactory()
        const circle = shape.getShape("CIRCLE");
        circle.draw()
    }
}
new main()