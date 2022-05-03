export interface Range {
    new (): Range;
    new (start: number, end: number): Range;
    start: number;
    end: number;
}
