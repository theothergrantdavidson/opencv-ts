import { NDArray } from '../core/Core';
import { Mat } from '../core/Mat';
import { Moments } from '../core/Moments';
import { Rect } from '../core/Rect';
import { RotatedRect } from '../core/RotatedRect';
import { Point } from '../core/Point';
import { DistanceTypes } from './Misc';
import { MatVector } from '../core/MatVector';

declare module StructuralAnalysisShapeDescriptors {
    enum ConnectedComponentsAlgorithmsTypes {
        CCL_DEFAULT = -1,
        CCL_WU = 0,
        CCL_GRANA = 1,
        CCL_BOLELLI = 2,
        CCL_SAUF = 3,
        CCL_BBDT = 4,
        CCL_SPAGHETTI = 5,
    }

    interface _ConnectedComponentsAlgorithmsTypes {
        CCL_DEFAULT: ConnectedComponentsAlgorithmsTypes.CCL_DEFAULT;
        CCL_WU: ConnectedComponentsAlgorithmsTypes.CCL_WU;
        CCL_GRANA: ConnectedComponentsAlgorithmsTypes.CCL_GRANA;
        CCL_BOLELLI: ConnectedComponentsAlgorithmsTypes.CCL_BOLELLI;
        CCL_SAUF: ConnectedComponentsAlgorithmsTypes.CCL_SAUF;
        CCL_BBDT: ConnectedComponentsAlgorithmsTypes.CCL_BBDT;
        CCL_SPAGHETTI: ConnectedComponentsAlgorithmsTypes.CCL_SPAGHETTI;
    }

    enum ConnectedComponentsTypes {
        CC_STAT_LEFT = 0,
        CC_STAT_TOP = 1,
        CC_STAT_WIDTH = 2,
        CC_STAT_HEIGHT = 3,
        CC_STAT_AREA = 4,
    }

    interface _ConnectedComponentsTypes {
        CC_STAT_LEFT: ConnectedComponentsTypes.CC_STAT_LEFT;
        CC_STAT_TOP: ConnectedComponentsTypes.CC_STAT_TOP;
        CC_STAT_WIDTH: ConnectedComponentsTypes.CC_STAT_WIDTH;
        CC_STAT_HEIGHT: ConnectedComponentsTypes.CC_STAT_HEIGHT;
        CC_STAT_AREA: ConnectedComponentsTypes.CC_STAT_AREA;
    }

    enum ContourApproximationModes {
        CHAIN_APPROX_NONE = 1,
        CHAIN_APPROX_SIMPLE = 2,
        CHAIN_APPROX_TC89_L1 = 3,
        CHAIN_APPROX_TC89_KCOS = 4,
    }

    interface _ContourApproximationModes {
        CHAIN_APPROX_NONE: ContourApproximationModes.CHAIN_APPROX_NONE;
        CHAIN_APPROX_SIMPLE: ContourApproximationModes.CHAIN_APPROX_SIMPLE;
        CHAIN_APPROX_TC89_L1: ContourApproximationModes.CHAIN_APPROX_TC89_L1;
        CHAIN_APPROX_TC89_KCOS: ContourApproximationModes.CHAIN_APPROX_TC89_KCOS;
    }

    enum RectanglesIntersectTypes {
        INTERSECT_NONE = 0,
        INTERSECT_PARTIAL = 1,
        INTERSECT_FULL = 2,
    }

    interface _RectanglesIntersectTypes {
        INTERSECT_NONE: RectanglesIntersectTypes.INTERSECT_NONE;
        INTERSECT_PARTIAL: RectanglesIntersectTypes.INTERSECT_PARTIAL;
        INTERSECT_FULL: RectanglesIntersectTypes.INTERSECT_FULL;
    }

    enum RetrievalModes {
        RETR_EXTERNAL = 0,
        RETR_LIST = 1,
        RETR_CCOMP = 2,
        RETR_TREE = 3,
        RETR_FLOODFILL = 4,
    }

    interface _RetrievalModes {
        RETR_EXTERNAL: RetrievalModes.RETR_EXTERNAL;
        RETR_LIST: RetrievalModes.RETR_LIST;
        RETR_CCOMP: RetrievalModes.RETR_CCOMP;
        RETR_TREE: RetrievalModes.RETR_TREE;
        RETR_FLOODFILL: RetrievalModes.RETR_FLOODFILL;
    }

    enum ShapeMatchModes {
        CONTOURS_MATCH_I1 = 1,
        CONTOURS_MATCH_I2 = 2,
        CONTOURS_MATCH_I3 = 3,
    }

    interface _ShapeMatchModes {
        CONTOURS_MATCH_I1: ShapeMatchModes.CONTOURS_MATCH_I1;
        CONTOURS_MATCH_I2: ShapeMatchModes.CONTOURS_MATCH_I2;
        CONTOURS_MATCH_I3: ShapeMatchModes.CONTOURS_MATCH_I3;
    }

    interface StructuralAnalysisShapeDescriptors {
        /**
         * Approximates a polygonal curve(s) with the specified precision
         * @param curve Input vector of a 2D point stored in std::vector or Mat
         * @param approxCurveResult of the approximation. The type should match the type of the input curve
         * @param epsilonParameter specifying the approximation accuracy. This is the maximum distance between the original curve and its approximation
         * @param boolIf true, the approximated curve is closed (its first and last vertices are connected). Otherwise, it is not closed
         */
        approxPolyDP(
            curve: Mat | MatVector,
            approxCurve: Mat,
            epsilon: number,
            bool: boolean
        ): void;
        /**
         * Calculates a contour perimeter or a curve length.
         * @param curve Input vector of 2D points, stored in std::vector or Mat.
         * @param closed Flag indicating whether the curve is closed or not.
         * @returns a curve length or a closed contour perimeter.
         */
        arcLength(curve: Mat | MatVector, closed: boolean): number;
        /**
         * Calculates the up-right bounding rectangle of a point set or non-zero pixels of gray-scale image.
         * @param array Input gray-scale image or 2D point set, stored in std::vector or Mat.
         * @returns the minimal up-right bounding rectangle for the specified point set or non-zero pixels of gray-scale image
         */
        boundingRect(array: Mat | MatVector): Rect;
        /**
         * computes the connected components labeled image of boolean image
         * @param image the 8-bit single-channel image to be labeled
         * @param labels destination labeled image
         * @returns N, the total number of labels [0, N-1] where 0 represents the background label
         */
        connectedComponents(image: Mat, labels: Mat): number;
        /**
         * computes the connected components labeled image of boolean image and also produces a statistics output for each label
         * @param image the 8-bit single-channel image to be labeled
         * @param labels destination labeled image
         * @param stats statistics output for each label, including the background label. Statistics are accessed via stats(label, COLUMN) where COLUMN is one of ConnectedComponentsTypes, selecting the statistic. The data type is CV_32S.
         * @param centroids centroid output for each label, including the background label. Centroids are accessed via centroids(label, 0) for x and centroids(label, 1) for y. The data type CV_64F
         * @returns N, the total number of labels [0, N-1] where 0 represents the background label
         */
        connectedComponentsWithStats(image: Mat, labels: Mat, stats: Mat, centroids: Mat): number;
        /**
         * Calculates a contour area
         * @param contour Input vector of 2D points (contour vertices), stored in std::vector or Mat.
         * @param oriented Oriented area flag. If it is true, the function returns a signed area value, depending on the contour orientation (clockwise or counter-clockwise). Using this feature you can determine orientation of a contour by taking the sign of an area. By default, the parameter is false, which means that the absolute value is returned
         * @returns area and the number of non-zero pixels,
         */
        contourArea(contour: Mat | MatVector, oriented?: boolean): number;
        /**
         * Finds the convex hull of a point set.
         * @param points Input 2D point set, stored in std::vector or Mat.
         * @param hull Output convex hull. It is either an integer vector of indices or vector of points. In the first case, the hull elements are 0-based indices of the convex hull points in the original array (since the set of convex hull points is a subset of the original point set). In the second case, hull elements are the convex hull points themselves
         */
        convexHull(points: Mat, hull: Mat): void;
        /**
         * Finds the convexity defects of a contour.
         * @param contour Input contour
         * @param convexHull Convex hull obtained using convexHull that should contain indices of the contour points that make the hull
         * @param convexityDefects  output vector of convexity defects. In C++ and the new Python/Java interface each convexity defect is represented as 4-element integer vector (a.k.a. Vec4i): (start_index, end_index, farthest_pt_index, fixpt_depth), where indices are 0-based indices in the original contour of the convexity defect beginning, end and the farthest point, and fixpt_depth is fixed-point approximation (with 8 fractional bits) of the distance between the farthest contour point and the hull. That is, to get the floating-point value of the depth will be fixpt_depth/256.0.
         */
        convexityDefects(contour: Mat, convexHull: Mat, convexityDefects: Mat): void;
        /**
         * Finds contours in a binary image
         * @param image Source, an 8-bit single-channel image. Non-zero pixels are treated as 1's. Zero pixels remain 0's, so the image is treated as binary . You can use compare, inRange, threshold , adaptiveThreshold, Canny, and others to create a binary image out of a grayscale or color one. If mode equals to RETR_CCOMP or RETR_FLOODFILL, the input can also be a 32-bit integer image of labels (CV_32SC1).
         * @param contours Detected contours. Each contour is stored as a vector of points
         * @param hierarchy Optional output vector (e.g. std::vector<cv::Vec4i>), containing information about the image topology. It has as many elements as the number of contours. For each i-th contour contours[i], the elements hierarchy[i][0] , hierarchy[i][1] , hierarchy[i][2] , and hierarchy[i][3] are set to 0-based indices in contours of the next and previous contours at the same hierarchical level, the first child contour and the parent contour, respectively. If for the contour i there are no next, previous, parent, or nested contours, the corresponding elements of hierarchy[i] will be negative
         * @param mode Contour retrieval mode, @see RetrievalModes
         * @param method Contour approximation method, @see ContourApproximationModes
         */
        findContours(
            image: Mat | MatVector,
            contours: Mat | MatVector,
            hierarchy: Mat | MatVector,
            mode: RetrievalModes,
            method: ContourApproximationModes
        ): void;
        /**
         * Fits an ellipse around a set of 2D points.
         * @param points
         */
        fitEllipse(points: Mat): void;
        /**
         * Fits a line to a 2D or 3D point set.
         * @param points Input vector of 2D or 3D points, stored in a Mat.
         * @param line Output line parameters. In case of 2D fitting, it should be a vector of 4 elements (like Vec4f) - (vx, vy, x0, y0), where (vx, vy) is a normalized vector collinear to the line and (x0, y0) is a point on the line. In case of 3D fitting, it should be a vector of 6 elements (like Vec6f) - (vx, vy, vz, x0, y0, z0), where (vx, vy, vz) is a normalized vector collinear to the line and (x0, y0, z0) is a point on the line
         * @param disType Distance used by the M-estimator, @see DistanceTypes
         * @param param Numerical parameter ( C ) for some types of distances. If it is 0, an optimal value is chosen.
         * @param reps Sufficient accuracy for the radius (distance between the coordinate origin and the line).
         * @param aeps Sufficient accuracy for the angle. 0.01 would be a good default value for reps and aeps.
         */
        fitLine(
            points: Mat,
            line: Mat,
            disType: DistanceTypes,
            param: number,
            reps: number,
            aeps: number
        ): void;
        /**
         * Tests a contour convexity.
         * @param contour
         * @returns whether the input contour is convex or not
         */
        isContourConvex(contour: Mat): boolean;
        /**
         * Compares two shapes
         * @param contour1 First contour or grayscale image
         * @param contour2 Second contour or grayscale image
         * @param method Comparison method, @see ShapeMatchModes
         * @param parameter Method-specific parameter (not supported now).
         * @returns
         */
        matchShapes(
            contour1: Mat,
            contour2: Mat,
            method: ShapeMatchModes,
            parameter: number
        ): number;
        /**
         * Finds a rotated rectangle of the minimum area enclosing the input 2D point set.
         * @param points Input vector of 2D points, stored in a Mat
         * @returns the minimum-area bounding rectangle (possibly rotated) for a specified point set
         */
        minAreaRect(points: Mat): RotatedRect;
        /**
         * Finds a circle of the minimum area enclosing a 2D point set.
         * @param points Input vector of 2D points, stored in a Mat
         */
        minEnclosingCircle(points: Mat): void;
        /**
         * Calculates all of the moments up to the third order of a polygon or rasterized shape
         * @param array Raster image (single-channel, 8-bit or floating-point 2D array) or an array ( 1×N or N×1 ) of 2D points (Point or Point2f ).
         * @returns results are returned in the structure cv::Moments.
         */
        moments(array: Mat): Moments;
        /**
         * Performs a point-in-contour test.
         * @param contour Input contour
         * @param pt Point tested against the contour
         * @param measureDist If true, the function estimates the signed distance from the point to the nearest contour edge. Otherwise, the function only checks if the point is inside a contour or not.
         * @returns positive (inside), negative (outside), or zero (on an edge) value, correspondingly.
         */
        pointPolygonTest(contour: Mat, pt: Point, measureDist: boolean): number;
    }
}

export = StructuralAnalysisShapeDescriptors;
