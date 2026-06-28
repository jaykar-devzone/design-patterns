# TypeScript Design Patterns Catalog

This repository serves as an educational resource showcasing clean, idiomatic implementations of various classical **Software Design Patterns** using TypeScript. Each pattern is implemented in isolation to focus on the structure, relationships, and problem-solving aspect of the pattern.

---

## 🗺️ Repository Map & Directory Structure

Here is a high-level view of how the patterns are structured in this repository:

*   **Creational Patterns** (focusing on object creation mechanisms)
    *   [Builder/](file:///Users/jaydip/Desktop/Practice/design-patterns/Builder) — Step-by-step object construction.
    *   [Factory/](file:///Users/jaydip/Desktop/Practice/design-patterns/Factory) — Instantiating classes without specifying exact concrete subclasses.
*   **Structural Patterns** (focusing on class and object composition)
    *   [Composite-structural/](file:///Users/jaydip/Desktop/Practice/design-patterns/Composite-structural) — Client treats individual objects and compositions uniformly.
    *   [Decorator/](file:///Users/jaydip/Desktop/Practice/design-patterns/Decorator) — Attaching new behaviors to objects dynamically.
    *   [Proxy/](file:///Users/jaydip/Desktop/Practice/design-patterns/Proxy) — Providing a surrogate or placeholder for access control/delegation.
*   **Behavioral Patterns** (focusing on communication and responsibility assignment between objects)
    *   [ChainOfResponsibilty/](file:///Users/jaydip/Desktop/Practice/design-patterns/ChainOfResponsibilty) — Passing requests along a chain of handlers.
    *   [Null Object/](file:///Users/jaydip/Desktop/Practice/design-patterns/Null%20Object) — Avoiding null checks by providing a default, neutral-behavior object.
    *   [ObserverPattern/](file:///Users/jaydip/Desktop/Practice/design-patterns/ObserverPattern) — Notifying multiple dependent objects of state changes automatically.
    *   [State Behavioral/](file:///Users/jaydip/Desktop/Practice/design-patterns/State%20Behavioral) — Altering object behavior when its internal state changes.
    *   [strategy/](file:///Users/jaydip/Desktop/Practice/design-patterns/strategy) — Encapsulating interchangeable families of algorithms.
*   **OOPS Concepts**
    *   [OOPS/](file:///Users/jaydip/Desktop/Practice/design-patterns/OOPS) — Basic Object-Oriented Programming foundations.

---

## 🎨 Creational Patterns

### 1. Builder Pattern
*   **Intent**: Separates the construction of a complex object from its representation, allowing the same construction process to create different representations.
*   **Reference**: [Refactoring.Guru - Builder Pattern](https://refactoring.guru/design-patterns/builder)
*   **Our Implementation**:
    *   [Student](file:///Users/jaydip/Desktop/Practice/design-patterns/Builder/example1.ts#L1-L8) is the target product.
    *   [StudentBuilder](file:///Users/jaydip/Desktop/Practice/design-patterns/Builder/example1.ts#L10-L16) defines the abstract steps.
    *   [ConcreteStudentBuilder](file:///Users/jaydip/Desktop/Practice/design-patterns/Builder/example1.ts#L18-L57) implements step execution and state tracking.
    *   [StudentDirector](file:///Users/jaydip/Desktop/Practice/design-patterns/Builder/example1.ts#L59-L75) controls the building steps to create specialized profiles (e.g., Science, Commerce, MBA, Arts).
*   **Source File**: [Builder/example1.ts](file:///Users/jaydip/Desktop/Practice/design-patterns/Builder/example1.ts)

### 2. Factory Method Pattern
*   **Intent**: Defines an interface for creating an object, but lets subclasses decide which class to instantiate.
*   **Reference**: [Refactoring.Guru - Factory Method](https://refactoring.guru/design-patterns/factory-method)
*   **Our Implementation**: 
    *   Defines a [Shape](file:///Users/jaydip/Desktop/Practice/design-patterns/Factory/Shape.ts#L1-L3) interface with concrete types like [Circle](file:///Users/jaydip/Desktop/Practice/design-patterns/Factory/Shape.ts#L5-L9) and [Rectangle](file:///Users/jaydip/Desktop/Practice/design-patterns/Factory/Shape.ts#L11-L15).
    *   A [ShapeFactory](file:///Users/jaydip/Desktop/Practice/design-patterns/Factory/ShapeFactory.ts#L3-L16) handles instantiation based on runtime configuration inputs, decoupling the client code from concrete implementations.
*   **Source Files**:
    *   [Factory/Shape.ts](file:///Users/jaydip/Desktop/Practice/design-patterns/Factory/Shape.ts)
    *   [Factory/ShapeFactory.ts](file:///Users/jaydip/Desktop/Practice/design-patterns/Factory/ShapeFactory.ts)
    *   [Factory/main.ts](file:///Users/jaydip/Desktop/Practice/design-patterns/Factory/main.ts)

---

## 🏛️ Structural Patterns

### 3. Composite Pattern
*   **Intent**: Composes objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.
*   **Reference**: [Refactoring.Guru - Composite Pattern](https://refactoring.guru/design-patterns/composite)
*   **Our Implementation**:
    *   Defines a unified [FileSystemComponent](file:///Users/jaydip/Desktop/Practice/design-patterns/Composite-structural/example1.ts#L3-L5) interface.
    *   [File](file:///Users/jaydip/Desktop/Practice/design-patterns/Composite-structural/example1.ts#L7-L15) represents leaf objects.
    *   [Directory](file:///Users/jaydip/Desktop/Practice/design-patterns/Composite-structural/example1.ts#L17-L35) represents composite nodes that can store other `FileSystemComponent` children, executing recursive traversal over all hierarchy nodes uniformly.
*   **Source File**: [Composite-structural/example1.ts](file:///Users/jaydip/Desktop/Practice/design-patterns/Composite-structural/example1.ts)

### 4. Decorator Pattern
*   **Intent**: Attaches additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.
*   **Reference**: [Refactoring.Guru - Decorator Pattern](https://refactoring.guru/design-patterns/decorator)
*   **Key Insight**: Avoids "class explosion" when combinations of behaviors grow exponentially.
*   **Source Files**:
    *   [Decorator/main.ts](file:///Users/jaydip/Desktop/Practice/design-patterns/Decorator/main.ts)
    *   [Decorator/README.md](file:///Users/jaydip/Desktop/Practice/design-patterns/Decorator/README.md)

### 5. Proxy Pattern
*   **Intent**: Provides a surrogate or placeholder for another object to control access to it (e.g., logging, validation, caching, lazy initialization).
*   **Reference**: [Refactoring.Guru - Proxy Pattern](https://refactoring.guru/design-patterns/proxy)
*   **Our Implementation**:
    *   [Subject](file:///Users/jaydip/Desktop/Practice/design-patterns/Proxy/example.ts#L1-L3) interface defines common operations.
    *   [RealObject](file:///Users/jaydip/Desktop/Practice/design-patterns/Proxy/example.ts#L5-L9) does the actual heavy lifting.
    *   [ProxySubject](file:///Users/jaydip/Desktop/Practice/design-patterns/Proxy/example.ts#L11-L24) sits in front of `RealObject` to intercept commands, validate conditions, and delegate or add hooks before/after execution.
*   **Source File**: [Proxy/example.ts](file:///Users/jaydip/Desktop/Practice/design-patterns/Proxy/example.ts)

---

## 🧠 Behavioral Patterns

### 6. Chain of Responsibility Pattern
*   **Intent**: Avoids coupling the sender of a request to its receiver by giving more than one object a chance to handle the request. Chains the receiving objects and passes the request along the chain until an object handles it.
*   **Reference**: [Refactoring.Guru - Chain of Responsibility](https://refactoring.guru/design-patterns/chain-of-responsibility)
*   **Our Implementations**:
    *   **Handler-based Animal Feed Chain**: Uses a [Handler](file:///Users/jaydip/Desktop/Practice/design-patterns/ChainOfResponsibilty/example1.ts#L2-L5) interface, [BaseHandler](file:///Users/jaydip/Desktop/Practice/design-patterns/ChainOfResponsibilty/example1.ts#L8-L21) class, and concrete implementations [MonkeyHandler](file:///Users/jaydip/Desktop/Practice/design-patterns/ChainOfResponsibilty/example1.ts#L24-L31) and [SquirrelHandler](file:///Users/jaydip/Desktop/Practice/design-patterns/ChainOfResponsibilty/example1.ts#L33-L40) to process specific request types.
    *   **Logger Level Processor**: An abstract logger [LogProcessor](file:///Users/jaydip/Desktop/Practice/design-patterns/ChainOfResponsibilty/main.ts#L1-L27) class with log levels (`DEBUG`, `INFO`, `ERROR`, `FATAL`) which coordinates logging severity downstream to [DebugProcessor](file:///Users/jaydip/Desktop/Practice/design-patterns/ChainOfResponsibilty/main.ts#L29-L37), [InfoProcessor](file:///Users/jaydip/Desktop/Practice/design-patterns/ChainOfResponsibilty/main.ts#L39-L47), [ErrorProcessor](file:///Users/jaydip/Desktop/Practice/design-patterns/ChainOfResponsibilty/main.ts#L49-L57), and [FatalProcessor](file:///Users/jaydip/Desktop/Practice/design-patterns/ChainOfResponsibilty/main.ts#L59-L67).
*   **Source Files**:
    *   [ChainOfResponsibilty/example1.ts](file:///Users/jaydip/Desktop/Practice/design-patterns/ChainOfResponsibilty/example1.ts)
    *   [ChainOfResponsibilty/main.ts](file:///Users/jaydip/Desktop/Practice/design-patterns/ChainOfResponsibilty/main.ts)
    *   [ChainOfResponsibilty/Middleware.ts](file:///Users/jaydip/Desktop/Practice/design-patterns/ChainOfResponsibilty/Middleware.ts)

### 7. Null Object Pattern
*   **Intent**: Simplifies application logic by offering concrete classes implementing an interface that perform "neutral" actions instead of returning `null` references, avoiding tedious boilerplate null checks.
*   **Reference**: [SourceMaking - Null Object Pattern](https://sourcemaking.com/design_patterns/null_object)
*   **Our Implementation**:
    *   A [Bird](file:///Users/jaydip/Desktop/Practice/design-patterns/Null%20Object/example.ts#L1-L3) interface with concrete implementations [Sparrow](file:///Users/jaydip/Desktop/Practice/design-patterns/Null%20Object/example.ts#L5-L9) and [Ostrich](file:///Users/jaydip/Desktop/Practice/design-patterns/Null%20Object/example.ts#L11-L15).
    *   Instead of returning `null` on unmatched types, the [BirdFactory](file:///Users/jaydip/Desktop/Practice/design-patterns/Null%20Object/example.ts#L23-L35) provides [NullBird](file:///Users/jaydip/Desktop/Practice/design-patterns/Null%20Object/example.ts#L17-L21) which does nothing (`no sound`), keeping the client execution flow crash-free without conditionals.
*   **Source File**: [Null Object/example.ts](file:///Users/jaydip/Desktop/Practice/design-patterns/Null%20Object/example.ts)

### 8. Observer Pattern
*   **Intent**: Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
*   **Reference**: [Refactoring.Guru - Observer Pattern](https://refactoring.guru/design-patterns/observer)
*   **Our Implementation**:
    *   [StockObservable](file:///Users/jaydip/Desktop/Practice/design-patterns/ObserverPattern/Observable/StockObservable.ts) keeps track of state change dynamics.
    *   [IphoneObservable](file:///Users/jaydip/Desktop/Practice/design-patterns/ObserverPattern/Observable/IphoneStockObervable.ts) triggers a notification sequence when stock changes from 0.
    *   Concrete [NotificationAlertOberver](file:///Users/jaydip/Desktop/Practice/design-patterns/ObserverPattern/Observer/NotificationAlertObserver.ts) subclasses like [EmailAlertObserver](file:///Users/jaydip/Desktop/Practice/design-patterns/ObserverPattern/Observer/EmailAlertObserver.ts) and [MobileAlertObserver](file:///Users/jaydip/Desktop/Practice/design-patterns/ObserverPattern/Observer/MobileAlertObserver.ts) respond immediately to state alerts.
*   **Source Files**:
    *   [ObserverPattern/Store.ts](file:///Users/jaydip/Desktop/Practice/design-patterns/ObserverPattern/Store.ts)
    *   [ObserverPattern/Observable/IphoneStockObervable.ts](file:///Users/jaydip/Desktop/Practice/design-patterns/ObserverPattern/Observable/IphoneStockObervable.ts)
    *   [ObserverPattern/Observable/StockObservable.ts](file:///Users/jaydip/Desktop/Practice/design-patterns/ObserverPattern/Observable/StockObservable.ts)
    *   [ObserverPattern/Observer/EmailAlertObserver.ts](file:///Users/jaydip/Desktop/Practice/design-patterns/ObserverPattern/Observer/EmailAlertObserver.ts)
    *   [ObserverPattern/Observer/MobileAlertObserver.ts](file:///Users/jaydip/Desktop/Practice/design-patterns/ObserverPattern/Observer/MobileAlertObserver.ts)
    *   [ObserverPattern/Observer/NotificationAlertObserver.ts](file:///Users/jaydip/Desktop/Practice/design-patterns/ObserverPattern/Observer/NotificationAlertObserver.ts)

### 9. State Pattern
*   **Intent**: Allows an object to alter its behavior when its internal state changes. The object will appear to change its class.
*   **Reference**: [Refactoring.Guru - State Pattern](https://refactoring.guru/design-patterns/state)
*   **Our Implementation**:
    *   Models a standard Traffic Light controller.
    *   [TrafficLightState](file:///Users/jaydip/Desktop/Practice/design-patterns/State%20Behavioral/example1.ts#L1-L3) interface defines action transitions.
    *   States include [RedState](file:///Users/jaydip/Desktop/Practice/design-patterns/State%20Behavioral/example1.ts#L5-L10), [GreenState](file:///Users/jaydip/Desktop/Practice/design-patterns/State%20Behavioral/example1.ts#L12-L17), and [YellowState](file:///Users/jaydip/Desktop/Practice/design-patterns/State%20Behavioral/example1.ts#L19-L24).
    *   The [TrafficLight](file:///Users/jaydip/Desktop/Practice/design-patterns/State%20Behavioral/example1.ts#L26-L39) context handles transition loops cleanly.
*   **Source File**: [State Behavioral/example1.ts](file:///Users/jaydip/Desktop/Practice/design-patterns/State%20Behavioral/example1.ts)

### 10. Strategy Pattern
*   **Intent**: Defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it.
*   **Reference**: [Refactoring.Guru - Strategy Pattern](https://refactoring.guru/design-patterns/strategy)
*   **Comparison Provided**:
    *   **Without Strategy**: [strategy/without/main.ts](file:///Users/jaydip/Desktop/Practice/design-patterns/strategy/without/main.ts) uses a heavy conditional chain (`if-else`) to calculate payments, which violates the Open/Closed Principle (OCP).
    *   **With Strategy**: Uses [PaymentStrategy](file:///Users/jaydip/Desktop/Practice/design-patterns/strategy/with/payment/strategy/stratgy.interface.ts) implemented via [PayPalStrategy](file:///Users/jaydip/Desktop/Practice/design-patterns/strategy/with/payment/strategy/paypal.ts) and [ApplyPayStrategy](file:///Users/jaydip/Desktop/Practice/design-patterns/strategy/with/payment/strategy/applePay.ts), coordinated by [PaymentContext](file:///Users/jaydip/Desktop/Practice/design-patterns/strategy/with/payment/payment-contex.ts) to extend operations without touching core classes.
*   **Source Folder**: [strategy/](file:///Users/jaydip/Desktop/Practice/design-patterns/strategy)

---

## 🧱 Core OOP Foundations

### Encapsulation
*   **Intent**: Bundling data (attributes) and methods (functions) acting on that data into a single unit (class) while restricting direct outer access.
*   **Reference**: [OOPS/encapsulation.ts](file:///Users/jaydip/Desktop/Practice/design-patterns/OOPS/encapsulation.ts)

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation
Clone this repository and install developer dependencies:
```bash
# Clone the repository
git clone <repository_url>
cd design-patterns

# Install packages
npm install
```

### Compiling & Running Examples
Since this project uses TypeScript configurations, you can run files directly using `ts-node` or compile them first.

**Using `ts-node` (Recommended for testing):**
```bash
# Install ts-node globally if you haven't already
npm install -g ts-node

# Run an example
ts-node Builder/example1.ts
ts-node "Null Object/example.ts"
```

**Using the TypeScript Compiler (`tsc`):**
```bash
# Compile TS to JS
npx tsc

# Run compiled output from the dist directory
node dist/Builder/example1.js
```

---

## 🏷️ Keywords & Search Tags

`design-patterns` • `typescript-design-patterns` • `javascript-design-patterns` • `gof-design-patterns` • `software-architecture` • `clean-code` • `oop` • `creational-patterns` • `structural-patterns` • `behavioral-patterns` • `gang-of-four` • `ts` • `js`