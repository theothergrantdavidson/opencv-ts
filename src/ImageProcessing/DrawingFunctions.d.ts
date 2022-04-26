import { NDArray } from '../core/Core';
import { Mat } from '../core/Mat';
import { Point } from '../core/Point';
import { Rect } from '../core/Rect';
import { RotatedRect } from '../core/RotatedRect';
import { Scalar } from '../core/Scalar';
import { Size } from '../core/Size';
import { MatVector } from '../core/MatVector';

declare module DrawingFunctions {
    enum HersheyFonts {
        FONT_HERSHEY_SIMPLEX = 0,
        FONT_HERSHEY_PLAIN = 1,
        FONT_HERSHEY_DUPLEX = 2,
        FONT_HERSHEY_COMPLEX = 3,
        FONT_HERSHEY_TRIPLEX = 4,
        FONT_HERSHEY_COMPLEX_SMALL = 5,
        FONT_HERSHEY_SCRIPT_SIMPLEX = 6,
        FONT_HERSHEY_SCRIPT_COMPLEX = 7,
        FONT_ITALIC = 16,
    }

    interface _HersheyFonts {
        FONT_HERSHEY_SIMPLEX: HersheyFonts.FONT_HERSHEY_SIMPLEX;
        FONT_HERSHEY_PLAIN: HersheyFonts.FONT_HERSHEY_SIMPLEX;
        FONT_HERSHEY_DUPLEX: HersheyFonts.FONT_HERSHEY_SIMPLEX;
        FONT_HERSHEY_COMPLEX: HersheyFonts.FONT_HERSHEY_SIMPLEX;
        FONT_HERSHEY_TRIPLEX: HersheyFonts.FONT_HERSHEY_SIMPLEX;
        FONT_HERSHEY_COMPLEX_SMALL: HersheyFonts.FONT_HERSHEY_SIMPLEX;
        FONT_HERSHEY_SCRIPT_SIMPLEX: HersheyFonts.FONT_HERSHEY_SIMPLEX;
        FONT_HERSHEY_SCRIPT_COMPLEX: HersheyFonts.FONT_HERSHEY_SIMPLEX;
        FONT_ITALIC: HersheyFonts.FONT_HERSHEY_SIMPLEX;
    }

    enum LineTypes {
        FILLED = -1,
        LINE_4 = 4,
        LINE_8 = 8,
        LINE_AA = 16,
    }

    interface _LineTypes {
        FILLED: LineTypes.FILLED;
        LINE_4: LineTypes.LINE_4;
        LINE_8: LineTypes.LINE_8;
        LINE_AA: LineTypes.LINE_AA;
    }

    enum MarkerTypes {
        MARKER_CROSS = 0,
        MARKER_TILTED_CROSS = 1,
        MARKER_STAR = 2,
        MARKER_DIAMOND = 3,
        MARKER_SQUARE = 4,
        MARKER_TRIANGLE_UP = 5,
        MARKER_TRIANGLE_DOWN = 6,
    }

    interface _MarkerTypes {
        MARKER_CROSS: MarkerTypes.MARKER_CROSS;
        MARKER_TILTED_CROSS: MarkerTypes.MARKER_TILTED_CROSS;
        MARKER_STAR: MarkerTypes.MARKER_STAR;
        MARKER_DIAMOND: MarkerTypes.MARKER_DIAMOND;
        MARKER_SQUARE: MarkerTypes.MARKER_SQUARE;
        MARKER_TRIANGLE_UP: MarkerTypes.MARKER_TRIANGLE_UP;
        MARKER_TRIANGLE_DOWN: MarkerTypes.MARKER_TRIANGLE_DOWN;
    }

    interface DrawingFunctions {
        /**
         * Draws a arrow segment pointing from the first point to the second one.
         * @param img Image
         * @param pt1 The point the arrow starts from.
         * @param pt2 The point the arrow points to.
         * @param color Line color
         * @param thickness Line thickness
         * @param line_type Type of the line. See LineTypes
         * @param shift Number of fractional bits in the point coordinates.
         * @param tipLength The length of the arrow tip in relation to the arrow length
         */
        arrowedLine(
            img: Mat,
            pt1: Point,
            pt2: Point,
            color: Scalar,
            thickness: number,
            line_type: LineTypes,
            shift: number,
            tipLength: number
        ): void;
        arrowedLine(
            img: Mat,
            pt1: Point,
            pt2: Point,
            color: Scalar,
            thickness: number,
            line_type: LineTypes,
            shift: number
        ): void;
        arrowedLine(
            img: Mat,
            pt1: Point,
            pt2: Point,
            color: Scalar,
            thickness: number,
            line_type: LineTypes
        ): void;
        arrowedLine(img: Mat, pt1: Point, pt2: Point, color: Scalar, thickness: number): void;
        arrowedLine(img: Mat, pt1: Point, pt2: Point, color: Scalar): void;
        /**
         * Draws a circle.
         * @param img Image where the circle is drawn.
         * @param center Center of the circle.
         * @param radius Radius of the circle.
         * @param color Circle color.
         * @param thickness Thickness of the circle outline, if positive. Negative values, like FILLED, mean that a filled circle is to be drawn
         * @param line_type Type of the circle boundary. See LineTypes
         * @param shift Number of fractional bits in the coordinates of the center and in the radius value.
         */
        circle(
            img: Mat,
            center: Point,
            radius: number,
            color: Scalar,
            thickness: number,
            line_type: LineTypes,
            shift: number
        ): void;
        circle(
            img: Mat,
            center: Point,
            radius: number,
            color: Scalar,
            thickness: number,
            line_type: LineTypes
        ): void;
        circle(img: Mat, center: Point, radius: number, color: Scalar, thickness: number): void;
        circle(img: Mat, center: Point, radius: number, color: Scalar): void;
        /**
         * Clips the line against the image rectangle.
         * The function cv::clipLine calculates a part of the line segment that is entirely within the specified rectangle. it returns false if the line segment is completely outside the rectangle. Otherwise, it returns true .
         * @param imgSize Image size
         * @param pt1 First line point.
         * @param pt2 Second line point.
         */
        clipLine(imgSize: Size, pt1: Point, pt2: Point): boolean;
        /**
         * Clips the line against the image rectangle.
         * The function cv::clipLine calculates a part of the line segment that is entirely within the specified rectangle. it returns false if the line segment is completely outside the rectangle. Otherwise, it returns true .
         * @param imgRect Image rectangle
         * @param pt1 First line point.
         * @param pt2 Second line point.
         */
        clipLine(imgRect: Rect, pt1: Point, pt2: Point): boolean;
        /**
         * Draws contours outlines or filled contours.
         * The function draws contour outlines in the image if 𝚝𝚑𝚒𝚌𝚔𝚗𝚎𝚜𝚜≥0 or fills the area bounded by the contours if 𝚝𝚑𝚒𝚌𝚔𝚗𝚎𝚜𝚜<0.
         * @param image Destination image.
         * @param contours All the input contours. Each contour is stored as a point vector
         * @param contourIdx Parameter indicating a contour to draw. If it is negative, all the contours are drawn.
         * @param color Color of the contours.
         * @param thickness Thickness of lines the contours are drawn with. If it is negative (for example, thickness=FILLED ), the contour interiors are drawn
         * @param lineType Line connectivity. See LineTypes
         * @param hierarchy Optional information about hierarchy. It is only needed if you want to draw only some of the contours (see maxLevel ).
         * @param maxLevel Maximal level for drawn contours. If it is 0, only the specified contour is drawn. If it is 1, the function draws the contour(s) and all the nested contours. If it is 2, the function draws the contours, all the nested contours, all the nested-to-nested contours, and so on. This parameter is only taken into account when there is hierarchy available.
         * @param offset Optional contour shift parameter. Shift all the drawn contours by the specified 𝚘𝚏𝚏𝚜𝚎𝚝=(dx,dy) .
         */
        drawContours(
            image: Mat,
            contours: MatVector,
            contourIdx: number,
            color: Scalar,
            thickness: number,
            lineType: LineTypes,
            hierarchy: Mat,
            maxLevel: number,
            offset: Point
        ): void;
        drawContours(
            image: Mat,
            contours: MatVector,
            contourIdx: number,
            color: Scalar,
            thickness: number,
            lineType: LineTypes,
            hierarchy: Mat,
            maxLevel: number
        ): void;
        drawContours(
            image: Mat,
            contours: MatVector,
            contourIdx: number,
            color: Scalar,
            thickness: number,
            lineType: LineTypes,
            hierarchy: Mat
        ): void;
        drawContours(
            image: Mat,
            contours: MatVector,
            contourIdx: number,
            color: Scalar,
            thickness: number,
            lineType: LineTypes
        ): void;
        drawContours(
            image: Mat,
            contours: MatVector,
            contourIdx: number,
            color: Scalar,
            thickness: number
        ): void;
        drawContours(
            image: Mat,
            contours: MatVector,
            contourIdx: number,
            color: Scalar
        ): void;
        /**
         * Draws a marker on a predefined position in an image.
         * @param img Image
         * @param position The point where the crosshair is positioned
         * @param color Line color
         * @param markerType The specific type of marker you want to use, see MarkerTypes
         * @param markerSize Line thickness
         * @param thickness Type of the line, See LineTypes
         * @param line_type The length of the marker axis [default = 20 pixels]
         */
        drawMarker(
            img: Mat,
            position: Point,
            color: Scalar,
            markerType: MarkerTypes,
            markerSize: number,
            thickness: number,
            line_type: LineTypes
        ): void;
        drawMarker(
            img: Mat,
            position: Point,
            color: Scalar,
            markerType: MarkerTypes,
            markerSize: number,
            thickness: number
        ): void;
        drawMarker(
            img: Mat,
            position: Point,
            color: Scalar,
            markerType: MarkerTypes,
            markerSize: number
        ): void;
        drawMarker(img: Mat, position: Point, color: Scalar, markerType: MarkerTypes): void;
        drawMarker(img: Mat, position: Point, color: Scalar): void;
        /**
         * Draws a simple or thick elliptic arc or fills an ellipse sector.
         * @param img Image
         * @param center Center of the ellipse
         * @param axes Half of the size of the ellipse main axes
         * @param angle Ellipse rotation angle in degrees
         * @param startAngle Starting angle of the elliptic arc in degrees
         * @param endAngle Ending angle of the elliptic arc in degrees
         * @param color Ellipse color.
         * @param thickness Thickness of the ellipse arc outline, if positive. Otherwise, this indicates that a filled ellipse sector is to be drawn
         * @param lineType Type of the ellipse boundary. See LineTypes
         * @param shift Number of fractional bits in the coordinates of the center and values of axes.
         */
        ellipse(
            img: Mat,
            center: Point,
            axes: Size,
            angle: number,
            startAngle: number,
            endAngle: number,
            color: Scalar,
            thickness: number,
            lineType: LineTypes,
            shift: number
        ): void;
        ellipse(
            img: Mat,
            center: Point,
            axes: Size,
            angle: number,
            startAngle: number,
            endAngle: number,
            color: Scalar,
            thickness: number,
            lineType: LineTypes
        ): void;
        ellipse(
            img: Mat,
            center: Point,
            axes: Size,
            angle: number,
            startAngle: number,
            endAngle: number,
            color: Scalar,
            thickness: number
        ): void;
        ellipse(
            img: Mat,
            center: Point,
            axes: Size,
            angle: number,
            startAngle: number,
            endAngle: number,
            color: Scalar
        ): void;
        /**
         * Draws a simple or thick elliptic arc or fills an ellipse sector.
         * @param img Image
         * @param box Alternative ellipse representation via RotatedRect. This means that the function draws an ellipse inscribed in the rotated rectangle
         * @param color Ellipse color
         * @param thickness Thickness of the ellipse arc outline, if positive. Otherwise, this indicates that a filled ellipse sector is to be drawn.
         * @param lineType Type of the ellipse boundary. See LineTypes
         */
        ellipse(
            img: Mat,
            box: RotatedRect,
            color: Scalar,
            thickness: number,
            lineType: LineTypes
        ): void;
        ellipse(img: Mat, box: RotatedRect, color: Scalar, thickness: number): void;
        ellipse(img: Mat, box: RotatedRect, color: Scalar): void;
        /**
         * Approximates an elliptic arc with a polyline.
         * @param center Center of the arc.
         * @param axes Half of the size of the ellipse main axes. See ellipse for details.
         * @param angle Rotation angle of the ellipse in degrees. See ellipse for details.
         * @param arcStart Starting angle of the elliptic arc in degrees
         * @param arcEnd Ending angle of the elliptic arc in degrees
         * @param delta Angle between the subsequent polyline vertices. It defines the approximation accuracy
         * @param pts Output vector of polyline vertices
         */
        ellipse2Poly(
            center: Point,
            angle: number,
            axes: Size,
            arcStart: number,
            arcEnd: number,
            delta: number,
            pts: MatVector
        ): void;
        /**
         * Fills a convex polygon.
         * @param img Image
         * @param pts Polygon vertices.
         * @param color Polygon color
         * @param lineType Type of the polygon boundaries. See LineTypes
         * @param shift Number of fractional bits in the vertex coordinates
         */
        fillConvexPoly(
            img: Mat,
            pts: MatVector,
            color: Scalar,
            lineType: LineTypes,
            shift: number
        ): void;
        fillConvexPoly(img: Mat, pts: MatVector, color: Scalar, lineType: LineTypes): void;
        fillConvexPoly(img: Mat, pts: MatVector, color: Scalar): void;
        /**
         * Fills the area bounded by one or more polygons
         * @param img Image
         * @param pts Array of polygons where each polygon is represented as an array of points
         * @param color Polygon colo
         * @param lineType Type of the polygon boundaries. See LineTypes
         * @param shift Number of fractional bits in the vertex coordinates
         * @param offset Optional offset of all points of the contours
         */
        fillPoly(
            img: Mat,
            pts: MatVector,
            color: Scalar,
            lineType: LineTypes,
            shift: number,
            offset: Point
        ): void;
        fillPoly(img: Mat, pts: MatVector, color: Scalar, lineType: LineTypes, shift: number): void;
        fillPoly(img: Mat, pts: MatVector, color: Scalar, lineType: LineTypes): void;
        fillPoly(img: Mat, pts: MatVector, color: Scalar): void;
        /**
         * Calculates the font-specific size to use to achieve a given height in pixels.
         * @param fontFace Font to use, see HersheyFonts.
         * @param pixelHeight Pixel height to compute the fontScale for
         * @param thickness Thickness of lines used to render the text.
         * @returns The fontSize to use for cv::putText
         */
        getFontScaleFromHeight(
            fontFace: HersheyFonts,
            pixelHeight: number,
            thickness: number
        ): number;
        getFontScaleFromHeight(fontFace: HersheyFonts, pixelHeight: number): number;
        /**
         * Calculates the width and height of a text string.
         * @param text Input text string
         * @param fontFace Font to use, see HersheyFonts.
         * @param fontScale Font scale factor that is multiplied by the font-specific base size
         * @param thickness Thickness of lines used to render the text
         * @param baseLine 	y-coordinate of the baseline relative to the bottom-most text point.
         * @returns The size of a box that contains the specified text.
         */
        getTextSize(
            text: string,
            fontFace: HersheyFonts,
            fontScale: number,
            thickness: number,
            baseLine: number
        ): Size;
        /**
         * Draws a line segment connecting two points.
         * @param img Image
         * @param pt1 First point of the line segment
         * @param pt2 Second point of the line segment
         * @param color Line color
         * @param thickness Line thickness
         * @param lineType Type of the line. See LineTypes.
         * @param shift Number of fractional bits in the point coordinates
         */
        line(
            img: Mat,
            pt1: Point,
            pt2: Point,
            color: Scalar,
            thickness: number,
            lineType: LineTypes,
            shift: number
        ): void;
        line(
            img: Mat,
            pt1: Point,
            pt2: Point,
            color: Scalar,
            thickness: number,
            lineType: LineTypes
        ): void;
        line(img: Mat, pt1: Point, pt2: Point, color: Scalar, thickness: number): void;
        line(img: Mat, pt1: Point, pt2: Point, color: Scalar): void;
        /**
         * Draws several polygonal curves
         * @param img Image
         * @param pts Array of polygonal curves.
         * @param isClosed Flag indicating whether the drawn polylines are closed or not. If they are closed, the function draws a line from the last vertex of each curve to its first vertex
         * @param color Polyline color
         * @param thickness Thickness of the polyline edges
         * @param lineType Type of the line segments. See LineTypes
         * @param shift Number of fractional bits in the vertex coordinates
         */
        polylines(
            img: Mat,
            pts: MatVector,
            isClosed: boolean,
            color: Scalar,
            thickness: number,
            lineType: LineTypes,
            shift: number
        ): void;
        polylines(
            img: Mat,
            pts: MatVector,
            isClosed: boolean,
            color: Scalar,
            thickness: number,
            lineType: LineTypes
        ): void;
        polylines(
            img: Mat,
            pts: NDArray<Point>,
            isClosed: boolean,
            color: Scalar,
            thickness: number
        ): void;
        polylines(img: Mat, pts: MatVector, isClosed: boolean, color: Scalar): void;
        /**
         * Draws a text string.
         * @param img Image
         * @param text Text string to be drawn
         * @param org Bottom-left corner of the text string in the image
         * @param fontFace Font type, see HersheyFonts.
         * @param fontScale Font scale factor that is multiplied by the font-specific base size
         * @param color Text color
         * @param thickness Thickness of the lines used to draw a text
         * @param lineType Line type. See LineTypes
         * @param bottomLeftOrigin When true, the image data origin is at the bottom-left corner. Otherwise, it is at the top-left corner
         */
        putText(
            img: Mat,
            text: string,
            org: Point,
            fontFace: HersheyFonts,
            fontScale: number,
            color: Scalar,
            thickness: number,
            lineType: LineTypes,
            bottomLeftOrigin: boolean
        ): void;
        putText(
            img: Mat,
            text: string,
            org: Point,
            fontFace: HersheyFonts,
            fontScale: number,
            color: Scalar,
            thickness: number,
            lineType: LineTypes
        ): void;
        putText(
            img: Mat,
            text: string,
            org: Point,
            fontFace: HersheyFonts,
            fontScale: number,
            color: Scalar,
            thickness: number
        ): void;
        putText(
            img: Mat,
            text: string,
            org: Point,
            fontFace: HersheyFonts,
            fontScale: number,
            color: Scalar
        ): void;
        /**
         * Draws a simple, thick, or filled up-right rectangle.
         * @param img Image
         * @param pt1 Vertex of the rectangle
         * @param pt2 Vertex of the rectangle opposite to pt1
         * @param color Rectangle color or brightness (grayscale image).
         * @param thickness Thickness of lines that make up the rectangle. Negative values, like FILLED, mean that the function has to draw a filled rectangle
         * @param lineType Type of the line. See LineTypes
         * @param shift Number of fractional bits in the point coordinates.
         */
        rectangle(
            img: Mat,
            pt1: Point,
            pt2: Point,
            color: Scalar,
            thickness: number,
            lineType: LineTypes,
            shift: number
        ): void;
        rectangle(
            img: Mat,
            pt1: Point,
            pt2: Point,
            color: Scalar,
            thickness: number,
            lineType: LineTypes
        ): void;
        rectangle(img: Mat, pt1: Point, pt2: Point, color: Scalar | number[], thickness: number): void;
        rectangle(img: Mat, pt1: Point, pt2: Point, color: Scalar | number[]): void;
    }
}
export = DrawingFunctions;
