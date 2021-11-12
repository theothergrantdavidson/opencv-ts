import { ColorConversionCodes } from './ColorConversion';
import { DataTypes, _DataTypes } from './HalInterface';
import { Scalar } from './Scalar';
import { Size } from './Size';
import { Range } from './Range';
import { DecompTypes } from './CoreArray';
import { Rect } from './Rect';

declare module Mat {
    interface zeros {
        /**
         * The method returns a Matlab-style zero array initializer. It can be used to quickly form a constant
         * array as a function parameter, part of a matrix expression, or as a matrix initializer:
         * @example
         * const m: Mat = cv.Mat.zeros(new cv.Size(3, 3), cv.CV_8UC3);
         * @param size Alternative to the matrix size specification Size(cols, rows) .
         * @param type Created matrix type.
         * @returns Returns a zero array of the specified size and type.
         */
        new (size: Size, type: DataTypes): Mat;
        /**
         * The method returns a Matlab-style zero array initializer. It can be used to quickly form a constant
         * array as a function parameter, part of a matrix expression, or as a matrix initializer:
         * @example
         * const m: Mat = cv.Mat.zeros(3, 3, cv.CV_8UC3);
         * @param rows Number of rows.
         * @param cols Number of columns.
         * @param type Created matrix type.
         * @returns Returns a zero array of the specified size and type.
         */
        new (rows: number, cols: number, type: DataTypes): Mat;
    }

    interface ones {
        /**
         * The method returns a Matlab-style 1's array initializer, similarly to Mat::zeros. Note that using
         * this method you can initialize an array with an arbitrary value, using the following Matlab idiom:
         * Note: In case of multi-channels type, only the first channel will be initialized with 1's, the
         * others will be set to 0's.
         * @example
         * const m: Mat = cv.Mat.ones(new cv.Size(3, 3), cv.CV_8UC3);
         * @param size Alternative to the matrix size specification Size(cols, rows) .
         * @param type Created matrix type.
         * @return Returns a zero array of the specified size and type.
         */
        new (size: Size, type: DataTypes): Mat;
        /**
         * The method returns a Matlab-style 1's array initializer, similarly to Mat::zeros. Note that using
         * this method you can initialize an array with an arbitrary value, using the following Matlab idiom:
         * Note: In case of multi-channels type, only the first channel will be initialized with 1's, the
         * others will be set to 0's.
         * @example
         * const m: Mat = cv.Mat.ones(3, 3, cv.CV_8UC3);
         * @param rows Number of rows.
         * @param cols Number of columns.
         * @param type Created matrix type.
         * @returns Returns a zero array of the specified size and type.
         */
        new (rows: number, cols: number, type: DataTypes): Mat;
    }
    interface Mat {
        new (): Mat;
        new (mat: Mat): Mat;
        new (rows: number, cols: number, type: DataTypes, s?: Scalar): Mat;
        zeros: zeros;
        ones: ones;
        delete(): void;
        /**
         * The method returns a Matlab-style identity matrix initializer, similarly to Mat::zeros. Similarly to
         * Mat::ones, you can use a scale operation to create a scaled identity matrix efficiently:
         * Note: In case of multi-channels type, identity matrix will be initialized only for the first channel,
         * the others will be set to 0's
         * @example
         * const m: Mat = cv.Mat.eye(new cv.Size(3, 3), cv.CV_8UC3);
         * @param size Alternative matrix size specification as Size(cols, rows) .
         * @param type Created matrix type.
         * @returns The method returns a Matlab-style identity matrix initializer
         */
        eye(size: Size, type: DataTypes): Mat;
        /**
         * The method returns a Matlab-style identity matrix initializer, similarly to Mat::zeros. Similarly to
         * Mat::ones, you can use a scale operation to create a scaled identity matrix efficiently:
         * Note: In case of multi-channels type, identity matrix will be initialized only for the first channel,
         * @example
         * const m: Mat = cv.Mat.eye(3, 3, cv.CV_8UC3);
         * @param rows Number of rows.
         * @param cols Number of columns.
         * @param type Created matrix type.
         * @returns Returns an identity matrix of the specified size and type.
         */
        eye(rows: number, cols: number, type: DataTypes): Mat;

        /**
         * @returns Type of Mat
         */
        type(): DataTypes;
        /**
         * The number of rows in the matrix
         */
        rows: number;
        /**
         * The number of cols in the matrix
         */
        cols: number;
        /**
         * size of the matrix (rows, cols) // (width, height)
         */
        matSize: Array<number>;
        step: Array<number>;
        /**
         * @todo figure out return type shape for object
         */
        data: Array<any>;
        /**
         * @todo figure out return type shape for object
         */
        data16U: Array<any>;
        /**
         * @todo figure out return type shape for object
         */
        data16S: Array<any>;
        /**
         * @todo figure out return type shape for object
         */
        data32S: Array<any>;
        /**
         * @todo figure out return type shape for object
         */
        data32F: Array<any>;
        /**
         * @todo figure out return type shape for object
         */
        data64F: Array<any>;
        /**
         * The method returns the matrix element size in bytes. For example, if the matrix type is CV_16SC3 , the method returns 3*sizeof(short) or 6.
         * @returns matrix element size in bytes.
         */
        elemSize(): number;
        /**
         * The method returns the matrix element channel size in bytes, that is, it ignores the number of channels. For example, if the matrix type is CV_16SC3 , the method returns sizeof(short) or 2.
         * @returns size of each matrix element channel in bytes.
         */
        elemSize1(): number;
        /**
         * The method returns the number of matrix channels.
         * @returns the number of matrix channels.
         */
        channels(): number;
        /**
         * Converts an array to another data type with optional scaling.
         * The method converts source pixel values to the target data type.
         * @param m output matrix; if it does not have a proper size or type before the operation, it is
         * reallocated.
         * @param rtype desired output matrix type or, rather, the depth since the number of channels are the
         * same as the input has; if rtype is negative, the output matrix will have the same type as the input.
         * @param alpha optional scale factor.
         * @param beta optional delta added to the scaled values.
         */
        convertTo(m: Mat, rtype: DataTypes, alpha?: number, beta?: number): void;
        convertTo(m: Mat, rtype: DataTypes, alpha: number, beta?: number): void;
        convertTo(m: Mat, rtype: DataTypes, alpha: number, beta: number): void;
        /**
         * The method returns the number of array elements (a number of pixels if the array represents an image).
         * @returns the total number of array elements.
         */
        total(): number;
        /**
         * @param y row to return
         * @returns the specificed matrix row
         */
        row(y: number): Array<Scalar>;
        /**
         * This is one of the key Mat methods. Most new-style OpenCV functions and methods that produce arrays call this method for each output array. The method uses the following algorithm:
         *     1 - If the current array shape and the type match the new ones, return immediately. Otherwise, de-reference the previous data by calling Mat::release.
         *     2- Initialize the new header.
         *     3 - Allocate the new data of total()*elemSize() bytes.
         *     4 - Allocate the new, associated with the data, reference counter and set it to 1.
         * @param rows New number of rows.
         * @param cols New number of columns.
         * @param type New matrix type.
         */
        create(rows: number, cols: number, type: DataTypes): void;
        /**
         * This is one of the key Mat methods. Most new-style OpenCV functions and methods that produce arrays call this method for each output array. The method uses the following algorithm:
         *     1 - If the current array shape and the type match the new ones, return immediately. Otherwise, de-reference the previous data by calling Mat::release.
         *     2- Initialize the new header.
         *     3 - Allocate the new data of total()*elemSize() bytes.
         *     4 - Allocate the new, associated with the data, reference counter and set it to 1.
         * @param size Alternative new matrix size specification: Size(cols, rows)
         * @param type New matrix type.
         */
        create(size: Size, type: DataTypes): void;
        /**
         * The method makes a new header for the specified row span of the matrix. Similarly to Mat::row and
         * Mat::col , this is an O(1) operation.
         * @param startrow An inclusive 0-based start index of the row span.
         * @param endrow An exclusive 0-based ending index of the row span.
         * @returns A Mat which is a copy of the row range
         */
        rowRange(startrow: number, endrow: number): Mat;
        /**
         * The method makes a new header for the specified row span of the matrix. Similarly to Mat::row and
         * Mat::col , this is an O(1) operation.
         * @param r Range structure containing both the start and the end indices.
         * @returns A Mat which is a copy of the row range
         */
        rowRange(r: Range): Mat;
        /**
         * The method copies the matrix data to another matrix.
         * When the operation mask is specified, if the Mat::create call shown above reallocates the matrix,
         * the newly allocated matrix is initialized with all zeros before copying the data.
         * @param m Destination matrix. If it does not have a proper size or type before the operation, it is reallocated.
         * @param mask Optional, Operation mask of the same size as \*this. Its non-zero elements indicate which matrix
         * elements need to be copied. The mask has to be of type CV_8U and can have 1 or multiple channels.
         */
        copyTo(m: Mat, mask?: Mat): void;
        /**
         * @returns true if the array has no elements.
         */
        empty(): boolean;
        /**
         * The method makes a new header for the specified column span of the matrix. Similarly to Mat::column and
         * Mat::col , this is an O(1) operation.
         * @param startcol An inclusive 0-based start index of the column span.
         * @param endcol An exclusive 0-based ending index of the column span.
         * @returns A Mat which is a copy of the column range
         */
        colRange(startcol: number, endcol: number): Mat;
        /**
         * The method makes a new header for the specified column span of the matrix. Similarly to Mat::column and
         * Mat::col , this is an O(1) operation.
         * @param r Range structure containing both the start and the end indices.
         * @returns A Mat which is a copy of the column range
         */
        colRange(r: Range): Mat;
        /**
         * The method returns a matrix step divided by Mat::elemSize1() . It can be useful to quickly access an arbitrary matrix element.
         * @returns a normalized step.
         */
        step1(): number;
        /**
         * Creates a full copy of the array and the underlying data.
         * @returns a Mat copy of the underlying data
         */
        clone(): Mat;
        /**
         * @returns the depth of a matrix element.
         */
        depth(): number;
        /**
         * Creates a matrix header for the specified matrix column.
         * @param x A 0-based column index
         * @returns a Mat which represenst the specified matrix column
         */
        col(x: number): Mat;
        /**
         * Computes a dot-product of two vectors.
         * @param m another dot-product operand.
         * @returns dot-product of two vectors.
         */
        dot(m: Mat): number;
        /**
         * Performs an element-wise multiplication or division of the two matrices.
         * @param m Another array of the same type and the same size as \*this, or a matrix expression.
         * @param scale Optional scale factor.
         * @returns a temporary object encoding per-element array multiplication, with optional scale
         */
        mul(m: Mat, scale?: number): Mat;
        /**
         * Inverses a matrix.
         * The method performs a matrix inversion by means of matrix expressions. This means that a temporary
         * matrix inversion object is returned by the method and can be used further as a part of more complex
         * matrix expressions or can be assigned to a matrix.
         * @param method Matrix inversion method. One of cv::DecompTypes
         */
        inv(method: DecompTypes): Mat;
        t(): Mat;
        /**
         * Creats a submatrix of Matrix
         * @param r the area to create the submatrix of, cannot be lareger than the original Matrix
         * @returns submatrix of matrix
         */
        roi(r: Rect): Mat;
        /**
         * creates a diagonal matrix
         * The method creates a square diagonal matrix from specified main diagonal.
         * @param d One-dimensional matrix that represents the main diagonal.
         */
        diag(d: number): Mat;
        /**
         * Creates a full copy of the array and the underlying data.
         * The method creates a full copy of the array. The original step[] is not taken into account. So, the
         * array copy is a continuous array occupying total()*elemSize() bytes.
         * @param d One-dimensional matrix that represents the main diagonal.
         */
        diag(d: Mat): Mat;
        /**
         * Reports whether the matrix is continuous or not.
         * @returns true if the matrix elements are stored continuously without gaps at the end of
         * each row. Otherwise, it returns false.
         */
        isContinuous(): boolean;
        /**
         * Sets all or some of the array elements to the specified value.
         * @param s Assigned scalar converted to the actual array type.
         */
        setTo(s: Scalar): void;
        /**
         * Sets all or some of the array elements to the specified value.
         * @param s Assigned scalar converted to the actual array type.
         * @param mask Operation mask of the same size as \*this. Its non-zero elements indicate which matrix
         * elements need to be copied. The mask has to be of type CV_8U and can have 1 or multiple channels
         */
        setTo(s: Scalar, mask: Mat): void;
        /**
         * Gets the size of the matrix and returns it as a cv.Size object
         * @returns Size of the Matrix
         */
        size(): Size;
        /**
         * Returns a pointer to the specified matrix row.
         * @param i0 A 0-based row index.
         * @returns pointer to the specified element (1D case)
         */
        ptr(i0: number): Array<number>;
        /**
         * Returns a pointer to the specified matrix row.
         * @param i0 A 0-based row index.
         * @param i1 A 0-based column index.
         * @returns pointer to the specified element (2D case)
         */
        ptr(i0: number, i1: number): Array<number>;
        /**
         * Returns a pointer to the specified matrix row.
         * @param i0 A 0-based row index.
         * @returns the specified matrix row.
         */
        ucharPtr(i0: number): Array<number>;
        /**
         * Returns a pointer to the specified matrix row.
         * @param row Index along the dimension 0
         * @param col Index along the dimension 1
         * @returns the specified matrix row.
         */
        ucharPtr(row: number, col: number): Array<number>;
        /**
         * Returns a pointer to the specified matrix row.
         * @param i0 A 0-based row index.
         * @returns the specified matrix row.
         */
        charPtr(i0: number): Array<number>;
        /**
         * Returns a pointer to the specified matrix row.
         * @param row Index along the dimension 0
         * @param col Index along the dimension 1
         * @returns the specified matrix row.
         */
        charPtr(row: number, col: number): Array<number>;
        /**
         * Returns a pointer to the specified matrix row.
         * @param i0 A 0-based row index.
         * @returns the specified matrix row.
         */
        shortPtr(i0: number): Array<number>;
        /**
         * Returns a pointer to the specified matrix row.
         * @param row Index along the dimension 0
         * @param col Index along the dimension 1
         * @returns the specified matrix row.
         */
        shortPtr(row: number, col: number): Array<number>;
        /**
         * Returns a pointer to the specified matrix row.
         * @param i0 A 0-based row index.
         * @returns the specified matrix row.
         */
        ushortPtr(i0: number): Array<number>;
        /**
         * Returns a pointer to the specified matrix row.
         * @param row Index along the dimension 0
         * @param col Index along the dimension 1
         * @returns the specified matrix row.
         */
        ushortPtr(row: number, col: number): Array<number>;
        /**
         * Returns a pointer to the specified matrix row.
         * @param i0 A 0-based row index.
         * @returns the specified matrix row.
         */
        intPtr(i0: number): Array<number>;
        /**
         * Returns a pointer to the specified matrix row.
         * @param row Index along the dimension 0
         * @param col Index along the dimension 1
         * @returns the specified matrix row.
         */
        intPtr(row: number, col: number): Array<number>;
        /**
         * Returns a pointer to the specified matrix row.
         * @param i0 A 0-based row index.
         * @returns the specified matrix row.
         */
        floatPtr(i0: number): Array<number>;
        /**
         * Returns a pointer to the specified matrix row.
         * @param row Index along the dimension 0
         * @param col Index along the dimension 1
         * @returns the specified matrix row.
         */
        floatPtr(row: number, col: number): Array<number>;
        /**
         * Returns a pointer to the specified matrix row.
         * @param i0 A 0-based row index.
         * @returns the specified matrix row.
         */
        doublePtr(i0: number): Array<number>;
        /**
         * Returns a pointer to the specified matrix row.
         * @param row Index along the dimension 0
         * @param col Index along the dimension 1
         * @returns the specified matrix row.
         */
        doublePtr(row: number, col: number): Array<number>;

        charAt(i0: number): number;
        charAt(i0: number, i1: number): number;
        charAt(i0: number, i1: number, i2: number): number;

        ucharAt(i0: number): number;
        ucharAt(i0: number, i1: number): number;
        ucharAt(i0: number, i1: number, i2: number): number;

        shortAt(i0: number): number;
        shortAt(i0: number, i1: number): number;
        shortAt(i0: number, i1: number, i2: number): number;

        ushortAt(i0: number): number;
        ushortAt(i0: number, i1: number): number;
        ushortAt(i0: number, i1: number, i2: number): number;

        intAt(i0: number): number;
        intAt(i0: number, i1: number): number;
        intAt(i0: number, i1: number, i2: number): number;

        floatAt(i0: number): number;
        floatAt(i0: number, i1: number): number;
        floatAt(i0: number, i1: number, i2: number): number;

        doubleAt(i0: number): number;
        doubleAt(i0: number, i1: number): number;
        doubleAt(i0: number, i1: number, i2: number): number;
    }
}
export = Mat;
