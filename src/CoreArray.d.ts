import { _CovarFlags } from './Core';
import { Mat, Point, Scalar } from './cv';
import { _DataTypes } from './DataStructures';

declare namespace CoreArray {
    interface minMaxLoc {
        maxLoc: Point;
        maxVal: number;
        minLoc: Point;
        minVal: number;
    }

    enum _BorderTypes {
        BORDER_CONSTANT = 'BORDER_CONSTANT',
        BORDER_REPLICATE = 'BORDER_REPLICATE',
        BORDER_REFLECT = 'BORDER_REFLECT',
        BORDER_WRAP = 'BORDER_WRAP',
        BORDER_REFLECT_101 = 'BORDER_REFLECT_101',
        BORDER_TRANSPARENT = 'BORDER_TRANSPARENT',
        BORDER_REFLECT101 = 'BORDER_REFLECT101',
        BORDER_DEFAULT = 'BORDER_DEFAULT',
        BORDER_ISOLATED = 'BORDER_ISOLATED',
    }

    interface BorderTypes {
        BORDER_CONSTANT: _BorderTypes.BORDER_CONSTANT;
        BORDER_REPLICATE: _BorderTypes.BORDER_REPLICATE;
        BORDER_REFLECT: _BorderTypes.BORDER_REFLECT;
        BORDER_WRAP: _BorderTypes.BORDER_WRAP;
        BORDER_REFLECT_101: _BorderTypes.BORDER_REFLECT_101;
        BORDER_TRANSPARENT: _BorderTypes.BORDER_TRANSPARENT;
        BORDER_REFLECT101: _BorderTypes.BORDER_WRAP;
        BORDER_DEFAULT: _BorderTypes.BORDER_DEFAULT;
        BORDER_ISOLATED: _BorderTypes.BORDER_ISOLATED;
    }

    enum _CmpTypes {
        CMP_EQ = 'CMP_EQ',
        CMP_GT = 'CMP_GT',
        CMP_GE = 'CMP_GE',
        CMP_LT = 'CMP_LT',
        CMP_LE = 'CMP_LE',
        CMP_NE = 'CMP_NE',
    }

    interface CmpTypes {
        CMP_EQ: _CmpTypes.CMP_EQ;
        CMP_GT: _CmpTypes.CMP_GT;
        CMP_GE: _CmpTypes.CMP_GE;
        CMP_LE: _CmpTypes.CMP_LE;
        CMP_NE: _CmpTypes.CMP_NE;
    }

    enum _DecompTypes {
        DECOMP_LU = 'DECOMP_LU',
        DECOMP_SVD = 'DECOMP_SVD',
        DECOMP_EIG = 'DECOMP_EIG',
        DECOMP_CHOLESKY = 'DECOMP_CHOLESKY',
        DECOMP_QR = 'DECOMP_QR',
        DECOMP_NORMAL = 'DECOMP_NORMAL',
    }

    interface DecompTypes {
        DECOMP_LU: _DecompTypes.DECOMP_LU;
        DECOMP_SVD: _DecompTypes.DECOMP_SVD;
        DECOMP_EIG: _DecompTypes.DECOMP_EIG;
        DECOMP_CHOLESKY: _DecompTypes.DECOMP_CHOLESKY;
        DECOMP_QR: _DecompTypes.DECOMP_QR;
        DECOMP_NORMAL: _DecompTypes.DECOMP_NORMAL;
    }

    enum _DftFlags {
        DFT_INVERSE = 'DFT_INVERSE',
        DFT_SCALE = 'DFT_SCALE',
        DFT_ROWS = 'DFT_ROWS',
        DFT_COMPLEX_OUTPUT = 'DFT_COMPLEX_OUTPUT',
        DFT_REAL_OUTPUT = 'DFT_REAL_OUTPUT',
        DFT_COMPLEX_INPUT = 'DFT_COMPLEX_INPUT',
        DCT_INVERSE = 'DCT_INVERSE',
        DCT_ROWS = 'DCT_ROWS',
    }

    interface DftFlags {
        DFT_INVERSE: _DftFlags.DFT_INVERSE;
        DFT_SCALE: _DftFlags.DFT_SCALE;
        DFT_ROWS: _DftFlags.DFT_ROWS;
        DFT_COMPLEX_OUTPUT: _DftFlags.DFT_COMPLEX_OUTPUT;
        DFT_REAL_OUTPUT: _DftFlags.DFT_REAL_OUTPUT;
        DFT_COMPLEX_INPUT: _DftFlags.DFT_COMPLEX_INPUT;
        DCT_INVERSE: _DftFlags.DCT_INVERSE;
        DCT_ROWS: _DftFlags.DCT_ROWS;
    }

    enum _GemmFlags {
        GEMM_1_T = 'GEMM_1_T',
        GEMM_2_T = 'GEMM_2_T',
        GEMM_3_T = 'GEMM_3_T',
    }

    interface GemmFlags {
        GEMM_1_T: _GemmFlags.GEMM_1_T;
        GEMM_2_T: _GemmFlags.GEMM_2_T;
        GEMM_3_T: _GemmFlags.GEMM_3_T;
    }

    enum _NormTypes {
        NORM_INF = 'NORM_INF',
        NORM_L1 = 'NORM_L1',
        NORM_L2 = 'NORM_L2',
        NORM_L2SQR = 'NORM_L2SQR',
        NORM_HAMMING = 'NORM_HAMMING',
        NORM_HAMMING2 = 'NORM_HAMMING2',
        NORM_TYPE_MASK = 'NORM_TYPE_MASK',
        NORM_RELATIVE = 'NORM_RELATIVE',
        NORM_MINMAX = 'NORM_MINMAX',
    }

    interface NormTypes {
        NORM_INF: _NormTypes.NORM_INF;
        NORM_L1: _NormTypes.NORM_L1;
        NORM_L2: _NormTypes.NORM_L2;
        NORM_L2SQR: _NormTypes.NORM_L2SQR;
        NORM_HAMMING: _NormTypes.NORM_HAMMING;
        NORM_HAMMING2: _NormTypes.NORM_HAMMING2;
        NORM_TYPE_MASK: _NormTypes.NORM_TYPE_MASK;
        NORM_RELATIVE: _NormTypes.NORM_RELATIVE;
        NORM_MINMAX: _NormTypes.NORM_MINMAX;
    }

    enum _ReduceTypes {
        REDUCE_SUM = 'REDUCE_SUM',
        REDUCE_AVG = 'REDUCE_AVG',
        REDUCE_MAX = 'REDUCE_MAX',
        REDUCE_MIN = 'REDUCE_MIN',
    }

    interface ReduceTypes {
        REDUCE_SUM: _ReduceTypes.REDUCE_SUM;
        REDUCE_AVG: _ReduceTypes.REDUCE_AVG;
        REDUCE_MAX: _ReduceTypes.REDUCE_MAX;
        REDUCE_MIN: _ReduceTypes.REDUCE_MIN;
    }

    enum _RotateFlags {
        ROTATE_90_CLOCKWISE = 'ROTATE_90_CLOCKWISE',
        ROTATE_180 = 'ROTATE_180',
        ROTATE_90_COUNTERCLOCKWISE = 'ROTATE_90_COUNTERCLOCKWISE',
    }

    interface RotateFlags {
        ROTATE_90_CLOCKWISE: _RotateFlags.ROTATE_90_CLOCKWISE;
        ROTATE_180: _RotateFlags.ROTATE_180;
        ROTATE_90_COUNTERCLOCKWISE: _RotateFlags.ROTATE_90_COUNTERCLOCKWISE;
    }

    interface CoreArray {
        /**
         * Calculates the per-element absolute difference between two arrays or between an array and a scalar.
         * @param src1 first input array or a scalar.
         * @param src2 second input array or a scalar.
         * @param dst output array that has the same size and type as input arrays.
         */
        absdiff(
            src1: Array<number> | Mat | Scalar,
            src2: Array<number> | Mat | Scalar,
            dst: Array<number>
        ): void;
        /**
         * Calculates the per-element sum of two arrays or an array and a scalar.
         * @param src1 first input array or a scalar.
         * @param src2 second input array or a scalar.
         * @param dst output array that has the same size and number of channels as the input array(s); the depth is defined by dtype or src1/src2.
         * @param mask optional operation mask - 8-bit single channel array, that specifies elements of the output array to be changed.
         */
        add(
            src1: Array<number> | Mat | Scalar,
            src2: Array<number> | Mat | Scalar,
            dst: Array<number> | Mat,
            mask?: Array<number> | Mat
        ): void;
        /**
         *
         * @param src1 first input array or a scalar.
         * @param src2 second input array or a scalar.
         * @param dst output array that has the same size and number of channels as the input array(s); the depth is defined by dtype or src1/src2.
         * @param mask optional operation mask - 8-bit single channel array, that specifies elements of the output array to be changed.
         * @param dtype optional depth of the output array.
         */
        add(
            src1: Array<number> | Mat | Scalar,
            src2: Array<number> | Mat | Scalar,
            dst: Array<number> | Mat,
            mask: Array<number> | Mat,
            dtype?: number
        ): void;
        /**
         * Calculates the weighted sum of two arrays.
         * @param src1	first input array.
         * @param alpha	weight of the first array elements.
         * @param src2	second input array of the same size and channel number as src1.
         * @param beta	weight of the second array elements.
         * @param gamma	scalar added to each sum.
         * @param dst	output array that has the same size and number of channels as the input arrays. dtype optional depth of the output array;
         * when both input arrays have the same depth, dtype can be set to -1, which will be equivalent to src1.depth().
         */
        addWeighted(
            src1: Mat | Array<number>,
            alpha: number,
            src2: Mat | Array<number>,
            beta: number,
            gamma: number,
            dst: Mat | Array<number>,
            dtype?: number
        ): void;
        /**
         * naive nearest neighbor finder
         * TODO: Document
         */
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
        /**
         * computes bitwise conjunction of the two arrays (dst = src1 & src2) Calculates the per-element bit-wise conjunction of two arrays or an array and a scalar.
         * @param src1 first input array or a scalar.
         * @param scr2 second input array or a scalar.
         * @param dst output array that has the same size and type as the input arrays.
         * @param mask optional operation mask, 8-bit single channel array, that specifies elements of the output array to be changed.
         */
        bitwise_and(
            src1: Array<number> | Scalar | Mat,
            scr2: Array<number> | Scalar | Mat,
            dst: Array<number> | Scalar | Mat,
            mask?: Array<number> | Mat
        ): void;
        /**
         * Inverts every bit of an array.
         * @param src1 input array.
         * @param dst output array that has the same size and type as the input array.
         * @param mask optional operation mask, 8-bit single channel array, that specifies elements of the output array to be changed.
         */
        bitwise_not(
            src1: Array<number> | Scalar | Mat,
            dst: Array<number> | Scalar | Mat,
            mask?: Array<number> | Mat
        ): void;
        /**
         * Calculates the per-element bit-wise disjunction of two arrays or an array and a scalar.
         * @param src1 first input array or a scalar.
         * @param scr2 second input array or a scalar.
         * @param dst output array that has the same size and type as the input arrays.
         * @param mask optional operation mask, 8-bit single channel array, that specifies elements of the output array to be changed.
         */
        bitwise_or(
            src1: Array<number> | Scalar | Mat,
            scr2: Array<number> | Scalar | Mat,
            dst: Array<number> | Scalar | Mat,
            mask?: Array<number> | Mat
        ): void;
        /**
         * Calculates the per-element bit-wise "exclusive or" operation on two arrays or an array and a scalar.
         * @param src1 first input array or a scalar.
         * @param scr2 second input array or a scalar.
         * @param dst output array that has the same size and type as the input arrays.
         * @param mask optional operation mask, 8-bit single channel array, that specifies elements of the output array to be changed.
         */
        bitwise_xor(
            src1: Array<number> | Scalar | Mat,
            scr2: Array<number> | Scalar | Mat,
            dst: Array<number> | Scalar | Mat,
            mask?: Array<number> | Mat
        ): void;
        /**
         * Computes the source location of an extrapolated pixel
         * @param p 0-based coordinate of the extrapolated pixel along one of the axes, likely <0 or >= len
         * @param len Length of the array along the corresponding axis.
         * @param borderType Border type, one of the BorderTypes, except for BORDER_TRANSPARENT and BORDER_ISOLATED . When borderType==BORDER_CONSTANT , the function always returns -1, regardless of p and len.
         */
        borderInterpolate(p: number, len: number, borderType: _BorderTypes): Point;
        /**
         * Calculates the covariance matrix of a set of vectors. The function cv.calcCovarMatrix calculates the covariance matrix and, optionally, the mean vector of the set of input vectors.
         * @param samples samples stored as separate matrices
         * @param nsamples number of samples
         * @param covar output covariance matrix of the type ctype and square size.
         * @param mean 	input or output (depending on the flags) array as the average value of the input vectors.
         * @param flags operation flags as a combination of CovarFlags
         * @param ctype operation flags as a combination of CovarFlags
         */
        calcCovarMatrix(
            samples: Mat,
            nsamples: number,
            covar: Mat,
            mean: Mat,
            flags: _CovarFlags,
            ctype: _DataTypes
        ): void;
        /**
         * Gets the minimum and maximum correlation of the template matching results
         * @param dst
         * @param mask
         * @returns The minimum and maximum correlation values of the template matching result
         */
        minMaxLoc(dst: Mat, mask: Mat): minMaxLoc;
    }
}

export = CoreArray;
