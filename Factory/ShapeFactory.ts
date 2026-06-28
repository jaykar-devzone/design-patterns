import { Circle, Rectangle, Shape } from "./Shape"

class ShapeFactory {
    getShape(input: string): Shape {

        switch (input) {
            case "CIRCLE":
                return new Circle()
            case "RECTANGLE":
                return new Rectangle()
            default:
                throw new Error("Shape not found!");
        }

    }
}
export default ShapeFactory;