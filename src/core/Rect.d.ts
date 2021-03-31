import { Point } from "./Point";
import { Size } from "./Size";

declare module Rect {
    interface Rect {
        new(): Rect;
        new(x: number, y: number, width: number, height: number): Rect;
        new(r: Rect): Rect;
        new(org: Point, sz: Size): Rect;
        new(pt1: Point, pt2: Point): Rect;
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
}

export = Rect;