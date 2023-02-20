import { Point } from "./point";
import { Size } from "./size";

export declare class Rect {
    constructor();
    constructor(x: number, y: number, width: number, height: number);
    constructor(r: Rect);
    constructor(org: Point, sz: Size);
    constructor(pt1: Point, pt2: Point);
    /**
     * x coordinate of the top-left corner
     */
    x: number;
    /**
     * y coordinate of the top-left corner
     */
    y: number;
    /**
     * width of the rectangle
     */
    width: number;
    /**
     * height of the rectangle
     */
    height: number;
    /**
     * Top left corner
     */
    tl(): Point;
    /**
     * Bottom right corner
     */
    br(): Point;
    /**
     * Size of the rect (width, height)
     */
    size(): Size;
    /**
     * area of the Rectangle (width * height)
     */
    area(): number;
    /**
     * true if empty
     */
    empty(): boolean;
    /**
     * checks whether the rectangle contains the point
     * @param pt Point to check inside rectangle
     */
    contains(pt: Point): boolean;
}
