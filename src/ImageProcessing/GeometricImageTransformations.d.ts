import { BorderTypes, DecompTypes } from '../core/CoreArray';
import { DataTypes } from '../core/HalInterface';
import { Mat } from '../core/Mat';
import { Point } from '../core/Point';
import { Scalar, Size } from '../opencv';

declare module GeometricImageTransformations {
    enum InterpolationFlags {
        INTER_NEAREST = 0,
        INTER_LINEAR = 1,
        INTER_CUBIC = 2,
        INTER_AREA = 3,
        INTER_LANCZOS4 = 4,
        INTER_LINEAR_EXACT = 5,
        INTER_NEAREST_EXACT = 6,
        INTER_MAX = 7,
        WARP_FILL_OUTLIERS = 8,
        WARP_INVERSE_MAP = 16,
    }

    interface _InterpolationFlags {
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
    }

    enum InterpolationMasks {
        INTER_BITS = 5,
        INTER_BITS2 = 10,
        INTER_TAB_SIZE = 32,
        INTER_TAB_SIZE2 = 1024,
    }

    interface _InterpolationMasks {
        INTER_BITS: InterpolationMasks.INTER_BITS;
        INTER_BITS2: InterpolationMasks.INTER_BITS2;
        INTER_TAB_SIZE: InterpolationMasks.INTER_TAB_SIZE;
        INTER_TAB_SIZE2: InterpolationMasks.INTER_TAB_SIZE2;
    }

    enum WarpPolarMode {
        WARP_POLAR_LINEAR = 0,
        WARP_POLAR_LOG = 256,
    }

    interface _WarpPolarMode {
        WARP_POLAR_LINEAR: WarpPolarMode.WARP_POLAR_LINEAR;
        WARP_POLAR_LOG: WarpPolarMode.WARP_POLAR_LOG;
    }

    interface GeometricImageTransformations {
        /**
         * Converts image transformation maps from one representation to another
         * @param map1 The first input map of type CV_16SC2, CV_32FC1, or CV_32FC2 .
         * @param map2 The second input map of type CV_16UC1, CV_32FC1, or none (empty matrix), respectively.
         * @param dstmap1 The first output map that has the type dstmap1type and the same size as src .
         * @param dstmap2 The second output map
         * @param dstmap1type Type of the first output map that should be CV_16SC2, CV_32FC1, or CV_32FC2 .
         * @param nninterpolation Flag indicating whether the fixed-point maps are used for the nearest-neighbor or for a more complex interpolation
         */
        convertMaps(
            map1: Mat,
            map2: Mat,
            dstmap1: Mat,
            dstmap2: Mat,
            dstmap1type: number | DataTypes,
            nninterpolation: boolean
        ): void;
        /**
         * Calculates an affine transform from three pairs of the corresponding points
         * @param src Coordinates of triangle vertices in the source image
         * @param dst Coordinates of the corresponding triangle vertices in the destination image
         */
        getAffineTransform(src: Point, dst: Point): Mat;
        /**
         * @todo update documentation when added to source
         * @param src
         * @param dst
         */
        getAffineTransform(src: Mat, dst: Mat): Mat;
        /**
         * Calculates a perspective transform from four pairs of the corresponding points
         * @param src Coordinates of quadrangle vertices in the source image
         * @param dst Coordinates of the corresponding quadrangle vertices in the destination image
         * @param solveMethod method passed to cv::solve (DecompTypes)
         */
        getPerspectiveTransform(src: Mat, dst: Mat, solveMethod?: number | DecompTypes): Mat;
        /**
         * Retrieves a pixel rectangle from an image with sub-pixel accuracy.
         * @param image Source image
         * @param patchSize Size of the extracted patch
         * @param center Floating point coordinates of the center of the extracted rectangle within the source image. The center must be inside the image
         * @param patch Extracted patch that has the size patchSize and the same number of channels as src
         * @param patchType Depth of the extracted pixels. By default, they have the same depth as src
         */
        getRectSubPix(
            image: Mat,
            patchSize: Size,
            center: Point,
            patch: Mat,
            patchType?: number | DataTypes
        ): void;
        /**
         * Calculates an affine matrix of 2D rotation
         * @param center Center of the rotation in the source image
         * @param angle Rotation angle in degrees. Positive values mean counter-clockwise rotation (the coordinate origin is assumed to be the top-left corner).
         * @param scale Isotropic scale factor.
         */
        getRotationMatrix2D(center: Point, angle: number, scale: number): Mat;
        /**
         * Inverts an affine transformation
         * @param M Original affine transformation
         * @param iM Output reverse affine transformation
         */
        invertAffineTransform(M: Mat, iM: Mat): void;
        /**
         * Remaps an image to polar coordinates space
         * @param src
         * @param dst
         * @param center
         * @param maxRadius
         * @param flags
         */
        linearPolar(
            src: Mat,
            dst: Mat,
            center: Point,
            maxRadius: number,
            flags: WarpPolarMode
        ): void;
        /**
         * Remaps an image to semilog-polar coordinates space
         * @param src
         * @param dst
         * @param center
         * @param M
         * @param flags
         */
        logPolar(src: Mat, dst: Mat, center: Point, M: number, flags: WarpPolarMode): void;
        /**
         * Applies a generic geometrical transformation to an image
         * @param src Source image
         * @param dst Destination image. It has the same size as map1 and the same type as src .
         * @param map1 The first map of either (x,y) points or just x values having the type CV_16SC2 , CV_32FC1, or CV_32FC2. See convertMaps for details on converting a floating point representation to fixed-point for speed
         * @param map2 The second map of y values having the type CV_16UC1, CV_32FC1, or none (empty map if map1 is (x,y) points), respectively
         * @param interpolation Interpolation method (see InterpolationFlags). The methods INTER_AREA and INTER_LINEAR_EXACT are not supported by this function
         * @param borderMode Pixel extrapolation method (see BorderTypes). When borderMode=BORDER_TRANSPARENT, it means that the pixels in the destination image that corresponds to the "outliers" in the source image are not modified by the function
         * @param borderValue Value used in case of a constant border. By default, it is 0.
         */
        remap(
            src: Mat,
            dst: Mat,
            map1: Mat,
            map2: Mat,
            interpolation: number | InterpolationFlags,
            borderMode: number | BorderTypes,
            borderValue: Scalar
        ): void;
        remap(
            src: Mat,
            dst: Mat,
            map1: Mat,
            map2: Mat,
            interpolation: number | InterpolationFlags,
            borderMode: number | BorderTypes
        ): void;
        remap(
            src: Mat,
            dst: Mat,
            map1: Mat,
            map2: Mat,
            interpolation: number | InterpolationFlags
        ): void;
        /**
         * Resizes an image
         * @param src Source image
         * @param dst output image; it has the size dsize (when it is non-zero) or the size computed from src.size(), fx, and fy; the type of dst is the same as of src.
         * @param dsize output image size
         * @param fx scale factor along the horizontal axis
         * @param fy scale factor along the vertical axis
         * @param interpolation interpolation method, see InterpolationFlags
         * @example
         * let src = cv.imread('canvasInput');
         * let dst = new cv.Mat();
         * let dsize = new cv.Size(300, 300);
         * // You can try more different parameters
         * cv.resize(src, dst, dsize, 0, 0, cv.INTER_AREA);
         * cv.imshow('canvasOutput', dst);
         * src.delete(); dst.delete();
         */
        resize(
            src: Mat,
            dst: Mat,
            dsize: Size,
            fx: number,
            fy: number,
            interpolation: number | InterpolationFlags
        ): void;
        resize(src: Mat, dst: Mat, dsize: Size, fx: number, fy: number): void;
        resize(src: Mat, dst: Mat, dsize: Size): void;
        /**
         * Applies an affine transformation to an image.
         * @param src input image
         * @param dst output image that has the size dsize and the same type as src
         * @param M 2×3 transformation matrix.
         * @param dsize size of the output image
         * @param flags combination of interpolation methods (see InterpolationFlags) and the optional flag WARP_INVERSE_MAP that means that M is the inverse transformation
         * @param borderMode pixel extrapolation method (see BorderTypes); when borderMode=BORDER_TRANSPARENT, it means that the pixels in the destination image corresponding to the "outliers" in the source image are not modified by the function
         * @param borderValue value used in case of a constant border; by default, it is 0.
         */
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
        /**
         * Applies a perspective transformation to an image
         * @param src input image
         * @param dst output image that has the size dsize and the same type as src
         * @param M output image that has the size dsize and the same type as src
         * @param dsize size of the output image
         * @param flags combination of interpolation methods (INTER_LINEAR or INTER_NEAREST) and the optional flag WARP_INVERSE_MAP, that sets M as the inverse transformation ( 𝚍𝚜𝚝→𝚜𝚛𝚌 ).
         * @param borderMode pixel extrapolation method (BORDER_CONSTANT or BORDER_REPLICATE).
         * @param borderValue value used in case of a constant border; by default, it equals 0.
         */
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
        /**
         *
         * @param src Source image
         * @param dst Destination image. It will have same type as src
         * @param dsize The destination image size (see description for valid options)
         * @param center The transformation center
         * @param maxRadius The radius of the bounding circle to transform. It determines the inverse magnitude scale parameter too
         * @param flags A combination of interpolation methods, InterpolationFlags + WarpPolarMode.
         *      - Add cv.WARP_POLAR_LINEAR to select linear polar mapping (default)
         *      - Add cv.WARP_POLAR_LOG to select semilog polar mapping
         *      - Add cv.WARP_INVERSE_MAP for reverse mapping.
         */
        warpPolar(
            src: Mat,
            dst: Mat,
            dsize: Size,
            center: Point,
            maxRadius: number,
            flags: number
        ): void;
    }
}
export = GeometricImageTransformations;
