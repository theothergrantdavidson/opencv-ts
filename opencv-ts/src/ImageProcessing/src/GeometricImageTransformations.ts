import { BorderTypes, DecompTypes } from "../../core/src/CoreArray";
import { DataTypes } from "../../core/src/HalInterface";
import { Mat } from "../../core/src/Mat";
import { Point } from "../../core/src/Point";
import { Scalar } from "../../core/src/Scalar";
import { Size } from "../../core/src/Size";

type INTER_NEAREST = 0;
type INTER_LINEAR = 1;
type INTER_CUBIC = 2;
type INTER_AREA = 3;
type INTER_LANCZOS4 = 4;
type INTER_LINEAR_EXACT = 5;
type INTER_NEAREST_EXACT = 6;
type INTER_MAX = 7;
type WARP_FILL_OUTLIERS = 8;
type WARP_INVERSE_MAP = 16;

export type InterpolationFlags =
    | INTER_NEAREST
    | INTER_LINEAR
    | INTER_CUBIC
    | INTER_AREA
    | INTER_LANCZOS4
    | INTER_LINEAR_EXACT
    | INTER_NEAREST_EXACT
    | INTER_MAX
    | WARP_FILL_OUTLIERS
    | WARP_INVERSE_MAP;

export interface IInterpolationFlags {
    INTER_NEAREST: INTER_NEAREST;
    INTER_LINEAR: INTER_LINEAR;
    INTER_CUBIC: INTER_CUBIC;
    INTER_AREA: INTER_AREA;
    INTER_LANCZOS4: INTER_LANCZOS4;
    INTER_LINEAR_EXACT: INTER_LINEAR_EXACT;
    INTER_NEAREST_EXACT: INTER_NEAREST_EXACT;
    INTER_MAX: INTER_MAX;
    WARP_FILL_OUTLIERS: WARP_FILL_OUTLIERS;
    WARP_INVERSE_MAP: WARP_INVERSE_MAP;
}

type INTER_BITS = 5;
type INTER_BITS2 = 10;
type INTER_TAB_SIZE = 32;
type INTER_TAB_SIZE2 = 1024;

export type InterpolationMasks = INTER_BITS | INTER_BITS2 | INTER_TAB_SIZE | INTER_TAB_SIZE2;

export interface IInterpolationMasks {
    INTER_BITS: INTER_BITS;
    INTER_BITS2: INTER_BITS2;
    INTER_TAB_SIZE: INTER_TAB_SIZE;
    INTER_TAB_SIZE2: INTER_TAB_SIZE2;
}

type WARP_POLAR_LINEAR = 0;
type WARP_POLAR_LOG = 256;

export type WarpPolarMode = WARP_POLAR_LINEAR | WARP_POLAR_LOG;

export interface IWarpPolarMode {
    WARP_POLAR_LINEAR: WARP_POLAR_LINEAR;
    WARP_POLAR_LOG: WARP_POLAR_LOG;
}

export interface GeometricImageTransformations {
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
        dstmap1type: DataTypes,
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
    getPerspectiveTransform(src: Mat, dst: Mat, solveMethod?: DecompTypes): Mat;
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
        patchType?: DataTypes
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
    linearPolar(src: Mat, dst: Mat, center: Point, maxRadius: number, flags: WarpPolarMode): void;
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
        interpolation: InterpolationFlags,
        borderMode: BorderTypes,
        borderValue: Scalar
    ): void;
    remap(
        src: Mat,
        dst: Mat,
        map1: Mat,
        map2: Mat,
        interpolation: InterpolationFlags,
        borderMode: BorderTypes
    ): void;
    remap(
        src: Mat,
        dst: Mat,
        map1: Mat,
        map2: Mat,
        interpolation: InterpolationFlags
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
        interpolation: InterpolationFlags
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
