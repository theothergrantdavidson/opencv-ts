import { Mat } from '../core/Mat';
import { Point } from '../core/Point';
import { Rect } from '../core/Rect';
import { Scalar } from '../core/Scalar';

declare module Misc {
    enum AdaptiveThresholdTypes {
        ADAPTIVE_THRESH_MEAN_C = 0,
        ADAPTIVE_THRESH_GAUSSIAN_C = 1,
    }

    interface _AdaptiveThresholdTypes {
        ADAPTIVE_THRESH_MEAN_C: AdaptiveThresholdTypes.ADAPTIVE_THRESH_MEAN_C;
        ADAPTIVE_THRESH_GAUSSIAN_C: AdaptiveThresholdTypes.ADAPTIVE_THRESH_GAUSSIAN_C;
    }

    enum DistanceTransformLabelTypes {
        DIST_LABEL_CCOMP = 0,
        DIST_LABEL_PIXEL = 1,
    }

    interface _DistanceTransformLabelTypes {
        DIST_LABEL_CCOMP: DistanceTransformLabelTypes.DIST_LABEL_CCOMP;
        DIST_LABEL_PIXEL: DistanceTransformLabelTypes.DIST_LABEL_PIXEL;
    }

    enum DistanceTransformMasks {
        DIST_MASK_3 = 3,
        DIST_MASK_5 = 5,
        DIST_MASK_PRECISE = 0,
    }

    interface _DistanceTransformMasks {
        DIST_MASK_3: DistanceTransformMasks.DIST_MASK_3;
        DIST_MASK_5: DistanceTransformMasks.DIST_MASK_5;
        DIST_MASK_PRECISE: DistanceTransformMasks.DIST_MASK_PRECISE;
    }

    enum DistanceTypes {
        DIST_USER = -1,
        DIST_L1 = 1,
        DIST_L2 = 2,
        DIST_C = 3,
        DIST_L12 = 4,
        DIST_FAIR = 5,
        DIST_WELSCH = 6,
        DIST_HUBER = 7,
    }

    interface _DistanceTypes {
        DIST_USER: DistanceTypes.DIST_USER;
        DIST_L1: DistanceTypes.DIST_L1;
        DIST_L2: DistanceTypes.DIST_L2;
        DIST_C: DistanceTypes.DIST_C;
        DIST_L12: DistanceTypes.DIST_L12;
        DIST_FAIR: DistanceTypes.DIST_FAIR;
        DIST_WELSCH: DistanceTypes.DIST_WELSCH;
        DIST_HUBER: DistanceTypes.DIST_HUBER;
    }

    enum FloodFillFlags {
        FLOODFILL_FIXED_RANGE = 65536,
        FLOODFILL_MASK_ONLY = 131072,
    }

    interface _FloodFillFlags {
        FLOODFILL_FIXED_RANGE: FloodFillFlags.FLOODFILL_FIXED_RANGE;
        FLOODFILL_MASK_ONLY: FloodFillFlags.FLOODFILL_MASK_ONLY;
    }

    enum GrabCutClasses {
        GC_BGD = 0,
        GC_FGD = 1,
        GC_PR_BGD = 2,
        GC_PR_FGD = 3,
    }

    interface _GrabCutClasses {
        GC_BGD: GrabCutClasses.GC_BGD;
        GC_FGD: GrabCutClasses.GC_FGD;
        GC_PR_BGD: GrabCutClasses.GC_PR_BGD;
        GC_PR_FGD: GrabCutClasses.GC_PR_FGD;
    }

    enum GrabCutModes {
        GC_INIT_WITH_RECT = 0,
        GC_INIT_WITH_MASK = 1,
        GC_EVAL = 2,
        GC_EVAL_FREEZE_MODEL = 3,
    }

    interface _GrabCutModes {
        GC_INIT_WITH_RECT: GrabCutModes.GC_INIT_WITH_RECT;
        GC_INIT_WITH_MASK: GrabCutModes.GC_INIT_WITH_MASK;
        GC_EVAL: GrabCutModes.GC_EVAL;
        GC_EVAL_FREEZE_MODEL: GrabCutModes.GC_EVAL_FREEZE_MODEL;
    }

    enum ThresholdTypes {
        THRESH_BINARY = 0,
        THRESH_BINARY_INV = 1,
        THRESH_TRUNC = 2,
        THRESH_TOZERO = 3,
        THRESH_TOZERO_INV = 4,
        THRESH_MASK = 7,
        THRESH_OTSU = 8,
        THRESH_TRIANGLE = 16,
    }

    interface _ThresholdTypes {
        THRESH_BINARY: ThresholdTypes.THRESH_BINARY;
        THRESH_BINARY_INV: ThresholdTypes.THRESH_BINARY_INV;
        THRESH_TRUNC: ThresholdTypes.THRESH_TRUNC;
        THRESH_TOZERO: ThresholdTypes.THRESH_TOZERO;
        THRESH_TOZERO_INV: ThresholdTypes.THRESH_TOZERO_INV;
        THRESH_MASK: ThresholdTypes.THRESH_MASK;
        THRESH_OTSU: ThresholdTypes.THRESH_OTSU;
        THRESH_TRIANGLE: ThresholdTypes.THRESH_TRIANGLE;
    }

    interface Misc {
        /**
         * Applies an adaptive threshold to an array
         * @param src Source 8-bit single-channel image.
         * @param dst Destination image of the same size and the same type as src
         * @param maxValue Non-zero value assigned to the pixels for which the condition is satisfied
         * @param adaptiveMethod Adaptive thresholding algorithm to use, @see AdaptiveThresholdTypes. The BORDER_REPLICATE | BORDER_ISOLATED is used to process boundaries
         * @param thresholdType Thresholding type that must be either THRESH_BINARY or THRESH_BINARY_INV, @see ThresholdTypes.
         * @param blockSize Size of a pixel neighborhood that is used to calculate a threshold value for the pixel: 3, 5, 7, and so on.
         * @param C Constant subtracted from the mean or weighted mean (@see the details below). Normally, it is positive but may be zero or negative as well)
         */
        adaptiveThreshold(
            src: Mat,
            dst: Mat,
            maxValue: number,
            adaptiveMethod: AdaptiveThresholdTypes,
            thresholdType: ThresholdTypes.THRESH_BINARY | ThresholdTypes.THRESH_BINARY_INV,
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
        integral(src: Mat,sum: Mat): void;
        /**
         * Applies a fixed-level threshold to each array element
         * @param src input array (multiple-channel, 8-bit or 32-bit floating point).
         * @param dst output array of the same size and type and the same number of channels as src.
         * @param thresh threshold value
         * @param maxval maximum value to use with the THRESH_BINARY and THRESH_BINARY_INV thresholding types
         * @param type thresholding type (@see ThresholdTypes).
         */
        threshold(src: Mat,dst: Mat,thresh: number,maxval: number,type: number): void;
    }
}
export = Misc;
