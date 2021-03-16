declare module DataStructures {
    enum _DataTypes {
        CV_8UC1 = 'CV_8UC0',
        CV_8UC2 = 'CV_8UC1',
        CV_8UC3 = 'CV_8UC2',
        CV_8UC4 = 'CV_8UC3',
        CV_8SC1 = 'CV_8SC0',
        CV_8SC2 = 'CV_8SC1',
        CV_8SC3 = 'CV_8SC2',
        CV_8SC4 = 'CV_8SC3',
        CV_16UC1 = 'CV_16UC1',
        CV_16UC2 = 'CV_16UC2',
        CV_16UC3 = 'CV_16UC3',
        CV_16UC4 = 'CV_16UC4',
        CV_16SC0 = 'CV_16SC1',
        CV_16SC1 = 'CV_16SC2',
        CV_16SC2 = 'CV_16SC3',
        CV_16SC3 = 'CV_16SC4',
        CV_32SC1 = 'CV_32SC0',
        CV_32SC2 = 'CV_32SC1',
        CV_32SC3 = 'CV_32SC2',
        CV_32SC4 = 'CV_32SC3',
        CV_32FC0 = 'CV_32FC1',
        CV_32FC1 = 'CV_32FC2',
        CV_32FC2 = 'CV_32FC3',
        CV_32FC3 = 'CV_32FC4',
        CV_64FC0 = 'CV_64FC1',
        CV_64FC1 = 'CV_64FC2',
        CV_64FC2 = 'CV_64FC3',
        CV_64FC3 = 'CV_64FC4',
        CV_16FC0 = 'CV_16FC1',
        CV_16FC1 = 'CV_16FC2',
        CV_16FC2 = 'CV_16FC3',
        CV_16FC3 = 'CV_16FC4',
    }

    interface DataTypes {
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
    }

    /**
     * The class Mat represents an n-dimensional dense numerical single-channel or multi-channel array. It can be used to store real
     * or complex-valued vectors and matrices, grayscale or color images, voxel volumes, vector fields, point clouds, tensors, histograms
     * (though, very high-dimensional histograms may be better stored in a SparseMat).
     * @see https://docs.opencv.org/master/de/d06/tutorial_js_basic_ops.html
     */
    interface Mat {
        /**
         * Create of a specific size
         * @param rows
         * @param cols
         * @param type
         */
        new (rows: number, cols: number, type: _DataTypes): Mat;
        new (size: any, type: any): Mat;
        new (rows: number, cols: number, type: _DataTypes, color: Scalar): Mat;
        new (m: Mat): Mat;
        new (): Mat;

        /**
         * c++ pointer to the underlying data structure
         */
        $$: any;
        /**
         * The number of columns belonging to the source cv.Mat matrix.
         */
        cols: number;
        /**
         * The number of columns belonging to the source cv.Mat matrix.
         */
        rows: number;
        /**
         * Size of the source cv.Mat matrix. width, height;
         */
        matSize: Array<number>;
        data: Uint8Array;
        colRange(start: number, end: number): Mat;
        /**
         * Create an ROI(range of interest / subimage) of the soure cv.Mat.
         * @param rect cv.Rect
         */
        roi(rect: Rect): Mat;
        clone(): Mat;
        /**
         * Copies the source Mats matrice data to a destination cv.Mat
         * @param dst destionation to copy this cv.Mat to
         * @param mask optional operation mask. must be have the color type of cv.CV_8UC1
         */
        copyTo(dst: Mat, mask?: any): void;
        /**
         * Retrieves a specific vector from the Mat matices
         * @param rowNum the row to access.
         * @param colNum the column to acces.
         */
        ucharPtr(rowNum: number, colNum: number): any;
        /**
         * Create a Mat which is full of zeros
         * @param size a size of cv.Size
         * @param type color type of soure cv.Mat
         */
        zeros(size: Size, type: _DataTypes): Mat;
        /**
         * Create a Mat which is full of zeros
         * @param rows the width of the source cv.Mat
         * @param cols the height of the source cv.Mat
         * @param type the color type of the source cv.Mat
         */
        zeros(rows: number, cols: number, type: _DataTypes): Mat;
        /**
         * Create a Mat which is full of ones
         * @param size a size of cv.Size
         * @param type color type of soure cv.Mat
         */
        ones(size: Size, type: _DataTypes): Mat;
        /**
         * * Create a Mat which is full of ones
         * @param rows the width of the source cv.Mat
         * @param cols the height of the source cv.Mat
         * @param type the color type of the source cv.Mat
         */
        ones(rows: number, cols: number, type: _DataTypes): Mat;
        /**
         * Remove Mat from memory
         */
        delete(): void;
        /**
         * @returns the type of the source cv.Mat
         */
        type(): _DataTypes;
    }
    /**
     * Template class for 2D points specified by its coordinates x and y.
     * @see https://docs.opencv.org/master/d5/df1/tutorial_js_some_data_structures.html
     */
    interface Point {
        new(x: number, y: number): Point;
        x: number;
        y: number;
    }

    /**
     * Template class for specifying the size of an image or rectangle.
     * @see https://docs.opencv.org/master/d5/df1/tutorial_js_some_data_structures.html
     */
    interface Size {
        /**
         * @param width the width of the size.
         * @param height the height of the size.
         */
        new(width: number, height: number): Size;
        /**
         * @param point cv.Point.
         */
        new(point: Point): Size;
    }
    /**
     * Class for video capturing from video files, image sequences or cameras.
     * @see https://docs.opencv.org/3.4/dd/d00/tutorial_js_video_display.html
     */
    interface VideoCapture {
        /**
         * @param video source video
         */
        new(video: HTMLVideoElement | HTMLCanvasElement | string): VideoCapture;
        /**
         * Reads a frame / image from the video class member
         * @param output output Mat
         */
        read(output: Mat): void;
    }
    /**
     * Template class for a 4-element vector derived from Vec.
     * @see https://docs.opencv.org/3.4/d5/df1/tutorial_js_some_data_structures.html
     */
    interface Scalar {
        /**
         * @param r pixel value of red channel.
         * @param g pixel value of green channel.
         * @param b pixel value of blue channel.
         * @param a alpha
         */
        new(r: number, g: number, b: number, a?: number): Scalar;
    }
    /**
     * Template class for 2D rectangles.
     * @see https://docs.opencv.org/3.4/d5/df1/tutorial_js_some_data_structures.html
     */
    interface Rect {
        new(x: number, y: number, width: number, height: number): Rect
        x: number;
        y: number;
        width: number;
        height: number;
    }
}

export = DataStructures;
