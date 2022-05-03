import { Mat } from '../../core/src/Mat';
import { Point } from '../../core/src/Point';
import { Rect } from '../../core/src/Rect';
import { Scalar } from '../../core/src/Scalar';

type ADAPTIVE_THRESH_MEAN_C = 0;
type ADAPTIVE_THRESH_GAUSSIAN_C = 1;

export type AdaptiveThresholdTypes = ADAPTIVE_THRESH_MEAN_C | ADAPTIVE_THRESH_GAUSSIAN_C;

export interface IAdaptiveThresholdTypes {
    ADAPTIVE_THRESH_MEAN_C: ADAPTIVE_THRESH_MEAN_C;
    ADAPTIVE_THRESH_GAUSSIAN_C: ADAPTIVE_THRESH_GAUSSIAN_C;
}

type DIST_LABEL_CCOMP = 0;
type DIST_LABEL_PIXEL = 1;

export type DistanceTransformLabelTypes = DIST_LABEL_CCOMP | DIST_LABEL_PIXEL;

export interface IDistanceTransformLabelTypes {
    DIST_LABEL_CCOMP: DIST_LABEL_CCOMP;
    DIST_LABEL_PIXEL: DIST_LABEL_PIXEL;
}

type DIST_MASK_3 = 3;
type DIST_MASK_5 = 5;
type DIST_MASK_PRECISE = 0;

export type DistanceTransformMasks = DIST_MASK_3 | DIST_MASK_5 | DIST_MASK_PRECISE;

export interface IDistanceTransformMasks {
    DIST_MASK_3: DIST_MASK_3;
    DIST_MASK_5: DIST_MASK_5;
    DIST_MASK_PRECISE: DIST_MASK_PRECISE;
}

type DIST_USER = -1;
type DIST_L1 = 1;
type DIST_L2 = 2;
type DIST_C = 3;
type DIST_L12 = 4;
type DIST_FAIR = 5;
type DIST_WELSCH = 6;
type DIST_HUBER = 7;

export type DistanceTypes =
    | DIST_USER
    | DIST_L1
    | DIST_L2
    | DIST_C
    | DIST_L12
    | DIST_FAIR
    | DIST_WELSCH
    | DIST_HUBER;

export interface IDistanceTypes {
    DIST_USER: DIST_USER;
    DIST_L1: DIST_L1;
    DIST_L2: DIST_L2;
    DIST_C: DIST_C;
    DIST_L12: DIST_L12;
    DIST_FAIR: DIST_FAIR;
    DIST_WELSCH: DIST_WELSCH;
    DIST_HUBER: DIST_HUBER;
}

type FLOODFILL_FIXED_RANGE = 65536;
type FLOODFILL_MASK_ONLY = 131072;

export type FloodFillFlags = FLOODFILL_FIXED_RANGE | FLOODFILL_MASK_ONLY;

export interface IFloodFillFlags {
    FLOODFILL_FIXED_RANGE: FLOODFILL_FIXED_RANGE;
    FLOODFILL_MASK_ONLY: FLOODFILL_MASK_ONLY;
}

type GC_BGD = 0;
type GC_FGD = 1;
type GC_PR_BGD = 2;
type GC_PR_FGD = 3;

export type GrabCutClasses = GC_BGD | GC_FGD | GC_PR_BGD | GC_PR_FGD;

export interface IGrabCutClasses {
    GC_BGD: GC_BGD;
    GC_FGD: GC_FGD;
    GC_PR_BGD: GC_PR_BGD;
    GC_PR_FGD: GC_PR_FGD;
}

type GC_INIT_WITH_RECT = 0;
type GC_INIT_WITH_MASK = 1;
type GC_EVAL = 2;
type GC_EVAL_FREEZE_MODEL = 3;

export type GrabCutModes = GC_INIT_WITH_RECT | GC_INIT_WITH_MASK | GC_EVAL | GC_EVAL_FREEZE_MODEL;

export interface IGrabCutModes {
    GC_INIT_WITH_RECT: GC_INIT_WITH_RECT;
    GC_INIT_WITH_MASK: GC_INIT_WITH_MASK;
    GC_EVAL: GC_EVAL;
    GC_EVAL_FREEZE_MODEL: GC_EVAL_FREEZE_MODEL;
}

type THRESH_BINARY = 0;
type THRESH_BINARY_INV = 1;
type THRESH_TRUNC = 2;
type THRESH_TOZERO = 3;
type THRESH_TOZERO_INV = 4;
type THRESH_MASK = 7;
type THRESH_OTSU = 8;
type THRESH_TRIANGLE = 16;

export type ThresholdTypes =
    | THRESH_BINARY
    | THRESH_BINARY_INV
    | THRESH_TRUNC
    | THRESH_TOZERO
    | THRESH_TOZERO_INV
    | THRESH_MASK
    | THRESH_OTSU
    | THRESH_TRIANGLE;

export interface IThresholdTypes {
    THRESH_BINARY: THRESH_BINARY;
    THRESH_BINARY_INV: THRESH_BINARY_INV;
    THRESH_TRUNC: THRESH_TRUNC;
    THRESH_TOZERO: THRESH_TOZERO;
    THRESH_TOZERO_INV: THRESH_TOZERO_INV;
    THRESH_MASK: THRESH_MASK;
    THRESH_OTSU: THRESH_OTSU;
    THRESH_TRIANGLE: THRESH_TRIANGLE;
}

export interface Misc {
    /**
     * Applies an adaptive threshold to an array
     * @param src Source 8-bit single-channel image.
     * @param dst Destination image of the same size and the same type as src
     * @param maxValue Non-zero value assigned to the pixels for which the condition is satisfied
     * @param adaptiveMethod Adaptive thresholding algorithm to use, @see Adaptive The BORDER_REPLICATE | BORDER_ISOLATED is used to process boundaries
     * @param thresholdType Thresholding type that must be either THRESH_BINARY or THRESH_BINARY_INV, @see
     * @param blockSize Size of a pixel neighborhood that is used to calculate a threshold value for the pixel: 3, 5, 7, and so on.
     * @param C Constant subtracted from the mean or weighted mean (@see the details below). Normally, it is positive but may be zero or negative as well)
     */
    adaptiveThreshold(
        src: Mat,
        dst: Mat,
        maxValue: number,
        adaptiveMethod: AdaptiveThresholdTypes,
        thresholdType: THRESH_BINARY | THRESH_BINARY_INV,
        blockSize: number,
        C: number
    ): void;
    /**
     * Calculates the distance to the closest zero pixel for each pixel of the source image
     * @param src 	8-bit, single-channel (binary) source image
     * @param dst Output image with calculated distances. It is a 8-bit or 32-bit floating-point, single-channel image of the same size as src
     * @param distanceType Type of distance, @see DistanceTypes
     * @param maskSize Size of the distance transform mask, @see DistanceTransformMasks. In case of the DIST_L1 or DIST_C distance type, the parameter is forced to 3 because a 3×3 mask gives the same result as 5×5 or any larger aperture.
     */
    distanceTransform(
        src: Mat,
        dst: Mat,
        distanceType: DistanceTypes,
        maskSize: DistanceTransformMasks
    ): void;
    /**
     * Fills a connected component with the given color
     * @param image Input/output 1- or 3-channel, 8-bit, or floating-point image. It is modified by the function unless the FLOODFILL_MASK_ONLY flag is set in the second variant of the function. See the details below
     * @param seedPoint Starting point
     * @param newVal New value of the repainted domain pixels
     * @param rect Optional output parameter set by the function to the minimum bounding rectangle of the repainted domain
     */
    floodFill(image: Mat, seedPoint: Point, newVal: Scalar, rect: Rect): void;
    /**
     * Calculates the integral of an image
     * @param src input image as W×H, 8-bit or floating-point (32f or 64f).
     * @param sum integral image as (W+1)×(H+1) , 32-bit integer or floating-point (32f or 64f).
     */
    integral(src: Mat, sum: Mat): void;
    /**
     * Applies a fixed-level threshold to each array element
     * @param src input array (multiple-channel, 8-bit or 32-bit floating point).
     * @param dst output array of the same size and type and the same number of channels as src.
     * @param thresh threshold value
     * @param maxval maximum value to use with the THRESH_BINARY and THRESH_BINARY_INV thresholding types
     * @param type thresholding type (@see ThresholdTypes).
     */
    threshold(src: Mat, dst: Mat, thresh: number, maxval: number, type: number): void;
}
