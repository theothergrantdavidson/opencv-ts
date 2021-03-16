import { Mat, Point, Rect, Scalar } from "./DataStructures";

declare module DrawingFunctions {
    enum _LineTypes {
        FILLED = 'FILLED',
        LINE_4 = 'LINE_4',
        LINE_8 = 'LINE_8',
        LINE_AA = 'LINE_AA',
    }

    interface LineTypes {
        FILLED: _LineTypes.FILLED;
        LINE_4: _LineTypes.LINE_4;
        LINE_8: _LineTypes.LINE_8;
        LINE_AA: _LineTypes.LINE_AA;
    }

    interface DrawingFunctions {
        /**
         * Draws a simple, thick, or filled up-right rectangle onto a provided source cv.Mat
         * @param img source cv.Mat where the rectangle will be rendered
         * @param pt1 a cv.Point which represnents the top left of the rectangle
         * @param pt2 a cv.Point which represents the bottom right of the rectangle
         * @param color a cv.Scalar which represents the color of the rectangle
         * @param thickness Thickness of lines that make up the rectangle. Negative values, like cv.FILLED, means that the function has to draw a filled rectangle.
         * @see https://docs.opencv.org/3.4/d6/d6e/group__imgproc__draw.html#ga07d2f74cadcf8e305e810ce8eed13bc9
         */
          rectangle(img: Mat, pt1: Point, pt2: Point, color: Scalar, thickness?: number): void;
         /**
          * Draws a simple, thick, or filled up-right rectangle onto a provided source cv.Mat
          * @param img source cv.Mat where the rectangle will be rendered
          * @param pt1 a cv.Point which represnents the top left of the rectangle
          * @param pt2 a cv.Point which represents the bottom right of the rectangle
          * @param color a cv.Scalar which represents the color of the rectangle
          * @param thickness Thickness of lines that make up the rectangle. Negative values, like cv.FILLED, mean that the function has to draw a filled rectangle.
          * @param lineType Type of the line. See cv.LineTypes
          * @see https://docs.opencv.org/3.4/d6/d6e/group__imgproc__draw.html#ga07d2f74cadcf8e305e810ce8eed13bc9
          */
          rectangle(
             img: Mat,
             pt1: Point,
             pt2: Point,
             color: Scalar,
             thickness: number,
             lineType?: _LineTypes
         ): void;
         /**
          * Draws a simple, thick, or filled up-right rectangle onto a provided source cv.Mat
          * @param img source cv.Mat where the rectangle will be rendered
          * @param pt1 a cv.Point which represnents the top left of the rectangle
          * @param pt2 a cv.Point which represents the bottom right of the rectangle
          * @param color a cv.Scalar which represents the color of the rectangle
          * @param thickness Thickness of lines that make up the rectangle. Negative values, like cv.FILLED, mean that the function has to draw a filled rectangle.
          * @param lineType Type of the line. See cv.LineTypes
          * @param shift Number of fractional bits in the point coordinates.
          * @see https://docs.opencv.org/3.4/d6/d6e/group__imgproc__draw.html#ga07d2f74cadcf8e305e810ce8eed13bc9
          */
          rectangle(
             img: Mat,
             pt1: Point,
             pt2: Point,
             color: Scalar,
             thickness: number,
             lineType: _LineTypes,
             shift?: number
         ): void;
         /**
          * Draws a simple, thick, or filled up-right rectangle onto a provided source cv.Mat
          * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
          * @param img source cv.Mat where the rectangle will be rendered
          * @param rec a cv.Rect that represents the rectangle to be rendered
          * @param thickness Thickness of lines that make up the rectangle. Negative values, like cv.FILLED, mean that the function has to draw a filled rectangle.
          * @see https://docs.opencv.org/3.4/d6/d6e/group__imgproc__draw.html#ga07d2f74cadcf8e305e810ce8eed13bc9
          */
          rectangle(img: Mat, rec: Rect, color: Scalar, thickness?: number): void;
         /**
          * Draws a simple, thick, or filled up-right rectangle onto a provided source cv.Mat
          * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
          * @param img source cv.Mat where the rectangle will be rendered
          * @param rec a cv.Rect that represents the rectangle to be rendered
          * @param thickness Thickness of lines that make up the rectangle. Negative values, like cv.FILLED, mean that the function has to draw a filled rectangle.
          * @param lineType Type of the line. See cv.LineTypes
          * @see https://docs.opencv.org/3.4/d6/d6e/group__imgproc__draw.html#ga07d2f74cadcf8e305e810ce8eed13bc9
          */
          rectangle(
             img: Mat,
             rec: Rect,
             color: Scalar,
             thickness: number,
             lineType?: _LineTypes
         ): void;
         /**
          * Draws a simple, thick, or filled up-right rectangle onto a provided source cv.Mat
          * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
          * @param img source cv.Mat where the rectangle will be rendered
          * @param rec a cv.Rect that represents the rectangle to be rendered
          * @param thickness Thickness of lines that make up the rectangle. Negative values, like cv.FILLED, mean that the function has to draw a filled rectangle.
          * @param lineType Type of the line. See cv.LineTypes
          * @param shift Number of fractional bits in the point coordinates.
          * @see https://docs.opencv.org/3.4/d6/d6e/group__imgproc__draw.html#ga07d2f74cadcf8e305e810ce8eed13bc9
          */
          rectangle(
             img: Mat,
             rec: Rect,
             color: Scalar,
             thickness: number,
             lineType: _LineTypes,
             shift?: number
         ): void;
    }
}
export = DrawingFunctions;
