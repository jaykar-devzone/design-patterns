abstract class Middleware {
    next: Middleware | null;

    setNext(next: Middleware) {
        this.next = next
    }

    abstract pub
}
