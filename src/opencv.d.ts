import { DataTypes, _DataTypes } from './core/HalInterface';
import {
    ColorConversionCodes,
    _ColorConversionCodes,
    ColorConversions,
} from './core/ColorConversion';
import { Mat } from './core/Mat';
import { Point } from './core/Point';
import { Size } from './core/Size';
import { Range } from './core/Range';
import { Scalar } from './core/Scalar';
import { Rect } from './core/Rect';
import {
    MorphShapes,
    _MorphShapes,
    MorphTypes,
    _MorphTypes,
    SpecialFilter,
    _SpecialFilter,
    ImageFiltering,
} from './ImageProcessing/ImageFiltering';
import { TermCriteria } from './core/TermCriteria';
import { BorderTypes } from './core/ArrayOps';

declare module opencv {
    interface VideoCapture {
        /**
         * Creates a VideoCapture object that reads from a source HTMLVideoElement
         */
        new (videoSource: string | HTMLVideoElement): VideoCapture;
        /**
         * Outputs a HTMLVideo elements frame to an instance of a Mat object
         * @param src cv.Mat to output to
         */
        read(src: Mat): void;
    }
    abstract class cv
        implements
            _DataTypes,
            _ColorConversionCodes,
            _MorphShapes,
            _MorphTypes,
            _SpecialFilter,
            ImageFiltering,
            ColorConversions {
        // Color Conversions
        COLOR_BGR2BGRA: ColorConversionCodes.COLOR_BGR2BGRA;
        COLOR_RGB2RGBA: ColorConversionCodes.COLOR_RGB2RGBA;
        COLOR_BGRA2BGR: ColorConversionCodes.COLOR_BGRA2BGR;
        COLOR_RGBA2RGB: ColorConversionCodes.COLOR_RGBA2RGB;
        COLOR_BGR2RGBA: ColorConversionCodes.COLOR_BGR2RGBA;
        COLOR_RGB2BGRA: ColorConversionCodes.COLOR_RGB2BGRA;
        COLOR_RGBA2BGR: ColorConversionCodes.COLOR_RGBA2BGR;
        COLOR_BGRA2RGB: ColorConversionCodes.COLOR_BGRA2RGB;
        COLOR_BGR2RGB: ColorConversionCodes.COLOR_BGR2RGB;
        COLOR_RGB2BGR: ColorConversionCodes.COLOR_RGB2BGR;
        COLOR_BGRA2RGBA: ColorConversionCodes.COLOR_BGRA2RGBA;
        COLOR_RGBA2BGRA: ColorConversionCodes.COLOR_RGBA2BGRA;
        COLOR_BGR2GRAY: ColorConversionCodes.COLOR_BGR2GRAY;
        COLOR_RGB2GRAY: ColorConversionCodes.COLOR_RGB2GRAY;
        COLOR_GRAY2BGR: ColorConversionCodes.COLOR_GRAY2BGR;
        COLOR_GRAY2RGB: ColorConversionCodes.COLOR_GRAY2RGB;
        COLOR_GRAY2BGRA: ColorConversionCodes.COLOR_GRAY2BGRA;
        COLOR_GRAY2RGBA: ColorConversionCodes.COLOR_GRAY2RGBA;
        COLOR_BGRA2GRAY: ColorConversionCodes.COLOR_BGRA2GRAY;
        COLOR_RGBA2GRAY: ColorConversionCodes.COLOR_RGBA2GRAY;
        COLOR_BGR2BGR565: ColorConversionCodes.COLOR_BGR2BGR565;
        COLOR_RGB2BGR565: ColorConversionCodes.COLOR_RGB2BGR565;
        COLOR_BGR5652BGR: ColorConversionCodes.COLOR_BGR5652BGR;
        COLOR_BGR5652RGB: ColorConversionCodes.COLOR_BGR5652RGB;
        COLOR_BGRA2BGR565: ColorConversionCodes.COLOR_BGRA2BGR565;
        COLOR_RGBA2BGR565: ColorConversionCodes.COLOR_RGBA2BGR565;
        COLOR_BGR5652BGRA: ColorConversionCodes.COLOR_BGR5652BGRA;
        COLOR_BGR5652RGBA: ColorConversionCodes.COLOR_BGR5652RGBA;
        COLOR_GRAY2BGR565: ColorConversionCodes.COLOR_GRAY2BGR565;
        COLOR_BGR5652GRAY: ColorConversionCodes.COLOR_BGR5652GRAY;
        COLOR_BGR2BGR555: ColorConversionCodes.COLOR_BGR2BGR555;
        COLOR_RGB2BGR555: ColorConversionCodes.COLOR_RGB2BGR555;
        COLOR_BGR5552BGR: ColorConversionCodes.COLOR_BGR5552BGR;
        COLOR_BGR5552RGB: ColorConversionCodes.COLOR_BGR5552RGB;
        COLOR_BGRA2BGR555: ColorConversionCodes.COLOR_BGRA2BGR555;
        COLOR_RGBA2BGR555: ColorConversionCodes.COLOR_RGBA2BGR555;
        COLOR_BGR5552BGRA: ColorConversionCodes.COLOR_BGR5552BGRA;
        COLOR_BGR5552RGBA: ColorConversionCodes.COLOR_BGR5552RGBA;
        COLOR_GRAY2BGR555: ColorConversionCodes.COLOR_GRAY2BGR555;
        COLOR_BGR5552GRAY: ColorConversionCodes.COLOR_BGR5552GRAY;
        COLOR_BGR2XYZ: ColorConversionCodes.COLOR_BGR2XYZ;
        COLOR_RGB2XYZ: ColorConversionCodes.COLOR_RGB2XYZ;
        COLOR_XYZ2BGR: ColorConversionCodes.COLOR_XYZ2BGR;
        COLOR_XYZ2RGB: ColorConversionCodes.COLOR_XYZ2RGB;
        COLOR_BGR2YCrCb: ColorConversionCodes.COLOR_BGR2YCrCb;
        COLOR_RGB2YCrCb: ColorConversionCodes.COLOR_RGB2YCrCb;
        COLOR_YCrCb2BGR: ColorConversionCodes.COLOR_YCrCb2BGR;
        COLOR_YCrCb2RGB: ColorConversionCodes.COLOR_YCrCb2RGB;
        COLOR_BGR2HSV: ColorConversionCodes.COLOR_BGR2HSV;
        COLOR_RGB2HSV: ColorConversionCodes.COLOR_RGB2HSV;
        COLOR_BGR2Lab: ColorConversionCodes.COLOR_BGR2Lab;
        COLOR_RGB2Lab: ColorConversionCodes.COLOR_RGB2Lab;
        COLOR_BGR2Luv: ColorConversionCodes.COLOR_BGR2Luv;
        COLOR_RGB2Luv: ColorConversionCodes.COLOR_RGB2Luv;
        COLOR_BGR2HLS: ColorConversionCodes.COLOR_BGR2HLS;
        COLOR_RGB2HLS: ColorConversionCodes.COLOR_RGB2HLS;
        COLOR_HSV2BGR: ColorConversionCodes.COLOR_HSV2BGR;
        COLOR_HSV2RGB: ColorConversionCodes.COLOR_HSV2RGB;
        COLOR_Lab2BGR: ColorConversionCodes.COLOR_Lab2BGR;
        COLOR_Lab2RGB: ColorConversionCodes.COLOR_Lab2RGB;
        COLOR_Luv2BGR: ColorConversionCodes.COLOR_Luv2BGR;
        COLOR_Luv2RGB: ColorConversionCodes.COLOR_Luv2RGB;
        COLOR_HLS2BGR: ColorConversionCodes.COLOR_HLS2BGR;
        COLOR_HLS2RGB: ColorConversionCodes.COLOR_HLS2RGB;
        COLOR_BGR2HSV_FULL: ColorConversionCodes.COLOR_BGR2HSV_FULL;
        COLOR_RGB2HSV_FULL: ColorConversionCodes.COLOR_RGB2HSV_FULL;
        COLOR_BGR2HLS_FULL: ColorConversionCodes.COLOR_BGR2HLS_FULL;
        COLOR_RGB2HLS_FULL: ColorConversionCodes.COLOR_RGB2HLS_FULL;
        COLOR_HSV2BGR_FULL: ColorConversionCodes.COLOR_HSV2BGR_FULL;
        COLOR_HSV2RGB_FULL: ColorConversionCodes.COLOR_HSV2RGB_FULL;
        COLOR_HLS2BGR_FULL: ColorConversionCodes.COLOR_HLS2BGR_FULL;
        COLOR_HLS2RGB_FULL: ColorConversionCodes.COLOR_HLS2RGB_FULL;
        COLOR_LBGR2Lab: ColorConversionCodes.COLOR_LBGR2Lab;
        COLOR_LRGB2Lab: ColorConversionCodes.COLOR_LRGB2Lab;
        COLOR_LBGR2Luv: ColorConversionCodes.COLOR_LBGR2Luv;
        COLOR_LRGB2Luv: ColorConversionCodes.COLOR_LRGB2Luv;
        COLOR_Lab2LBGR: ColorConversionCodes.COLOR_Lab2LBGR;
        COLOR_Lab2LRGB: ColorConversionCodes.COLOR_Lab2LRGB;
        COLOR_Luv2LBGR: ColorConversionCodes.COLOR_Luv2LBGR;
        COLOR_Luv2LRGB: ColorConversionCodes.COLOR_Luv2LRGB;
        COLOR_BGR2YUV: ColorConversionCodes.COLOR_BGR2YUV;
        COLOR_RGB2YUV: ColorConversionCodes.COLOR_RGB2YUV;
        COLOR_YUV2BGR: ColorConversionCodes.COLOR_YUV2BGR;
        COLOR_YUV2RGB: ColorConversionCodes.COLOR_YUV2RGB;
        COLOR_YUV2RGB_NV12: ColorConversionCodes.COLOR_YUV2RGB_NV12;
        COLOR_YUV2BGR_NV12: ColorConversionCodes.COLOR_YUV2BGR_NV12;
        COLOR_YUV2RGB_NV21: ColorConversionCodes.COLOR_YUV2RGB_NV21;
        COLOR_YUV2BGR_NV21: ColorConversionCodes.COLOR_YUV2BGR_NV21;
        COLOR_YUV420sp2RGB: ColorConversionCodes.COLOR_YUV420sp2RGB;
        COLOR_YUV420sp2BGR: ColorConversionCodes.COLOR_YUV420sp2BGR;
        COLOR_YUV2RGBA_NV12: ColorConversionCodes.COLOR_YUV2RGBA_NV12;
        COLOR_YUV2BGRA_NV12: ColorConversionCodes.COLOR_YUV2BGRA_NV12;
        COLOR_YUV2RGBA_NV21: ColorConversionCodes.COLOR_YUV2RGBA_NV21;
        COLOR_YUV2BGRA_NV21: ColorConversionCodes.COLOR_YUV2BGRA_NV21;
        COLOR_YUV420sp2RGBA: ColorConversionCodes.COLOR_YUV420sp2RGBA;
        COLOR_YUV420sp2BGRA: ColorConversionCodes.COLOR_YUV420sp2BGRA;
        COLOR_YUV2RGB_YV12: ColorConversionCodes.COLOR_YUV2RGB_YV12;
        COLOR_YUV2BGR_YV12: ColorConversionCodes.COLOR_YUV2BGR_YV12;
        COLOR_YUV2RGB_IYUV: ColorConversionCodes.COLOR_YUV2RGB_IYUV;
        COLOR_YUV2BGR_IYUV: ColorConversionCodes.COLOR_YUV2BGR_IYUV;
        COLOR_YUV2RGB_I420: ColorConversionCodes.COLOR_YUV2RGB_I420;
        COLOR_YUV2BGR_I420: ColorConversionCodes.COLOR_YUV2BGR_I420;
        COLOR_YUV420p2RGB: ColorConversionCodes.COLOR_YUV420p2RGB;
        COLOR_YUV420p2BGR: ColorConversionCodes.COLOR_YUV420p2BGR;
        COLOR_YUV2RGBA_YV12: ColorConversionCodes.COLOR_YUV2RGBA_YV12;
        COLOR_YUV2BGRA_YV12: ColorConversionCodes.COLOR_YUV2BGRA_YV12;
        COLOR_YUV2RGBA_IYUV: ColorConversionCodes.COLOR_YUV2RGBA_IYUV;
        COLOR_YUV2BGRA_IYUV: ColorConversionCodes.COLOR_YUV2BGRA_IYUV;
        COLOR_YUV2RGBA_I420: ColorConversionCodes.COLOR_YUV2RGBA_I420;
        COLOR_YUV2BGRA_I420: ColorConversionCodes.COLOR_YUV2BGRA_I420;
        COLOR_YUV420p2RGBA: ColorConversionCodes.COLOR_YUV420p2RGBA;
        COLOR_YUV420p2BGRA: ColorConversionCodes.COLOR_YUV420p2BGRA;
        COLOR_YUV2GRAY_420: ColorConversionCodes.COLOR_YUV2GRAY_420;
        COLOR_YUV2GRAY_NV21: ColorConversionCodes.COLOR_YUV2GRAY_NV21;
        COLOR_YUV2GRAY_NV12: ColorConversionCodes.COLOR_YUV2GRAY_NV12;
        COLOR_YUV2GRAY_YV12: ColorConversionCodes.COLOR_YUV2GRAY_YV12;
        COLOR_YUV2GRAY_IYUV: ColorConversionCodes.COLOR_YUV2GRAY_IYUV;
        COLOR_YUV2GRAY_I420: ColorConversionCodes.COLOR_YUV2GRAY_I420;
        COLOR_YUV420sp2GRAY: ColorConversionCodes.COLOR_YUV420sp2GRAY;
        COLOR_YUV420p2GRAY: ColorConversionCodes.COLOR_YUV420p2GRAY;
        COLOR_YUV2RGB_UYVY: ColorConversionCodes.COLOR_YUV2RGB_UYVY;
        COLOR_YUV2BGR_UYVY: ColorConversionCodes.COLOR_YUV2BGR_UYVY;
        COLOR_YUV2RGB_Y422: ColorConversionCodes.COLOR_YUV2RGB_Y422;
        COLOR_YUV2BGR_Y422: ColorConversionCodes.COLOR_YUV2BGR_Y422;
        COLOR_YUV2RGB_UYNV: ColorConversionCodes.COLOR_YUV2RGB_UYNV;
        COLOR_YUV2BGR_UYNV: ColorConversionCodes.COLOR_YUV2BGR_UYNV;
        COLOR_YUV2RGBA_UYVY: ColorConversionCodes.COLOR_YUV2RGBA_UYVY;
        COLOR_YUV2BGRA_UYVY: ColorConversionCodes.COLOR_YUV2BGRA_UYVY;
        COLOR_YUV2RGBA_Y422: ColorConversionCodes.COLOR_YUV2RGBA_Y422;
        COLOR_YUV2BGRA_Y422: ColorConversionCodes.COLOR_YUV2BGRA_Y422;
        COLOR_YUV2RGBA_UYNV: ColorConversionCodes.COLOR_YUV2RGBA_UYNV;
        COLOR_YUV2BGRA_UYNV: ColorConversionCodes.COLOR_YUV2BGRA_UYNV;
        COLOR_YUV2RGB_YUY2: ColorConversionCodes.COLOR_YUV2RGB_YUY2;
        COLOR_YUV2BGR_YUY2: ColorConversionCodes.COLOR_YUV2BGR_YUY2;
        COLOR_YUV2RGB_YVYU: ColorConversionCodes.COLOR_YUV2RGB_YVYU;
        COLOR_YUV2BGR_YVYU: ColorConversionCodes.COLOR_YUV2BGR_YVYU;
        COLOR_YUV2RGB_YUYV: ColorConversionCodes.COLOR_YUV2RGB_YUYV;
        COLOR_YUV2BGR_YUYV: ColorConversionCodes.COLOR_YUV2BGR_YUYV;
        COLOR_YUV2RGB_YUNV: ColorConversionCodes.COLOR_YUV2RGB_YUNV;
        COLOR_YUV2BGR_YUNV: ColorConversionCodes.COLOR_YUV2BGR_YUNV;
        COLOR_YUV2RGBA_YUY2: ColorConversionCodes.COLOR_YUV2RGBA_YUY2;
        COLOR_YUV2BGRA_YUY2: ColorConversionCodes.COLOR_YUV2BGRA_YUY2;
        COLOR_YUV2RGBA_YVYU: ColorConversionCodes.COLOR_YUV2RGBA_YVYU;
        COLOR_YUV2BGRA_YVYU: ColorConversionCodes.COLOR_YUV2BGRA_YVYU;
        COLOR_YUV2RGBA_YUYV: ColorConversionCodes.COLOR_YUV2RGBA_YUYV;
        COLOR_YUV2BGRA_YUYV: ColorConversionCodes.COLOR_YUV2BGRA_YUYV;
        COLOR_YUV2RGBA_YUNV: ColorConversionCodes.COLOR_YUV2RGBA_YUNV;
        COLOR_YUV2BGRA_YUNV: ColorConversionCodes.COLOR_YUV2BGRA_YUNV;
        COLOR_YUV2GRAY_UYVY: ColorConversionCodes.COLOR_YUV2GRAY_UYVY;
        COLOR_YUV2GRAY_YUY2: ColorConversionCodes.COLOR_YUV2GRAY_YUY2;
        COLOR_YUV2GRAY_Y422: ColorConversionCodes.COLOR_YUV2GRAY_Y422;
        COLOR_YUV2GRAY_UYNV: ColorConversionCodes.COLOR_YUV2GRAY_UYNV;
        COLOR_YUV2GRAY_YVYU: ColorConversionCodes.COLOR_YUV2GRAY_YVYU;
        COLOR_YUV2GRAY_YUYV: ColorConversionCodes.COLOR_YUV2GRAY_YUYV;
        COLOR_YUV2GRAY_YUNV: ColorConversionCodes.COLOR_YUV2GRAY_YUNV;
        COLOR_RGBA2mRGBA: ColorConversionCodes.COLOR_RGBA2mRGBA;
        COLOR_mRGBA2RGBA: ColorConversionCodes.COLOR_mRGBA2RGBA;
        COLOR_RGB2YUV_I420: ColorConversionCodes.COLOR_RGB2YUV_I420;
        COLOR_BGR2YUV_I420: ColorConversionCodes.COLOR_BGR2YUV_I420;
        COLOR_RGB2YUV_IYUV: ColorConversionCodes.COLOR_RGB2YUV_IYUV;
        COLOR_BGR2YUV_IYUV: ColorConversionCodes.COLOR_BGR2YUV_IYUV;
        COLOR_RGBA2YUV_I420: ColorConversionCodes.COLOR_RGBA2YUV_I420;
        COLOR_BGRA2YUV_I420: ColorConversionCodes.COLOR_BGRA2YUV_I420;
        COLOR_RGBA2YUV_IYUV: ColorConversionCodes.COLOR_RGBA2YUV_IYUV;
        COLOR_BGRA2YUV_IYUV: ColorConversionCodes.COLOR_BGRA2YUV_IYUV;
        COLOR_RGB2YUV_YV12: ColorConversionCodes.COLOR_RGB2YUV_YV12;
        COLOR_BGR2YUV_YV12: ColorConversionCodes.COLOR_BGR2YUV_YV12;
        COLOR_RGBA2YUV_YV12: ColorConversionCodes.COLOR_RGBA2YUV_YV12;
        COLOR_BGRA2YUV_YV12: ColorConversionCodes.COLOR_BGRA2YUV_YV12;
        COLOR_BayerBG2BGR: ColorConversionCodes.COLOR_BayerBG2BGR;
        COLOR_BayerGB2BGR: ColorConversionCodes.COLOR_BayerGB2BGR;
        COLOR_BayerRG2BGR: ColorConversionCodes.COLOR_BayerRG2BGR;
        COLOR_BayerGR2BGR: ColorConversionCodes.COLOR_BayerGR2BGR;
        COLOR_BayerBG2RGB: ColorConversionCodes.COLOR_BayerBG2RGB;
        COLOR_BayerGB2RGB: ColorConversionCodes.COLOR_BayerGB2RGB;
        COLOR_BayerRG2RGB: ColorConversionCodes.COLOR_BayerRG2RGB;
        COLOR_BayerGR2RGB: ColorConversionCodes.COLOR_BayerGR2RGB;
        COLOR_BayerBG2GRAY: ColorConversionCodes.COLOR_BayerBG2GRAY;
        COLOR_BayerGB2GRAY: ColorConversionCodes.COLOR_BayerGB2GRAY;
        COLOR_BayerRG2GRAY: ColorConversionCodes.COLOR_BayerRG2GRAY;
        COLOR_BayerGR2GRAY: ColorConversionCodes.COLOR_BayerGR2GRAY;
        COLOR_BayerBG2BGR_VNG: ColorConversionCodes.COLOR_BayerBG2BGR_VNG;
        COLOR_BayerGB2BGR_VNG: ColorConversionCodes.COLOR_BayerGB2BGR_VNG;
        COLOR_BayerRG2BGR_VNG: ColorConversionCodes.COLOR_BayerRG2BGR_VNG;
        COLOR_BayerGR2BGR_VNG: ColorConversionCodes.COLOR_BayerGR2BGR_VNG;
        COLOR_BayerBG2RGB_VNG: ColorConversionCodes.COLOR_BayerBG2RGB_VNG;
        COLOR_BayerGB2RGB_VNG: ColorConversionCodes.COLOR_BayerGB2RGB_VNG;
        COLOR_BayerRG2RGB_VNG: ColorConversionCodes.COLOR_BayerRG2RGB_VNG;
        COLOR_BayerGR2RGB_VNG: ColorConversionCodes.COLOR_BayerGR2RGB_VNG;
        COLOR_BayerBG2BGR_EA: ColorConversionCodes.COLOR_BayerBG2BGR_EA;
        COLOR_BayerGB2BGR_EA: ColorConversionCodes.COLOR_BayerGB2BGR_EA;
        COLOR_BayerRG2BGR_EA: ColorConversionCodes.COLOR_BayerRG2BGR_EA;
        COLOR_BayerGR2BGR_EA: ColorConversionCodes.COLOR_BayerGR2BGR_EA;
        COLOR_BayerBG2RGB_EA: ColorConversionCodes.COLOR_BayerBG2RGB_EA;
        COLOR_BayerGB2RGB_EA: ColorConversionCodes.COLOR_BayerGB2RGB_EA;
        COLOR_BayerRG2RGB_EA: ColorConversionCodes.COLOR_BayerRG2RGB_EA;
        COLOR_BayerGR2RGB_EA: ColorConversionCodes.COLOR_BayerGR2RGB_EA;
        COLOR_BayerBG2BGRA: ColorConversionCodes.COLOR_BayerBG2BGRA;
        COLOR_BayerGB2BGRA: ColorConversionCodes.COLOR_BayerGB2BGRA;
        COLOR_BayerRG2BGRA: ColorConversionCodes.COLOR_BayerRG2BGRA;
        COLOR_BayerGR2BGRA: ColorConversionCodes.COLOR_BayerGR2BGRA;
        COLOR_BayerBG2RGBA: ColorConversionCodes.COLOR_BayerBG2RGBA;
        COLOR_BayerGB2RGBA: ColorConversionCodes.COLOR_BayerGB2RGBA;
        COLOR_BayerRG2RGBA: ColorConversionCodes.COLOR_BayerRG2RGBA;
        COLOR_BayerGR2RGBA: ColorConversionCodes.COLOR_BayerGR2RGBA;
        COLORCOLORCVT_MAX: ColorConversionCodes.COLOR_COLORCVT_MAX;

        cvtColor(src: Mat, dst: Mat, code: ColorConversionCodes, dstCn?: number): void;
        cvtColorTwoPlane(
            src1: Mat,
            src2: Mat,
            dst: Mat,
            code:
                | ColorConversionCodes.COLOR_YUV2RGB_NV12
                | ColorConversionCodes.COLOR_YUV2BGR_NV12
                | ColorConversionCodes.COLOR_YUV2RGB_NV21
                | ColorConversionCodes.COLOR_YUV2BGR_NV21
                | ColorConversionCodes.COLOR_YUV2RGBA_NV12
                | ColorConversionCodes.COLOR_YUV2BGRA_NV12
                | ColorConversionCodes.COLOR_YUV2RGBA_NV21
                | ColorConversionCodes.COLOR_YUV2BGRA_NV21
        ): void;
        demosaicing(
            src: Mat,
            dst: Mat,
            code:
                | ColorConversionCodes.COLOR_BayerBG2BGR
                | ColorConversionCodes.COLOR_BayerGB2BGR
                | ColorConversionCodes.COLOR_BayerRG2BGR
                | ColorConversionCodes.COLOR_BayerGR2BGR
                | ColorConversionCodes.COLOR_BayerBG2GRAY
                | ColorConversionCodes.COLOR_BayerGB2GRAY
                | ColorConversionCodes.COLOR_BayerRG2GRAY
                | ColorConversionCodes.COLOR_BayerGR2GRAY
                | ColorConversionCodes.COLOR_BayerBG2BGR_VNG
                | ColorConversionCodes.COLOR_BayerGB2BGR_VNG
                | ColorConversionCodes.COLOR_BayerRG2BGR_VNG
                | ColorConversionCodes.COLOR_BayerGR2BGR_VNG
                | ColorConversionCodes.COLOR_BayerBG2BGR_EA
                | ColorConversionCodes.COLOR_BayerGB2BGR_EA
                | ColorConversionCodes.COLOR_BayerRG2BGR_EA
                | ColorConversionCodes.COLOR_BayerGR2BGR_EA
                | ColorConversionCodes.COLOR_BayerBG2BGRA
                | ColorConversionCodes.COLOR_BayerGB2BGRA
                | ColorConversionCodes.COLOR_BayerRG2BGRA
                | ColorConversionCodes.COLOR_BayerGR2BGRA,
            dstCn?: number
        ): void;

        // Mat data types
        CV_8U: DataTypes.CV_8U;
        CV_8S: DataTypes.CV_8S;
        CV_16U: DataTypes.CV_16U;
        CV_16S: DataTypes.CV_16S;
        CV_32S: DataTypes.CV_32S;
        CV_32F: DataTypes.CV_32F;
        CV_64F: DataTypes.CV_64F;
        CV_16F: DataTypes.CV_16F;
        CV_8UC1: DataTypes.CV_8UC1;
        CV_8UC2: DataTypes.CV_8UC2;
        CV_8UC3: DataTypes.CV_8UC3;
        CV_8UC4: DataTypes.CV_8UC4;
        CV_8SC1: DataTypes.CV_8SC1;
        CV_8SC2: DataTypes.CV_8SC2;
        CV_8SC3: DataTypes.CV_8SC3;
        CV_8SC4: DataTypes.CV_8SC4;
        CV_16UC1: DataTypes.CV_16UC1;
        CV_16UC2: DataTypes.CV_16UC2;
        CV_16UC3: DataTypes.CV_16UC3;
        CV_16UC4: DataTypes.CV_16UC4;
        CV_16SC1: DataTypes.CV_16SC1;
        CV_16SC2: DataTypes.CV_16SC2;
        CV_16SC3: DataTypes.CV_16SC3;
        CV_16SC4: DataTypes.CV_16SC4;
        CV_32SC1: DataTypes.CV_32SC1;
        CV_32SC2: DataTypes.CV_32SC2;
        CV_32SC3: DataTypes.CV_32SC3;
        CV_32SC4: DataTypes.CV_32SC4;
        CV_32FC1: DataTypes.CV_32FC1;
        CV_32FC2: DataTypes.CV_32FC2;
        CV_32FC3: DataTypes.CV_32FC3;
        CV_32FC4: DataTypes.CV_32FC4;
        CV_64FC1: DataTypes.CV_64FC1;
        CV_64FC2: DataTypes.CV_64FC2;
        CV_64FC3: DataTypes.CV_64FC3;
        CV_64FC4: DataTypes.CV_64FC4;
        CV_16FC1: DataTypes.CV_16FC1;
        CV_16FC2: DataTypes.CV_16FC2;
        CV_16FC3: DataTypes.CV_16FC3;
        CV_16FC4: DataTypes.CV_16FC4;

        // JS only helper functions
        /**
         * Renders an input Mat to a canvas object
         * @param canvasSource HTMLCanvas element or id of HTMLCanvas to output Mat to
         * @param mat input source mat
         */
        imshow(canvasSource: string | HTMLCanvasElement, mat: Mat): void;
        /**
         * Reads image data from a source canvas and outputs it to an instance of cv.Mat
         * @param imageSource source canvas to read imagedata from
         */
        imread(imageSource: string): Mat;
        /**
         * Function called when opencv is initialized
         */
        onRuntimeInitialized: () => void;

        VideoCapture: VideoCapture;

        // Core classes
        Mat: Mat;
        Size: Size;
        Point: Point;
        Range: Range;
        Scalar: Scalar;
        Rect: Rect;

        // Image Processing
        MORPH_ERODE: MorphTypes.MORPH_ERODE;
        MORPH_DILATE: MorphTypes.MORPH_DILATE;
        MORPH_CLOSE: MorphTypes.MORPH_CLOSE;
        MORPH_GRADIENT: MorphTypes.MORPH_GRADIENT;
        MORPH_TOPHAT: MorphTypes.MORPH_TOPHAT;
        MORPH_BLACKHAT: MorphTypes.MORPH_BLACKHAT;
        MORPH_HITMISS: MorphTypes.MORPH_HITMISS;

        FILTER_SCHARR: SpecialFilter;

        MORPH_RECT: MorphShapes.MORPH_RECT;
        MORPH_CROSS: MorphShapes.MORPH_CROSS;
        MORPH_ELLIPSE: MorphShapes.MORPH_ELLIPSE;

        bilateralFilter(
            src: Mat,
            dst: Mat,
            d: number,
            sigmaColor: number,
            sigmaSpace: number,
            borderType: BorderTypes
        ): void;
        blur(src: Mat, dst: Mat, ksize: Size, anchor: Point, borderType: BorderTypes): void;
        boxFilter(
            src: Mat,
            dst: Mat,
            ddepth: number | DataTypes,
            ksize: Size,
            anchor: Point,
            normalize: boolean,
            borderType: BorderTypes
        ): void;
        buildPyramid(src: Mat, dst: Mat, maxlevel: number, borderType: BorderTypes): void;
        dilate(
            src: Mat,
            dst: Mat,
            kernel: Mat,
            anchor: Point,
            iterations: number,
            borderType: BorderTypes,
            borderValue: Scalar
        ): void;
        erode(
            src: Mat,
            dst: Mat,
            kernel: Mat,
            anchor: Point,
            iterations: number,
            borderType: BorderTypes,
            borderValue: Scalar
        ): void;
        filter2D(
            src: Mat,
            dst: Mat,
            ddepth: number | DataTypes,
            kernel: Mat | number[][],
            anchor: Point,
            delat: number,
            borderType: BorderTypes
        ): void;
        GaussianBlur(
            src: Mat,
            dst: Mat,
            ksize: Mat,
            sigmaX: number,
            sigmaY: number,
            borderType: BorderTypes
        ): void;
        getDerivKernels(
            kx: number[],
            ky: number[],
            dx: number,
            dy: number,
            ksize: 1 | 3 | 5 | 7 | SpecialFilter,
            normalize: boolean,
            ktype: DataTypes.CV_32F | DataTypes.CV_64F
        ): void;
        getGaborKernel(
            ksize: Size,
            sigma: number,
            theta: number,
            lambd: number,
            gamma: number,
            psi: number,
            ktype: DataTypes.CV_32F | DataTypes.CV_64F
        ): Mat;
        getGaussianKernel(
            ksize: number,
            sigma: number,
            ktype: DataTypes.CV_32F | DataTypes.CV_64F
        ): Mat;
        getStructuringElement(shape: MorphShapes, ksize: Size, anchor: Point): Mat;
        Laplacian(
            src: Mat,
            dst: Mat,
            ddepth: number | DataTypes,
            ksize: number,
            scale: number,
            delta: number,
            borderType: BorderTypes
        ): void;
        medianBlur(src: Mat, dst: Mat, ksize: number): void;
        morphologyDefaultBorderValue(): Scalar;
        morphologyEx(
            src: Mat,
            dst: Mat,
            op: MorphTypes,
            kernel: Mat,
            anchor: Point,
            iterations: number,
            borderType: BorderTypes,
            borderValue: Scalar
        ): void;
        pyrDown(src: Mat, dst: Mat, dstsize: Size, borderType: BorderTypes): void;
        pyrMeanShiftFiltering(
            src: Mat,
            dst: Mat,
            sp: number,
            sr: number,
            maxLevel: number,
            termcrit: TermCriteria
        ): void;
        pyrUp(src: Mat, dst: Mat, dstsize: Size, borderType: BorderTypes): void;
        Scharr(
            src: Mat,
            dst: Mat,
            ddepth: number | DataTypes,
            dx: number,
            dy: number,
            scale: number,
            delta: number,
            borderType: BorderTypes
        ): void;
        sepFilter2D(
            src: Mat,
            dst: Mat,
            ddepth: number | DataTypes,
            kernelX: Mat | number[][],
            kernelY: Mat | number[][],
            anchor: Point,
            delta: number,
            borderType: BorderTypes
        ): void;
        Sobel(
            src: Mat,
            dst: Mat,
            ddepth: number | DataTypes,
            dx: number,
            dy: number,
            ksize: number,
            scale: number,
            delta: number,
            borderType: BorderTypes
        ): void;
        spatialGradient(
            src: Mat,
            dx: Mat | number[][],
            dy: Mat | number[][],
            ksize: number,
            borderType: BorderTypes
        ): void;
        sqrBoxFilter(
            src: Mat,
            dst: Mat,
            ddepth: number | DataTypes,
            ksize: Size,
            anchor: Point,
            normalize: boolean,
            borderType: BorderTypes
        ): void;
    }
}

declare const cv: opencv.cv;
export default cv;
export { Mat, Size, Point, Range, Scalar, Rect };
