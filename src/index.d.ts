// tslint:disable-next-line:export-just-namespace
export = cv;
export as namespace cv;

declare namespace cv {
    class BORDER_CONSTANT {}
    class BORDER_REPLICATE {}
    class BORDER_REFLECT {}
    class BORDER_WRAP {}
    class BORDER_REFLECT_101 {}
    class BORDER_TRANSPARENT {}
    class BORDER_REFLECT101 {}
    class BORDER_DEFAULT {}
    class BORDER_ISOLATED {}

    type BorderTypes =
        | BORDER_CONSTANT
        | BORDER_REPLICATE
        | BORDER_REFLECT
        | BORDER_WRAP
        | BORDER_REFLECT_101
        | BORDER_TRANSPARENT
        | BORDER_REFLECT101
        | BORDER_DEFAULT
        | BORDER_ISOLATED;

    class COLOR_BGR2BGRA {}
    class COLOR_RGB2RGBA {}
    class COLOR_BGRA2BGR {}
    class COLOR_RGBA2RGB {}
    class COLOR_BGR2RGBA {}
    class COLOR_RGB2BGRA {}
    class COLOR_RGBA2BGR {}
    class COLOR_BGRA2RGB {}
    class COLOR_BGR2RGB {}
    class COLOR_RGB2BGR {}
    class COLOR_BGRA2RGBA {}
    class COLOR_RGBA2BGRA {}
    class COLOR_BGR2GRAY {}
    class COLOR_RGB2GRAY {}
    class COLOR_GRAY2BGR {}
    class COLOR_GRAY2RGB {}
    class COLOR_GRAY2BGRA {}
    class COLOR_GRAY2RGBA {}
    class COLOR_BGRA2GRAY {}
    class COLOR_RGBA2GRAY {}
    class COLOR_BGR2BGR565 {}
    class COLOR_RGB2BGR565 {}
    class COLOR_BGR5652BGR {}
    class COLOR_BGR5652RGB {}
    class COLOR_BGRA2BGR565 {}
    class COLOR_RGBA2BGR565 {}
    class COLOR_BGR5652BGRA {}
    class COLOR_BGR5652RGBA {}
    class COLOR_GRAY2BGR565 {}
    class COLOR_BGR5652GRAY {}
    class COLOR_BGR2BGR555 {}
    class COLOR_RGB2BGR555 {}
    class COLOR_BGR5552BGR {}
    class COLOR_BGR5552RGB {}
    class COLOR_BGRA2BGR555 {}
    class COLOR_RGBA2BGR555 {}
    class COLOR_BGR5552BGRA {}
    class COLOR_BGR5552RGBA {}
    class COLOR_GRAY2BGR555 {}
    class COLOR_BGR5552GRAY {}
    class COLOR_BGR2XYZ {}
    class COLOR_RGB2XYZ {}
    class COLOR_XYZ2BGR {}
    class COLOR_XYZ2RGB {}
    class COLOR_BGR2YCrCb {}
    class COLOR_RGB2YCrCb {}
    class COLOR_YCrCb2BGR {}
    class COLOR_YCrCb2RGB {}
    class COLOR_BGR2HSV {}
    class COLOR_RGB2HSV {}
    class COLOR_BGR2Lab {}
    class COLOR_RGB2Lab {}
    class COLOR_BGR2Luv {}
    class COLOR_RGB2Luv {}
    class COLOR_BGR2HLS {}
    class COLOR_RGB2HLS {}
    class COLOR_HSV2BGR {}
    class COLOR_HSV2RGB {}
    class COLOR_Lab2BGR {}
    class COLOR_Lab2RGB {}
    class COLOR_Luv2BGR {}
    class COLOR_Luv2RGB {}
    class COLOR_HLS2BGR {}
    class COLOR_HLS2RGB {}
    class COLOR_BGR2HSV_FULL {}
    class COLOR_RGB2HSV_FULL {}
    class COLOR_BGR2HLS_FULL {}
    class COLOR_RGB2HLS_FULL {}
    class COLOR_HSV2BGR_FULL {}
    class COLOR_HSV2RGB_FULL {}
    class COLOR_HLS2BGR_FULL {}
    class COLOR_HLS2RGB_FULL {}
    class COLOR_LBGR2Lab {}
    class COLOR_LRGB2Lab {}
    class COLOR_LBGR2Luv {}
    class COLOR_LRGB2Luv {}
    class COLOR_Lab2LBGR {}
    class COLOR_Lab2LRGB {}
    class COLOR_Luv2LBGR {}
    class COLOR_Luv2LRGB {}
    class COLOR_BGR2YUV {}
    class COLOR_RGB2YUV {}
    class COLOR_YUV2BGR {}
    class COLOR_YUV2RGB {}
    class COLOR_YUV2RGB_NV12 {}
    class COLOR_YUV2BGR_NV12 {}
    class COLOR_YUV2RGB_NV21 {}
    class COLOR_YUV2BGR_NV21 {}
    class COLOR_YUV420sp2RGB {}
    class COLOR_YUV420sp2BGR {}
    class COLOR_YUV2RGBA_NV12 {}
    class COLOR_YUV2BGRA_NV12 {}
    class COLOR_YUV2RGBA_NV21 {}
    class COLOR_YUV2BGRA_NV21 {}
    class COLOR_YUV420sp2RGBA {}
    class COLOR_YUV420sp2BGRA {}
    class COLOR_YUV2RGB_YV12 {}
    class COLOR_YUV2BGR_YV12 {}
    class COLOR_YUV2RGB_IYUV {}
    class COLOR_YUV2BGR_IYUV {}
    class COLOR_YUV2RGB_I420 {}
    class COLOR_YUV2BGR_I420 {}
    class COLOR_YUV420p2RGB {}
    class COLOR_YUV420p2BGR {}
    class COLOR_YUV2RGBA_YV12 {}
    class COLOR_YUV2BGRA_YV12 {}
    class COLOR_YUV2RGBA_IYUV {}
    class COLOR_YUV2BGRA_IYUV {}
    class COLOR_YUV2RGBA_I420 {}
    class COLOR_YUV2BGRA_I420 {}
    class COLOR_YUV420p2RGBA {}
    class COLOR_YUV420p2BGRA {}
    class COLOR_YUV2GRAY_420 {}
    class COLOR_YUV2GRAY_NV21 {}
    class COLOR_YUV2GRAY_NV12 {}
    class COLOR_YUV2GRAY_YV12 {}
    class COLOR_YUV2GRAY_IYUV {}
    class COLOR_YUV2GRAY_I420 {}
    class COLOR_YUV420sp2GRAY {}
    class COLOR_YUV420p2GRAY {}
    class COLOR_YUV2RGB_UYVY {}
    class COLOR_YUV2BGR_UYVY {}
    class COLOR_YUV2RGB_Y422 {}
    class COLOR_YUV2BGR_Y422 {}
    class COLOR_YUV2RGB_UYNV {}
    class COLOR_YUV2BGR_UYNV {}
    class COLOR_YUV2RGBA_UYVY {}
    class COLOR_YUV2BGRA_UYVY {}
    class COLOR_YUV2RGBA_Y422 {}
    class COLOR_YUV2BGRA_Y422 {}
    class COLOR_YUV2RGBA_UYNV {}
    class COLOR_YUV2BGRA_UYNV {}
    class COLOR_YUV2RGB_YUY2 {}
    class COLOR_YUV2BGR_YUY2 {}
    class COLOR_YUV2RGB_YVYU {}
    class COLOR_YUV2BGR_YVYU {}
    class COLOR_YUV2RGB_YUYV {}
    class COLOR_YUV2BGR_YUYV {}
    class COLOR_YUV2RGB_YUNV {}
    class COLOR_YUV2BGR_YUNV {}
    class COLOR_YUV2RGBA_YUY2 {}
    class COLOR_YUV2BGRA_YUY2 {}
    class COLOR_YUV2RGBA_YVYU {}
    class COLOR_YUV2BGRA_YVYU {}
    class COLOR_YUV2RGBA_YUYV {}
    class COLOR_YUV2BGRA_YUYV {}
    class COLOR_YUV2RGBA_YUNV {}
    class COLOR_YUV2BGRA_YUNV {}
    class COLOR_YUV2GRAY_UYVY {}
    class COLOR_YUV2GRAY_YUY2 {}
    class COLOR_YUV2GRAY_Y422 {}
    class COLOR_YUV2GRAY_UYNV {}
    class COLOR_YUV2GRAY_YVYU {}
    class COLOR_YUV2GRAY_YUYV {}
    class COLOR_YUV2GRAY_YUNV {}
    class COLOR_RGBA2mRGBA {}
    class COLOR_mRGBA2RGBA {}
    class COLOR_RGB2YUV_I420 {}
    class COLOR_BGR2YUV_I420 {}
    class COLOR_RGB2YUV_IYUV {}
    class COLOR_BGR2YUV_IYUV {}
    class COLOR_RGBA2YUV_I420 {}
    class COLOR_BGRA2YUV_I420 {}
    class COLOR_RGBA2YUV_IYUV {}
    class COLOR_BGRA2YUV_IYUV {}
    class COLOR_RGB2YUV_YV12 {}
    class COLOR_BGR2YUV_YV12 {}
    class COLOR_RGBA2YUV_YV12 {}
    class COLOR_BGRA2YUV_YV12 {}
    class COLOR_BayerBG2BGR {}
    class COLOR_BayerGB2BGR {}
    class COLOR_BayerRG2BGR {}
    class COLOR_BayerGR2BGR {}
    class COLOR_BayerBG2RGB {}
    class COLOR_BayerGB2RGB {}
    class COLOR_BayerRG2RGB {}
    class COLOR_BayerGR2RGB {}
    class COLOR_BayerBG2GRAY {}
    class COLOR_BayerGB2GRAY {}
    class COLOR_BayerRG2GRAY {}
    class COLOR_BayerGR2GRAY {}
    class COLOR_BayerBG2BGR_VNG {}
    class COLOR_BayerGB2BGR_VNG {}
    class COLOR_BayerRG2BGR_VNG {}
    class COLOR_BayerGR2BGR_VNG {}
    class COLOR_BayerBG2RGB_VNG {}
    class COLOR_BayerGB2RGB_VNG {}
    class COLOR_BayerRG2RGB_VNG {}
    class COLOR_BayerGR2RGB_VNG {}
    class COLOR_BayerBG2BGR_EA {}
    class COLOR_BayerGB2BGR_EA {}
    class COLOR_BayerRG2BGR_EA {}
    class COLOR_BayerGR2BGR_EA {}
    class COLOR_BayerBG2RGB_EA {}
    class COLOR_BayerGB2RGB_EA {}
    class COLOR_BayerRG2RGB_EA {}
    class COLOR_BayerGR2RGB_EA {}
    class COLOR_BayerBG2BGRA {}
    class COLOR_BayerGB2BGRA {}
    class COLOR_BayerRG2BGRA {}
    class COLOR_BayerGR2BGRA {}
    class COLOR_BayerBG2RGBA {}
    class COLOR_BayerGB2RGBA {}
    class COLOR_BayerRG2RGBA {}
    class COLOR_BayerGR2RGBA {}
    class COLOR_COLORCVT_MAX {}

    type ColorConversionCodes =
        | COLOR_BGR2BGRA
        | COLOR_RGB2RGBA
        | COLOR_BGRA2BGR
        | COLOR_RGBA2RGB
        | COLOR_BGR2RGBA
        | COLOR_RGB2BGRA
        | COLOR_RGBA2BGR
        | COLOR_BGRA2RGB
        | COLOR_BGR2RGB
        | COLOR_RGB2BGR
        | COLOR_BGRA2RGBA
        | COLOR_RGBA2BGRA
        | COLOR_BGR2GRAY
        | COLOR_RGB2GRAY
        | COLOR_GRAY2BGR
        | COLOR_GRAY2RGB
        | COLOR_GRAY2BGRA
        | COLOR_GRAY2RGBA
        | COLOR_BGRA2GRAY
        | COLOR_RGBA2GRAY
        | COLOR_BGR2BGR565
        | COLOR_RGB2BGR565
        | COLOR_BGR5652BGR
        | COLOR_BGR5652RGB
        | COLOR_BGRA2BGR565
        | COLOR_RGBA2BGR565
        | COLOR_BGR5652BGRA
        | COLOR_BGR5652RGBA
        | COLOR_GRAY2BGR565
        | COLOR_BGR5652GRAY
        | COLOR_BGR2BGR555
        | COLOR_RGB2BGR555
        | COLOR_BGR5552BGR
        | COLOR_BGR5552RGB
        | COLOR_BGRA2BGR555
        | COLOR_RGBA2BGR555
        | COLOR_BGR5552BGRA
        | COLOR_BGR5552RGBA
        | COLOR_GRAY2BGR555
        | COLOR_BGR5552GRAY
        | COLOR_BGR2XYZ
        | COLOR_RGB2XYZ
        | COLOR_XYZ2BGR
        | COLOR_XYZ2RGB
        | COLOR_BGR2YCrCb
        | COLOR_RGB2YCrCb
        | COLOR_YCrCb2BGR
        | COLOR_YCrCb2RGB
        | COLOR_BGR2HSV
        | COLOR_RGB2HSV
        | COLOR_BGR2Lab
        | COLOR_RGB2Lab
        | COLOR_BGR2Luv
        | COLOR_RGB2Luv
        | COLOR_BGR2HLS
        | COLOR_RGB2HLS
        | COLOR_HSV2BGR
        | COLOR_HSV2RGB
        | COLOR_Lab2BGR
        | COLOR_Lab2RGB
        | COLOR_Luv2BGR
        | COLOR_Luv2RGB
        | COLOR_HLS2BGR
        | COLOR_HLS2RGB
        | COLOR_BGR2HSV_FULL
        | COLOR_RGB2HSV_FULL
        | COLOR_BGR2HLS_FULL
        | COLOR_RGB2HLS_FULL
        | COLOR_HSV2BGR_FULL
        | COLOR_HSV2RGB_FULL
        | COLOR_HLS2BGR_FULL
        | COLOR_HLS2RGB_FULL
        | COLOR_LBGR2Lab
        | COLOR_LRGB2Lab
        | COLOR_LBGR2Luv
        | COLOR_LRGB2Luv
        | COLOR_Lab2LBGR
        | COLOR_Lab2LRGB
        | COLOR_Luv2LBGR
        | COLOR_Luv2LRGB
        | COLOR_BGR2YUV
        | COLOR_RGB2YUV
        | COLOR_YUV2BGR
        | COLOR_YUV2RGB
        | COLOR_YUV2RGB_NV12
        | COLOR_YUV2BGR_NV12
        | COLOR_YUV2RGB_NV21
        | COLOR_YUV2BGR_NV21
        | COLOR_YUV420sp2RGB
        | COLOR_YUV420sp2BGR
        | COLOR_YUV2RGBA_NV12
        | COLOR_YUV2BGRA_NV12
        | COLOR_YUV2RGBA_NV21
        | COLOR_YUV2BGRA_NV21
        | COLOR_YUV420sp2RGBA
        | COLOR_YUV420sp2BGRA
        | COLOR_YUV2RGB_YV12
        | COLOR_YUV2BGR_YV12
        | COLOR_YUV2RGB_IYUV
        | COLOR_YUV2BGR_IYUV
        | COLOR_YUV2RGB_I420
        | COLOR_YUV2BGR_I420
        | COLOR_YUV420p2RGB
        | COLOR_YUV420p2BGR
        | COLOR_YUV2RGBA_YV12
        | COLOR_YUV2BGRA_YV12
        | COLOR_YUV2RGBA_IYUV
        | COLOR_YUV2BGRA_IYUV
        | COLOR_YUV2RGBA_I420
        | COLOR_YUV2BGRA_I420
        | COLOR_YUV420p2RGBA
        | COLOR_YUV420p2BGRA
        | COLOR_YUV2GRAY_420
        | COLOR_YUV2GRAY_NV21
        | COLOR_YUV2GRAY_NV12
        | COLOR_YUV2GRAY_YV12
        | COLOR_YUV2GRAY_IYUV
        | COLOR_YUV2GRAY_I420
        | COLOR_YUV420sp2GRAY
        | COLOR_YUV420p2GRAY
        | COLOR_YUV2RGB_UYVY
        | COLOR_YUV2BGR_UYVY
        | COLOR_YUV2RGB_Y422
        | COLOR_YUV2BGR_Y422
        | COLOR_YUV2RGB_UYNV
        | COLOR_YUV2BGR_UYNV
        | COLOR_YUV2RGBA_UYVY
        | COLOR_YUV2BGRA_UYVY
        | COLOR_YUV2RGBA_Y422
        | COLOR_YUV2BGRA_Y422
        | COLOR_YUV2RGBA_UYNV
        | COLOR_YUV2BGRA_UYNV
        | COLOR_YUV2RGB_YUY2
        | COLOR_YUV2BGR_YUY2
        | COLOR_YUV2RGB_YVYU
        | COLOR_YUV2BGR_YVYU
        | COLOR_YUV2RGB_YUYV
        | COLOR_YUV2BGR_YUYV
        | COLOR_YUV2RGB_YUNV
        | COLOR_YUV2BGR_YUNV
        | COLOR_YUV2RGBA_YUY2
        | COLOR_YUV2BGRA_YUY2
        | COLOR_YUV2RGBA_YVYU
        | COLOR_YUV2BGRA_YVYU
        | COLOR_YUV2RGBA_YUYV
        | COLOR_YUV2BGRA_YUYV
        | COLOR_YUV2RGBA_YUNV
        | COLOR_YUV2BGRA_YUNV
        | COLOR_YUV2GRAY_UYVY
        | COLOR_YUV2GRAY_YUY2
        | COLOR_YUV2GRAY_Y422
        | COLOR_YUV2GRAY_UYNV
        | COLOR_YUV2GRAY_YVYU
        | COLOR_YUV2GRAY_YUYV
        | COLOR_YUV2GRAY_YUNV
        | COLOR_RGBA2mRGBA
        | COLOR_mRGBA2RGBA
        | COLOR_RGB2YUV_I420
        | COLOR_BGR2YUV_I420
        | COLOR_RGB2YUV_IYUV
        | COLOR_BGR2YUV_IYUV
        | COLOR_RGBA2YUV_I420
        | COLOR_BGRA2YUV_I420
        | COLOR_RGBA2YUV_IYUV
        | COLOR_BGRA2YUV_IYUV
        | COLOR_RGB2YUV_YV12
        | COLOR_BGR2YUV_YV12
        | COLOR_RGBA2YUV_YV12
        | COLOR_BGRA2YUV_YV12
        | COLOR_BayerBG2BGR
        | COLOR_BayerGB2BGR
        | COLOR_BayerRG2BGR
        | COLOR_BayerGR2BGR
        | COLOR_BayerBG2RGB
        | COLOR_BayerGB2RGB
        | COLOR_BayerRG2RGB
        | COLOR_BayerGR2RGB
        | COLOR_BayerBG2GRAY
        | COLOR_BayerGB2GRAY
        | COLOR_BayerRG2GRAY
        | COLOR_BayerGR2GRAY
        | COLOR_BayerBG2BGR_VNG
        | COLOR_BayerGB2BGR_VNG
        | COLOR_BayerRG2BGR_VNG
        | COLOR_BayerGR2BGR_VNG
        | COLOR_BayerBG2RGB_VNG
        | COLOR_BayerGB2RGB_VNG
        | COLOR_BayerRG2RGB_VNG
        | COLOR_BayerGR2RGB_VNG
        | COLOR_BayerBG2BGR_EA
        | COLOR_BayerGB2BGR_EA
        | COLOR_BayerRG2BGR_EA
        | COLOR_BayerGR2BGR_EA
        | COLOR_BayerBG2RGB_EA
        | COLOR_BayerGB2RGB_EA
        | COLOR_BayerRG2RGB_EA
        | COLOR_BayerGR2RGB_EA
        | COLOR_BayerBG2BGRA
        | COLOR_BayerGB2BGRA
        | COLOR_BayerRG2BGRA
        | COLOR_BayerGR2BGRA
        | COLOR_BayerBG2RGBA
        | COLOR_BayerGB2RGBA
        | COLOR_BayerRG2RGBA
        | COLOR_BayerGR2RGBA
        | COLOR_COLORCVT_MAX;

    class CV_8UC1 {}
    class CV_8UC2 {}
    class CV_8UC3 {}
    class CV_8UC4 {}
    class CV_8SC1 {}
    class CV_8SC2 {}
    class CV_8SC3 {}
    class CV_8SC4 {}
    class CV_16UC1 {}
    class CV_16UC2 {}
    class CV_16UC3 {}
    class CV_16UC4 {}
    class CV_16SC1 {}
    class CV_16SC2 {}
    class CV_16SC3 {}
    class CV_16SC4 {}
    class CV_32SC1 {}
    class CV_32SC2 {}
    class CV_32SC3 {}
    class CV_32SC4 {}
    class CV_32FC1 {}
    class CV_32FC2 {}
    class CV_32FC3 {}
    class CV_32FC4 {}
    class CV_64FC1 {}
    class CV_64FC2 {}
    class CV_64FC3 {}
    class CV_64FC4 {}
    class CV_16FC1 {}
    class CV_16FC2 {}
    class CV_16FC3 {}
    class CV_16FC4 {}

    type DataTypes =
        | CV_8UC1
        | CV_8UC2
        | CV_8UC3
        | CV_8UC4
        | CV_8SC1
        | CV_8SC2
        | CV_8SC3
        | CV_8SC4
        | CV_16UC1
        | CV_16UC2
        | CV_16UC3
        | CV_16UC4
        | CV_16SC1
        | CV_16SC2
        | CV_16SC3
        | CV_16SC4
        | CV_32SC1
        | CV_32SC2
        | CV_32SC3
        | CV_32SC4
        | CV_32FC1
        | CV_32FC2
        | CV_32FC3
        | CV_32FC4
        | CV_64FC1
        | CV_64FC2
        | CV_64FC3
        | CV_64FC4
        | CV_16FC1
        | CV_16FC2
        | CV_16FC3
        | CV_16FC4;

    class INTER_NEAREST {}
    class INTER_LINEAR {}
    class INTER_CUBIC {}
    class INTER_AREA {}
    class INTER_LANCZOS4 {}
    class INTER_LINEAR_EXACT {}
    class INTER_NEAREST_EXACT {}
    class INTER_MAX {}
    class WARP_FILL_OUTLIERS {}
    class WARP_INVERSE_MAP {}

    type InterpolationFlags =
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

    // GrabCut algorithm flags
    class GC_INIT_WITH_RECT {}
    class GC_INIT_WITH_MASK {}
    class GC_EVAL {}
    class GC_EVAL_FREEZE_MODEL {}

    type GrabCutModes = GC_INIT_WITH_RECT | GC_INIT_WITH_MASK | GC_EVAL | GC_EVAL_FREEZE_MODEL;

    //Histogram normalization types
    class NORM_INF {}
    class NORM_L1 {}
    class NORM_L2 {}
    class NORM_L2SQR {}
    class NORM_HAMMING {}
    class NORM_HAMMING2 {}
    class NORM_TYPE_MASK {}
    class NORM_RELATIVE {}
    class NORM_MINMAX {}

    type NormTypes =
        | NORM_INF
        | NORM_L1
        | NORM_L2
        | NORM_L2SQR
        | NORM_HAMMING
        | NORM_HAMMING2
        | NORM_TYPE_MASK
        | NORM_RELATIVE
        | NORM_MINMAX;

    // TemplateMatchModes
    class TM_SQDIFF {}
    class TM_SQDIFF_NORMED {}
    class TM_CCORR {}
    class TM_CCORR_NORMED {}
    class TM_CCOEFF {}
    class TM_CCOEFF_NORMED {}

    type TemplateMatchModes =
        | TM_SQDIFF
        | TM_SQDIFF_NORMED
        | TM_CCORR
        | TM_CCORR_NORMED
        | TM_CCOEFF
        | TM_CCOEFF_NORMED;

    // Data structures

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
        constructor(rows: number, cols: number, type: ColorConversionCodes);
        constructor(size: any, type: any);
        constructor(rows: number, cols: number, type: ColorConversionCodes, color: Scalar);
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
        static zeros(size: Size, type: ColorConversionCodes): Mat;
        /**
         * Create a Mat which is full of zeros
         * @param rows the width of the source cv.Mat
         * @param cols the height of the source cv.Mat
         * @param type the color type of the source cv.Mat (cv.ColorConversionCodes)
         */
        static zeros(rows: number, cols: number, type: ColorConversionCodes): Mat;
        /**
         * Create a Mat which is full of ones
         * @param size a size of cv.Size
         * @param type color type of soure cv.Mat
         */
        static ones(size: Size, type: ColorConversionCodes): Mat;
        /**
         * * Create a Mat which is full of ones
         * @param rows the width of the source cv.Mat
         * @param cols the height of the source cv.Mat
         * @param type the color type of the source cv.Mat (cv.ColorConversionCodes)
         */
        static ones(rows: number, cols: number, type: ColorConversionCodes): Mat;
        /**
         * Remove Mat from memory
         */
        delete(): void;
    }
    /**
     * Template class for 2D points specified by its coordinates x and y.
     * @see https://docs.opencv.org/master/d5/df1/tutorial_js_some_data_structures.html
     */
    class Point {
        constructor(x: number, y: number);
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
        constructor(video: HTMLVideoElement | HTMLCanvasElement);
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
         */
        constructor(r: number, g: number, b: number);
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

    // Public functions

    function imread(id: string): Mat;

    function imshow(id: string, src: Mat): void;

    function cvtColor(src: Mat, dst: Mat, code: ColorConversionCodes, dstCn?: number): void;

    function resize(
        src: Mat,
        dst: Mat,
        dsize: Size,
        fx: number,
        fy: number,
        code: InterpolationFlags
    ): void;

    function Canny(
        src: Mat,
        dst: Mat,
        threshold1: number,
        threshold2: number,
        apetureSize: number,
        L2gradient: boolean
    ): void;

    function GaussianBlur(
        src: Mat,
        dst: Mat,
        ksize: Size,
        sigmaX: Number,
        sigmaY: number,
        borderType: BorderTypes
    ): void;

    function rectangle(src: Mat, p1: Point, p2: Point, color: Scalar): void;
    function rectangle(x1: number, y1: number, x2: number, y2: number): void;
    function add(src1: Mat, src2: Mat, dst: Mat, mask?: Mat | Rect, dtype?: number): void;

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
    function calcHist(
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

    function grabCut(
        image: Mat,
        mask: Mat,
        rect: Mat,
        bgdModel: Mat,
        fgdModel: Mat,
        iterCount: number,
        mode?: GrabCutModes
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
    function normalize(
        src: Mat,
        dst: Mat,
        alpha: number,
        beta: number,
        norm_type: NormTypes,
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
    function matchTemplate(
        image: Mat,
        templ: Mat,
        result: Mat,
        method: TemplateMatchModes,
        mask?: Mat
    ): void;
    /**
     * Gets the minimum and maximum correlation of the template matching results
     * @param dst
     * @param mask
     * @returns The minimum and maximum correlation values of the template matching result
     */
    function minMaxLoc(dst: Mat, mask: Mat): any;
}
