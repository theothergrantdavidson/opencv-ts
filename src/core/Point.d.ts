declare module Point {
    interface Point {
        new(x: number, y: number): Point;
        x: number;
        y: number;
    }
}
export = Point;