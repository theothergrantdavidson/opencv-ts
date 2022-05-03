import { DataTypes, _DataTypes } from './core/HalInterface';
import {
    ColorConversionCodes,
    _ColorConversionCodes,
    ColorConversions,
} from './core/ColorConversion';
import { Mat } from './core/Mat';
import { Point } from './core/Point';
import { Size } from './core/Size';
import { Range } from './core/Range';
import { Scalar } from './core/Scalar';
import { Rect } from './core/Rect';
import {
    MorphShapes,
    _MorphShapes,
    MorphTypes,
    _MorphTypes,
    SpecialFilter,
    _SpecialFilter,
    ImageFiltering,
} from './ImageProcessing/ImageFiltering';
import { _Type, Type, TermCriteria } from './core/TermCriteria';
import {
    BorderTypes,
    _BorderTypes,
    DecompTypes,
    _DecompTypes,
    CmpTypes,
    _CmpTypes,
    DftFlags,
    _DftFlags,
    GemmFlags,
    _GemmFlags,
    NormTypes,
    _NormTypes,
    ReduceTypes,
    _ReduceTypes,
    RotateFlags,
    _RotateFlags,
    CoreArray,
} from './core/CoreArray';
import { CovarFlags, _CovarFlags, NDArray } from './core/Core';
import { SortFlags, _SortFlags } from './core/Utils';
import {
    InterpolationFlags,
    _InterpolationFlags,
    InterpolationMasks,
    _InterpolationMasks,
    WarpPolarMode,
    _WarpPolarMode,
    GeometricImageTransformations,
} from './ImageProcessing/GeometricImageTransformations';
import {
    HersheyFonts,
    _HersheyFonts,
    LineTypes,
    _LineTypes,
    MarkerTypes,
    _MarkerTypes,
    DrawingFunctions,
} from './ImageProcessing/DrawingFunctions';
import { RotatedRect } from './core/RotatedRect';
import { ColormapTypes, _ColormapTypes, ColorMap } from './ImageProcessing/ColorMap';
import { Subdiv2D, QuadEdge, Vertex, _EdgeType, EdgeType } from './ImageProcessing/Subdiv2D';
import {
    DistanceTypes,
    _DistanceTypes,
    _AdaptiveThresholdTypes,
    _DistanceTransformLabelTypes,
    _DistanceTransformMasks,
    _FloodFillFlags,
    _GrabCutClasses,
    _GrabCutModes,
    _ThresholdTypes,
    AdaptiveThresholdTypes,
    DistanceTransformLabelTypes,
    DistanceTransformMasks,
    FloodFillFlags,
    GrabCutClasses,
    GrabCutModes,
    ThresholdTypes,
    Misc,
} from './ImageProcessing/Misc';
import { HistCompMethods, _HistCompMethods, Histograms } from './ImageProcessing/Histograms';
import {
    _ConnectedComponentsAlgorithmsTypes,
    _ConnectedComponentsTypes,
    _ContourApproximationModes,
    _RectanglesIntersectTypes,
    _RetrievalModes,
    _ShapeMatchModes,
    ConnectedComponentsAlgorithmsTypes,
    ConnectedComponentsTypes,
    ContourApproximationModes,
    RectanglesIntersectTypes,
    RetrievalModes,
    ShapeMatchModes,
    StructuralAnalysisShapeDescriptors,
} from './ImageProcessing/Shape';
import { Moments } from './core/Moments';
import {
    _HoughModes,
    _LineSegmentDetectorModes,
    HoughModes,
    LineSegmentDetectorModes,
    FeatureDetection,
} from './ImageProcessing/Feature';
import { _TemplateMatchModes, TemplateMatchModes, ObjectDetection } from './ImageProcessing/Object';
import { ImageSegmentation } from './ImageProcessing/Segmentation';
import { BackgroundSubtractor } from './video/BackgroundSubtractor';
import { BackgroundSubtractorMOG2 } from './video/BackgroundSubtractorMOG2';
import { ObjectDetection as _ObjectDetection } from './ObjectDetection/ObjectDetection';
import { _Motion, _Optflow, Optflow, Motion, ObjectTracking } from './video/track';
import { MatVector } from './core/MatVector';
import { dnn, dnn_Net } from './dnn/dnn';

declare module opencv {
    interface VideoCapture {
        /**
         * Creates a VideoCapture object that reads from a source HTMLVideoElement
         */
        new (videoSource: string | HTMLVideoElement): VideoCapture;
        /**
         * Outputs a HTMLVideo elements frame to an instance of a Mat object
         * @param src cv.Mat to output to
         */
        read(src: Mat): void;
    }
    abstract class cv
        implements
            _DataTypes,
            _ColorConversionCodes,
            _MorphShapes,
            _MorphTypes,
            _SpecialFilter,
            _BorderTypes,
            _DecompTypes,
            _CmpTypes,
            _DftFlags,
            _GemmFlags,
            _NormTypes,
            _ReduceTypes,
            _RotateFlags,
            _CovarFlags,
            _SortFlags,
            _InterpolationFlags,
            _InterpolationMasks,
            _WarpPolarMode,
            _HersheyFonts,
            _LineTypes,
            _MarkerTypes,
            _ColormapTypes,
            _EdgeType,
            _DistanceTypes,
            _AdaptiveThresholdTypes,
            _DistanceTransformLabelTypes,
            _DistanceTransformMasks,
            _FloodFillFlags,
            _GrabCutClasses,
            _GrabCutModes,
            _ThresholdTypes,
            Misc,
            _HistCompMethods,
            Histograms,
            ColorMap,
            DrawingFunctions,
            GeometricImageTransformations,
            CoreArray,
            ImageFiltering,
            ColorConversions,
            _ConnectedComponentsAlgorithmsTypes,
            _ConnectedComponentsTypes,
            _ContourApproximationModes,
            _RectanglesIntersectTypes,
            _RetrievalModes,
            _ShapeMatchModes,
            StructuralAnalysisShapeDescriptors,
            _HoughModes,
            _LineSegmentDetectorModes,
            FeatureDetection,
            _TemplateMatchModes,
            ObjectDetection,
            ImageSegmentation,
            _ObjectDetection,
            _Motion,
            _Optflow,
            _Type,
            ObjectTracking,
            dnn
    {
        blobFromImage(
            image: Mat,
            scalefactor: number,
            size: Size,
            mean: Scalar,
            swapRB: boolean
        ): Mat;
        readNet(config: string, model: string): dnn_Net;
        meanShift(probImage: Mat, window: Rect, criteria: TermCriteria): [number, Rect];
        TERM_CRITERIA_COUNT: Type.TERM_CRITERIA_COUNT;
        TERM_CRITERIA_MAX_ITER: Type.TERM_CRITERIA_MAX_ITER;
        TERM_CRITERIA_EPS: Type.TERM_CRITERIA_EPS;
        // JS only helper functions
        /**
         * Renders an input Mat to a canvas object
         * @param canvasSource HTMLCanvas element or id of HTMLCanvas to output Mat to
         * @param mat input source mat
         */
        imshow(canvasSource: string | HTMLCanvasElement, mat: Mat): void;
        /**
         * Reads image data from a source canvas and outputs it to an instance of cv.Mat
         * @param imageSource source canvas to read imagedata from
         */
        imread(imageSource: string | HTMLImageElement | HTMLCanvasElement): Mat;

        /**
         * Create a Mat from the specified image data.
         * @param imageData image data used to create the Mat
         */
        matFromImageData(imageData: ImageData): Mat;

        /**
         * Create a Mat from a data array.
         * @param rows number of rows of the Mat.
         * @param cols number of columns of the Mat.
         * @param type data type of the Mat.
         * @param array source data array.
         */
        matFromArray(rows: number, cols: number, type: DataTypes, array: number[]): Mat;

        /**
         * Function called when opencv is initialized
         */
        onRuntimeInitialized: () => void;

        VideoCapture: VideoCapture;
        TermCriteria: TermCriteria;

        // Core classes
        Mat: Mat;
        Size: Size;
        Point: Point;
        Range: Range;
        Scalar: Scalar;
        Rect: Rect;
        RotatedRect: RotatedRect;
        Subdiv2D: Subdiv2D;
        QuadEdge: QuadEdge;
        Vertex: Vertex;
        BackgroundSubtractor: BackgroundSubtractor;
        BackgroundSubtractorMOG2: BackgroundSubtractorMOG2;
        MatVector: MatVector;

        // Histogram
        HISTCMP_CORREL: HistCompMethods.HISTCMP_CORREL;
        HISTCMP_CHISQR: HistCompMethods.HISTCMP_CHISQR;
        HISTCMP_INTERSECT: HistCompMethods.HISTCMP_INTERSECT;
        HISTCMP_BHATTACHARYYA: HistCompMethods.HISTCMP_BHATTACHARYYA;
        HISTCMP_HELLINGER: HistCompMethods.HISTCMP_BHATTACHARYYA;
        HISTCMP_CHISQR_ALT: HistCompMethods.HISTCMP_CHISQR_ALT;
        HISTCMP_KL_DIV: HistCompMethods.HISTCMP_KL_DIV;

        calcBackProject(
            images: Mat | MatVector,
            channels: number | number[],
            hist: Mat,
            dst: Mat,
            ranges: MatVector | number[],
            scale?: number
        ): void;
        calcHist(
            image: Mat | MatVector,
            channels: number | number[],
            mask: Mat,
            hist: Mat,
            histSize: number | number[],
            ranges: number | number[],
            accumulate?: boolean
        ): void;
        compareHist(H1: Mat, H2: Mat, method: HistCompMethods): number;
        EMD(
            signature1: Mat,
            signature2: Mat,
            distType: DistanceTypes,
            cost: Mat | MatVector,
            lowerBound: number,
            flow?: Mat
        ): number;
        equalizeHist(src: Mat, dst: Mat): void;

        DIST_USER: DistanceTypes.DIST_USER;
        DIST_L1: DistanceTypes.DIST_L1;
        DIST_L2: DistanceTypes.DIST_L2;
        DIST_C: DistanceTypes.DIST_C;
        DIST_L12: DistanceTypes.DIST_L12;
        DIST_FAIR: DistanceTypes.DIST_FAIR;
        DIST_WELSCH: DistanceTypes.DIST_WELSCH;
        DIST_HUBER: DistanceTypes.DIST_HUBER;

        NEXT_AROUND_ORG: EdgeType.NEXT_AROUND_ORG;
        NEXT_AROUND_DST: EdgeType.NEXT_AROUND_DST;
        PREV_AROUND_ORG: EdgeType.PREV_AROUND_ORG;
        PREV_AROUND_DST: EdgeType.PREV_AROUND_DST;
        NEXT_AROUND_LEFT: EdgeType.NEXT_AROUND_LEFT;
        NEXT_AROUND_RIGHT: EdgeType.NEXT_AROUND_RIGHT;
        PREV_AROUND_LEFT: EdgeType.PREV_AROUND_LEFT;
        PREV_AROUND_RIGHT: EdgeType.PREV_AROUND_RIGHT;

        FONT_HERSHEY_SIMPLEX: HersheyFonts.FONT_HERSHEY_SIMPLEX;
        FONT_HERSHEY_PLAIN: HersheyFonts.FONT_HERSHEY_SIMPLEX;
        FONT_HERSHEY_DUPLEX: HersheyFonts.FONT_HERSHEY_SIMPLEX;
        FONT_HERSHEY_COMPLEX: HersheyFonts.FONT_HERSHEY_SIMPLEX;
        FONT_HERSHEY_TRIPLEX: HersheyFonts.FONT_HERSHEY_SIMPLEX;
        FONT_HERSHEY_COMPLEX_SMALL: HersheyFonts.FONT_HERSHEY_SIMPLEX;
        FONT_HERSHEY_SCRIPT_SIMPLEX: HersheyFonts.FONT_HERSHEY_SIMPLEX;
        FONT_HERSHEY_SCRIPT_COMPLEX: HersheyFonts.FONT_HERSHEY_SIMPLEX;
        FONT_ITALIC: HersheyFonts.FONT_HERSHEY_SIMPLEX;
        FILLED: LineTypes.FILLED;
        LINE_4: LineTypes.LINE_4;
        LINE_8: LineTypes.LINE_8;
        LINE_AA: LineTypes.LINE_AA;
        MARKER_CROSS: MarkerTypes.MARKER_CROSS;
        MARKER_TILTED_CROSS: MarkerTypes.MARKER_TILTED_CROSS;
        MARKER_STAR: MarkerTypes.MARKER_STAR;
        MARKER_DIAMOND: MarkerTypes.MARKER_DIAMOND;
        MARKER_SQUARE: MarkerTypes.MARKER_SQUARE;
        MARKER_TRIANGLE_UP: MarkerTypes.MARKER_TRIANGLE_UP;
        MARKER_TRIANGLE_DOWN: MarkerTypes.MARKER_TRIANGLE_DOWN;

        INTER_NEAREST: InterpolationFlags.INTER_NEAREST;
        INTER_LINEAR: InterpolationFlags.INTER_LINEAR;
        INTER_CUBIC: InterpolationFlags.INTER_CUBIC;
        INTER_AREA: InterpolationFlags.INTER_AREA;
        INTER_LANCZOS4: InterpolationFlags.INTER_LANCZOS4;
        INTER_LINEAR_EXACT: InterpolationFlags.INTER_LINEAR_EXACT;
        INTER_NEAREST_EXACT: InterpolationFlags.INTER_NEAREST_EXACT;
        INTER_MAX: InterpolationFlags.INTER_MAX;
        WARP_FILL_OUTLIERS: InterpolationFlags.WARP_FILL_OUTLIERS;
        WARP_INVERSE_MAP: InterpolationFlags.WARP_INVERSE_MAP;
        INTER_BITS: InterpolationMasks.INTER_BITS;
        INTER_BITS2: InterpolationMasks.INTER_BITS2;
        INTER_TAB_SIZE: InterpolationMasks.INTER_TAB_SIZE;
        INTER_TAB_SIZE2: InterpolationMasks.INTER_TAB_SIZE2;
        WARP_POLAR_LINEAR: WarpPolarMode.WARP_POLAR_LINEAR;
        WARP_POLAR_LOG: WarpPolarMode.WARP_POLAR_LOG;

        CV_8U: DataTypes.CV_8U;
        CV_8S: DataTypes.CV_8S;
        CV_16U: DataTypes.CV_16U;
        CV_16S: DataTypes.CV_16S;
        CV_32S: DataTypes.CV_32S;
        CV_32F: DataTypes.CV_32F;
        CV_64F: DataTypes.CV_64F;
        CV_16F: DataTypes.CV_16F;
        CV_8UC1: DataTypes.CV_8UC1;
        CV_8UC2: DataTypes.CV_8UC2;
        CV_8UC3: DataTypes.CV_8UC3;
        CV_8UC4: DataTypes.CV_8UC4;
        CV_8SC1: DataTypes.CV_8SC1;
        CV_8SC2: DataTypes.CV_8SC2;
        CV_8SC3: DataTypes.CV_8SC3;
        CV_8SC4: DataTypes.CV_8SC4;
        CV_16UC1: DataTypes.CV_16UC1;
        CV_16UC2: DataTypes.CV_16UC2;
        CV_16UC3: DataTypes.CV_16UC3;
        CV_16UC4: DataTypes.CV_16UC4;
        CV_16SC1: DataTypes.CV_16SC1;
        CV_16SC2: DataTypes.CV_16SC2;
        CV_16SC3: DataTypes.CV_16SC3;
        CV_16SC4: DataTypes.CV_16SC4;
        CV_32SC1: DataTypes.CV_32SC1;
        CV_32SC2: DataTypes.CV_32SC2;
        CV_32SC3: DataTypes.CV_32SC3;
        CV_32SC4: DataTypes.CV_32SC4;
        CV_32FC1: DataTypes.CV_32FC1;
        CV_32FC2: DataTypes.CV_32FC2;
        CV_32FC3: DataTypes.CV_32FC3;
        CV_32FC4: DataTypes.CV_32FC4;
        CV_64FC1: DataTypes.CV_64FC1;
        CV_64FC2: DataTypes.CV_64FC2;
        CV_64FC3: DataTypes.CV_64FC3;
        CV_64FC4: DataTypes.CV_64FC4;
        CV_16FC1: DataTypes.CV_16FC1;
        CV_16FC2: DataTypes.CV_16FC2;
        CV_16FC3: DataTypes.CV_16FC3;
        CV_16FC4: DataTypes.CV_16FC4;
        COLOR_BGR2BGRA: ColorConversionCodes.COLOR_BGR2BGRA;
        COLOR_RGB2RGBA: ColorConversionCodes.COLOR_BGR2BGRA;
        COLOR_BGRA2BGR: ColorConversionCodes.COLOR_BGRA2BGR;
        COLOR_RGBA2RGB: ColorConversionCodes.COLOR_BGRA2BGR;
        COLOR_BGR2RGBA: ColorConversionCodes.COLOR_BGR2RGBA;
        COLOR_RGB2BGRA: ColorConversionCodes.COLOR_BGR2RGBA;
        COLOR_RGBA2BGR: ColorConversionCodes.COLOR_RGBA2BGR;
        COLOR_BGRA2RGB: ColorConversionCodes.COLOR_RGBA2BGR;
        COLOR_BGR2RGB: ColorConversionCodes.COLOR_BGR2RGB;
        COLOR_RGB2BGR: ColorConversionCodes.COLOR_BGR2RGB;
        COLOR_BGRA2RGBA: ColorConversionCodes.COLOR_BGRA2RGBA;
        COLOR_RGBA2BGRA: ColorConversionCodes.COLOR_BGRA2RGBA;
        COLOR_BGR2GRAY: ColorConversionCodes.COLOR_BGR2GRAY;
        COLOR_RGB2GRAY: ColorConversionCodes.COLOR_RGB2GRAY;
        COLOR_GRAY2BGR: ColorConversionCodes.COLOR_GRAY2BGR;
        COLOR_GRAY2RGB: ColorConversionCodes.COLOR_GRAY2BGR;
        COLOR_GRAY2BGRA: ColorConversionCodes.COLOR_GRAY2BGRA;
        COLOR_GRAY2RGBA: ColorConversionCodes.COLOR_GRAY2BGRA;
        COLOR_BGRA2GRAY: ColorConversionCodes.COLOR_BGRA2GRAY;
        COLOR_RGBA2GRAY: ColorConversionCodes.COLOR_RGBA2GRAY;
        COLOR_BGR2BGR565: ColorConversionCodes.COLOR_BGR2BGR565;
        COLOR_RGB2BGR565: ColorConversionCodes.COLOR_RGB2BGR565;
        COLOR_BGR5652BGR: ColorConversionCodes.COLOR_BGR5652BGR;
        COLOR_BGR5652RGB: ColorConversionCodes.COLOR_BGR5652RGB;
        COLOR_BGRA2BGR565: ColorConversionCodes.COLOR_BGRA2BGR565;
        COLOR_RGBA2BGR565: ColorConversionCodes.COLOR_RGBA2BGR565;
        COLOR_BGR5652BGRA: ColorConversionCodes.COLOR_BGR5652BGRA;
        COLOR_BGR5652RGBA: ColorConversionCodes.COLOR_BGR5652RGBA;
        COLOR_GRAY2BGR565: ColorConversionCodes.COLOR_GRAY2BGR565;
        COLOR_BGR5652GRAY: ColorConversionCodes.COLOR_BGR5652GRAY;
        COLOR_BGR2BGR555: ColorConversionCodes.COLOR_BGR2BGR555;
        COLOR_RGB2BGR555: ColorConversionCodes.COLOR_RGB2BGR555;
        COLOR_BGR5552BGR: ColorConversionCodes.COLOR_BGR5552BGR;
        COLOR_BGR5552RGB: ColorConversionCodes.COLOR_BGR5552RGB;
        COLOR_BGRA2BGR555: ColorConversionCodes.COLOR_BGRA2BGR555;
        COLOR_RGBA2BGR555: ColorConversionCodes.COLOR_RGBA2BGR555;
        COLOR_BGR5552BGRA: ColorConversionCodes.COLOR_BGR5552BGRA;
        COLOR_BGR5552RGBA: ColorConversionCodes.COLOR_BGR5552RGBA;
        COLOR_GRAY2BGR555: ColorConversionCodes.COLOR_GRAY2BGR555;
        COLOR_BGR5552GRAY: ColorConversionCodes.COLOR_BGR5552GRAY;
        COLOR_BGR2XYZ: ColorConversionCodes.COLOR_BGR2XYZ;
        COLOR_RGB2XYZ: ColorConversionCodes.COLOR_RGB2XYZ;
        COLOR_XYZ2BGR: ColorConversionCodes.COLOR_XYZ2BGR;
        COLOR_XYZ2RGB: ColorConversionCodes.COLOR_XYZ2RGB;
        COLOR_BGR2YCrCb: ColorConversionCodes.COLOR_BGR2YCrCb;
        COLOR_RGB2YCrCb: ColorConversionCodes.COLOR_RGB2YCrCb;
        COLOR_YCrCb2BGR: ColorConversionCodes.COLOR_YCrCb2BGR;
        COLOR_YCrCb2RGB: ColorConversionCodes.COLOR_YCrCb2RGB;
        COLOR_BGR2HSV: ColorConversionCodes.COLOR_BGR2HSV;
        COLOR_RGB2HSV: ColorConversionCodes.COLOR_RGB2HSV;
        COLOR_BGR2Lab: ColorConversionCodes.COLOR_BGR2Lab;
        COLOR_RGB2Lab: ColorConversionCodes.COLOR_RGB2Lab;
        COLOR_BGR2Luv: ColorConversionCodes.COLOR_BGR2Luv;
        COLOR_RGB2Luv: ColorConversionCodes.COLOR_RGB2Luv;
        COLOR_BGR2HLS: ColorConversionCodes.COLOR_BGR2HLS;
        COLOR_RGB2HLS: ColorConversionCodes.COLOR_RGB2HLS;
        COLOR_HSV2BGR: ColorConversionCodes.COLOR_HSV2BGR;
        COLOR_HSV2RGB: ColorConversionCodes.COLOR_HSV2RGB;
        COLOR_Lab2BGR: ColorConversionCodes.COLOR_Lab2BGR;
        COLOR_Lab2RGB: ColorConversionCodes.COLOR_Lab2RGB;
        COLOR_Luv2BGR: ColorConversionCodes.COLOR_Luv2BGR;
        COLOR_Luv2RGB: ColorConversionCodes.COLOR_Luv2RGB;
        COLOR_HLS2BGR: ColorConversionCodes.COLOR_HLS2BGR;
        COLOR_HLS2RGB: ColorConversionCodes.COLOR_HLS2RGB;
        COLOR_BGR2HSV_FULL: ColorConversionCodes.COLOR_BGR2HSV_FULL;
        COLOR_RGB2HSV_FULL: ColorConversionCodes.COLOR_RGB2HSV_FULL;
        COLOR_BGR2HLS_FULL: ColorConversionCodes.COLOR_BGR2HLS_FULL;
        COLOR_RGB2HLS_FULL: ColorConversionCodes.COLOR_RGB2HLS_FULL;
        COLOR_HSV2BGR_FULL: ColorConversionCodes.COLOR_HSV2BGR_FULL;
        COLOR_HSV2RGB_FULL: ColorConversionCodes.COLOR_HSV2RGB_FULL;
        COLOR_HLS2BGR_FULL: ColorConversionCodes.COLOR_HLS2BGR_FULL;
        COLOR_HLS2RGB_FULL: ColorConversionCodes.COLOR_HLS2RGB_FULL;
        COLOR_LBGR2Lab: ColorConversionCodes.COLOR_LBGR2Lab;
        COLOR_LRGB2Lab: ColorConversionCodes.COLOR_LRGB2Lab;
        COLOR_LBGR2Luv: ColorConversionCodes.COLOR_LBGR2Luv;
        COLOR_LRGB2Luv: ColorConversionCodes.COLOR_LRGB2Luv;
        COLOR_Lab2LBGR: ColorConversionCodes.COLOR_Lab2LBGR;
        COLOR_Lab2LRGB: ColorConversionCodes.COLOR_Lab2LRGB;
        COLOR_Luv2LBGR: ColorConversionCodes.COLOR_Luv2LBGR;
        COLOR_Luv2LRGB: ColorConversionCodes.COLOR_Luv2LRGB;
        COLOR_BGR2YUV: ColorConversionCodes.COLOR_BGR2YUV;
        COLOR_RGB2YUV: ColorConversionCodes.COLOR_RGB2YUV;
        COLOR_YUV2BGR: ColorConversionCodes.COLOR_YUV2BGR;
        COLOR_YUV2RGB: ColorConversionCodes.COLOR_YUV2RGB;
        COLOR_YUV2RGB_NV12: ColorConversionCodes.COLOR_YUV2RGB_NV12;
        COLOR_YUV2BGR_NV12: ColorConversionCodes.COLOR_YUV2BGR_NV12;
        COLOR_YUV2RGB_NV21: ColorConversionCodes.COLOR_YUV2RGB_NV21;
        COLOR_YUV2BGR_NV21: ColorConversionCodes.COLOR_YUV2BGR_NV21;
        COLOR_YUV420sp2RGB: ColorConversionCodes.COLOR_YUV2RGB_NV21;
        COLOR_YUV420sp2BGR: ColorConversionCodes.COLOR_YUV2BGR_NV21;
        COLOR_YUV2RGBA_NV12: ColorConversionCodes.COLOR_YUV2RGBA_NV12;
        COLOR_YUV2BGRA_NV12: ColorConversionCodes.COLOR_YUV2BGRA_NV12;
        COLOR_YUV2RGBA_NV21: ColorConversionCodes.COLOR_YUV2RGBA_NV21;
        COLOR_YUV2BGRA_NV21: ColorConversionCodes.COLOR_YUV2BGRA_NV21;
        COLOR_YUV420sp2RGBA: ColorConversionCodes.COLOR_YUV2RGBA_NV21;
        COLOR_YUV420sp2BGRA: ColorConversionCodes.COLOR_YUV2BGRA_NV21;
        COLOR_YUV2RGB_YV12: ColorConversionCodes.COLOR_YUV2RGB_YV12;
        COLOR_YUV2BGR_YV12: ColorConversionCodes.COLOR_YUV2BGR_YV12;
        COLOR_YUV2RGB_IYUV: ColorConversionCodes.COLOR_YUV2RGB_IYUV;
        COLOR_YUV2BGR_IYUV: ColorConversionCodes.COLOR_YUV2BGR_IYUV;
        COLOR_YUV2RGB_I420: ColorConversionCodes.COLOR_YUV2RGB_IYUV;
        COLOR_YUV2BGR_I420: ColorConversionCodes.COLOR_YUV2BGR_IYUV;
        COLOR_YUV420p2RGB: ColorConversionCodes.COLOR_YUV2RGB_YV12;
        COLOR_YUV420p2BGR: ColorConversionCodes.COLOR_YUV2BGR_YV12;
        COLOR_YUV2RGBA_YV12: ColorConversionCodes.COLOR_YUV2RGBA_YV12;
        COLOR_YUV2BGRA_YV12: ColorConversionCodes.COLOR_YUV2BGRA_YV12;
        COLOR_YUV2RGBA_IYUV: ColorConversionCodes.COLOR_YUV2RGBA_IYUV;
        COLOR_YUV2BGRA_IYUV: ColorConversionCodes.COLOR_YUV2BGRA_IYUV;
        COLOR_YUV2RGBA_I420: ColorConversionCodes.COLOR_YUV2RGBA_IYUV;
        COLOR_YUV2BGRA_I420: ColorConversionCodes.COLOR_YUV2BGRA_IYUV;
        COLOR_YUV420p2RGBA: ColorConversionCodes.COLOR_YUV2RGBA_YV12;
        COLOR_YUV420p2BGRA: ColorConversionCodes.COLOR_YUV2BGRA_YV12;
        COLOR_YUV2GRAY_420: ColorConversionCodes.COLOR_YUV2GRAY_420;
        COLOR_YUV2GRAY_NV21: ColorConversionCodes.COLOR_YUV2GRAY_420;
        COLOR_YUV2GRAY_NV12: ColorConversionCodes.COLOR_YUV2GRAY_420;
        COLOR_YUV2GRAY_YV12: ColorConversionCodes.COLOR_YUV2GRAY_420;
        COLOR_YUV2GRAY_IYUV: ColorConversionCodes.COLOR_YUV2GRAY_420;
        COLOR_YUV2GRAY_I420: ColorConversionCodes.COLOR_YUV2GRAY_420;
        COLOR_YUV420sp2GRAY: ColorConversionCodes.COLOR_YUV2GRAY_420;
        COLOR_YUV420p2GRAY: ColorConversionCodes.COLOR_YUV2GRAY_420;
        COLOR_YUV2RGB_UYVY: ColorConversionCodes.COLOR_YUV2RGB_UYVY;
        COLOR_YUV2BGR_UYVY: ColorConversionCodes.COLOR_YUV2BGR_UYVY;
        COLOR_YUV2RGB_Y422: ColorConversionCodes.COLOR_YUV2RGB_UYVY;
        COLOR_YUV2BGR_Y422: ColorConversionCodes.COLOR_YUV2BGR_UYVY;
        COLOR_YUV2RGB_UYNV: ColorConversionCodes.COLOR_YUV2RGB_UYVY;
        COLOR_YUV2BGR_UYNV: ColorConversionCodes.COLOR_YUV2BGR_UYVY;
        COLOR_YUV2RGBA_UYVY: ColorConversionCodes.COLOR_YUV2RGBA_UYVY;
        COLOR_YUV2BGRA_UYVY: ColorConversionCodes.COLOR_YUV2BGRA_UYVY;
        COLOR_YUV2RGBA_Y422: ColorConversionCodes.COLOR_YUV2RGBA_UYVY;
        COLOR_YUV2BGRA_Y422: ColorConversionCodes.COLOR_YUV2BGRA_UYVY;
        COLOR_YUV2RGBA_UYNV: ColorConversionCodes.COLOR_YUV2RGBA_UYVY;
        COLOR_YUV2BGRA_UYNV: ColorConversionCodes.COLOR_YUV2BGRA_UYVY;
        COLOR_YUV2RGB_YUY2: ColorConversionCodes.COLOR_YUV2RGB_YUY2;
        COLOR_YUV2BGR_YUY2: ColorConversionCodes.COLOR_YUV2BGR_YUY2;
        COLOR_YUV2RGB_YVYU: ColorConversionCodes.COLOR_YUV2RGB_YVYU;
        COLOR_YUV2BGR_YVYU: ColorConversionCodes.COLOR_YUV2BGR_YVYU;
        COLOR_YUV2RGB_YUYV: ColorConversionCodes.COLOR_YUV2RGB_YUY2;
        COLOR_YUV2BGR_YUYV: ColorConversionCodes.COLOR_YUV2BGR_YUY2;
        COLOR_YUV2RGB_YUNV: ColorConversionCodes.COLOR_YUV2RGB_YUY2;
        COLOR_YUV2BGR_YUNV: ColorConversionCodes.COLOR_YUV2BGR_YUY2;
        COLOR_YUV2RGBA_YUY2: ColorConversionCodes.COLOR_YUV2RGBA_YUY2;
        COLOR_YUV2BGRA_YUY2: ColorConversionCodes.COLOR_YUV2BGRA_YUY2;
        COLOR_YUV2RGBA_YVYU: ColorConversionCodes.COLOR_YUV2RGBA_YVYU;
        COLOR_YUV2BGRA_YVYU: ColorConversionCodes.COLOR_YUV2BGRA_YVYU;
        COLOR_YUV2RGBA_YUYV: ColorConversionCodes.COLOR_YUV2RGBA_YUY2;
        COLOR_YUV2BGRA_YUYV: ColorConversionCodes.COLOR_YUV2BGRA_YUY2;
        COLOR_YUV2RGBA_YUNV: ColorConversionCodes.COLOR_YUV2RGBA_YUY2;
        COLOR_YUV2BGRA_YUNV: ColorConversionCodes.COLOR_YUV2BGRA_YUY2;
        COLOR_YUV2GRAY_UYVY: ColorConversionCodes.COLOR_YUV2GRAY_UYVY;
        COLOR_YUV2GRAY_YUY2: ColorConversionCodes.COLOR_YUV2GRAY_YUY2;
        COLOR_YUV2GRAY_Y422: ColorConversionCodes.COLOR_YUV2GRAY_UYVY;
        COLOR_YUV2GRAY_UYNV: ColorConversionCodes.COLOR_YUV2GRAY_UYVY;
        COLOR_YUV2GRAY_YVYU: ColorConversionCodes.COLOR_YUV2GRAY_YUY2;
        COLOR_YUV2GRAY_YUYV: ColorConversionCodes.COLOR_YUV2GRAY_YUY2;
        COLOR_YUV2GRAY_YUNV: ColorConversionCodes.COLOR_YUV2GRAY_YUY2;
        COLOR_RGBA2mRGBA: ColorConversionCodes.COLOR_RGBA2mRGBA;
        COLOR_mRGBA2RGBA: ColorConversionCodes.COLOR_mRGBA2RGBA;
        COLOR_RGB2YUV_I420: ColorConversionCodes.COLOR_RGB2YUV_I420;
        COLOR_BGR2YUV_I420: ColorConversionCodes.COLOR_BGR2YUV_I420;
        COLOR_RGB2YUV_IYUV: ColorConversionCodes.COLOR_RGB2YUV_I420;
        COLOR_BGR2YUV_IYUV: ColorConversionCodes.COLOR_BGR2YUV_I420;
        COLOR_RGBA2YUV_I420: ColorConversionCodes.COLOR_RGBA2YUV_I420;
        COLOR_BGRA2YUV_I420: ColorConversionCodes.COLOR_BGRA2YUV_I420;
        COLOR_RGBA2YUV_IYUV: ColorConversionCodes.COLOR_RGBA2YUV_I420;
        COLOR_BGRA2YUV_IYUV: ColorConversionCodes.COLOR_BGRA2YUV_I420;
        COLOR_RGB2YUV_YV12: ColorConversionCodes.COLOR_RGB2YUV_YV12;
        COLOR_BGR2YUV_YV12: ColorConversionCodes.COLOR_BGR2YUV_YV12;
        COLOR_RGBA2YUV_YV12: ColorConversionCodes.COLOR_RGBA2YUV_YV12;
        COLOR_BGRA2YUV_YV12: ColorConversionCodes.COLOR_BGRA2YUV_YV12;
        COLOR_BayerBG2BGR: ColorConversionCodes.COLOR_BayerBG2BGR;
        COLOR_BayerGB2BGR: ColorConversionCodes.COLOR_BayerGB2BGR;
        COLOR_BayerRG2BGR: ColorConversionCodes.COLOR_BayerRG2BGR;
        COLOR_BayerGR2BGR: ColorConversionCodes.COLOR_BayerGR2BGR;
        COLOR_BayerBG2RGB: ColorConversionCodes.COLOR_BayerRG2BGR;
        COLOR_BayerGB2RGB: ColorConversionCodes.COLOR_BayerGR2BGR;
        COLOR_BayerRG2RGB: ColorConversionCodes.COLOR_BayerBG2BGR;
        COLOR_BayerGR2RGB: ColorConversionCodes.COLOR_BayerGB2BGR;
        COLOR_BayerBG2GRAY: ColorConversionCodes.COLOR_BayerBG2GRAY;
        COLOR_BayerGB2GRAY: ColorConversionCodes.COLOR_BayerGB2GRAY;
        COLOR_BayerRG2GRAY: ColorConversionCodes.COLOR_BayerRG2GRAY;
        COLOR_BayerGR2GRAY: ColorConversionCodes.COLOR_BayerGR2GRAY;
        COLOR_BayerBG2BGR_VNG: ColorConversionCodes.COLOR_BayerBG2BGR_VNG;
        COLOR_BayerGB2BGR_VNG: ColorConversionCodes.COLOR_BayerGB2BGR_VNG;
        COLOR_BayerRG2BGR_VNG: ColorConversionCodes.COLOR_BayerRG2BGR_VNG;
        COLOR_BayerGR2BGR_VNG: ColorConversionCodes.COLOR_BayerGR2BGR_VNG;
        COLOR_BayerBG2RGB_VNG: ColorConversionCodes.COLOR_BayerRG2BGR_VNG;
        COLOR_BayerGB2RGB_VNG: ColorConversionCodes.COLOR_BayerGR2BGR_VNG;
        COLOR_BayerRG2RGB_VNG: ColorConversionCodes.COLOR_BayerBG2BGR_VNG;
        COLOR_BayerGR2RGB_VNG: ColorConversionCodes.COLOR_BayerGB2BGR_VNG;
        COLOR_BayerBG2BGR_EA: ColorConversionCodes.COLOR_BayerBG2BGR_EA;
        COLOR_BayerGB2BGR_EA: ColorConversionCodes.COLOR_BayerGB2BGR_EA;
        COLOR_BayerRG2BGR_EA: ColorConversionCodes.COLOR_BayerRG2BGR_EA;
        COLOR_BayerGR2BGR_EA: ColorConversionCodes.COLOR_BayerGR2BGR_EA;
        COLOR_BayerBG2RGB_EA: ColorConversionCodes.COLOR_BayerRG2BGR_EA;
        COLOR_BayerGB2RGB_EA: ColorConversionCodes.COLOR_BayerGR2BGR_EA;
        COLOR_BayerRG2RGB_EA: ColorConversionCodes.COLOR_BayerBG2BGR_EA;
        COLOR_BayerGR2RGB_EA: ColorConversionCodes.COLOR_BayerGB2BGR_EA;
        COLOR_BayerBG2BGRA: ColorConversionCodes.COLOR_BayerBG2BGRA;
        COLOR_BayerGB2BGRA: ColorConversionCodes.COLOR_BayerGB2BGRA;
        COLOR_BayerRG2BGRA: ColorConversionCodes.COLOR_BayerRG2BGRA;
        COLOR_BayerGR2BGRA: ColorConversionCodes.COLOR_BayerGR2BGRA;
        COLOR_BayerBG2RGBA: ColorConversionCodes.COLOR_BayerRG2BGRA;
        COLOR_BayerGB2RGBA: ColorConversionCodes.COLOR_BayerGR2BGRA;
        COLOR_BayerRG2RGBA: ColorConversionCodes.COLOR_BayerBG2BGRA;
        COLOR_BayerGR2RGBA: ColorConversionCodes.COLOR_BayerGB2BGRA;
        COLORCOLORCVT_MAX: ColorConversionCodes.COLOR_COLORCVT_MAX;
        MORPH_RECT: MorphShapes.MORPH_RECT;
        MORPH_CROSS: MorphShapes.MORPH_CROSS;
        MORPH_ELLIPSE: MorphShapes.MORPH_ELLIPSE;
        MORPH_ERODE: MorphTypes.MORPH_ERODE;
        MORPH_DILATE: MorphTypes.MORPH_DILATE;
        MORPH_OPEN: MorphTypes.MORPH_OPEN;
        MORPH_CLOSE: MorphTypes.MORPH_CLOSE;
        MORPH_GRADIENT: MorphTypes.MORPH_GRADIENT;
        MORPH_TOPHAT: MorphTypes.MORPH_TOPHAT;
        MORPH_BLACKHAT: MorphTypes.MORPH_BLACKHAT;
        MORPH_HITMISS: MorphTypes.MORPH_HITMISS;
        FILTER_SCHARR: SpecialFilter;
        BORDER_CONSTANT: BorderTypes.BORDER_CONSTANT;
        BORDER_REPLICATE: BorderTypes.BORDER_REPLICATE;
        BORDER_REFLECT: BorderTypes.BORDER_REFLECT;
        BORDER_WRAP: BorderTypes.BORDER_WRAP;
        BORDER_REFLECT_101: BorderTypes.BORDER_REFLECT_101;
        BORDER_TRANSPARENT: BorderTypes.BORDER_TRANSPARENT;
        BORDER_REFLECT101: BorderTypes.BORDER_REFLECT_101;
        BORDER_DEFAULT: BorderTypes.BORDER_REFLECT_101;
        BORDER_ISOLATED: BorderTypes.BORDER_ISOLATED;
        DECOMP_LU: DecompTypes.DECOMP_LU;
        DECOMP_SVD: DecompTypes.DECOMP_SVD;
        DECOMP_EIG: DecompTypes.DECOMP_EIG;
        DECOMP_CHOLESKY: DecompTypes.DECOMP_CHOLESKY;
        DECOMP_QR: DecompTypes.DECOMP_QR;
        DECOMP_NORMAL: DecompTypes.DECOMP_NORMAL;
        CMP_EQ: CmpTypes.CMP_EQ;
        CMP_GT: CmpTypes.CMP_GT;
        CMP_GE: CmpTypes.CMP_GE;
        CMP_LT: CmpTypes.CMP_LT;
        CMP_LE: CmpTypes.CMP_LE;
        CMP_NE: CmpTypes.CMP_NE;
        DFT_INVERSE: DftFlags.DFT_INVERSE;
        DFT_SCALE: DftFlags.DFT_SCALE;
        DFT_ROWS: DftFlags.DFT_ROWS;
        DFT_COMPLEX_OUTPUT: DftFlags.DFT_COMPLEX_OUTPUT;
        DFT_REAL_OUTPUT: DftFlags.DFT_REAL_OUTPUT;
        DFT_COMPLEX_INPUT: DftFlags.DFT_COMPLEX_INPUT;
        DCT_INVERSE: DftFlags.DFT_INVERSE;
        DCT_ROWS: DftFlags.DFT_ROWS;
        GEMM_1_T: GemmFlags.GEMM_1_T;
        GEMM_2_T: GemmFlags.GEMM_2_T;
        GEMM_3_T: GemmFlags.GEMM_3_T;
        NORM_INF: NormTypes.NORM_INF;
        NORM_L1: NormTypes.NORM_L1;
        NORM_L2: NormTypes.NORM_L2;
        NORM_L2SQR: NormTypes.NORM_L2SQR;
        NORM_HAMMING: NormTypes.NORM_HAMMING;
        NORM_HAMMING2: NormTypes.NORM_HAMMING2;
        NORM_TYPE_MASK: NormTypes.NORM_HAMMING2;
        NORM_RELATIVE: NormTypes.NORM_RELATIVE;
        NORM_MINMAX: NormTypes.NORM_MINMAX;
        REDUCE_SUM: ReduceTypes.REDUCE_SUM;
        REDUCE_AVG: ReduceTypes.REDUCE_AVG;
        REDUCE_MAX: ReduceTypes.REDUCE_MAX;
        REDUCE_MIN: ReduceTypes.REDUCE_MIN;
        ROTATE_90_CLOCKWISE: RotateFlags.ROTATE_90_CLOCKWISE;
        ROTATE_180: RotateFlags.ROTATE_180;
        ROTATE_90_COUNTERCLOCKWISE: RotateFlags.ROTATE_90_COUNTERCLOCKWISE;
        COVAR_SCRAMBLED: CovarFlags.COVAR_SCRAMBLED;
        COVAR_NORMAL: CovarFlags.COVAR_NORMAL;
        COVAR_USE_AVG: CovarFlags.COVAR_USE_AVG;
        COVAR_SCALE: CovarFlags.COVAR_SCALE;
        COVAR_ROWS: CovarFlags.COVAR_ROWS;
        COVAR_COLS: CovarFlags.COVAR_COLS;
        SORT_EVERY_ROW: SortFlags.SORT_EVERY_ROW;
        SORT_EVERY_COLUMN: SortFlags.SORT_EVERY_COLUMN;
        SORT_ASCENDING: SortFlags.SORT_EVERY_ROW;
        SORT_DESCENDING: SortFlags.SORT_DESCENDING;

        // ColorMap
        COLORMAP_AUTUMN: ColormapTypes.COLORMAP_AUTUMN;
        COLORMAP_BONE: ColormapTypes.COLORMAP_BONE;
        COLORMAP_JET: ColormapTypes.COLORMAP_JET;
        COLORMAP_WINTER: ColormapTypes.COLORMAP_WINTER;
        COLORMAP_RAINBOW: ColormapTypes.COLORMAP_RAINBOW;
        COLORMAP_OCEAN: ColormapTypes.COLORMAP_OCEAN;
        COLORMAP_SUMMER: ColormapTypes.COLORMAP_SUMMER;
        COLORMAP_SPRING: ColormapTypes.COLORMAP_SPRING;
        COLORMAP_COOL: ColormapTypes.COLORMAP_COOL;
        COLORMAP_HSV: ColormapTypes.COLORMAP_HSV;
        COLORMAP_PINK: ColormapTypes.COLORMAP_PINK;
        COLORMAP_HOT: ColormapTypes.COLORMAP_HOT;
        COLORMAP_PARULA: ColormapTypes.COLORMAP_PARULA;
        COLORMAP_MAGMA: ColormapTypes.COLORMAP_MAGMA;
        COLORMAP_INFERNO: ColormapTypes.COLORMAP_INFERNO;
        COLORMAP_PLASMA: ColormapTypes.COLORMAP_PLASMA;
        COLORMAP_VIRIDIS: ColormapTypes.COLORMAP_VIRIDIS;
        COLORMAP_CIVIDIS: ColormapTypes.COLORMAP_CIVIDIS;
        COLORMAP_TWILIGHT: ColormapTypes.COLORMAP_TWILIGHT;
        COLORMAP_TWILIGHT_SHIFTED: ColormapTypes.COLORMAP_TWILIGHT_SHIFTED;
        COLORMAP_TURBO: ColormapTypes.COLORMAP_TURBO;
        COLORMAP_DEEPGREEN: ColormapTypes.COLORMAP_DEEPGREEN;

        applyColorMap(src: Mat, dst: Mat, colormap: ColormapTypes): void;

        // Core Array functions
        absdiff(src1: Mat, src2: Mat, dst: Mat): void;
        add(src1: Mat, src2: Mat, dst: Mat, mask?: Mat): void;
        add(src1: Mat, src2: Mat, dst: Mat, mask: Mat, dtype: number | DataTypes): void;
        addWeighted(
            src1: Mat,
            alpha: number,
            src2: Mat,
            beta: number,
            gamma: number,
            dst: Mat,
            dtype?: number | DataTypes
        ): void;
        batchDistance(
            src1: Mat,
            src2: Mat,
            dist: Mat,
            dtype: number | DataTypes,
            nidx: Mat,
            normType: NormTypes,
            K: number,
            mask: Mat,
            update: number,
            crosscheck: boolean
        ): void;
        bitwise_and(src1: Mat, src2: Mat, dst: Mat, mask?: Mat): void;
        bitwise_not(src: Mat, dst: Mat, mask?: Mat): void;
        bitwise_or(src1: Mat, src2: Mat, dst: Mat, mask?: Mat): void;
        bitwise_xor(src1: Mat, src2: Mat, dst: Mat, mask?: Mat): void;
        borderInterpolate(p: number, len: number, borderType: BorderTypes): number;
        calcCovarMatrix(
            samples: Mat,
            nsamples: number,
            covar: Mat,
            mean: Mat,
            flags: CovarFlags,
            ctype: DataTypes
        ): void;
        calcCovarMatrix(
            samples: Mat,
            covar: Mat,
            mean: Mat,
            flags: CovarFlags,
            ctype: DataTypes
        ): void;
        cartToPolar(
            x: Mat | MatVector,
            y: Mat | MatVector,
            magnitude: Mat | MatVector,
            angle: Mat | MatVector,
            angleInDegrees?: boolean
        ): void;
        checkRange(
            a: Mat | MatVector,
            quiet: boolean,
            pos: Point,
            minVal: number,
            maxVal: number
        ): void;
        compare(src1: Mat, src2: Mat, dst: Mat, cmpop: CmpTypes): void;
        completeSymm(m: Mat | MatVector, lowerToUpper: boolean): void;
        convertFp16(src: Mat, dst: Mat): void;
        convertScaleAbs(src: Mat, dst: Mat, alpha?: number): void;
        convertScaleAbs(src: Mat, dst: Mat, alpha: number, beta?: number): void;
        convertScaleAbs(src: Mat, dst: Mat, alpha: number, beta: number): void;
        copyMakeBorder(
            src: Mat,
            dst: Mat,
            top: number,
            bottom: number,
            left: number,
            right: number,
            borderType: BorderTypes,
            value: Scalar
        ): void;
        copyTo(src: Mat, dst: Mat, mask: Mat): void;
        countNonZero(src: Mat | MatVector): number;
        dct(src: Mat, dst: Mat, flags: DftFlags): void;
        determinant(src: Mat): number;
        dft(src: Mat, dst: Mat, flags: DftFlags, nonzeroRows: number): void;
        divide(src1: Mat, src2: Mat, dst: Mat, scale: number, dtype?: number): void;
        divide(scale: number, src2: Mat, dst: Mat, dtype?: number): void;
        eigen(src: Mat, eigenvalues: Mat, eigenvectors: Mat): void;
        eigenNonSymmetric(src: Mat, eigenvalues: Mat, eigenvectors: Mat): void;
        exp(src: Mat, dst: Mat): void;
        extractChannel(src: Mat, dst: Mat, coi: number): void;
        findNonZero(src: Mat, idx: Mat | NDArray<Point>): void;
        flip(src: Mat, dst: Mat, flipCode: number): void;
        gemm(
            src1: Mat,
            src2: Mat,
            alpha: number,
            src3: Mat,
            beta: number,
            dst: Mat,
            flags: GemmFlags
        ): void;
        getOptimalDFTSize(vecsize: number): number;
        hconcat(srcs: MatVector, dst: Mat): void;
        idft(src: Mat, dst: Mat, flags: DftFlags, nonzeroRows: number): void;
        inRange(src: Mat, lowerb: Mat | MatVector, upperb: Mat | MatVector, dst: Mat): void;
        insertChannel(src: Mat, dst: Mat, coi: number): void;
        invert(src: Mat, dst: Mat, flags: DecompTypes): void;
        log(src: Mat, dst: Mat): void;
        LUT(src: Mat, lut: Mat, dst: Mat): void;
        magnitude(x: Mat | MatVector, y: Mat | MatVector, magnitude: Mat): void;
        Mahalanobis(v1: Mat | MatVector, v2: Mat | MatVector, icovar: Mat): void;
        max(src1: Mat, src2: Mat, dst: Mat): void;
        mean(src: Mat, mask?: Mat): Scalar;
        meanStdDev(src: Mat, mean: Mat, stddev: Mat, mask?: Mat): void;
        merge(mv: Mat | MatVector, count: number, dst: Mat): void;
        merge(mv: Mat | MatVector, dst: Mat): void;
        min(src1: Mat, src2: Mat, dst: Mat): void;
        minMaxIdx(
            src: Mat,
            minVal: number,
            maxVal: number,
            minIdx: number,
            maxIdx: number,
            mask: Mat
        ): void;
        minMaxLoc(
            src: Mat,
            mask?: Mat
        ): { minVal: number; maxVal: number; minLoc: Point; maxLoc: Point };
        mixChannels(
            src: Mat,
            nsrcs: number,
            dst: Mat,
            ndsts: number,
            fromTo: number,
            npairs: number
        ): void;
        mixChannels(src: Mat, dst: Mat, fromTo: number, npairs: number): void;
        mixChannels(src: Mat | MatVector, dst: Mat | MatVector, fromTo: MatVector): void;
        mulSpectrums(a: Mat, b: Mat, c: Mat, flags: DftFlags, conjB?: boolean): void;
        multiply(src1: Mat, src2: Mat, dst: Mat, scale: number, dtype?: DataTypes): void;
        mulTransposed(
            src: Mat,
            dst: Mat,
            aTa: boolean,
            delta: Mat,
            scale: number,
            dtype?: DataTypes
        ): void;
        norm(src1: Mat, normType: NormTypes, mask?: Mat): number;
        norm(src1: Mat, src2: Mat, normType: NormTypes, mask?: Mat): number;
        norm(src: Mat, normType: NormTypes): number;
        normalize(
            src: Mat,
            dst: Mat,
            alpha: number,
            beta: number,
            normType: NormTypes,
            dtype: DataTypes,
            mask?: Mat
        ): void;
        normalize(
            src: Mat,
            dst: Mat,
            alpha: number,
            beta: number,
            normType: NormTypes,
            dtype?: DataTypes
        ): void;
        normalize(src: Mat, dst: Mat, alpha: number, normType: NormTypes): void;
        patchNaNs(a: Mat | MatVector, val: number): void;
        PCABackProject(
            data: Mat | MatVector,
            mean: Mat | MatVector,
            eigenvectors: Mat | MatVector,
            result: Mat | MatVector
        ): void;
        perspectiveTransform(src: Mat, dst: Mat, m: Mat | MatVector): void;
        phase(x: Mat | MatVector, y: Mat | MatVector, angle: Mat, angleInDegrees: boolean): void;
        polarToCart(
            magnitude: Mat | MatVector,
            angle: Mat | MatVector,
            x: Mat | MatVector,
            y: Mat | MatVector,
            angleInDegrees: boolean
        ): void;
        pow(src: Mat, power: number, dst: Mat): void;
        PSNR(src1: Mat, src2: Mat, R: number): number;
        randn(dst: Mat, mean: Mat | MatVector, stddev: Mat | MatVector): void;
        randShuffle(dst: Mat, iterFactor: number, rng: number): void;
        randu(dst: Mat, low: Mat | MatVector, high: Mat | MatVector): void;
        reduce(
            src: Mat,
            dst: Mat,
            dim: number,
            rtype: ReduceTypes,
            dtype?: number | DataTypes
        ): void;
        repeat(src: Mat, ny: number, nx: number, dst: Mat): void;
        repeat(src: Mat, ny: number, nx: number): Mat;
        scaleAdd(src1: Mat, alpha: number, src2: Mat, dst: Mat): void;
        setIdentity(mtx: Mat, s: Scalar): void;
        setRNGSeed(seed: number): void;
        solve(src1: Mat, src2: Mat, dst: Mat, flags: DecompTypes): boolean;
        solveCubic(coeffs: Mat, roots: Mat): number;
        solvePoly(src: Mat, dst: Mat, maxIters: number): number;
        sort(src: Mat, dst: Mat, flags: SortFlags): void;
        sortIdx(src: Mat, dst: Mat, flags: SortFlags): void;
        split(src: Mat | MatVector, mvbegin: Mat | MatVector): void;
        split(src: Mat | MatVector, mv: Mat | MatVector): void;
        sqrt(src: Mat, dst: Mat): void;
        subtract(src1: Mat, src2: Mat, dst: Mat, mask: Mat, dtype: number | DataTypes): void;
        subtract(src1: Mat, src2: Mat, dst: Mat, mask: Mat): void;
        subtract(src1: Mat, src2: Mat, dst: Mat): void;
        sum(src: Mat | MatVector): Scalar;
        trace(mtx: Mat): Scalar;
        transform(src: Mat, dst: Mat, m: Mat | MatVector): void;
        transpose(src: Mat, dst: Mat): void;
        vconcat(srcs: MatVector, dst: Mat): void;
        // Drawing functions
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
        clipLine(imgSize: Size, pt1: Point, pt2: Point): boolean;
        clipLine(imgRect: Rect, pt1: Point, pt2: Point): boolean;
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
        drawContours(image: Mat, contours: MatVector, contourIdx: number, color: Scalar): void;
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
        ellipse(
            img: Mat,
            box: RotatedRect,
            color: Scalar,
            thickness: number,
            lineType: LineTypes
        ): void;
        ellipse(img: Mat, box: RotatedRect, color: Scalar, thickness: number): void;
        ellipse(img: Mat, box: RotatedRect, color: Scalar): void;
        ellipse2Poly(
            center: Point,
            angle: number,
            axes: Size,
            arcStart: number,
            arcEnd: number,
            delta: number,
            pts: MatVector
        ): void;
        fillConvexPoly(
            img: Mat,
            pts: MatVector,
            color: Scalar,
            lineType: LineTypes,
            shift: number
        ): void;
        fillConvexPoly(img: Mat, pts: MatVector, color: Scalar, lineType: LineTypes): void;
        fillConvexPoly(img: Mat, pts: MatVector, color: Scalar): void;
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
        getFontScaleFromHeight(
            fontFace: HersheyFonts,
            pixelHeight: number,
            thickness: number
        ): number;
        getFontScaleFromHeight(fontFace: HersheyFonts, pixelHeight: number): number;
        getTextSize(
            text: string,
            fontFace: HersheyFonts,
            fontScale: number,
            thickness: number,
            baseLine: number
        ): Size;
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

        // Image Filtering Module
        bilateralFilter(
            src: Mat,
            dst: Mat,
            d: number,
            sigmaColor: number,
            sigmaSpace: number,
            borderType: BorderTypes
        ): void;
        blur(src: Mat, dst: Mat, ksize: Size, anchor: Point, borderType: BorderTypes): void;
        boxFilter(
            src: Mat,
            dst: Mat,
            ddepth: number | DataTypes,
            ksize: Size,
            anchor: Point,
            normalize: boolean,
            borderType: BorderTypes
        ): void;
        buildPyramid(src: Mat, dst: Mat, maxlevel: number, borderType: BorderTypes): void;
        dilate(
            src: Mat,
            dst: Mat,
            kernel: Mat,
            anchor?: Point,
            iterations?: number,
            borderType?: BorderTypes,
            borderValue?: Scalar
        ): void;
        erode(
            src: Mat,
            dst: Mat,
            kernel: Mat,
            anchor?: Point,
            iterations?: number,
            borderType?: BorderTypes,
            borderValue?: Scalar
        ): void;
        filter2D(
            src: Mat,
            dst: Mat,
            ddepth: number | DataTypes,
            kernel: Mat | MatVector,
            anchor: Point,
            delat: number,
            borderType: BorderTypes
        ): void;
        GaussianBlur(
            src: Mat,
            dst: Mat,
            ksize: number | Size,
            sigmaX: number,
            sigmaY: number,
            borderType: BorderTypes
        ): void;
        getDerivKernels(
            kx: Mat | MatVector,
            ky: Mat | MatVector,
            dx: number,
            dy: number,
            ksize: SpecialFilter | 1 | 3 | 5 | 7,
            normalize: boolean,
            ktype: DataTypes.CV_32F | DataTypes.CV_64F
        ): void;
        getGaborKernel(
            ksize: Size,
            sigma: number,
            theta: number,
            lambd: number,
            gamma: number,
            psi: number,
            ktype: DataTypes.CV_32F | DataTypes.CV_64F
        ): Mat;
        getGaussianKernel(
            ksize: number,
            sigma: number,
            ktype: DataTypes.CV_32F | DataTypes.CV_64F
        ): Mat;
        getStructuringElement(shape: MorphShapes, ksize: Size, anchor: Point): Mat;
        Laplacian(
            src: Mat,
            dst: Mat,
            ddepth: number | DataTypes,
            ksize: number,
            scale: number,
            delta: number,
            borderType: BorderTypes
        ): void;
        medianBlur(src: Mat, dst: Mat, ksize: number): void;
        morphologyDefaultBorderValue(): Scalar;
        morphologyEx(
            src: Mat,
            dst: Mat,
            op: MorphTypes,
            kernel: Mat,
            anchor: Point,
            iterations: number,
            borderType: BorderTypes,
            borderValue: Scalar
        ): void;
        pyrDown(src: Mat, dst: Mat, dstsize: Size, borderType: BorderTypes): void;
        pyrMeanShiftFiltering(
            src: Mat,
            dst: Mat,
            sp: number,
            sr: number,
            maxLevel: number,
            termcrit: TermCriteria
        ): void;
        pyrUp(src: Mat, dst: Mat, dstsize: Size, borderType: BorderTypes): void;
        Scharr(
            src: Mat,
            dst: Mat,
            ddepth: number | DataTypes,
            dx: number,
            dy: number,
            scale: number,
            delta: number,
            borderType: BorderTypes
        ): void;
        sepFilter2D(
            src: Mat,
            dst: Mat,
            ddepth: number | DataTypes,
            kernelX: Mat | MatVector,
            kernelY: Mat | MatVector,
            anchor: Point,
            delta: number,
            borderType: BorderTypes
        ): void;
        Sobel(
            src: Mat,
            dst: Mat,
            ddepth: number | DataTypes,
            dx: number,
            dy: number,
            ksize: number,
            scale: number,
            delta: number,
            borderType: BorderTypes
        ): void;
        spatialGradient(
            src: Mat,
            dx: Mat | MatVector,
            dy: Mat | MatVector,
            ksize: number,
            borderType: BorderTypes
        ): void;
        sqrBoxFilter(
            src: Mat,
            dst: Mat,
            ddepth: number | DataTypes,
            ksize: Size,
            anchor: Point,
            normalize: boolean,
            borderType: BorderTypes
        ): void;
        cvtColor(src: Mat, dst: Mat, code: ColorConversionCodes, dstCn?: number): void;
        cvtColorTwoPlane(
            src1: Mat,
            src2: Mat,
            dst: Mat,
            code:
                | ColorConversionCodes.COLOR_YUV2RGB_NV12
                | ColorConversionCodes.COLOR_YUV2BGR_NV12
                | ColorConversionCodes.COLOR_YUV2RGB_NV21
                | ColorConversionCodes.COLOR_YUV2BGR_NV21
                | ColorConversionCodes.COLOR_YUV2RGBA_NV12
                | ColorConversionCodes.COLOR_YUV2BGRA_NV12
                | ColorConversionCodes.COLOR_YUV2RGBA_NV21
                | ColorConversionCodes.COLOR_YUV2BGRA_NV21
        ): void;
        demosaicing(
            src: Mat,
            dst: Mat,
            code:
                | ColorConversionCodes.COLOR_BayerBG2BGR
                | ColorConversionCodes.COLOR_BayerGB2BGR
                | ColorConversionCodes.COLOR_BayerRG2BGR
                | ColorConversionCodes.COLOR_BayerGR2BGR
                | ColorConversionCodes.COLOR_BayerBG2GRAY
                | ColorConversionCodes.COLOR_BayerGB2GRAY
                | ColorConversionCodes.COLOR_BayerRG2GRAY
                | ColorConversionCodes.COLOR_BayerGR2GRAY
                | ColorConversionCodes.COLOR_BayerBG2BGR_VNG
                | ColorConversionCodes.COLOR_BayerGB2BGR_VNG
                | ColorConversionCodes.COLOR_BayerRG2BGR_VNG
                | ColorConversionCodes.COLOR_BayerGR2BGR_VNG
                | ColorConversionCodes.COLOR_BayerBG2BGR_EA
                | ColorConversionCodes.COLOR_BayerGB2BGR_EA
                | ColorConversionCodes.COLOR_BayerRG2BGR_EA
                | ColorConversionCodes.COLOR_BayerGR2BGR_EA
                | ColorConversionCodes.COLOR_BayerBG2BGRA
                | ColorConversionCodes.COLOR_BayerGB2BGRA
                | ColorConversionCodes.COLOR_BayerRG2BGRA
                | ColorConversionCodes.COLOR_BayerGR2BGRA,
            dstCn?: number
        ): void;

        // Geometric ImageT ransformations
        convertMaps(
            map1: Mat,
            map2: Mat,
            dstmap1: Mat,
            dstmap2: Mat,
            dstmap1type: number | DataTypes,
            nninterpolation: boolean
        ): void;
        getAffineTransform(src: Point, dst: Point): Mat;
        getAffineTransform(src: Mat, dst: Mat): Mat;
        getPerspectiveTransform(src: Mat, dst: Mat, solveMethod?: number | DecompTypes): Mat;
        getRectSubPix(
            image: Mat,
            patchSize: Size,
            center: Point,
            patch: Mat,
            patchType?: number | DataTypes
        ): void;
        getRotationMatrix2D(center: Point, angle: number, scale: number): Mat;
        invertAffineTransform(M: Mat, iM: Mat): void;
        linearPolar(
            src: Mat,
            dst: Mat,
            center: Point,
            maxRadius: number,
            flags: WarpPolarMode
        ): void;
        logPolar(src: Mat, dst: Mat, center: Point, M: number, flags: WarpPolarMode): void;
        remap(
            src: Mat,
            dst: Mat,
            map1: Mat,
            map2: Mat,
            interpolation: number,
            borderMode: number,
            borderValue: Scalar
        ): void;
        remap(
            src: Mat,
            dst: Mat,
            map1: Mat,
            map2: Mat,
            interpolation: number,
            borderMode: number
        ): void;
        remap(src: Mat, dst: Mat, map1: Mat, map2: Mat, interpolation: number): void;
        resize(
            src: Mat,
            dst: Mat,
            dsize: Size,
            fx: number,
            fy: number,
            interpolation: number
        ): void;
        resize(src: Mat, dst: Mat, dsize: Size, fx: number, fy: number): void;
        resize(src: Mat, dst: Mat, dsize: Size): void;
        warpAffine(
            src: Mat,
            dst: Mat,
            M: Mat,
            dsize: Size,
            flags: InterpolationFlags,
            borderMode: BorderTypes,
            borderValue: Scalar
        ): void;
        warpAffine(
            src: Mat,
            dst: Mat,
            M: Mat,
            dsize: Size,
            flags: InterpolationFlags,
            borderMode: BorderTypes
        ): void;
        warpAffine(src: Mat, dst: Mat, M: Mat, dsize: Size, flags: InterpolationFlags): void;
        warpAffine(src: Mat, dst: Mat, M: Mat, dsize: Size): void;
        warpPerspective(
            src: Mat,
            dst: Mat,
            M: Mat,
            dsize: Size,
            flags: InterpolationFlags,
            borderMode: BorderTypes,
            borderValue: Scalar
        ): void;
        warpPerspective(
            src: Mat,
            dst: Mat,
            M: Mat,
            dsize: Size,
            flags: InterpolationFlags,
            borderMode: BorderTypes
        ): void;
        warpPerspective(src: Mat, dst: Mat, M: Mat, dsize: Size, flags: InterpolationFlags): void;
        warpPerspective(src: Mat, dst: Mat, M: Mat, dsize: Size): void;
        warpPolar(
            src: Mat,
            dst: Mat,
            dsize: Size,
            center: Point,
            maxRadius: number,
            flags: number
        ): void;

        // Drawing functions

        // Distance Types
        approxPolyDP(
            curve: Mat | MatVector,
            approxCurve: Mat,
            epsilon: number,
            bool: boolean
        ): void;
        arcLength(curve: Mat | MatVector, closed: boolean): number;
        boundingRect(array: Mat | MatVector): Rect;
        connectedComponents(image: Mat, labels: Mat): number;
        connectedComponentsWithStats(image: Mat, labels: Mat, stats: Mat, centroids: Mat): number;
        contourArea(contour: Mat | MatVector, oriented?: boolean): number;
        convexHull(points: Mat, hull: Mat): void;
        convexityDefects(contour: Mat, convexHull: Mat, convexityDefects: Mat): void;
        findContours(
            image: Mat | MatVector,
            contours: MatVector,
            hierarchy: Mat | MatVector,
            mode: RetrievalModes,
            method: ContourApproximationModes
        ): void;
        fitEllipse(points: Mat): void;
        fitLine(
            points: Mat,
            line: Mat,
            disType: DistanceTypes,
            param: number,
            reps: number,
            aeps: number
        ): void;
        isContourConvex(contour: Mat): boolean;
        matchShapes(
            contour1: Mat,
            contour2: Mat,
            method: ShapeMatchModes,
            parameter: number
        ): number;
        minAreaRect(points: Mat): RotatedRect;
        minEnclosingCircle(points: Mat): void;
        moments(array: Mat): Moments;
        pointPolygonTest(contour: Mat, pt: Point, measureDist: boolean): number;
        CCL_DEFAULT: ConnectedComponentsAlgorithmsTypes.CCL_DEFAULT;
        CCL_WU: ConnectedComponentsAlgorithmsTypes.CCL_WU;
        CCL_GRANA: ConnectedComponentsAlgorithmsTypes.CCL_GRANA;
        CCL_BOLELLI: ConnectedComponentsAlgorithmsTypes.CCL_BOLELLI;
        CCL_SAUF: ConnectedComponentsAlgorithmsTypes.CCL_SAUF;
        CCL_BBDT: ConnectedComponentsAlgorithmsTypes.CCL_BBDT;
        CCL_SPAGHETTI: ConnectedComponentsAlgorithmsTypes.CCL_SPAGHETTI;
        CC_STAT_LEFT: ConnectedComponentsTypes.CC_STAT_LEFT;
        CC_STAT_TOP: ConnectedComponentsTypes.CC_STAT_TOP;
        CC_STAT_WIDTH: ConnectedComponentsTypes.CC_STAT_WIDTH;
        CC_STAT_HEIGHT: ConnectedComponentsTypes.CC_STAT_HEIGHT;
        CC_STAT_AREA: ConnectedComponentsTypes.CC_STAT_AREA;
        CHAIN_APPROX_NONE: ContourApproximationModes.CHAIN_APPROX_NONE;
        CHAIN_APPROX_SIMPLE: ContourApproximationModes.CHAIN_APPROX_SIMPLE;
        CHAIN_APPROX_TC89_L1: ContourApproximationModes.CHAIN_APPROX_TC89_L1;
        CHAIN_APPROX_TC89_KCOS: ContourApproximationModes.CHAIN_APPROX_TC89_KCOS;
        INTERSECT_NONE: RectanglesIntersectTypes.INTERSECT_NONE;
        INTERSECT_PARTIAL: RectanglesIntersectTypes.INTERSECT_PARTIAL;
        INTERSECT_FULL: RectanglesIntersectTypes.INTERSECT_FULL;
        RETR_EXTERNAL: RetrievalModes.RETR_EXTERNAL;
        RETR_LIST: RetrievalModes.RETR_LIST;
        RETR_CCOMP: RetrievalModes.RETR_CCOMP;
        RETR_TREE: RetrievalModes.RETR_TREE;
        RETR_FLOODFILL: RetrievalModes.RETR_FLOODFILL;
        CONTOURS_MATCH_I1: ShapeMatchModes.CONTOURS_MATCH_I1;
        CONTOURS_MATCH_I2: ShapeMatchModes.CONTOURS_MATCH_I2;
        CONTOURS_MATCH_I3: ShapeMatchModes.CONTOURS_MATCH_I3;

        // Miscellaneous Image Transformations
        adaptiveThreshold(
            src: Mat,
            dst: Mat,
            maxValue: number,
            adaptiveMethod: AdaptiveThresholdTypes,
            thresholdType: ThresholdTypes.THRESH_BINARY | ThresholdTypes.THRESH_BINARY_INV,
            blockSize: number,
            C: number
        ): void;
        distanceTransform(
            src: Mat,
            dst: Mat,
            distanceType: DistanceTypes,
            maskSize: DistanceTransformMasks
        ): void;
        floodFill(image: Mat, seedPoint: Point, newVal: Scalar, rect: Rect): void;
        integral(src: Mat, sum: Mat): void;
        threshold(src: Mat, dst: Mat, thresh: number, maxval: number, type: ThresholdTypes): void;
        ADAPTIVE_THRESH_MEAN_C: AdaptiveThresholdTypes.ADAPTIVE_THRESH_MEAN_C;
        ADAPTIVE_THRESH_GAUSSIAN_C: AdaptiveThresholdTypes.ADAPTIVE_THRESH_GAUSSIAN_C;
        DIST_LABEL_CCOMP: DistanceTransformLabelTypes.DIST_LABEL_CCOMP;
        DIST_LABEL_PIXEL: DistanceTransformLabelTypes.DIST_LABEL_PIXEL;
        DIST_MASK_3: DistanceTransformMasks.DIST_MASK_3;
        DIST_MASK_5: DistanceTransformMasks.DIST_MASK_5;
        DIST_MASK_PRECISE: DistanceTransformMasks.DIST_MASK_PRECISE;
        FLOODFILL_FIXED_RANGE: FloodFillFlags.FLOODFILL_FIXED_RANGE;
        FLOODFILL_MASK_ONLY: FloodFillFlags.FLOODFILL_MASK_ONLY;
        GC_BGD: GrabCutClasses.GC_BGD;
        GC_FGD: GrabCutClasses.GC_FGD;
        GC_PR_BGD: GrabCutClasses.GC_PR_BGD;
        GC_PR_FGD: GrabCutClasses.GC_PR_FGD;
        GC_INIT_WITH_RECT: GrabCutModes.GC_INIT_WITH_RECT;
        GC_INIT_WITH_MASK: GrabCutModes.GC_INIT_WITH_MASK;
        GC_EVAL: GrabCutModes.GC_EVAL;
        GC_EVAL_FREEZE_MODEL: GrabCutModes.GC_EVAL_FREEZE_MODEL;
        THRESH_BINARY: ThresholdTypes.THRESH_BINARY;
        THRESH_BINARY_INV: ThresholdTypes.THRESH_BINARY_INV;
        THRESH_TRUNC: ThresholdTypes.THRESH_TRUNC;
        THRESH_TOZERO: ThresholdTypes.THRESH_TOZERO;
        THRESH_TOZERO_INV: ThresholdTypes.THRESH_TOZERO_INV;
        THRESH_MASK: ThresholdTypes.THRESH_MASK;
        THRESH_OTSU: ThresholdTypes.THRESH_OTSU;
        THRESH_TRIANGLE: ThresholdTypes.THRESH_TRIANGLE;

        // Feature detection
        Canny(image: Mat, edges: Mat, threshold1: number, threshold2: number): void;
        Canny1(dx: Mat, dy: Mat, edges: Mat, threshold1: number, threshold2: number): void;
        cornerHarris(src: Mat, dst: Mat, blockSize: number, ksize: number, k: number): void;
        cornerMinEigenVal(src: Mat, dst: Mat, blockSize: number): void;
        goodFeaturesToTrack(
            image: Mat,
            corners: Mat,
            maxCorners: number,
            qualityLevel: number,
            minDistance: number
        ): void;
        goodFeaturesToTrack1(
            image: Mat,
            corners: Mat,
            maxCorners: number,
            qualityLevel: number,
            minDistance: number,
            mask: Mat,
            blockSize: number,
            gradientSize?: number | 3
        ): void;
        HoughCircles(
            image: Mat,
            circles: Mat,
            method: HoughModes,
            dp: number,
            minDist: number,
            param1?: number,
            param2?: number
        ): void;
        HoughLines(image: Mat, lines: Mat, rho: number, theta: number, threshold: number): void;
        HoughLinesP(image: Mat, lines: Mat, rho: number, theta: number, threshold: number): void;
        LSD_REFINE_NONE: LineSegmentDetectorModes.LSD_REFINE_NONE;
        LSD_REFINE_STD: LineSegmentDetectorModes.LSD_REFINE_STD;
        LSD_REFINE_ADV: LineSegmentDetectorModes.LSD_REFINE_ADV;
        HOUGH_STANDARD: HoughModes.HOUGH_STANDARD;
        HOUGH_PROBABILISTIC: HoughModes.HOUGH_PROBABILISTIC;
        HOUGH_MULTI_SCALE: HoughModes.HOUGH_MULTI_SCALE;
        HOUGH_GRADIENT: HoughModes.HOUGH_GRADIENT;
        HOUGH_GRADIENT_ALT: HoughModes.HOUGH_GRADIENT_ALT;

        // Object Detection
        matchTemplate(
            image: Mat,
            templ: Mat,
            result: Mat,
            method: TemplateMatchModes,
            mask?: Mat
        ): void;
        groupRectangles(rectList: NDArray<Rect>, weights: MatVector, groupThreshold: number): void;
        TM_SQDIFF: TemplateMatchModes.TM_SQDIFF;
        TM_SQDIFF_NORMED: TemplateMatchModes.TM_SQDIFF_NORMED;
        TM_CCORR: TemplateMatchModes.TM_CCORR;
        TM_CCORR_NORMED: TemplateMatchModes.TM_CCORR_NORMED;
        TM_CCOEFF: TemplateMatchModes.TM_CCOEFF;
        TM_CCOEFF_NORMED: TemplateMatchModes.TM_CCOEFF_NORMED;

        // Image segmentation
        grabCut(
            img: Mat,
            mask: Mat,
            rect: Rect,
            bgdModel: Mat,
            fgdModel: Mat,
            iterCount: number,
            mode: GrabCutModes
        ): void;
        watershed(image: Mat, markers: Mat): void;

        // Optical flow
        calcOpticalFlowFarneback(
            prev: Mat,
            next: Mat,
            flow: Mat,
            pyr_scale: number,
            levels: number,
            winsize: number,
            iterations: number,
            poly_n: number,
            poly_sigma: number,
            flags: number
        ): void;
        calcOpticalFlowPyrLK(
            prevImg: Mat,
            nextImg: Mat,
            prevPts: Mat,
            nextPts: Mat,
            status: Mat,
            err: Mat,
            winSize: Size,
            maxLevel: number,
            criteria: TermCriteria
        ): void;
        CamShift(probImage: Mat, window: Rect, criteria: TermCriteria): [RotatedRect, Rect];
        findTransformECC(
            templateImage: Mat,
            inputImage: Mat,
            warpMatrix: Mat,
            motionType: number,
            criteria: TermCriteria,
            inputMask: Mat,
            gaussFiltSize: number
        ): void;
        MOTION_TRANSLATION: Motion.MOTION_TRANSLATION;
        MOTION_EUCLIDEAN: Motion.MOTION_EUCLIDEAN;
        MOTION_AFFINE: Motion.MOTION_AFFINE;
        MOTION_HOMOGRAPHY: Motion.MOTION_HOMOGRAPHY;
        OPTFLOW_USE_INITIAL_FLOW: Optflow.OPTFLOW_USE_INITIAL_FLOW;
        OPTFLOW_LK_GET_MIN_EIGENVALS: Optflow.OPTFLOW_LK_GET_MIN_EIGENVALS;
        OPTFLOW_FARNEBACK_GAUSSIAN: Optflow.OPTFLOW_FARNEBACK_GAUSSIAN;
        rotatedRectPoints(points: RotatedRect): Point[];
        exceptionFromPtr(pointer: number): { code: number, msg: string };
    }
}

declare const cv: opencv.cv;
export default cv;
export {
    Mat,
    Size,
    Point,
    Range,
    Scalar,
    Rect,
    Vertex,
    QuadEdge,
    Subdiv2D,
    BackgroundSubtractor,
    BackgroundSubtractorMOG2,
    TermCriteria,
    MatVector,
    RotatedRect,
    BorderTypes,
};
