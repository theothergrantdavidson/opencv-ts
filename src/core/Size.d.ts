declare module Size {
    interface Size {
        new(width: number, height: number): Size;
        width: number;
        height: number;
    }
}
export = Size;