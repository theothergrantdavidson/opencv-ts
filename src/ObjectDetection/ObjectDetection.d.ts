import { NDArray } from "../core/Core";
import { MatVector } from "../core/MatVector";
import { Rect } from "../core/Rect";

declare module ObjectDetection {
    interface ObjectDetection {
        /**
         * Groups the object candidate rectangles
         * @param rectList Input/output vector of rectangles. Output vector includes retained and grouped rectangles. (The Python list is not modified in place.)
         * @param weights Minimum possible number of rectangles minus 1. The threshold is used in a group of rectangles to retain it
         * @param groupThreshold 
         */
        groupRectangles(rectList: NDArray<Rect>, weights: MatVector, groupThreshold: number): void;
    }
}

export = ObjectDetection;