import { Point } from './Point';
import { Rect } from './Rect';
import { Size } from './Size';

declare module RotatedRect {
    interface RotatedRect {
        new (): RotatedRect;
        new (rect: Rect): RotatedRect;
        new (pt: Point, sz: Size): RotatedRect;
        new (x: number, y: number, width: number, height: number): RotatedRect;
        points(pts: Point[]): void;
        boundingRect(): Rect;
        boundingRect2f(): Rect;
        angle: number;
        center: Point;
        size: Size;
    }
}
export = RotatedRect;
