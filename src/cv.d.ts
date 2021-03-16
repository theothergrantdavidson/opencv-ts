import { CovarFlags, _CovarFlags } from './Core';
import {
    BorderTypes,
    _CmpTypes,
    CmpTypes,
    DecompTypes,
    _DecompTypes,
    _BorderTypes,
    _DftFlags,
    DftFlags,
    _GemmFlags,
    GemmFlags,
    _NormTypes,
    NormTypes,
    _ReduceTypes,
    ReduceTypes,
    _RotateFlags,
    RotateFlags,
    minMaxLoc,
    CoreArray,
} from './CoreArray';
import {
    Mat,
    VideoCapture,
    Rect,
    Point,
    Scalar,
    Size,
    DataTypes,
    _DataTypes,
} from './DataStructures';
import { ImageFiltering, _SpecialFilter, SpecialFilter, Elem } from './ImageProcFilter';
import { Histograms, _HistCompMethods, HistCompMethods } from './ImgpProcHist';
import { DrawingFunctions, _LineTypes, LineTypes } from './ImgprocDraw';
import { ObjectDetection, _TemplateMatchModes, TemplateMatchModes } from './ImgProcObject';
import {
    GeometricImageTransformations,
    _InterpolationFlags,
    InterpolationFlags,
} from './ImgProcTransform';

interface cv
    extends DataTypes,
        BorderTypes,
        CmpTypes,
        DecompTypes,
        DftFlags,
        GemmFlags,
        NormTypes,
        ReduceTypes,
        RotateFlags,
        CovarFlags,
        SpecialFilter,
        CoreArray,
        ImageFiltering,
        InterpolationFlags,
        GeometricImageTransformations,
        ObjectDetection,
        TemplateMatchModes,
        HistCompMethods,
        Histograms,
        LineTypes,
        DrawingFunctions {}

declare class base implements cv {
    FILLED: _LineTypes.FILLED;
    LINE_4: _LineTypes.LINE_4;
    LINE_8: _LineTypes.LINE_8;
    LINE_AA: _LineTypes.LINE_AA;
    HISTCMP_CORREL: _HistCompMethods.HISTCMP_CORREL;
    HISTCMP_CHISQR: _HistCompMethods.HISTCMP_CHISQR;
    HISTCMP_INTERSECT: _HistCompMethods.HISTCMP_INTERSECT;
    HISTCMP_BHATTACHARYYA: _HistCompMethods.HISTCMP_BHATTACHARYYA;
    HISTCMP_HELLINGER: _HistCompMethods.HISTCMP_HELLINGER;
    HISTCMP_KL_DIV: _HistCompMethods.HISTCMP_KL_DIV;
    TM_SQDIFF: _TemplateMatchModes.TM_SQDIFF;
    TM_SQDIFF_NORMED: _TemplateMatchModes.TM_SQDIFF_NORMED;
    TM_CCORR: _TemplateMatchModes.TM_CCORR;
    TM_CCORR_NORMED: _TemplateMatchModes.TM_CCORR_NORMED;
    TM_CCOEFF: _TemplateMatchModes.TM_CCOEFF;
    TM_CCOEFF_NORMED: _TemplateMatchModes.TM_CCOEFF_NORMED;
    INTER_NEAREST: _InterpolationFlags.INTER_NEAREST;
    INTER_LINEAR: _InterpolationFlags.INTER_LINEAR;
    INTER_CUBIC: _InterpolationFlags.INTER_CUBIC;
    INTER_AREA: _InterpolationFlags.INTER_AREA;
    INTER_LANCZOS4: _InterpolationFlags.INTER_LANCZOS4;
    INTER_LINEAR_EXACT: _InterpolationFlags.INTER_LINEAR_EXACT;
    INTER_NEAREST_EXACT: _InterpolationFlags.INTER_NEAREST_EXACT;
    INTER_MAX: _InterpolationFlags.INTER_MAX;
    WARP_FILL_OUTLIERS: _InterpolationFlags.WARP_FILL_OUTLIERS;
    WARP_INVERSE_MAP: _InterpolationFlags.WARP_INVERSE_MAP;
    FILTER_SCHARR: _SpecialFilter;

    COVAR_SCRAMBLED: _CovarFlags.COVAR_SCRAMBLED;
    COVAR_NORMAL: _CovarFlags.COVAR_NORMAL;
    COVAR_USE_AVG: _CovarFlags.COVAR_USE_AVG;
    COVAR_SCALE: _CovarFlags.COVAR_SCALE;
    COVAR_ROWS: _CovarFlags.COVAR_ROWS;
    COVAR_COLS: _CovarFlags.COVAR_COLS;
    DFT_INVERSE: _DftFlags.DFT_INVERSE;
    DFT_SCALE: _DftFlags.DFT_SCALE;
    DFT_ROWS: _DftFlags.DFT_ROWS;
    DFT_COMPLEX_OUTPUT: _DftFlags.DFT_COMPLEX_OUTPUT;
    DFT_REAL_OUTPUT: _DftFlags.DFT_REAL_OUTPUT;
    DFT_COMPLEX_INPUT: _DftFlags.DFT_COMPLEX_INPUT;
    DCT_INVERSE: _DftFlags.DCT_INVERSE;
    DCT_ROWS: _DftFlags.DCT_ROWS;

    GEMM_1_T: _GemmFlags.GEMM_1_T;
    GEMM_2_T: _GemmFlags.GEMM_2_T;
    GEMM_3_T: _GemmFlags.GEMM_3_T;

    NORM_INF: _NormTypes.NORM_INF;
    NORM_L1: _NormTypes.NORM_L1;
    NORM_L2: _NormTypes.NORM_L2;
    NORM_L2SQR: _NormTypes.NORM_L2SQR;
    NORM_HAMMING: _NormTypes.NORM_HAMMING;
    NORM_HAMMING2: _NormTypes.NORM_HAMMING2;
    NORM_TYPE_MASK: _NormTypes.NORM_TYPE_MASK;
    NORM_RELATIVE: _NormTypes.NORM_RELATIVE;
    NORM_MINMAX: _NormTypes.NORM_MINMAX;

    REDUCE_SUM: _ReduceTypes.REDUCE_SUM;
    REDUCE_AVG: _ReduceTypes.REDUCE_AVG;
    REDUCE_MAX: _ReduceTypes.REDUCE_MAX;
    REDUCE_MIN: _ReduceTypes.REDUCE_MIN;

    ROTATE_90_CLOCKWISE: _RotateFlags.ROTATE_90_CLOCKWISE;
    ROTATE_180: _RotateFlags.ROTATE_180;
    ROTATE_90_COUNTERCLOCKWISE: _RotateFlags.ROTATE_90_COUNTERCLOCKWISE;

    DECOMP_LU: _DecompTypes.DECOMP_LU;
    DECOMP_SVD: _DecompTypes.DECOMP_SVD;
    DECOMP_EIG: _DecompTypes.DECOMP_EIG;
    DECOMP_CHOLESKY: _DecompTypes.DECOMP_CHOLESKY;
    DECOMP_QR: _DecompTypes.DECOMP_QR;
    DECOMP_NORMAL: _DecompTypes.DECOMP_NORMAL;

    CMP_EQ: _CmpTypes.CMP_EQ;
    CMP_GT: _CmpTypes.CMP_GT;
    CMP_GE: _CmpTypes.CMP_GE;
    CMP_LE: _CmpTypes.CMP_LE;
    CMP_NE: _CmpTypes.CMP_NE;

    BORDER_CONSTANT: _BorderTypes.BORDER_CONSTANT;
    BORDER_REPLICATE: _BorderTypes.BORDER_REPLICATE;
    BORDER_REFLECT: _BorderTypes.BORDER_REFLECT;
    BORDER_WRAP: _BorderTypes.BORDER_WRAP;
    BORDER_REFLECT_101: _BorderTypes.BORDER_REFLECT_101;
    BORDER_TRANSPARENT: _BorderTypes.BORDER_TRANSPARENT;
    BORDER_REFLECT101: _BorderTypes.BORDER_WRAP;
    BORDER_DEFAULT: _BorderTypes.BORDER_DEFAULT;
    BORDER_ISOLATED: _BorderTypes.BORDER_ISOLATED;

    CV_8UC1: _DataTypes.CV_8UC1;
    CV_8UC2: _DataTypes.CV_8UC2;
    CV_8UC3: _DataTypes.CV_8UC3;
    CV_8UC4: _DataTypes.CV_8UC4;
    CV_8SC1: _DataTypes.CV_8SC1;
    CV_8SC2: _DataTypes.CV_8SC2;
    CV_8SC3: _DataTypes.CV_8SC3;
    CV_16UC1: _DataTypes.CV_16UC1;
    CV_16UC2: _DataTypes.CV_16UC2;
    CV_16UC3: _DataTypes.CV_16UC3;
    CV_16SC0: _DataTypes.CV_16SC0;
    CV_16SC1: _DataTypes.CV_16SC1;
    CV_16SC2: _DataTypes.CV_16SC2;
    CV_16SC3: _DataTypes.CV_16SC3;
    CV_32SC1: _DataTypes.CV_32SC1;
    CV_32SC2: _DataTypes.CV_32SC2;
    CV_32SC3: _DataTypes.CV_32SC3;
    CV_32FC0: _DataTypes.CV_32FC0;
    CV_32FC1: _DataTypes.CV_32FC1;
    CV_32FC2: _DataTypes.CV_32FC2;
    CV_32FC3: _DataTypes.CV_32FC3;
    CV_64FC0: _DataTypes.CV_64FC0;
    CV_64FC1: _DataTypes.CV_64FC1;
    CV_64FC2: _DataTypes.CV_64FC2;
    CV_64FC3: _DataTypes.CV_64FC3;
    CV_16FC0: _DataTypes.CV_16FC0;
    CV_16FC1: _DataTypes.CV_16FC1;
    CV_16FC2: _DataTypes.CV_16FC2;
    CV_16FC3: _DataTypes.CV_16FC3;

    Mat: Mat;
    Point: Point;
    Size: Size;
    VideoCapture: VideoCapture;
    Scalar: Scalar;
    Rect: Rect;

    onRuntimeInitialized: () => void;
    imread(id: string): Mat;
    imshow(id: string, src: Mat): void;

    // Core Array Functions
    absdiff(
        src1: Array<number> | Mat | Scalar,
        src2: Array<number> | Mat | Scalar,
        dst: Array<number>
    ): void;
    add(
        src1: Array<number> | Mat | Scalar,
        src2: Array<number> | Mat | Scalar,
        dst: Array<number> | Mat,
        mask?: Array<number> | Mat
    ): void;
    add(
        src1: Array<number> | Mat | Scalar,
        src2: Array<number> | Mat | Scalar,
        dst: Array<number> | Mat,
        mask: Array<number> | Mat,
        dtype?: number
    ): void;
    addWeighted(
        src1: Mat | Array<number>,
        alpha: number,
        src2: Mat | Array<number>,
        beta: number,
        gamma: number,
        dst: Mat | Array<number>,
        dtype?: number
    ): void;
    batchDistance(
        src1: Mat | Array<number>,
        src2: Mat | Array<number>,
        dst: Mat | Array<number>,
        dtype: number,
        nidx: Mat | Array<number>,
        normType: _NormTypes,
        K: number,
        mask: Mat | Array<number>,
        update: number,
        crosscheck: boolean
    ): void;
    bitwise_and(
        src1: Array<number> | Scalar | Mat,
        scr2: Array<number> | Scalar | Mat,
        dst: Array<number> | Scalar | Mat,
        mask?: Array<number> | Mat
    ): void;
    bitwise_not(
        src1: Array<number> | Scalar | Mat,
        dst: Array<number> | Scalar | Mat,
        mask?: Array<number> | Mat
    ): void;
    bitwise_or(
        src1: Array<number> | Scalar | Mat,
        scr2: Array<number> | Scalar | Mat,
        dst: Array<number> | Scalar | Mat,
        mask?: Array<number> | Mat
    ): void;
    borderInterpolate(p: number, len: number, borderType: _BorderTypes): Point;
    bitwise_xor(
        src1: Mat | number[] | Scalar,
        scr2: Mat | number[] | Scalar,
        dst: Mat | number[] | Scalar,
        mask?: Mat | number[]
    ): void;
    calcCovarMatrix(
        samples: Mat,
        nsamples: number,
        covar: Mat,
        mean: Mat,
        flags: _CovarFlags,
        ctype: _DataTypes
    ): void;

    bilateralFilter(
        src: Mat,
        dst: Mat,
        d: number,
        sigmaColor: number,
        sigmaSpace: number,
        borderType: _BorderTypes
    ): void;
    blur(src: Mat, dst: Mat, ksize: number, anchor: number, borderType: _BorderTypes): void;
    boxFilter(
        src: Mat,
        dst: Mat,
        ddepth: number,
        ksize: number,
        anchor: Point,
        normalize: boolean,
        borderType: _BorderTypes
    ): void;
    buildPyramid(src: Mat, dst: Mat, maxlevel: number, borderType: _BorderTypes): void;
    dilate(
        src: Mat,
        dst: Mat,
        kernel: Elem,
        anchor: Point,
        iterations: number,
        borderType: _BorderTypes,
        borderValue: Scalar
    ): void;
    erode(
        src: Mat,
        dst: Mat,
        kernel: Elem,
        anchor: Point,
        iterations: number,
        borderType: _BorderTypes,
        borderValue: Scalar
    ): void;
    filter2D(
        src: Mat,
        dst: Mat,
        ddepth: number,
        kernel: Elem,
        anchor: Point,
        delta: number,
        borderType: _BorderTypes
    ): void;
    GaussianBlur(
        src: Mat,
        dst: Mat,
        ksize: Size,
        sigmaX: number,
        sigmaY: number,
        borderType: _BorderTypes
    ): void;
    getDerivKernels(
        kx: Elem | Mat,
        ky: Elem | Mat,
        dx: number,
        dy: number,
        ksize: _SpecialFilter.FILTER_SCHARR | 1 | 3 | 5 | 7,
        normalize: boolean,
        ktype:
            | _DataTypes.CV_32FC0
            | _DataTypes.CV_32FC1
            | _DataTypes.CV_32FC2
            | _DataTypes.CV_32FC3
            | _DataTypes.CV_64FC0
            | _DataTypes.CV_64FC1
            | _DataTypes.CV_64FC2
            | _DataTypes.CV_64FC3
    ): void;
    getGaborKernel(
        ksize: Size,
        sigma: number,
        theta: number,
        lambd: number,
        gamma: number,
        psi: number,
        ktype:
            | _DataTypes.CV_32FC0
            | _DataTypes.CV_32FC1
            | _DataTypes.CV_32FC2
            | _DataTypes.CV_32FC3
            | _DataTypes.CV_64FC0
            | _DataTypes.CV_64FC1
            | _DataTypes.CV_64FC2
            | _DataTypes.CV_64FC3
    ): void;
    getGaussianKernel(
        ksize: number,
        sigma: number,
        ktype:
            | _DataTypes.CV_32FC0
            | _DataTypes.CV_32FC1
            | _DataTypes.CV_32FC2
            | _DataTypes.CV_32FC3
            | _DataTypes.CV_64FC0
            | _DataTypes.CV_64FC1
            | _DataTypes.CV_64FC2
            | _DataTypes.CV_64FC3
    ): void;

    resize(
        src: Mat,
        dst: Mat,
        dsize: Size,
        fx: number,
        fy: number,
        code: _InterpolationFlags
    ): void;
    matchTemplate(
        image: Mat,
        templ: Mat,
        result: Mat,
        method: _TemplateMatchModes,
        mask?: Mat
    ): void;
    calcHist(
        image: Mat,
        channels: number[],
        mask: Mat,
        hist: Mat,
        histSize: number[],
        ranges: number[],
        accumulate?: boolean
    ): void;
    rectangle(img: Mat, pt1: Point, pt2: Point, color: Scalar, thickness?: number): void;
    rectangle(
        img: Mat,
        pt1: Point,
        pt2: Point,
        color: Scalar,
        thickness: number,
        lineType?: _LineTypes
    ): void;
    rectangle(
        img: Mat,
        pt1: Point,
        pt2: Point,
        color: Scalar,
        thickness: number,
        lineType: _LineTypes,
        shift?: number
    ): void;
    rectangle(img: Mat, rec: Rect, color: Scalar, thickness?: number): void;
    rectangle(img: Mat, rec: Rect, color: Scalar, thickness: number, lineType?: _LineTypes): void;
    rectangle(
        img: Mat,
        rec: Rect,
        color: Scalar,
        thickness: number,
        lineType: _LineTypes,
        shift?: number
    ): void;
    minMaxLoc(dst: Mat, mask: Mat): minMaxLoc;
}

declare const cv: base;
export default cv;
export { Mat, Rect, Point, Scalar, Size };
