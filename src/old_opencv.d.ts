import DataStructures from "./DataStructures";

declare namespace Types {
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

    enum ColorConversionCodes {
        COLOR_BGR2BGRA = 'COLOR_BGR2BGRA',
        COLOR_RGB2RGBA = 'COLOR_RGB2RGBA',
        COLOR_BGRA2BGR = 'COLOR_BGRA2BGR',
        COLOR_RGBA2RGB = 'COLOR_RGBA2RGB',
        COLOR_BGR2RGBA = 'COLOR_BGR2RGBA',
        COLOR_RGB2BGRA = 'COLOR_RGB2BGRA',
        COLOR_RGBA2BGR = 'COLOR_RGBA2BGR',
        COLOR_BGRA2RGB = 'COLOR_BGRA2RGB',
        COLOR_BGR2RGB = 'COLOR_BGR2RGB',
        COLOR_RGB2BGR = 'COLOR_RGB2BGR',
        COLOR_BGRA2RGBA = 'COLOR_BGRA2RGBA',
        COLOR_RGBA2BGRA = 'COLOR_RGBA2BGRA',
        COLOR_BGR2GRAY = 'COLOR_BGR2GRAY',
        COLOR_RGB2GRAY = 'COLOR_RGB2GRAY',
        COLOR_GRAY2BGR = 'COLOR_GRAY2BGR',
        COLOR_GRAY2RGB = 'COLOR_GRAY2RGB',
        COLOR_GRAY2BGRA = 'COLOR_GRAY2BGRA',
        COLOR_GRAY2RGBA = 'COLOR_GRAY2RGBA',
        COLOR_BGRA2GRAY = 'COLOR_BGRA2GRAY',
        COLOR_RGBA2GRAY = 'COLOR_RGBA2GRAY',
        COLOR_BGR2BGR565 = 'COLOR_BGR2BGR565',
        COLOR_RGB2BGR565 = 'COLOR_RGB2BGR565',
        COLOR_BGR5652BGR = 'COLOR_BGR5652BGR',
        COLOR_BGR5652RGB = 'COLOR_BGR5652RGB',
        COLOR_BGRA2BGR565 = 'COLOR_BGRA2BGR565',
        COLOR_RGBA2BGR565 = 'COLOR_RGBA2BGR565',
        COLOR_BGR5652BGRA = 'COLOR_BGR5652BGRA',
        COLOR_BGR5652RGBA = 'COLOR_BGR5652RGBA',
        COLOR_GRAY2BGR565 = 'COLOR_GRAY2BGR565',
        COLOR_BGR5652GRAY = 'COLOR_BGR5652GRAY',
        COLOR_BGR2BGR555 = 'COLOR_BGR2BGR555',
        COLOR_RGB2BGR555 = 'COLOR_RGB2BGR555',
        COLOR_BGR5552BGR = 'COLOR_BGR5552BGR',
        COLOR_BGR5552RGB = 'COLOR_BGR5552RGB',
        COLOR_BGRA2BGR555 = 'COLOR_BGRA2BGR555',
        COLOR_RGBA2BGR555 = 'COLOR_RGBA2BGR555',
        COLOR_BGR5552BGRA = 'COLOR_BGR5552BGRA',
        COLOR_BGR5552RGBA = 'COLOR_BGR5552RGBA',
        COLOR_GRAY2BGR555 = 'COLOR_GRAY2BGR555',
        COLOR_BGR5552GRAY = 'COLOR_BGR5552GRAY',
        COLOR_BGR2XYZ = 'COLOR_BGR2XYZ',
        COLOR_RGB2XYZ = 'COLOR_RGB2XYZ',
        COLOR_XYZ2BGR = 'COLOR_XYZ2BGR',
        COLOR_XYZ2RGB = 'COLOR_XYZ2RGB',
        COLOR_BGR2YCrCb = 'COLOR_BGR2YCrCb',
        COLOR_RGB2YCrCb = 'COLOR_RGB2YCrCb',
        COLOR_YCrCb2BGR = 'COLOR_YCrCb2BGR',
        COLOR_YCrCb2RGB = 'COLOR_YCrCb2RGB',
        COLOR_BGR2HSV = 'COLOR_BGR2HSV',
        COLOR_RGB2HSV = 'COLOR_RGB2HSV',
        COLOR_BGR2Lab = 'COLOR_BGR2Lab',
        COLOR_RGB2Lab = 'COLOR_RGB2Lab',
        COLOR_BGR2Luv = 'COLOR_BGR2Luv',
        COLOR_RGB2Luv = 'COLOR_RGB2Luv',
        COLOR_BGR2HLS = 'COLOR_BGR2HLS',
        COLOR_RGB2HLS = 'COLOR_RGB2HLS',
        COLOR_HSV2BGR = 'COLOR_HSV2BGR',
        COLOR_HSV2RGB = 'COLOR_HSV2RGB',
        COLOR_Lab2BGR = 'COLOR_Lab2BGR',
        COLOR_Lab2RGB = 'COLOR_Lab2RGB',
        COLOR_Luv2BGR = 'COLOR_Luv2BGR',
        COLOR_Luv2RGB = 'COLOR_Luv2RGB',
        COLOR_HLS2BGR = 'COLOR_HLS2BGR',
        COLOR_HLS2RGB = 'COLOR_HLS2RGB',
        COLOR_BGR2HSV_FULL = 'COLOR_BGR2HSV_FULL',
        COLOR_RGB2HSV_FULL = 'COLOR_RGB2HSV_FULL',
        COLOR_BGR2HLS_FULL = 'COLOR_BGR2HLS_FULL',
        COLOR_RGB2HLS_FULL = 'COLOR_RGB2HLS_FULL',
        COLOR_HSV2BGR_FULL = 'COLOR_HSV2BGR_FULL',
        COLOR_HSV2RGB_FULL = 'COLOR_HSV2RGB_FULL',
        COLOR_HLS2BGR_FULL = 'COLOR_HLS2BGR_FULL',
        COLOR_HLS2RGB_FULL = 'COLOR_HLS2RGB_FULL',
        COLOR_LBGR2Lab = 'COLOR_LBGR2Lab',
        COLOR_LRGB2Lab = 'COLOR_LRGB2Lab',
        COLOR_LBGR2Luv = 'COLOR_LBGR2Luv',
        COLOR_LRGB2Luv = 'COLOR_LRGB2Luv',
        COLOR_Lab2LBGR = 'COLOR_Lab2LBGR',
        COLOR_Lab2LRGB = 'COLOR_Lab2LRGB',
        COLOR_Luv2LBGR = 'COLOR_Luv2LBGR',
        COLOR_Luv2LRGB = 'COLOR_Luv2LRGB',
        COLOR_BGR2YUV = 'COLOR_BGR2YUV',
        COLOR_RGB2YUV = 'COLOR_RGB2YUV',
        COLOR_YUV2BGR = 'COLOR_YUV2BGR',
        COLOR_YUV2RGB = 'COLOR_YUV2RGB',
        COLOR_YUV2RGB_NV12 = 'COLOR_YUV2RGB_NV12',
        COLOR_YUV2BGR_NV12 = 'COLOR_YUV2BGR_NV12',
        COLOR_YUV2RGB_NV21 = 'COLOR_YUV2RGB_NV21',
        COLOR_YUV2BGR_NV21 = 'COLOR_YUV2BGR_NV21',
        COLOR_YUV420sp2RGB = 'COLOR_YUV420sp2RGB',
        COLOR_YUV420sp2BGR = 'COLOR_YUV420sp2BGR',
        COLOR_YUV2RGBA_NV12 = 'COLOR_YUV2RGBA_NV12',
        COLOR_YUV2BGRA_NV12 = 'COLOR_YUV2BGRA_NV12',
        COLOR_YUV2RGBA_NV21 = 'COLOR_YUV2RGBA_NV21',
        COLOR_YUV2BGRA_NV21 = 'COLOR_YUV2BGRA_NV21',
        COLOR_YUV420sp2RGBA = 'COLOR_YUV420sp2RGBA',
        COLOR_YUV420sp2BGRA = 'COLOR_YUV420sp2BGRA',
        COLOR_YUV2RGB_YV12 = 'COLOR_YUV2RGB_YV12',
        COLOR_YUV2BGR_YV12 = 'COLOR_YUV2BGR_YV12',
        COLOR_YUV2RGB_IYUV = 'COLOR_YUV2RGB_IYUV',
        COLOR_YUV2BGR_IYUV = 'COLOR_YUV2BGR_IYUV',
        COLOR_YUV2RGB_I420 = 'COLOR_YUV2RGB_I420',
        COLOR_YUV2BGR_I420 = 'COLOR_YUV2BGR_I420',
        COLOR_YUV420p2RGB = 'COLOR_YUV420p2RGB',
        COLOR_YUV420p2BGR = 'COLOR_YUV420p2BGR',
        COLOR_YUV2RGBA_YV12 = 'COLOR_YUV2RGBA_YV12',
        COLOR_YUV2BGRA_YV12 = 'COLOR_YUV2BGRA_YV12',
        COLOR_YUV2RGBA_IYUV = 'COLOR_YUV2RGBA_IYUV',
        COLOR_YUV2BGRA_IYUV = 'COLOR_YUV2BGRA_IYUV',
        COLOR_YUV2RGBA_I420 = 'COLOR_YUV2RGBA_I420',
        COLOR_YUV2BGRA_I420 = 'COLOR_YUV2BGRA_I420',
        COLOR_YUV420p2RGBA = 'COLOR_YUV420p2RGBA',
        COLOR_YUV420p2BGRA = 'COLOR_YUV420p2BGRA',
        COLOR_YUV2GRAY_420 = 'COLOR_YUV2GRAY_420',
        COLOR_YUV2GRAY_NV21 = 'COLOR_YUV2GRAY_NV21',
        COLOR_YUV2GRAY_NV12 = 'COLOR_YUV2GRAY_NV12',
        COLOR_YUV2GRAY_YV12 = 'COLOR_YUV2GRAY_YV12',
        COLOR_YUV2GRAY_IYUV = 'COLOR_YUV2GRAY_IYUV',
        COLOR_YUV2GRAY_I420 = 'COLOR_YUV2GRAY_I420',
        COLOR_YUV420sp2GRAY = 'COLOR_YUV420sp2GRAY',
        COLOR_YUV420p2GRAY = 'COLOR_YUV420p2GRAY',
        COLOR_YUV2RGB_UYVY = 'COLOR_YUV2RGB_UYVY',
        COLOR_YUV2BGR_UYVY = 'COLOR_YUV2BGR_UYVY',
        COLOR_YUV2RGB_Y422 = 'COLOR_YUV2RGB_Y422',
        COLOR_YUV2BGR_Y422 = 'COLOR_YUV2BGR_Y422',
        COLOR_YUV2RGB_UYNV = 'COLOR_YUV2RGB_UYNV',
        COLOR_YUV2BGR_UYNV = 'COLOR_YUV2BGR_UYNV',
        COLOR_YUV2RGBA_UYVY = 'COLOR_YUV2RGBA_UYVY',
        COLOR_YUV2BGRA_UYVY = 'COLOR_YUV2BGRA_UYVY',
        COLOR_YUV2RGBA_Y422 = 'COLOR_YUV2RGBA_Y422',
        COLOR_YUV2BGRA_Y422 = 'COLOR_YUV2BGRA_Y422',
        COLOR_YUV2RGBA_UYNV = 'COLOR_YUV2RGBA_UYNV',
        COLOR_YUV2BGRA_UYNV = 'COLOR_YUV2BGRA_UYNV',
        COLOR_YUV2RGB_YUY2 = 'COLOR_YUV2RGB_YUY2',
        COLOR_YUV2BGR_YUY2 = 'COLOR_YUV2BGR_YUY2',
        COLOR_YUV2RGB_YVYU = 'COLOR_YUV2RGB_YVYU',
        COLOR_YUV2BGR_YVYU = 'COLOR_YUV2BGR_YVYU',
        COLOR_YUV2RGB_YUYV = 'COLOR_YUV2RGB_YUYV',
        COLOR_YUV2BGR_YUYV = 'COLOR_YUV2BGR_YUYV',
        COLOR_YUV2RGB_YUNV = 'COLOR_YUV2RGB_YUNV',
        COLOR_YUV2BGR_YUNV = 'COLOR_YUV2BGR_YUNV',
        COLOR_YUV2RGBA_YUY2 = 'COLOR_YUV2RGBA_YUY2',
        COLOR_YUV2BGRA_YUY2 = 'COLOR_YUV2BGRA_YUY2',
        COLOR_YUV2RGBA_YVYU = 'COLOR_YUV2RGBA_YVYU',
        COLOR_YUV2BGRA_YVYU = 'COLOR_YUV2BGRA_YVYU',
        COLOR_YUV2RGBA_YUYV = 'COLOR_YUV2RGBA_YUYV',
        COLOR_YUV2BGRA_YUYV = 'COLOR_YUV2BGRA_YUYV',
        COLOR_YUV2RGBA_YUNV = 'COLOR_YUV2RGBA_YUNV',
        COLOR_YUV2BGRA_YUNV = 'COLOR_YUV2BGRA_YUNV',
        COLOR_YUV2GRAY_UYVY = 'COLOR_YUV2GRAY_UYVY',
        COLOR_YUV2GRAY_YUY2 = 'COLOR_YUV2GRAY_YUY2',
        COLOR_YUV2GRAY_Y422 = 'COLOR_YUV2GRAY_Y422',
        COLOR_YUV2GRAY_UYNV = 'COLOR_YUV2GRAY_UYNV',
        COLOR_YUV2GRAY_YVYU = 'COLOR_YUV2GRAY_YVYU',
        COLOR_YUV2GRAY_YUYV = 'COLOR_YUV2GRAY_YUYV',
        COLOR_YUV2GRAY_YUNV = 'COLOR_YUV2GRAY_YUNV',
        COLOR_RGBA2mRGBA = 'COLOR_RGBA2mRGBA',
        COLOR_mRGBA2RGBA = 'COLOR_mRGBA2RGBA',
        COLOR_RGB2YUV_I420 = 'COLOR_RGB2YUV_I420',
        COLOR_BGR2YUV_I420 = 'COLOR_BGR2YUV_I420',
        COLOR_RGB2YUV_IYUV = 'COLOR_RGB2YUV_IYUV',
        COLOR_BGR2YUV_IYUV = 'COLOR_BGR2YUV_IYUV',
        COLOR_RGBA2YUV_I420 = 'COLOR_RGBA2YUV_I420',
        COLOR_BGRA2YUV_I420 = 'COLOR_BGRA2YUV_I420',
        COLOR_RGBA2YUV_IYUV = 'COLOR_RGBA2YUV_IYUV',
        COLOR_BGRA2YUV_IYUV = 'COLOR_BGRA2YUV_IYUV',
        COLOR_RGB2YUV_YV12 = 'COLOR_RGB2YUV_YV12',
        COLOR_BGR2YUV_YV12 = 'COLOR_BGR2YUV_YV12',
        COLOR_RGBA2YUV_YV12 = 'COLOR_RGBA2YUV_YV12',
        COLOR_BGRA2YUV_YV12 = 'COLOR_BGRA2YUV_YV12',
        COLOR_BayerBG2BGR = 'COLOR_BayerBG2BGR',
        COLOR_BayerGB2BGR = 'COLOR_BayerGB2BGR',
        COLOR_BayerRG2BGR = 'COLOR_BayerRG2BGR',
        COLOR_BayerGR2BGR = 'COLOR_BayerGR2BGR',
        COLOR_BayerBG2RGB = 'COLOR_BayerBG2RGB',
        COLOR_BayerGB2RGB = 'COLOR_BayerGB2RGB',
        COLOR_BayerRG2RGB = 'COLOR_BayerRG2RGB',
        COLOR_BayerGR2RGB = 'COLOR_BayerGR2RGB',
        COLOR_BayerBG2GRAY = 'COLOR_BayerBG2GRAY',
        COLOR_BayerGB2GRAY = 'COLOR_BayerGB2GRAY',
        COLOR_BayerRG2GRAY = 'COLOR_BayerRG2GRAY',
        COLOR_BayerGR2GRAY = 'COLOR_BayerGR2GRAY',
        COLOR_BayerBG2BGR_VNG = 'COLOR_BayerBG2BGR_VNG',
        COLOR_BayerGB2BGR_VNG = 'COLOR_BayerGB2BGR_VNG',
        COLOR_BayerRG2BGR_VNG = 'COLOR_BayerRG2BGR_VNG',
        COLOR_BayerGR2BGR_VNG = 'COLOR_BayerGR2BGR_VNG',
        COLOR_BayerBG2RGB_VNG = 'COLOR_BayerBG2RGB_VNG',
        COLOR_BayerGB2RGB_VNG = 'COLOR_BayerGB2RGB_VNG',
        COLOR_BayerRG2RGB_VNG = 'COLOR_BayerRG2RGB_VNG',
        COLOR_BayerGR2RGB_VNG = 'COLOR_BayerGR2RGB_VNG',
        COLOR_BayerBG2BGR_EA = 'COLOR_BayerBG2BGR_EA',
        COLOR_BayerGB2BGR_EA = 'COLOR_BayerGB2BGR_EA',
        COLOR_BayerRG2BGR_EA = 'COLOR_BayerRG2BGR_EA',
        COLOR_BayerGR2BGR_EA = 'COLOR_BayerGR2BGR_EA',
        COLOR_BayerBG2RGB_EA = 'COLOR_BayerBG2RGB_EA',
        COLOR_BayerGB2RGB_EA = 'COLOR_BayerGB2RGB_EA',
        COLOR_BayerRG2RGB_EA = 'COLOR_BayerRG2RGB_EA',
        COLOR_BayerGR2RGB_EA = 'COLOR_BayerGR2RGB_EA',
        COLOR_BayerBG2BGRA = 'COLOR_BayerBG2BGRA',
        COLOR_BayerGB2BGRA = 'COLOR_BayerGB2BGRA',
        COLOR_BayerRG2BGRA = 'COLOR_BayerRG2BGRA',
        COLOR_BayerGR2BGRA = 'COLOR_BayerGR2BGRA',
        COLOR_BayerBG2RGBA = 'COLOR_BayerBG2RGBA',
        COLOR_BayerGB2RGBA = 'COLOR_BayerGB2RGBA',
        COLOR_BayerRG2RGBA = 'COLOR_BayerRG2RGBA',
        COLOR_BayerGR2RGBA = 'COLOR_BayerGR2RGBA',
        COLOR_COLORCVT_MAX = 'COLOR_COLORCVT_MAX',
    }

    enum DataTypes {
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

    enum InterpolationFlags {
        INTER_NEAREST = 'INTER_NEAREST',
        INTER_LINEAR = 'INTER_LINEAR',
        INTER_CUBIC = 'INTER_CUBIC',
        INTER_AREA = 'INTER_AREA',
        INTER_LANCZOS4 = 'INTER_LANCZOS4',
        INTER_LINEAR_EXACT = 'INTER_LINEAR_EXACT',
        INTER_NEAREST_EXACT = 'INTER_NEAREST_EXACT',
        INTER_MAX = 'INTER_MAX',
        WARP_FILL_OUTLIERS = 'WARP_FILL_OUTLIERS',
        WARP_INVERSE_MAP = 'WARP_INVERSE_MAP',
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

    enum GrabCutModes {
        GC_INIT_WITH_RECT = 'GC_INIT_WITH_RECT',
        GC_INIT_WITH_MASK = 'GC_INIT_WITH_MASK',
        GC_EVAL = 'GC_EVAL',
        GC_EVAL_FREEZE_MODEL = 'GC_EVAL_FREEZE_MODEL',
    }

    enum TemplateMatchModes {
        TM_SQDIFF = 'TM_SQDIFF',
        TM_SQDIFF_NORMED = 'TM_SQDIFF_NORMED',
        TM_CCORR = 'TM_CCORR',
        TM_CCORR_NORMED = 'TM_CCORR_NORMED',
        TM_CCOEFF = 'TM_CCOEFF',
        TM_CCOEFF_NORMED = 'TM_CCOEFF_NORMED',
    }

    enum LineTypes {
        FILLED = 'FILLED',
        LINE_4 = 'LINE_4',
        LINE_8 = 'LINE_8',
        LINE_AA = 'LINE_AA',
    }

    interface minMaxLoc {
        maxLoc: cv.Point;
        maxVal: number;
        minLoc: cv.Point;
        minVal: number;
    }
}
declare module cv {
    /**
     * The class Mat represents an n-dimensional dense numerical single-channel or multi-channel array. It can be used to store real
     * or complex-valued vectors and matrices, grayscale or color images, voxel volumes, vector fields, point clouds, tensors, histograms
     * (though, very high-dimensional histograms may be better stored in a SparseMat).
     * @see https://docs.opencv.org/master/de/d06/tutorial_js_basic_ops.html
     */
    class Mat {
        /**
         * Create of a specific size
         * @param rows
         * @param cols
         * @param type
         */
        constructor(rows: number, cols: number, type: Types.DataTypes);
        constructor(size: any, type: any);
        constructor(rows: number, cols: number, type: Types.DataTypes, color: Scalar);
        constructor(m: Mat);
        constructor();

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
        static zeros(size: Size, type: Types.DataTypes): Mat;
        /**
         * Create a Mat which is full of zeros
         * @param rows the width of the source cv.Mat
         * @param cols the height of the source cv.Mat
         * @param type the color type of the source cv.Mat (cv.Types.DataTypes)
         */
        static zeros(rows: number, cols: number, type: Types.DataTypes): Mat;
        /**
         * Create a Mat which is full of ones
         * @param size a size of cv.Size
         * @param type color type of soure cv.Mat
         */
        static ones(size: Size, type: Types.DataTypes): Mat;
        /**
         * * Create a Mat which is full of ones
         * @param rows the width of the source cv.Mat
         * @param cols the height of the source cv.Mat
         * @param type the color type of the source cv.Mat (cv.Types.DataTypes)
         */
        static ones(rows: number, cols: number, type: Types.DataTypes): Mat;
        /**
         * Remove Mat from memory
         */
        delete(): void;
        /**
         * @returns the type of cv.Types.DataTypes of the source cv.Mat
         */
        type(): Types.DataTypes;
    }
    /**
     * Template class for 2D points specified by its coordinates x and y.
     * @see https://docs.opencv.org/master/d5/df1/tutorial_js_some_data_structures.html
     */
    class Point {
        constructor(x: number, y: number);
        x: number;
        y: number;
    }

    /**
     * Template class for specifying the size of an image or rectangle.
     * @see https://docs.opencv.org/master/d5/df1/tutorial_js_some_data_structures.html
     */
    class Size {
        /**
         * @param width the width of the size.
         * @param height the height of the size.
         */
        constructor(width: number, height: number);
        /**
         * @param point cv.Point.
         */
        constructor(point: Point);
    }
    /**
     * Class for video capturing from video files, image sequences or cameras.
     * @see https://docs.opencv.org/3.4/dd/d00/tutorial_js_video_display.html
     */
    class VideoCapture {
        /**
         * @param video source video
         */
        constructor(video: HTMLVideoElement | HTMLCanvasElement | string);
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
    class Scalar {
        /**
         * @param r pixel value of red channel.
         * @param g pixel value of green channel.
         * @param b pixel value of blue channel.
         * @param a alpha
         */
        constructor(r: number, g: number, b: number, a?: number);
    }
    /**
     * Template class for 2D rectangles.
     * @see https://docs.opencv.org/3.4/d5/df1/tutorial_js_some_data_structures.html
     */
    class Rect {
        constructor(x: number, y: number, width: number, height: number);
        x: number;
        y: number;
        width: number;
        height: number;
    }
    class cv {
        static BORDER_CONSTANT: Types.BorderTypes.BORDER_CONSTANT;
        static BORDER_REPLICATE: Types.BorderTypes.BORDER_REPLICATE;
        static BORDER_REFLECT: Types.BorderTypes.BORDER_REFLECT;
        static BORDER_WRAP: Types.BorderTypes.BORDER_WRAP;
        static BORDER_REFLECT_101: Types.BorderTypes.BORDER_REFLECT_101;
        static BORDER_TRANSPARENT: Types.BorderTypes.BORDER_TRANSPARENT;
        static BORDER_REFLECT101: Types.BorderTypes.BORDER_WRAP;
        static BORDER_DEFAULT: Types.BorderTypes.BORDER_DEFAULT;
        static BORDER_ISOLATED: Types.BorderTypes.BORDER_ISOLATED;

        static COLOR_BGR2BGRA: Types.ColorConversionCodes.COLOR_BGR2BGRA;
        static COLOR_RGB2RGBA: Types.ColorConversionCodes.COLOR_RGB2RGBA;
        static COLOR_BGRA2BGR: Types.ColorConversionCodes.COLOR_BGRA2BGR;
        static COLOR_RGBA2RGB: Types.ColorConversionCodes.COLOR_RGBA2RGB;
        static COLOR_BGR2RGBA: Types.ColorConversionCodes.COLOR_BGR2RGBA;
        static COLOR_RGB2BGRA: Types.ColorConversionCodes.COLOR_RGB2BGRA;
        static COLOR_RGBA2BGR: Types.ColorConversionCodes.COLOR_RGBA2BGR;
        static COLOR_BGRA2RGB: Types.ColorConversionCodes.COLOR_BGRA2RGB;
        static COLOR_BGR2RGB: Types.ColorConversionCodes.COLOR_BGR2RGB;
        static COLOR_RGB2BGR: Types.ColorConversionCodes.COLOR_RGB2BGR;
        static COLOR_BGRA2RGBA: Types.ColorConversionCodes.COLOR_BGRA2RGBA;
        static COLOR_RGBA2BGRA: Types.ColorConversionCodes.COLOR_RGBA2BGRA;
        static COLOR_BGR2GRAY: Types.ColorConversionCodes.COLOR_BGR2GRAY;
        static COLOR_RGB2GRAY: Types.ColorConversionCodes.COLOR_RGB2GRAY;
        static COLOR_GRAY2BGR: Types.ColorConversionCodes.COLOR_GRAY2BGR;
        static COLOR_GRAY2RGB: Types.ColorConversionCodes.COLOR_GRAY2RGB;
        static COLOR_GRAY2BGRA: Types.ColorConversionCodes.COLOR_GRAY2BGRA;
        static COLOR_GRAY2RGBA: Types.ColorConversionCodes.COLOR_GRAY2RGBA;
        static COLOR_BGRA2GRAY: Types.ColorConversionCodes.COLOR_BGRA2GRAY;
        static COLOR_RGBA2GRAY: Types.ColorConversionCodes.COLOR_RGBA2GRAY;
        static COLOR_BGR2BGR565: Types.ColorConversionCodes.COLOR_BGR2BGR565;
        static COLOR_RGB2BGR565: Types.ColorConversionCodes.COLOR_RGB2BGR565;
        static COLOR_BGR5652BGR: Types.ColorConversionCodes.COLOR_BGR5652BGR;
        static COLOR_BGR5652RGB: Types.ColorConversionCodes.COLOR_BGR5652RGB;
        static COLOR_BGRA2BGR565: Types.ColorConversionCodes.COLOR_BGRA2BGR565;
        static COLOR_RGBA2BGR565: Types.ColorConversionCodes.COLOR_RGBA2BGR565;
        static COLOR_BGR5652BGRA: Types.ColorConversionCodes.COLOR_BGR5652BGRA;
        static COLOR_BGR5652RGBA: Types.ColorConversionCodes.COLOR_BGR5652RGBA;
        static COLOR_GRAY2BGR565: Types.ColorConversionCodes.COLOR_GRAY2BGR565;
        static COLOR_BGR5652GRAY: Types.ColorConversionCodes.COLOR_BGR5652GRAY;
        static COLOR_BGR2BGR555: Types.ColorConversionCodes.COLOR_BGR2BGR555;
        static COLOR_RGB2BGR555: Types.ColorConversionCodes.COLOR_RGB2BGR555;
        static COLOR_BGR5552BGR: Types.ColorConversionCodes.COLOR_BGR5552BGR;
        static COLOR_BGR5552RGB: Types.ColorConversionCodes.COLOR_BGR5552RGB;
        static COLOR_BGRA2BGR555: Types.ColorConversionCodes.COLOR_BGRA2BGR555;
        static COLOR_RGBA2BGR555: Types.ColorConversionCodes.COLOR_RGBA2BGR555;
        static COLOR_BGR5552BGRA: Types.ColorConversionCodes.COLOR_BGR5552BGRA;
        static COLOR_BGR5552RGBA: Types.ColorConversionCodes.COLOR_BGR5552RGBA;
        static COLOR_GRAY2BGR555: Types.ColorConversionCodes.COLOR_GRAY2BGR555;
        static COLOR_BGR5552GRAY: Types.ColorConversionCodes.COLOR_BGR5552GRAY;
        static COLOR_BGR2XYZ: Types.ColorConversionCodes.COLOR_BGR2XYZ;
        static COLOR_RGB2XYZ: Types.ColorConversionCodes.COLOR_RGB2XYZ;
        static COLOR_XYZ2BGR: Types.ColorConversionCodes.COLOR_XYZ2BGR;
        static COLOR_XYZ2RGB: Types.ColorConversionCodes.COLOR_XYZ2RGB;
        static COLOR_BGR2YCrCb: Types.ColorConversionCodes.COLOR_BGR2YCrCb;
        static COLOR_RGB2YCrCb: Types.ColorConversionCodes.COLOR_RGB2YCrCb;
        static COLOR_YCrCb2BGR: Types.ColorConversionCodes.COLOR_YCrCb2BGR;
        static COLOR_YCrCb2RGB: Types.ColorConversionCodes.COLOR_YCrCb2RGB;
        static COLOR_BGR2HSV: Types.ColorConversionCodes.COLOR_BGR2HSV;
        static COLOR_RGB2HSV: Types.ColorConversionCodes.COLOR_RGB2HSV;
        static COLOR_BGR2Lab: Types.ColorConversionCodes.COLOR_BGR2Lab;
        static COLOR_RGB2Lab: Types.ColorConversionCodes.COLOR_RGB2Lab;
        static COLOR_BGR2Luv: Types.ColorConversionCodes.COLOR_BGR2Luv;
        static COLOR_RGB2Luv: Types.ColorConversionCodes.COLOR_RGB2Luv;
        static COLOR_BGR2HLS: Types.ColorConversionCodes.COLOR_BGR2HLS;
        static COLOR_RGB2HLS: Types.ColorConversionCodes.COLOR_RGB2HLS;
        static COLOR_HSV2BGR: Types.ColorConversionCodes.COLOR_HSV2BGR;
        static COLOR_HSV2RGB: Types.ColorConversionCodes.COLOR_HSV2RGB;
        static COLOR_Lab2BGR: Types.ColorConversionCodes.COLOR_Lab2BGR;
        static COLOR_Lab2RGB: Types.ColorConversionCodes.COLOR_Lab2RGB;
        static COLOR_Luv2BGR: Types.ColorConversionCodes.COLOR_Luv2BGR;
        static COLOR_Luv2RGB: Types.ColorConversionCodes.COLOR_Luv2RGB;
        static COLOR_HLS2BGR: Types.ColorConversionCodes.COLOR_HLS2BGR;
        static COLOR_HLS2RGB: Types.ColorConversionCodes.COLOR_HLS2RGB;
        static COLOR_BGR2HSV_FULL: Types.ColorConversionCodes.COLOR_BGR2HSV_FULL;
        static COLOR_RGB2HSV_FULL: Types.ColorConversionCodes.COLOR_RGB2HSV_FULL;
        static COLOR_BGR2HLS_FULL: Types.ColorConversionCodes.COLOR_BGR2HLS_FULL;
        static COLOR_RGB2HLS_FULL: Types.ColorConversionCodes.COLOR_RGB2HLS_FULL;
        static COLOR_HSV2BGR_FULL: Types.ColorConversionCodes.COLOR_HSV2BGR_FULL;
        static COLOR_HSV2RGB_FULL: Types.ColorConversionCodes.COLOR_HSV2RGB_FULL;
        static COLOR_HLS2BGR_FULL: Types.ColorConversionCodes.COLOR_HLS2BGR_FULL;
        static COLOR_HLS2RGB_FULL: Types.ColorConversionCodes.COLOR_HLS2RGB_FULL;
        static COLOR_LBGR2Lab: Types.ColorConversionCodes.COLOR_LBGR2Lab;
        static COLOR_LRGB2Lab: Types.ColorConversionCodes.COLOR_LRGB2Lab;
        static COLOR_LBGR2Luv: Types.ColorConversionCodes.COLOR_LBGR2Luv;
        static COLOR_LRGB2Luv: Types.ColorConversionCodes.COLOR_LRGB2Luv;
        static COLOR_Lab2LBGR: Types.ColorConversionCodes.COLOR_Lab2LBGR;
        static COLOR_Lab2LRGB: Types.ColorConversionCodes.COLOR_Lab2LRGB;
        static COLOR_Luv2LBGR: Types.ColorConversionCodes.COLOR_Luv2LBGR;
        static COLOR_Luv2LRGB: Types.ColorConversionCodes.COLOR_Luv2LRGB;
        static COLOR_BGR2YUV: Types.ColorConversionCodes.COLOR_BGR2YUV;
        static COLOR_RGB2YUV: Types.ColorConversionCodes.COLOR_RGB2YUV;
        static COLOR_YUV2BGR: Types.ColorConversionCodes.COLOR_YUV2BGR;
        static COLOR_YUV2RGB: Types.ColorConversionCodes.COLOR_YUV2RGB;
        static COLOR_YUV2RGB_NV12: Types.ColorConversionCodes.COLOR_YUV2RGB_NV12;
        static COLOR_YUV2BGR_NV12: Types.ColorConversionCodes.COLOR_YUV2BGR_NV12;
        static COLOR_YUV2RGB_NV21: Types.ColorConversionCodes.COLOR_YUV2RGB_NV21;
        static COLOR_YUV2BGR_NV21: Types.ColorConversionCodes.COLOR_YUV2BGR_NV21;
        static COLOR_YUV420sp2RGB: Types.ColorConversionCodes.COLOR_YUV420sp2RGB;
        static COLOR_YUV420sp2BGR: Types.ColorConversionCodes.COLOR_YUV420sp2BGR;
        static COLOR_YUV2RGBA_NV12: Types.ColorConversionCodes.COLOR_YUV2RGBA_NV12;
        static COLOR_YUV2BGRA_NV12: Types.ColorConversionCodes.COLOR_YUV2BGRA_NV12;
        static COLOR_YUV2RGBA_NV21: Types.ColorConversionCodes.COLOR_YUV2RGBA_NV21;
        static COLOR_YUV2BGRA_NV21: Types.ColorConversionCodes.COLOR_YUV2BGRA_NV21;
        static COLOR_YUV420sp2RGBA: Types.ColorConversionCodes.COLOR_YUV420sp2RGBA;
        static COLOR_YUV420sp2BGRA: Types.ColorConversionCodes.COLOR_YUV420sp2BGRA;
        static COLOR_YUV2RGB_YV12: Types.ColorConversionCodes.COLOR_YUV2RGB_YV12;
        static COLOR_YUV2BGR_YV12: Types.ColorConversionCodes.COLOR_YUV2BGR_YV12;
        static COLOR_YUV2RGB_IYUV: Types.ColorConversionCodes.COLOR_YUV2RGB_IYUV;
        static COLOR_YUV2BGR_IYUV: Types.ColorConversionCodes.COLOR_YUV2BGR_IYUV;
        static COLOR_YUV2RGB_I420: Types.ColorConversionCodes.COLOR_YUV2RGB_I420;
        static COLOR_YUV2BGR_I420: Types.ColorConversionCodes.COLOR_YUV2BGR_I420;
        static COLOR_YUV420p2RGB: Types.ColorConversionCodes.COLOR_YUV420p2RGB;
        static COLOR_YUV420p2BGR: Types.ColorConversionCodes.COLOR_YUV420p2BGR;
        static COLOR_YUV2RGBA_YV12: Types.ColorConversionCodes.COLOR_YUV2RGBA_YV12;
        static COLOR_YUV2BGRA_YV12: Types.ColorConversionCodes.COLOR_YUV2BGRA_YV12;
        static COLOR_YUV2RGBA_IYUV: Types.ColorConversionCodes.COLOR_YUV2RGBA_IYUV;
        static COLOR_YUV2BGRA_IYUV: Types.ColorConversionCodes.COLOR_YUV2BGRA_IYUV;
        static COLOR_YUV2RGBA_I420: Types.ColorConversionCodes.COLOR_YUV2RGBA_I420;
        static COLOR_YUV2BGRA_I420: Types.ColorConversionCodes.COLOR_YUV2BGRA_I420;
        static COLOR_YUV420p2RGBA: Types.ColorConversionCodes.COLOR_YUV420p2RGBA;
        static COLOR_YUV420p2BGRA: Types.ColorConversionCodes.COLOR_YUV420p2BGRA;
        static COLOR_YUV2GRAY_420: Types.ColorConversionCodes.COLOR_YUV2GRAY_420;
        static COLOR_YUV2GRAY_NV21: Types.ColorConversionCodes.COLOR_YUV2GRAY_NV21;
        static COLOR_YUV2GRAY_NV12: Types.ColorConversionCodes.COLOR_YUV2GRAY_NV12;
        static COLOR_YUV2GRAY_YV12: Types.ColorConversionCodes.COLOR_YUV2GRAY_YV12;
        static COLOR_YUV2GRAY_IYUV: Types.ColorConversionCodes.COLOR_YUV2GRAY_IYUV;
        static COLOR_YUV2GRAY_I420: Types.ColorConversionCodes.COLOR_YUV2GRAY_I420;
        static COLOR_YUV420sp2GRAY: Types.ColorConversionCodes.COLOR_YUV420sp2GRAY;
        static COLOR_YUV420p2GRAY: Types.ColorConversionCodes.COLOR_YUV420p2GRAY;
        static COLOR_YUV2RGB_UYVY: Types.ColorConversionCodes.COLOR_YUV2RGB_UYVY;
        static COLOR_YUV2BGR_UYVY: Types.ColorConversionCodes.COLOR_YUV2BGR_UYVY;
        static COLOR_YUV2RGB_Y422: Types.ColorConversionCodes.COLOR_YUV2RGB_Y422;
        static COLOR_YUV2BGR_Y422: Types.ColorConversionCodes.COLOR_YUV2BGR_Y422;
        static COLOR_YUV2RGB_UYNV: Types.ColorConversionCodes.COLOR_YUV2RGB_UYNV;
        static COLOR_YUV2BGR_UYNV: Types.ColorConversionCodes.COLOR_YUV2BGR_UYNV;
        static COLOR_YUV2RGBA_UYVY: Types.ColorConversionCodes.COLOR_YUV2RGBA_UYVY;
        static COLOR_YUV2BGRA_UYVY: Types.ColorConversionCodes.COLOR_YUV2BGRA_UYVY;
        static COLOR_YUV2RGBA_Y422: Types.ColorConversionCodes.COLOR_YUV2RGBA_Y422;
        static COLOR_YUV2BGRA_Y422: Types.ColorConversionCodes.COLOR_YUV2BGRA_Y422;
        static COLOR_YUV2RGBA_UYNV: Types.ColorConversionCodes.COLOR_YUV2RGBA_UYNV;
        static COLOR_YUV2BGRA_UYNV: Types.ColorConversionCodes.COLOR_YUV2BGRA_UYNV;
        static COLOR_YUV2RGB_YUY2: Types.ColorConversionCodes.COLOR_YUV2RGB_YUY2;
        static COLOR_YUV2BGR_YUY2: Types.ColorConversionCodes.COLOR_YUV2BGR_YUY2;
        static COLOR_YUV2RGB_YVYU: Types.ColorConversionCodes.COLOR_YUV2RGB_YVYU;
        static COLOR_YUV2BGR_YVYU: Types.ColorConversionCodes.COLOR_YUV2BGR_YVYU;
        static COLOR_YUV2RGB_YUYV: Types.ColorConversionCodes.COLOR_YUV2RGB_YUYV;
        static COLOR_YUV2BGR_YUYV: Types.ColorConversionCodes.COLOR_YUV2BGR_YUYV;
        static COLOR_YUV2RGB_YUNV: Types.ColorConversionCodes.COLOR_YUV2RGB_YUNV;
        static COLOR_YUV2BGR_YUNV: Types.ColorConversionCodes.COLOR_YUV2BGR_YUNV;
        static COLOR_YUV2RGBA_YUY2: Types.ColorConversionCodes.COLOR_YUV2RGBA_YUY2;
        static COLOR_YUV2BGRA_YUY2: Types.ColorConversionCodes.COLOR_YUV2BGRA_YUY2;
        static COLOR_YUV2RGBA_YVYU: Types.ColorConversionCodes.COLOR_YUV2RGBA_YVYU;
        static COLOR_YUV2BGRA_YVYU: Types.ColorConversionCodes.COLOR_YUV2BGRA_YVYU;
        static COLOR_YUV2RGBA_YUYV: Types.ColorConversionCodes.COLOR_YUV2RGBA_YUYV;
        static COLOR_YUV2BGRA_YUYV: Types.ColorConversionCodes.COLOR_YUV2BGRA_YUYV;
        static COLOR_YUV2RGBA_YUNV: Types.ColorConversionCodes.COLOR_YUV2RGBA_YUNV;
        static COLOR_YUV2BGRA_YUNV: Types.ColorConversionCodes.COLOR_YUV2BGRA_YUNV;
        static COLOR_YUV2GRAY_UYVY: Types.ColorConversionCodes.COLOR_YUV2GRAY_UYVY;
        static COLOR_YUV2GRAY_YUY2: Types.ColorConversionCodes.COLOR_YUV2GRAY_YUY2;
        static COLOR_YUV2GRAY_Y422: Types.ColorConversionCodes.COLOR_YUV2GRAY_Y422;
        static COLOR_YUV2GRAY_UYNV: Types.ColorConversionCodes.COLOR_YUV2GRAY_UYNV;
        static COLOR_YUV2GRAY_YVYU: Types.ColorConversionCodes.COLOR_YUV2GRAY_YVYU;
        static COLOR_YUV2GRAY_YUYV: Types.ColorConversionCodes.COLOR_YUV2GRAY_YUYV;
        static COLOR_YUV2GRAY_YUNV: Types.ColorConversionCodes.COLOR_YUV2GRAY_YUNV;
        static COLOR_RGBA2mRGBA: Types.ColorConversionCodes.COLOR_RGBA2mRGBA;
        static COLOR_mRGBA2RGBA: Types.ColorConversionCodes.COLOR_mRGBA2RGBA;
        static COLOR_RGB2YUV_I420: Types.ColorConversionCodes.COLOR_RGB2YUV_I420;
        static COLOR_BGR2YUV_I420: Types.ColorConversionCodes.COLOR_BGR2YUV_I420;
        static COLOR_RGB2YUV_IYUV: Types.ColorConversionCodes.COLOR_RGB2YUV_IYUV;
        static COLOR_BGR2YUV_IYUV: Types.ColorConversionCodes.COLOR_BGR2YUV_IYUV;
        static COLOR_RGBA2YUV_I420: Types.ColorConversionCodes.COLOR_RGBA2YUV_I420;
        static COLOR_BGRA2YUV_I420: Types.ColorConversionCodes.COLOR_BGRA2YUV_I420;
        static COLOR_RGBA2YUV_IYUV: Types.ColorConversionCodes.COLOR_RGBA2YUV_IYUV;
        static COLOR_BGRA2YUV_IYUV: Types.ColorConversionCodes.COLOR_BGRA2YUV_IYUV;
        static COLOR_RGB2YUV_YV12: Types.ColorConversionCodes.COLOR_RGB2YUV_YV12;
        static COLOR_BGR2YUV_YV12: Types.ColorConversionCodes.COLOR_BGR2YUV_YV12;
        static COLOR_RGBA2YUV_YV12: Types.ColorConversionCodes.COLOR_RGBA2YUV_YV12;
        static COLOR_BGRA2YUV_YV12: Types.ColorConversionCodes.COLOR_BGRA2YUV_YV12;
        static COLOR_BayerBG2BGR: Types.ColorConversionCodes.COLOR_BayerBG2BGR;
        static COLOR_BayerGB2BGR: Types.ColorConversionCodes.COLOR_BayerGB2BGR;
        static COLOR_BayerRG2BGR: Types.ColorConversionCodes.COLOR_BayerRG2BGR;
        static COLOR_BayerGR2BGR: Types.ColorConversionCodes.COLOR_BayerGR2BGR;
        static COLOR_BayerBG2RGB: Types.ColorConversionCodes.COLOR_BayerBG2RGB;
        static COLOR_BayerGB2RGB: Types.ColorConversionCodes.COLOR_BayerGB2RGB;
        static COLOR_BayerRG2RGB: Types.ColorConversionCodes.COLOR_BayerRG2RGB;
        static COLOR_BayerGR2RGB: Types.ColorConversionCodes.COLOR_BayerGR2RGB;
        static COLOR_BayerBG2GRAY: Types.ColorConversionCodes.COLOR_BayerBG2GRAY;
        static COLOR_BayerGB2GRAY: Types.ColorConversionCodes.COLOR_BayerGB2GRAY;
        static COLOR_BayerRG2GRAY: Types.ColorConversionCodes.COLOR_BayerRG2GRAY;
        static COLOR_BayerGR2GRAY: Types.ColorConversionCodes.COLOR_BayerGR2GRAY;
        static COLOR_BayerBG2BGR_VNG: Types.ColorConversionCodes.COLOR_BayerBG2BGR_VNG;
        static COLOR_BayerGB2BGR_VNG: Types.ColorConversionCodes.COLOR_BayerGB2BGR_VNG;
        static COLOR_BayerRG2BGR_VNG: Types.ColorConversionCodes.COLOR_BayerRG2BGR_VNG;
        static COLOR_BayerGR2BGR_VNG: Types.ColorConversionCodes.COLOR_BayerGR2BGR_VNG;
        static COLOR_BayerBG2RGB_VNG: Types.ColorConversionCodes.COLOR_BayerBG2RGB_VNG;
        static COLOR_BayerGB2RGB_VNG: Types.ColorConversionCodes.COLOR_BayerGB2RGB_VNG;
        static COLOR_BayerRG2RGB_VNG: Types.ColorConversionCodes.COLOR_BayerRG2RGB_VNG;
        static COLOR_BayerGR2RGB_VNG: Types.ColorConversionCodes.COLOR_BayerGR2RGB_VNG;
        static COLOR_BayerBG2BGR_EA: Types.ColorConversionCodes.COLOR_BayerBG2BGR_EA;
        static COLOR_BayerGB2BGR_EA: Types.ColorConversionCodes.COLOR_BayerGB2BGR_EA;
        static COLOR_BayerRG2BGR_EA: Types.ColorConversionCodes.COLOR_BayerRG2BGR_EA;
        static COLOR_BayerGR2BGR_EA: Types.ColorConversionCodes.COLOR_BayerGR2BGR_EA;
        static COLOR_BayerBG2RGB_EA: Types.ColorConversionCodes.COLOR_BayerBG2RGB_EA;
        static COLOR_BayerGB2RGB_EA: Types.ColorConversionCodes.COLOR_BayerGB2RGB_EA;
        static COLOR_BayerRG2RGB_EA: Types.ColorConversionCodes.COLOR_BayerRG2RGB_EA;
        static COLOR_BayerGR2RGB_EA: Types.ColorConversionCodes.COLOR_BayerGR2RGB_EA;
        static COLOR_BayerBG2BGRA: Types.ColorConversionCodes.COLOR_BayerBG2BGRA;
        static COLOR_BayerGB2BGRA: Types.ColorConversionCodes.COLOR_BayerGB2BGRA;
        static COLOR_BayerRG2BGRA: Types.ColorConversionCodes.COLOR_BayerRG2BGRA;
        static COLOR_BayerGR2BGRA: Types.ColorConversionCodes.COLOR_BayerGR2BGRA;
        static COLOR_BayerBG2RGBA: Types.ColorConversionCodes.COLOR_BayerBG2RGBA;
        static COLOR_BayerGB2RGBA: Types.ColorConversionCodes.COLOR_BayerGB2RGBA;
        static COLOR_BayerRG2RGBA: Types.ColorConversionCodes.COLOR_BayerRG2RGBA;
        static COLOR_BayerGR2RGBA: Types.ColorConversionCodes.COLOR_BayerGR2RGBA;
        static COLOR_COLORCVT_MAX: Types.ColorConversionCodes.COLOR_COLORCVT_MAX;

        static CV_8UC1: Types.DataTypes.CV_8UC1;
        static CV_8UC2: Types.DataTypes.CV_8UC2;
        static CV_8UC3: Types.DataTypes.CV_8UC3;
        static CV_8UC4: Types.DataTypes.CV_8UC4;
        static CV_8SC1: Types.DataTypes.CV_8SC1;
        static CV_8SC2: Types.DataTypes.CV_8SC2;
        static CV_8SC3: Types.DataTypes.CV_8SC3;
        static CV_16UC1: Types.DataTypes.CV_16UC1;
        static CV_16UC2: Types.DataTypes.CV_16UC2;
        static CV_16UC3: Types.DataTypes.CV_16UC3;
        static CV_16SC0: Types.DataTypes.CV_16SC0;
        static CV_16SC1: Types.DataTypes.CV_16SC1;
        static CV_16SC2: Types.DataTypes.CV_16SC2;
        static CV_16SC3: Types.DataTypes.CV_16SC3;
        static CV_32SC1: Types.DataTypes.CV_32SC1;
        static CV_32SC2: Types.DataTypes.CV_32SC2;
        static CV_32SC3: Types.DataTypes.CV_32SC3;
        static CV_32FC0: Types.DataTypes.CV_32FC0;
        static CV_32FC1: Types.DataTypes.CV_32FC1;
        static CV_32FC2: Types.DataTypes.CV_32FC2;
        static CV_32FC3: Types.DataTypes.CV_32FC3;
        static CV_64FC0: Types.DataTypes.CV_64FC0;
        static CV_64FC1: Types.DataTypes.CV_64FC1;
        static CV_64FC2: Types.DataTypes.CV_64FC2;
        static CV_64FC3: Types.DataTypes.CV_64FC3;
        static CV_16FC0: Types.DataTypes.CV_16FC0;
        static CV_16FC1: Types.DataTypes.CV_16FC1;
        static CV_16FC2: Types.DataTypes.CV_16FC2;
        static CV_16FC3: Types.DataTypes.CV_16FC3;

        static INTER_NEAREST: Types.InterpolationFlags.INTER_NEAREST;
        static INTER_LINEAR: Types.InterpolationFlags.INTER_LINEAR;
        static INTER_CUBIC: Types.InterpolationFlags.INTER_CUBIC;
        static INTER_AREA: Types.InterpolationFlags.INTER_AREA;
        static INTER_LANCZOS4: Types.InterpolationFlags.INTER_LANCZOS4;
        static INTER_LINEAR_EXACT: Types.InterpolationFlags.INTER_LINEAR_EXACT;
        static INTER_NEAREST_EXACT: Types.InterpolationFlags.INTER_NEAREST_EXACT;
        static INTER_MAX: Types.InterpolationFlags.INTER_MAX;
        static WARP_FILL_OUTLIERS: Types.InterpolationFlags.WARP_FILL_OUTLIERS;
        static WARP_INVERSE_MAP: Types.InterpolationFlags.WARP_INVERSE_MAP;

        static GC_INIT_WITH_RECT: Types.GrabCutModes.GC_INIT_WITH_RECT;
        static GC_INIT_WITH_MASK: Types.GrabCutModes.GC_INIT_WITH_MASK;
        static GC_EVAL: Types.GrabCutModes.GC_EVAL;
        static GC_EVAL_FREEZE_MODEL: Types.GrabCutModes.GC_EVAL_FREEZE_MODEL;

        static NORM_INF: Types.NormTypes.NORM_INF;
        static NORM_L1: Types.NormTypes.NORM_L1;
        static NORM_L2: Types.NormTypes.NORM_L2;
        static NORM_L2SQR: Types.NormTypes.NORM_L2SQR;
        static NORM_HAMMING: Types.NormTypes.NORM_HAMMING;
        static NORM_HAMMING2: Types.NormTypes.NORM_HAMMING2;
        static NORM_TYPE_MASK: Types.NormTypes.NORM_TYPE_MASK;
        static NORM_RELATIVE: Types.NormTypes.NORM_RELATIVE;
        static NORM_MINMAX: Types.NormTypes.NORM_MINMAX;

        static TM_SQDIFF: Types.TemplateMatchModes.TM_SQDIFF;
        static TM_SQDIFF_NORMED: Types.TemplateMatchModes.TM_SQDIFF_NORMED;
        static TM_CCORR: Types.TemplateMatchModes.TM_CCORR;
        static TM_CCORR_NORMED: Types.TemplateMatchModes.TM_CCORR_NORMED;
        static TM_CCOEFF: Types.TemplateMatchModes.TM_CCOEFF;
        static TM_CCOEFF_NORMED: Types.TemplateMatchModes.TM_CCOEFF_NORMED;

        static FILLED: Types.LineTypes.FILLED;
        static LINE_4: Types.LineTypes.LINE_4;
        static LINE_8: Types.LineTypes.LINE_8;
        static LINE_AA: Types.LineTypes.LINE_AA;

        // Data structures
        static Mat: DataStructures.Mat;
        static Rect: typeof Rect;
        static Size: typeof Size;
        static Point: typeof Point;
        static Scalar: typeof Scalar;
        static VideoCapture: DataStructures.VideoCapture;

        // Functions
        static imread(id: string): Mat;
        static imshow(id: string, src: Mat): void;
        static cvtColor(src: Mat, dst: Mat, code: Types.ColorConversionCodes, dstCn?: number): void;
        static resize(
            src: Mat,
            dst: Mat,
            dsize: Size,
            fx: number,
            fy: number,
            code: Types.InterpolationFlags
        ): void;

        static Canny(
            src: Mat,
            dst: Mat,
            threshold1: number,
            threshold2: number,
            apetureSize: number,
            L2gradient: boolean
        ): void;

        static GaussianBlur(
            src: Mat,
            dst: Mat,
            ksize: Size,
            sigmaX: Number,
            sigmaY: number,
            borderType: Types.BorderTypes
        ): void;

        /**
         * Draws a simple, thick, or filled up-right rectangle onto a provided source cv.Mat
         * @param img source cv.Mat where the rectangle will be rendered
         * @param pt1 a cv.Point which represnents the top left of the rectangle
         * @param pt2 a cv.Point which represents the bottom right of the rectangle
         * @param color a cv.Scalar which represents the color of the rectangle
         * @param thickness Thickness of lines that make up the rectangle. Negative values, like cv.FILLED, means that the function has to draw a filled rectangle.
         * @see https://docs.opencv.org/3.4/d6/d6e/group__imgproc__draw.html#ga07d2f74cadcf8e305e810ce8eed13bc9
         */
        static rectangle(img: Mat, pt1: Point, pt2: Point, color: Scalar, thickness?: number): void;
        /**
         * Draws a simple, thick, or filled up-right rectangle onto a provided source cv.Mat
         * @param img source cv.Mat where the rectangle will be rendered
         * @param pt1 a cv.Point which represnents the top left of the rectangle
         * @param pt2 a cv.Point which represents the bottom right of the rectangle
         * @param color a cv.Scalar which represents the color of the rectangle
         * @param thickness Thickness of lines that make up the rectangle. Negative values, like cv.FILLED, mean that the function has to draw a filled rectangle.
         * @param lineType Type of the line. See cv.LineTypes
         * @see https://docs.opencv.org/3.4/d6/d6e/group__imgproc__draw.html#ga07d2f74cadcf8e305e810ce8eed13bc9
         */
        static rectangle(
            img: Mat,
            pt1: Point,
            pt2: Point,
            color: Scalar,
            thickness: number,
            lineType?: Types.LineTypes
        ): void;
        /**
         * Draws a simple, thick, or filled up-right rectangle onto a provided source cv.Mat
         * @param img source cv.Mat where the rectangle will be rendered
         * @param pt1 a cv.Point which represnents the top left of the rectangle
         * @param pt2 a cv.Point which represents the bottom right of the rectangle
         * @param color a cv.Scalar which represents the color of the rectangle
         * @param thickness Thickness of lines that make up the rectangle. Negative values, like cv.FILLED, mean that the function has to draw a filled rectangle.
         * @param lineType Type of the line. See cv.LineTypes
         * @param shift Number of fractional bits in the point coordinates.
         * @see https://docs.opencv.org/3.4/d6/d6e/group__imgproc__draw.html#ga07d2f74cadcf8e305e810ce8eed13bc9
         */
        static rectangle(
            img: Mat,
            pt1: Point,
            pt2: Point,
            color: Scalar,
            thickness: number,
            lineType: Types.LineTypes,
            shift?: number
        ): void;
        /**
         * Draws a simple, thick, or filled up-right rectangle onto a provided source cv.Mat
         * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
         * @param img source cv.Mat where the rectangle will be rendered
         * @param rec a cv.Rect that represents the rectangle to be rendered
         * @param thickness Thickness of lines that make up the rectangle. Negative values, like cv.FILLED, mean that the function has to draw a filled rectangle.
         * @see https://docs.opencv.org/3.4/d6/d6e/group__imgproc__draw.html#ga07d2f74cadcf8e305e810ce8eed13bc9
         */
        static rectangle(img: Mat, rec: Rect, color: Scalar, thickness?: number): void;
        /**
         * Draws a simple, thick, or filled up-right rectangle onto a provided source cv.Mat
         * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
         * @param img source cv.Mat where the rectangle will be rendered
         * @param rec a cv.Rect that represents the rectangle to be rendered
         * @param thickness Thickness of lines that make up the rectangle. Negative values, like cv.FILLED, mean that the function has to draw a filled rectangle.
         * @param lineType Type of the line. See cv.LineTypes
         * @see https://docs.opencv.org/3.4/d6/d6e/group__imgproc__draw.html#ga07d2f74cadcf8e305e810ce8eed13bc9
         */
        static rectangle(
            img: Mat,
            rec: Rect,
            color: Scalar,
            thickness: number,
            lineType?: Types.LineTypes
        ): void;
        /**
         * Draws a simple, thick, or filled up-right rectangle onto a provided source cv.Mat
         * This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.
         * @param img source cv.Mat where the rectangle will be rendered
         * @param rec a cv.Rect that represents the rectangle to be rendered
         * @param thickness Thickness of lines that make up the rectangle. Negative values, like cv.FILLED, mean that the function has to draw a filled rectangle.
         * @param lineType Type of the line. See cv.LineTypes
         * @param shift Number of fractional bits in the point coordinates.
         * @see https://docs.opencv.org/3.4/d6/d6e/group__imgproc__draw.html#ga07d2f74cadcf8e305e810ce8eed13bc9
         */
        static rectangle(
            img: Mat,
            rec: Rect,
            color: Scalar,
            thickness: number,
            lineType: Types.LineTypes,
            shift?: number
        ): void;
        add(src1: Mat, src2: Mat, dst: Mat, mask?: Mat | Rect, dtype?: number): void;

        /**
         * The function cv.calcHist calculates the histogram of one or more arrays. The elements of a tuple used to
         * increment a histogram bin are taken from the corresponding input arrays at the same location.
         * @param image source arrays. They all should have the same depth, cv.CV_8U, cv.CV_16U or cv.CV_32F , and the same size. Each of them can have an arbitrary number of channels.
         * @param channels list of the dims channels used to compute the histogram.
         * @param mask optional mask. If the matrix is not empty, it must be an 8-bit array of the same size as images[i] . The non-zero mask elements mark the array elements counted in the histogram.
         * @param hist output histogram(cv.CV_32F type), which is a dense or sparse dims -dimensional array.
         * @param histSize array of histogram sizes in each dimension.
         * @param ranges array of the dims arrays of the histogram bin boundaries in each dimension.
         * @param accumulate accumulation flag. If it is set, the histogram is not cleared in the beginning when it is allocated. This feature enables you to compute a single histogram from several sets of arrays, or to update the histogram in time.
         */
        static calcHist(
            image: Mat,
            channels: Array<number>,
            mask: Mat | null,
            hist: Mat,
            histSize: Array<number>,
            ranges: Array<number>,
            accumulate?: boolean | null
        ): void;

        /**
         *
         * @param image input 8-bit 3-channel image
         * @param mask input/output 8-bit single-channel mask. The mask is initialized by the function when mode is set to GC_INIT_WITH_RECT. Its elements may have one of the cv.GrabCutClasses.
         * @param rect ROI containing a segmented object. The pixels outside of the ROI are marked as "obvious background". The parameter is only used when mode==GC_INIT_WITH_RECT.
         * @param bgdModel temporary array for the background model. Do not modify it while you are processing the same image.
         * @param fgdModel temporary arrays for the foreground model. Do not modify it while you are processing the same image.
         * @param iterCount number of iterations the algorithm should make before returning the result. Note that the result can be refined with further calls with mode==GC_INIT_WITH_MASK or mode==GC_EVAL
         * @param mode operation mode that could be one of the cv.GrabCutModes
         */

        static grabCut(
            image: Mat,
            mask: Mat,
            rect: Rect,
            bgdModel: Mat,
            fgdModel: Mat,
            iterCount: number,
            mode?: Types.GrabCutModes
        ): void;

        /**
         *
         * @param src input array.
         * @param dst output array of the same size as src .
         * @param alpha norm value to normalize to or the lower range boundary in case of the range normalization.
         * @param beta upper range boundary in case of the range normalization; it is not used for the norm normalization.
         * @param norm_type normalization type (see cv.NormTypes).
         * @param dtype when negative, the output array has the same type as src; otherwise, it has the same number of channels as src and the depth = CV_MAT_DEPTH(dtype).
         * @param mask optional operation mask.
         */
        static normalize(
            src: Mat,
            dst: Mat,
            alpha: number,
            beta: number,
            norm_type: Types.NormTypes,
            dtype: number,
            mask?: Mat
        ): void;

        /**
         * Compares a template against overlapped image regions.
         * @param image image where the search is running. It must be 8-bit or 32-bit floating-point.
         * @param templ searched template. It must be not greater than the source image and have the same data type.
         * @param result map of comparison results. It must be single-channel 32-bit floating-point.
         * @param method parameter specifying the comparison method(see cv.TemplateMatchModes).
         * @param mask mask of searched template. It must have the same datatype and size with templ. It is not set by default.
         * @see https://docs.opencv.org/master/d8/dd1/tutorial_js_template_matching.html
         */
        static matchTemplate(
            image: Mat,
            templ: Mat,
            result: Mat,
            method: Types.TemplateMatchModes,
            mask?: Mat
        ): void;

        /**
         * Gets the minimum and maximum correlation of the template matching results
         * @param dst
         * @param mask
         * @returns The minimum and maximum correlation values of the template matching result
         */
        static minMaxLoc(dst: Mat, mask: Mat): Types.minMaxLoc;

        static onRuntimeInitialized: () => void;
    }
}

export = cv;