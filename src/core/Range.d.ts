declare module Range {
    interface Range {
        new(): Range;
        new(start: number, end: number): Range;
        start: number,
        end: number
    }
}
export = Range;