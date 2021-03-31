import { Mat } from './Mat';
import { DataTypes } from './HalInterface';

declare module ArrayOp {
    enum DecompTypes {
        DECOMP_LU = 'DECOMP_LU',
        DECOMP_SVD = 'DECOMP_SVD',
        DECOMP_EIG = 'DECOMP_EIG',
        DECOMP_CHOLESKY = 'DECOMP_CHOLESKY',
        DECOMP_QR = 'DECOMP_QR',
        DECOMP_NORMAL = 'DECOMP_NORMAL',
    }

    interface _DecompTypes {
        DECOMP_LU: DecompTypes.DECOMP_LU;
        DECOMP_SVD: DecompTypes.DECOMP_SVD;
        DECOMP_EIG: DecompTypes.DECOMP_EIG;
        DECOMP_CHOLESKY: DecompTypes.DECOMP_CHOLESKY;
        DECOMP_QR: DecompTypes.DECOMP_QR;
        DECOMP_NORMAL: DecompTypes.DECOMP_NORMAL;
    }

    enum BorderTypes {
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

    interface _BorderTypes {
        BORDER_CONSTANT: BorderTypes.BORDER_CONSTANT;
        BORDER_REPLICATE: BorderTypes.BORDER_REPLICATE;
        BORDER_REFLECT: BorderTypes.BORDER_REFLECT;
        BORDER_WRAP: BorderTypes.BORDER_WRAP;
        BORDER_REFLECT_101: BorderTypes.BORDER_REFLECT_101;
        BORDER_TRANSPARENT: BorderTypes.BORDER_TRANSPARENT;
        BORDER_REFLECT101: BorderTypes.BORDER_REFLECT101;
        BORDER_DEFAULT: BorderTypes.BORDER_DEFAULT;
        BORDER_ISOLATED: BorderTypes.BORDER_ISOLATED;
    }

    enum CmpTypes {
        CMP_EQ = 'CMP_EQ',
        CMP_GT = 'CMP_GT',
        CMP_GE = 'CMP_GE',
        CMP_LT = 'CMP_LT',
        CMP_LE = 'CMP_LE',
        CMP_NE = 'CMP_NE',
    }

    interface _CmpTypes {
        CMP_EQ: CmpTypes.CMP_EQ;
        CMP_GT: CmpTypes.CMP_GT;
        CMP_GE: CmpTypes.CMP_GE;
        CMP_LT: CmpTypes.CMP_LT;
        CMP_LE: CmpTypes.CMP_LE;
        CMP_NE: CmpTypes.CMP_NE;
    }

    enum DftFlags {
        DFT_INVERSE = 'DFT_INVERSE',
        DFT_SCALE = 'DFT_SCALE',
        DFT_ROWS = 'DFT_ROWS',
        DFT_COMPLEX_OUTPUT = 'DFT_COMPLEX_OUTPUT',
        DFT_REAL_OUTPUT = 'DFT_REAL_OUTPUT',
        DFT_COMPLEX_INPUT = 'DFT_COMPLEX_INPUT',
        DCT_INVERSE = 'DCT_INVERSE',
        DCT_ROWS = 'DCT_ROWS',
    }

    interface _DftFlags {
        DFT_INVERSE: DftFlags.DFT_INVERSE;
        DFT_SCALE: DftFlags.DFT_SCALE;
        DFT_ROWS: DftFlags.DFT_ROWS;
        DFT_COMPLEX_OUTPUT: DftFlags.DFT_COMPLEX_OUTPUT;
        DFT_REAL_OUTPUT: DftFlags.DFT_REAL_OUTPUT;
        DFT_COMPLEX_INPUT: DftFlags.DFT_COMPLEX_INPUT;
        DCT_INVERSE: DftFlags.DCT_INVERSE;
        DCT_ROWS: DftFlags.DCT_ROWS;
    }

    enum GemmFlags {
        GEMM_1_T = 'GEMM_1_T',
        GEMM_2_T = 'GEMM_2_T',
        GEMM_3_T = 'GEMM_3_T',
    }

    interface _GemmFlags {
        GEMM_1_T: GemmFlags.GEMM_1_T;
        GEMM_2_T: GemmFlags.GEMM_2_T;
        GEMM_3_T: GemmFlags.GEMM_3_T;
    }

    enum NormTypes {
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

    interface _NormTypes {
        NORM_INF: NormTypes.NORM_INF;
        NORM_L1: NormTypes.NORM_L1;
        NORM_L2: NormTypes.NORM_L2;
        NORM_L2SQR: NormTypes.NORM_L2SQR;
        NORM_HAMMING: NormTypes.NORM_HAMMING;
        NORM_HAMMING2: NormTypes.NORM_HAMMING2;
        NORM_TYPE_MASK: NormTypes.NORM_TYPE_MASK;
        NORM_RELATIVE: NormTypes.NORM_RELATIVE;
        NORM_MINMAX: NormTypes.NORM_MINMAX;
    }

    enum ReduceTypes {
        REDUCE_SUM = 'REDUCE_SUM',
        REDUCE_AVG = 'REDUCE_AVG',
        REDUCE_MAX = 'REDUCE_MAX',
        REDUCE_MIN = 'REDUCE_MIN',
    }

    interface _ReduceTypes {
        REDUCE_SUM: ReduceTypes.REDUCE_SUM;
        REDUCE_AVG: ReduceTypes.REDUCE_AVG;
        REDUCE_MAX: ReduceTypes.REDUCE_MAX;
        REDUCE_MIN: ReduceTypes.REDUCE_MIN;
    }

    enum RotateFlags {
        ROTATE_90_CLOCKWISE = 'ROTATE_90_CLOCKWISE',
        ROTATE_180 = 'ROTATE_180',
        ROTATE_90_COUNTERCLOCKWISE = 'ROTATE_90_COUNTERCLOCKWISE',
    }

    interface _RotateFlags {
        ROTATE_90_CLOCKWISE: RotateFlags.ROTATE_90_CLOCKWISE;
        ROTATE_180: RotateFlags.ROTATE_180;
        ROTATE_90_COUNTERCLOCKWISE: RotateFlags.ROTATE_90_COUNTERCLOCKWISE;
    }

    interface ArrayOp {
        /**
         * Calculates the per-element absolute difference between two arrays or between an array and a scalar.
         * @param src1 first input array.
         * @param src2 second input array.
         * @param dst output array that has the same size and type as input arrays.
         */
        absdiff(src1: Mat, src2: Mat, dst: Mat): void;
        /**
         *
         * @param src1 first input array.
         * @param src2 second input array.
         * @param dst output array that has the same size and type as input arrays.
         * @param mask optional operation mask - 8-bit single channel array, that specifies elements of the output array to be changed.
         * @param dtype optional depth of the output array.
         */
        add(src1: Mat, src2: Mat, dst: Mat, mask?: Mat): void;
        add(src1: Mat, src2: Mat, dst: Mat, mask: Mat, dtype: number | DataTypes): void;
        /**
         *
         * @param src1 first input array.
         * @param alpha weight of the first array elements.
         * @param src2 second input array of the same size and channel number as src1.
         * @param beta weight of the second array elements.
         * @param gamma scalar added to each sum.
         * @param dst output array that has the same size and number of channels as the input arrays.
         * @param dtype optional depth of the output array; when both input arrays have the same depth, dtype can be set to -1, which will be equivalent to src1.depth().
         */
        addWeighted(
            src1: Mat,
            alpha: number,
            src2: Mat,
            beta: number,
            gamma: number,
            dst: Mat,
            dtype?: number | DataTypes
        ): void;
        /**
         * naive nearest neighbor finder
         * @todo document when it's updated in opencv documentation
         */
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
        /**
         * computes bitwise conjunction of the two arrays (dst = src1 & src2) Calculates the per-element bit-wise conjunction of two arrays or an array and a scalar.
         * @param src1 first input array or a scalar.
         * @param src2 second input array or a scalar.
         * @param dst output array that has the same size and type as the input arrays.
         * @param mask optional operation mask, 8-bit single channel array, that specifies elements of the output array to be changed.
         */
        bitwise_and(src1: Mat, src2: Mat, dst: Mat, mask?: Mat): void;
        /**
         * Inverts every bit of an array.
         * @param src input array.
         * @param dst output array that has the same size and type as the input array.
         * @param mask optional operation mask, 8-bit single channel array, that specifies elements of the output array to be changed.
         */
        bitwise_not(src: Mat, dst: Mat, mask?: Mat): void;
        /**
         * Calculates the per-element bit-wise disjunction of two arrays or an array and a scalar.
         * @param src1 first input array or a scalar.
         * @param src2 second input array or a scalar.
         * @param dst output array that has the same size and type as the input arrays.
         * @param mask optional operation mask, 8-bit single channel array, that specifies elements of the output array to be changed.
         */
        bitwise_or(src1: Mat, src2: Mat, dst: Mat, mask?: Mat): void;
        /**
         * Calculates the per-element bit-wise "exclusive or" operation on two arrays or an array and a scalar.
         * @param src1 first input array or a scalar.
         * @param src2 second input array or a scalar.
         * @param dst output array that has the same size and type as the input arrays.
         * @param mask optional operation mask, 8-bit single channel array, that specifies elements of the output array to be changed.
         */
        bitwise_xor(src1: Mat, src2: Mat, dst: Mat, mask?: Mat): void;
        /**
         * Computes the source location of an extrapolated pixel.
         * @param p 0-based coordinate of the extrapolated pixel along one of the axes, likely <0 or >= len
         * @param len Length of the array along the corresponding axis.
         * @param borderType Border type, one of the BorderTypes, except for BORDER_TRANSPARENT and BORDER_ISOLATED . When borderType==BORDER_CONSTANT , the function always returns -1, regardless of p and len
         */
        borderInterpolate(p: number, len: number, borderType: BorderTypes): number;
    }
}
export = ArrayOp;
