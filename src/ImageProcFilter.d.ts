import { _BorderTypes } from './CoreArray';
import { Mat, Point, Scalar, Size, _DataTypes } from './DataStructures';

declare module ImageFiltering {
    interface ElemArray extends Array<Elem | number> {}
    type Elem = ElemArray;

    enum _ColorConversionCodes {
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

    interface ColorConversionCodes {
        COLOR_BGR2BGRA: _ColorConversionCodes.COLOR_BGR2BGRA;
        COLOR_RGB2RGBA: _ColorConversionCodes.COLOR_RGB2RGBA;
        COLOR_BGRA2BGR: _ColorConversionCodes.COLOR_BGRA2BGR;
        COLOR_RGBA2RGB: _ColorConversionCodes.COLOR_RGBA2RGB;
        COLOR_BGR2RGBA: _ColorConversionCodes.COLOR_BGR2RGBA;
        COLOR_RGB2BGRA: _ColorConversionCodes.COLOR_RGB2BGRA;
        COLOR_RGBA2BGR: _ColorConversionCodes.COLOR_RGBA2BGR;
        COLOR_BGRA2RGB: _ColorConversionCodes.COLOR_BGRA2RGB;
        COLOR_BGR2RGB: _ColorConversionCodes.COLOR_BGR2RGB;
        COLOR_RGB2BGR: _ColorConversionCodes.COLOR_RGB2BGR;
        COLOR_BGRA2RGBA: _ColorConversionCodes.COLOR_BGRA2RGBA;
        COLOR_RGBA2BGRA: _ColorConversionCodes.COLOR_RGBA2BGRA;
        COLOR_BGR2GRAY: _ColorConversionCodes.COLOR_BGR2GRAY;
        COLOR_RGB2GRAY: _ColorConversionCodes.COLOR_RGB2GRAY;
        COLOR_GRAY2BGR: _ColorConversionCodes.COLOR_GRAY2BGR;
        COLOR_GRAY2RGB: _ColorConversionCodes.COLOR_GRAY2RGB;
        COLOR_GRAY2BGRA: _ColorConversionCodes.COLOR_GRAY2BGRA;
        COLOR_GRAY2RGBA: _ColorConversionCodes.COLOR_GRAY2RGBA;
        COLOR_BGRA2GRAY: _ColorConversionCodes.COLOR_BGRA2GRAY;
        COLOR_RGBA2GRAY: _ColorConversionCodes.COLOR_RGBA2GRAY;
        COLOR_BGR2BGR565: _ColorConversionCodes.COLOR_BGR2BGR565;
        COLOR_RGB2BGR565: _ColorConversionCodes.COLOR_RGB2BGR565;
        COLOR_BGR5652BGR: _ColorConversionCodes.COLOR_BGR5652BGR;
        COLOR_BGR5652RGB: _ColorConversionCodes.COLOR_BGR5652RGB;
        COLOR_BGRA2BGR565: _ColorConversionCodes.COLOR_BGRA2BGR565;
        COLOR_RGBA2BGR565: _ColorConversionCodes.COLOR_RGBA2BGR565;
        COLOR_BGR5652BGRA: _ColorConversionCodes.COLOR_BGR5652BGRA;
        COLOR_BGR5652RGBA: _ColorConversionCodes.COLOR_BGR5652RGBA;
        COLOR_GRAY2BGR565: _ColorConversionCodes.COLOR_GRAY2BGR565;
        COLOR_BGR5652GRAY: _ColorConversionCodes.COLOR_BGR5652GRAY;
        COLOR_BGR2BGR555: _ColorConversionCodes.COLOR_BGR2BGR555;
        COLOR_RGB2BGR555: _ColorConversionCodes.COLOR_RGB2BGR555;
        COLOR_BGR5552BGR: _ColorConversionCodes.COLOR_BGR5552BGR;
        COLOR_BGR5552RGB: _ColorConversionCodes.COLOR_BGR5552RGB;
        COLOR_BGRA2BGR555: _ColorConversionCodes.COLOR_BGRA2BGR555;
        COLOR_RGBA2BGR555: _ColorConversionCodes.COLOR_RGBA2BGR555;
        COLOR_BGR5552BGRA: _ColorConversionCodes.COLOR_BGR5552BGRA;
        COLOR_BGR5552RGBA: _ColorConversionCodes.COLOR_BGR5552RGBA;
        COLOR_GRAY2BGR555: _ColorConversionCodes.COLOR_GRAY2BGR555;
        COLOR_BGR5552GRAY: _ColorConversionCodes.COLOR_BGR5552GRAY;
        COLOR_BGR2XYZ: _ColorConversionCodes.COLOR_BGR2XYZ;
        COLOR_RGB2XYZ: _ColorConversionCodes.COLOR_RGB2XYZ;
        COLOR_XYZ2BGR: _ColorConversionCodes.COLOR_XYZ2BGR;
        COLOR_XYZ2RGB: _ColorConversionCodes.COLOR_XYZ2RGB;
        COLOR_BGR2YCrCb: _ColorConversionCodes.COLOR_BGR2YCrCb;
        COLOR_RGB2YCrCb: _ColorConversionCodes.COLOR_RGB2YCrCb;
        COLOR_YCrCb2BGR: _ColorConversionCodes.COLOR_YCrCb2BGR;
        COLOR_YCrCb2RGB: _ColorConversionCodes.COLOR_YCrCb2RGB;
        COLOR_BGR2HSV: _ColorConversionCodes.COLOR_BGR2HSV;
        COLOR_RGB2HSV: _ColorConversionCodes.COLOR_RGB2HSV;
        COLOR_BGR2Lab: _ColorConversionCodes.COLOR_BGR2Lab;
        COLOR_RGB2Lab: _ColorConversionCodes.COLOR_RGB2Lab;
        COLOR_BGR2Luv: _ColorConversionCodes.COLOR_BGR2Luv;
        COLOR_RGB2Luv: _ColorConversionCodes.COLOR_RGB2Luv;
        COLOR_BGR2HLS: _ColorConversionCodes.COLOR_BGR2HLS;
        COLOR_RGB2HLS: _ColorConversionCodes.COLOR_RGB2HLS;
        COLOR_HSV2BGR: _ColorConversionCodes.COLOR_HSV2BGR;
        COLOR_HSV2RGB: _ColorConversionCodes.COLOR_HSV2RGB;
        COLOR_Lab2BGR: _ColorConversionCodes.COLOR_Lab2BGR;
        COLOR_Lab2RGB: _ColorConversionCodes.COLOR_Lab2RGB;
        COLOR_Luv2BGR: _ColorConversionCodes.COLOR_Luv2BGR;
        COLOR_Luv2RGB: _ColorConversionCodes.COLOR_Luv2RGB;
        COLOR_HLS2BGR: _ColorConversionCodes.COLOR_HLS2BGR;
        COLOR_HLS2RGB: _ColorConversionCodes.COLOR_HLS2RGB;
        COLOR_BGR2HSV_FULL: _ColorConversionCodes.COLOR_BGR2HSV_FULL;
        COLOR_RGB2HSV_FULL: _ColorConversionCodes.COLOR_RGB2HSV_FULL;
        COLOR_BGR2HLS_FULL: _ColorConversionCodes.COLOR_BGR2HLS_FULL;
        COLOR_RGB2HLS_FULL: _ColorConversionCodes.COLOR_RGB2HLS_FULL;
        COLOR_HSV2BGR_FULL: _ColorConversionCodes.COLOR_HSV2BGR_FULL;
        COLOR_HSV2RGB_FULL: _ColorConversionCodes.COLOR_HSV2RGB_FULL;
        COLOR_HLS2BGR_FULL: _ColorConversionCodes.COLOR_HLS2BGR_FULL;
        COLOR_HLS2RGB_FULL: _ColorConversionCodes.COLOR_HLS2RGB_FULL;
        COLOR_LBGR2Lab: _ColorConversionCodes.COLOR_LBGR2Lab;
        COLOR_LRGB2Lab: _ColorConversionCodes.COLOR_LRGB2Lab;
        COLOR_LBGR2Luv: _ColorConversionCodes.COLOR_LBGR2Luv;
        COLOR_LRGB2Luv: _ColorConversionCodes.COLOR_LRGB2Luv;
        COLOR_Lab2LBGR: _ColorConversionCodes.COLOR_Lab2LBGR;
        COLOR_Lab2LRGB: _ColorConversionCodes.COLOR_Lab2LRGB;
        COLOR_Luv2LBGR: _ColorConversionCodes.COLOR_Luv2LBGR;
        COLOR_Luv2LRGB: _ColorConversionCodes.COLOR_Luv2LRGB;
        COLOR_BGR2YUV: _ColorConversionCodes.COLOR_BGR2YUV;
        COLOR_RGB2YUV: _ColorConversionCodes.COLOR_RGB2YUV;
        COLOR_YUV2BGR: _ColorConversionCodes.COLOR_YUV2BGR;
        COLOR_YUV2RGB: _ColorConversionCodes.COLOR_YUV2RGB;
        COLOR_YUV2RGB_NV12: _ColorConversionCodes.COLOR_YUV2RGB_NV12;
        COLOR_YUV2BGR_NV12: _ColorConversionCodes.COLOR_YUV2BGR_NV12;
        COLOR_YUV2RGB_NV21: _ColorConversionCodes.COLOR_YUV2RGB_NV21;
        COLOR_YUV2BGR_NV21: _ColorConversionCodes.COLOR_YUV2BGR_NV21;
        COLOR_YUV420sp2RGB: _ColorConversionCodes.COLOR_YUV420sp2RGB;
        COLOR_YUV420sp2BGR: _ColorConversionCodes.COLOR_YUV420sp2BGR;
        COLOR_YUV2RGBA_NV12: _ColorConversionCodes.COLOR_YUV2RGBA_NV12;
        COLOR_YUV2BGRA_NV12: _ColorConversionCodes.COLOR_YUV2BGRA_NV12;
        COLOR_YUV2RGBA_NV21: _ColorConversionCodes.COLOR_YUV2RGBA_NV21;
        COLOR_YUV2BGRA_NV21: _ColorConversionCodes.COLOR_YUV2BGRA_NV21;
        COLOR_YUV420sp2RGBA: _ColorConversionCodes.COLOR_YUV420sp2RGBA;
        COLOR_YUV420sp2BGRA: _ColorConversionCodes.COLOR_YUV420sp2BGRA;
        COLOR_YUV2RGB_YV12: _ColorConversionCodes.COLOR_YUV2RGB_YV12;
        COLOR_YUV2BGR_YV12: _ColorConversionCodes.COLOR_YUV2BGR_YV12;
        COLOR_YUV2RGB_IYUV: _ColorConversionCodes.COLOR_YUV2RGB_IYUV;
        COLOR_YUV2BGR_IYUV: _ColorConversionCodes.COLOR_YUV2BGR_IYUV;
        COLOR_YUV2RGB_I420: _ColorConversionCodes.COLOR_YUV2RGB_I420;
        COLOR_YUV2BGR_I420: _ColorConversionCodes.COLOR_YUV2BGR_I420;
        COLOR_YUV420p2RGB: _ColorConversionCodes.COLOR_YUV420p2RGB;
        COLOR_YUV420p2BGR: _ColorConversionCodes.COLOR_YUV420p2BGR;
        COLOR_YUV2RGBA_YV12: _ColorConversionCodes.COLOR_YUV2RGBA_YV12;
        COLOR_YUV2BGRA_YV12: _ColorConversionCodes.COLOR_YUV2BGRA_YV12;
        COLOR_YUV2RGBA_IYUV: _ColorConversionCodes.COLOR_YUV2RGBA_IYUV;
        COLOR_YUV2BGRA_IYUV: _ColorConversionCodes.COLOR_YUV2BGRA_IYUV;
        COLOR_YUV2RGBA_I420: _ColorConversionCodes.COLOR_YUV2RGBA_I420;
        COLOR_YUV2BGRA_I420: _ColorConversionCodes.COLOR_YUV2BGRA_I420;
        COLOR_YUV420p2RGBA: _ColorConversionCodes.COLOR_YUV420p2RGBA;
        COLOR_YUV420p2BGRA: _ColorConversionCodes.COLOR_YUV420p2BGRA;
        COLOR_YUV2GRAY_420: _ColorConversionCodes.COLOR_YUV2GRAY_420;
        COLOR_YUV2GRAY_NV21: _ColorConversionCodes.COLOR_YUV2GRAY_NV21;
        COLOR_YUV2GRAY_NV12: _ColorConversionCodes.COLOR_YUV2GRAY_NV12;
        COLOR_YUV2GRAY_YV12: _ColorConversionCodes.COLOR_YUV2GRAY_YV12;
        COLOR_YUV2GRAY_IYUV: _ColorConversionCodes.COLOR_YUV2GRAY_IYUV;
        COLOR_YUV2GRAY_I420: _ColorConversionCodes.COLOR_YUV2GRAY_I420;
        COLOR_YUV420sp2GRAY: _ColorConversionCodes.COLOR_YUV420sp2GRAY;
        COLOR_YUV420p2GRAY: _ColorConversionCodes.COLOR_YUV420p2GRAY;
        COLOR_YUV2RGB_UYVY: _ColorConversionCodes.COLOR_YUV2RGB_UYVY;
        COLOR_YUV2BGR_UYVY: _ColorConversionCodes.COLOR_YUV2BGR_UYVY;
        COLOR_YUV2RGB_Y422: _ColorConversionCodes.COLOR_YUV2RGB_Y422;
        COLOR_YUV2BGR_Y422: _ColorConversionCodes.COLOR_YUV2BGR_Y422;
        COLOR_YUV2RGB_UYNV: _ColorConversionCodes.COLOR_YUV2RGB_UYNV;
        COLOR_YUV2BGR_UYNV: _ColorConversionCodes.COLOR_YUV2BGR_UYNV;
        COLOR_YUV2RGBA_UYVY: _ColorConversionCodes.COLOR_YUV2RGBA_UYVY;
        COLOR_YUV2BGRA_UYVY: _ColorConversionCodes.COLOR_YUV2BGRA_UYVY;
        COLOR_YUV2RGBA_Y422: _ColorConversionCodes.COLOR_YUV2RGBA_Y422;
        COLOR_YUV2BGRA_Y422: _ColorConversionCodes.COLOR_YUV2BGRA_Y422;
        COLOR_YUV2RGBA_UYNV: _ColorConversionCodes.COLOR_YUV2RGBA_UYNV;
        COLOR_YUV2BGRA_UYNV: _ColorConversionCodes.COLOR_YUV2BGRA_UYNV;
        COLOR_YUV2RGB_YUY2: _ColorConversionCodes.COLOR_YUV2RGB_YUY2;
        COLOR_YUV2BGR_YUY2: _ColorConversionCodes.COLOR_YUV2BGR_YUY2;
        COLOR_YUV2RGB_YVYU: _ColorConversionCodes.COLOR_YUV2RGB_YVYU;
        COLOR_YUV2BGR_YVYU: _ColorConversionCodes.COLOR_YUV2BGR_YVYU;
        COLOR_YUV2RGB_YUYV: _ColorConversionCodes.COLOR_YUV2RGB_YUYV;
        COLOR_YUV2BGR_YUYV: _ColorConversionCodes.COLOR_YUV2BGR_YUYV;
        COLOR_YUV2RGB_YUNV: _ColorConversionCodes.COLOR_YUV2RGB_YUNV;
        COLOR_YUV2BGR_YUNV: _ColorConversionCodes.COLOR_YUV2BGR_YUNV;
        COLOR_YUV2RGBA_YUY2: _ColorConversionCodes.COLOR_YUV2RGBA_YUY2;
        COLOR_YUV2BGRA_YUY2: _ColorConversionCodes.COLOR_YUV2BGRA_YUY2;
        COLOR_YUV2RGBA_YVYU: _ColorConversionCodes.COLOR_YUV2RGBA_YVYU;
        COLOR_YUV2BGRA_YVYU: _ColorConversionCodes.COLOR_YUV2BGRA_YVYU;
        COLOR_YUV2RGBA_YUYV: _ColorConversionCodes.COLOR_YUV2RGBA_YUYV;
        COLOR_YUV2BGRA_YUYV: _ColorConversionCodes.COLOR_YUV2BGRA_YUYV;
        COLOR_YUV2RGBA_YUNV: _ColorConversionCodes.COLOR_YUV2RGBA_YUNV;
        COLOR_YUV2BGRA_YUNV: _ColorConversionCodes.COLOR_YUV2BGRA_YUNV;
        COLOR_YUV2GRAY_UYVY: _ColorConversionCodes.COLOR_YUV2GRAY_UYVY;
        COLOR_YUV2GRAY_YUY2: _ColorConversionCodes.COLOR_YUV2GRAY_YUY2;
        COLOR_YUV2GRAY_Y422: _ColorConversionCodes.COLOR_YUV2GRAY_Y422;
        COLOR_YUV2GRAY_UYNV: _ColorConversionCodes.COLOR_YUV2GRAY_UYNV;
        COLOR_YUV2GRAY_YVYU: _ColorConversionCodes.COLOR_YUV2GRAY_YVYU;
        COLOR_YUV2GRAY_YUYV: _ColorConversionCodes.COLOR_YUV2GRAY_YUYV;
        COLOR_YUV2GRAY_YUNV: _ColorConversionCodes.COLOR_YUV2GRAY_YUNV;
        COLOR_RGBA2mRGBA: _ColorConversionCodes.COLOR_RGBA2mRGBA;
        COLOR_mRGBA2RGBA: _ColorConversionCodes.COLOR_mRGBA2RGBA;
        COLOR_RGB2YUV_I420: _ColorConversionCodes.COLOR_RGB2YUV_I420;
        COLOR_BGR2YUV_I420: _ColorConversionCodes.COLOR_BGR2YUV_I420;
        COLOR_RGB2YUV_IYUV: _ColorConversionCodes.COLOR_RGB2YUV_IYUV;
        COLOR_BGR2YUV_IYUV: _ColorConversionCodes.COLOR_BGR2YUV_IYUV;
        COLOR_RGBA2YUV_I420: _ColorConversionCodes.COLOR_RGBA2YUV_I420;
        COLOR_BGRA2YUV_I420: _ColorConversionCodes.COLOR_BGRA2YUV_I420;
        COLOR_RGBA2YUV_IYUV: _ColorConversionCodes.COLOR_RGBA2YUV_IYUV;
        COLOR_BGRA2YUV_IYUV: _ColorConversionCodes.COLOR_BGRA2YUV_IYUV;
        COLOR_RGB2YUV_YV12: _ColorConversionCodes.COLOR_RGB2YUV_YV12;
        COLOR_BGR2YUV_YV12: _ColorConversionCodes.COLOR_BGR2YUV_YV12;
        COLOR_RGBA2YUV_YV12: _ColorConversionCodes.COLOR_RGBA2YUV_YV12;
        COLOR_BGRA2YUV_YV12: _ColorConversionCodes.COLOR_BGRA2YUV_YV12;
        COLOR_BayerBG2BGR: _ColorConversionCodes.COLOR_BayerBG2BGR;
        COLOR_BayerGB2BGR: _ColorConversionCodes.COLOR_BayerGB2BGR;
        COLOR_BayerRG2BGR: _ColorConversionCodes.COLOR_BayerRG2BGR;
        COLOR_BayerGR2BGR: _ColorConversionCodes.COLOR_BayerGR2BGR;
        COLOR_BayerBG2RGB: _ColorConversionCodes.COLOR_BayerBG2RGB;
        COLOR_BayerGB2RGB: _ColorConversionCodes.COLOR_BayerGB2RGB;
        COLOR_BayerRG2RGB: _ColorConversionCodes.COLOR_BayerRG2RGB;
        COLOR_BayerGR2RGB: _ColorConversionCodes.COLOR_BayerGR2RGB;
        COLOR_BayerBG2GRAY: _ColorConversionCodes.COLOR_BayerBG2GRAY;
        COLOR_BayerGB2GRAY: _ColorConversionCodes.COLOR_BayerGB2GRAY;
        COLOR_BayerRG2GRAY: _ColorConversionCodes.COLOR_BayerRG2GRAY;
        COLOR_BayerGR2GRAY: _ColorConversionCodes.COLOR_BayerGR2GRAY;
        COLOR_BayerBG2BGR_VNG: _ColorConversionCodes.COLOR_BayerBG2BGR_VNG;
        COLOR_BayerGB2BGR_VNG: _ColorConversionCodes.COLOR_BayerGB2BGR_VNG;
        COLOR_BayerRG2BGR_VNG: _ColorConversionCodes.COLOR_BayerRG2BGR_VNG;
        COLOR_BayerGR2BGR_VNG: _ColorConversionCodes.COLOR_BayerGR2BGR_VNG;
        COLOR_BayerBG2RGB_VNG: _ColorConversionCodes.COLOR_BayerBG2RGB_VNG;
        COLOR_BayerGB2RGB_VNG: _ColorConversionCodes.COLOR_BayerGB2RGB_VNG;
        COLOR_BayerRG2RGB_VNG: _ColorConversionCodes.COLOR_BayerRG2RGB_VNG;
        COLOR_BayerGR2RGB_VNG: _ColorConversionCodes.COLOR_BayerGR2RGB_VNG;
        COLOR_BayerBG2BGR_EA: _ColorConversionCodes.COLOR_BayerBG2BGR_EA;
        COLOR_BayerGB2BGR_EA: _ColorConversionCodes.COLOR_BayerGB2BGR_EA;
        COLOR_BayerRG2BGR_EA: _ColorConversionCodes.COLOR_BayerRG2BGR_EA;
        COLOR_BayerGR2BGR_EA: _ColorConversionCodes.COLOR_BayerGR2BGR_EA;
        COLOR_BayerBG2RGB_EA: _ColorConversionCodes.COLOR_BayerBG2RGB_EA;
        COLOR_BayerGB2RGB_EA: _ColorConversionCodes.COLOR_BayerGB2RGB_EA;
        COLOR_BayerRG2RGB_EA: _ColorConversionCodes.COLOR_BayerRG2RGB_EA;
        COLOR_BayerGR2RGB_EA: _ColorConversionCodes.COLOR_BayerGR2RGB_EA;
        COLOR_BayerBG2BGRA: _ColorConversionCodes.COLOR_BayerBG2BGRA;
        COLOR_BayerGB2BGRA: _ColorConversionCodes.COLOR_BayerGB2BGRA;
        COLOR_BayerRG2BGRA: _ColorConversionCodes.COLOR_BayerRG2BGRA;
        COLOR_BayerGR2BGRA: _ColorConversionCodes.COLOR_BayerGR2BGRA;
        COLOR_BayerBG2RGBA: _ColorConversionCodes.COLOR_BayerBG2RGBA;
        COLOR_BayerGB2RGBA: _ColorConversionCodes.COLOR_BayerGB2RGBA;
        COLOR_BayerRG2RGBA: _ColorConversionCodes.COLOR_BayerRG2RGBA;
        COLOR_BayerGR2RGBA: _ColorConversionCodes.COLOR_BayerGR2RGBA;
        COLOR_COLORCVT_MAX: _ColorConversionCodes.COLOR_COLORCVT_MAX;
    }

    enum MorphShapesType {
        MORPH_RECT = 'MORPH_RECT',
        MORPH_CROSS = 'MORPH_CROSS',
        MORPH_ELLIPSE = 'MORPH_ELLIPSE',
    }

    interface MorphShapes {
        MORPH_RECT: MorphShapesType.MORPH_RECT;
        MORPH_CROSS: MorphShapesType.MORPH_CROSS;
        MORPH_ELLIPSE: MorphShapesType.MORPH_ELLIPSE;
    }

    enum MorphTypesType {
        MORPH_ERODE = 'MORPH_ERODE',
        MORPH_DILATE = 'MORPH_DILATE',
        MORPH_OPEN = 'MORPH_OPEN',
        MORPH_CLOSE = 'MORPH_CLOSE',
        MORPH_GRADIENT = 'MORPH_GRADIENT',
        MORPH_TOPHAT = 'MORPH_TOPHAT',
        MORPH_BLACKHAT = 'MORPH_BLACKHAT',
        MORPH_HITMISS = 'MORPH_HITMISS',
    }

    interface MorphTypes {
        MORPH_ERODE: MorphTypesType.MORPH_ERODE;
        MORPH_DILATE: MorphTypesType.MORPH_DILATE;
        MORPH_OPEN: MorphTypesType.MORPH_OPEN;
        MORPH_CLOSE: MorphTypesType.MORPH_CLOSE;
        MORPH_GRADIENT: MorphTypesType.MORPH_GRADIENT;
        MORPH_TOPHAT: MorphTypesType.MORPH_TOPHAT;
        MORPH_BLACKHAT: MorphTypesType.MORPH_BLACKHAT;
        MORPH_HITMISS: MorphTypesType.MORPH_HITMISS;
    }

    enum _SpecialFilter {
        FILTER_SCHARR = 'FILTER_SCHARR',
    }

    interface SpecialFilter {
        FILTER_SCHARR: _SpecialFilter.FILTER_SCHARR;
    }

    interface ImageFiltering {
        /**
         * Applies the bilateral filter to an image.
         * @param src Source 8-bit or floating-point, 1-channel or 3-channel image.
         * @param dst Destination image of the same size and type as src .
         * @param d Diameter of each pixel neighborhood that is used during filtering. If it is non-positive, it is computed from sigmaSpace.
         * @param sigmaColor Filter sigma in the color space. A larger value of the parameter means that farther colors within the pixel neighborhood (see sigmaSpace) will be mixed together, resulting in larger areas of semi-equal color.
         * @param sigmaSpace Filter sigma in the coordinate space. A larger value of the parameter means that farther pixels will influence each other as long as their colors are close enough (see sigmaColor ). When d>0, it specifies the neighborhood size regardless of sigmaSpace. Otherwise, d is proportional to sigmaSpace.
         * @param borderType border mode used to extrapolate pixels outside of the image, see cv.BorderTypes
         */
        bilateralFilter(
            src: Mat,
            dst: Mat,
            d: number,
            sigmaColor: number,
            sigmaSpace: number,
            borderType: _BorderTypes
        ): void;
        /**
         * Blurs an image using the normalized box filter.
         * @param src input image; it can have any number of channels, which are processed independently, but the depth should be CV_8U, CV_16U, CV_16S, CV_32F or CV_64F.
         * @param dst output image of the same size and type as src.
         * @param ksize blurring kernel size.
         * @param anchor anchor point; default value Point(-1,-1) means that the anchor is at the kernel center.
         * @param borderType border mode used to extrapolate pixels outside of the image, see BorderTypes. BORDER_WRAP is not supported.
         */
        blur(src: Mat, dst: Mat, ksize: number, anchor: number, borderType: _BorderTypes): void;
        /**
         * Blurs an image using the box filter.
         * @param src input image.
         * @param dst output image of the same size and type as src.
         * @param ddepth the output image depth (-1 to use src.depth()).
         * @param ksize blurring kernel size.
         * @param anchor anchor point; default value Point(-1,-1) means that the anchor is at the kernel center.
         * @param normalize flag, specifying whether the kernel is normalized by its area or not.
         * @param borderType border mode used to extrapolate pixels outside of the image, see BorderTypes. BORDER_WRAP is not supported.
         */
        boxFilter(
            src: Mat,
            dst: Mat,
            ddepth: number,
            ksize: number,
            anchor: Point,
            normalize: boolean,
            borderType: _BorderTypes
        ): void;
        /**
         * Constructs the Gaussian pyramid for an image.
         * @param src Source image. Check pyrDown for the list of supported types.
         * @param dst Destination vector of maxlevel+1 images of the same type as src. dst[0] will be the same as src. dst[1] is the next pyramid layer, a smoothed and down-sized src, and so on.
         * @param maxlevel 0-based index of the last (the smallest) pyramid layer. It must be non-negative.
         * @param borderType Pixel extrapolation method, see BorderTypes (BORDER_CONSTANT isn't supported)
         */
        buildPyramid(src: Mat, dst: Mat, maxlevel: number, borderType: _BorderTypes): void;
        /**
         * Dilates an image by using a specific structuring element.
         * @param src input image; the number of channels can be arbitrary, but the depth should be one of CV_8U, CV_16U, CV_16S, CV_32F or CV_64F.
         * @param dst output image of the same size and type as src.
         * @param kernel structuring element used for dilation; if elemenat=Mat(), a 3 x 3 rectangular structuring element is used. Kernel can be created using getStructuringElement
         * @param anchor position of the anchor within the element; default value (-1, -1) means that the anchor is at the element center.
         * @param iterations number of times dilation is applied.
         * @param borderType pixel extrapolation method, see BorderTypes. BORDER_WRAP is not suported.
         * @param borderValue border value in case of a constant border use cv.morphologyDefaultBorderValue()
         */
        dilate(
            src: Mat,
            dst: Mat,
            kernel: Elem,
            anchor: Point,
            iterations: number,
            borderType: _BorderTypes,
            borderValue: Scalar
        ): void;
        /**
         * Erodes an image by using a specific structuring element.
         * @param src input image; the number of channels can be arbitrary, but the depth should be one of CV_8U, CV_16U, CV_16S, CV_32F or CV_64F.
         * @param dst output image of the same size and type as src.
         * @param kernel structuring element used for dilation; if elemenat=Mat(), a 3 x 3 rectangular structuring element is used. Kernel can be created using getStructuringElement
         * @param anchor position of the anchor within the element; default value (-1, -1) means that the anchor is at the element center.
         * @param iterations number of times dilation is applied.
         * @param borderType pixel extrapolation method, see BorderTypes. BORDER_WRAP is not suported.
         * @param borderValue border value in case of a constant border use cv.morphologyDefaultBorderValue()
         */
        erode(
            src: Mat,
            dst: Mat,
            kernel: Elem,
            anchor: Point,
            iterations: number,
            borderType: _BorderTypes,
            borderValue: Scalar
        ): void;
        /**
         * Convolves an image with the kernel.
         * @param src input image.
         * @param dst output image of the same size and the same number of channels as src.
         * @param ddepth desired depth of the destination image, see combinations
         * @param kernel convolution kernel (or rather a correlation kernel), a single-channel floating point matrix; if you want to apply different kernels to different channels, split the image into separate color planes using split and process them individually.
         * @param anchor anchor of the kernel that indicates the relative position of a filtered point within the kernel; the anchor should lie within the kernel; default value (-1,-1) means that the anchor is at the kernel center.
         * @param delta value added to the filtered pixels before storing them in dst.
         * @param borderType pixel extrapolation method, see BorderTypes. BORDER_WRAP is not supported.
         */
        filter2D(
            src: Mat,
            dst: Mat,
            ddepth: number,
            kernel: Elem,
            anchor: Point,
            delta: number,
            borderType: _BorderTypes
        ): void;
        /**
         * Blurs an image using a Gaussian filter.
         * @param src input image; the image can have any number of channels, which are processed independently, but the depth should be CV_8U, CV_16U, CV_16S, CV_32F or CV_64F.
         * @param dst output image of the same size and type as src.
         * @param ksize Gaussian kernel size. ksize.width and ksize.height can differ but they both must be positive and odd. Or, they can be zero's and then they are computed from sigma
         * @param sigmaX Gaussian kernel standard deviation in X direction
         * @param sigmaY Gaussian kernel standard deviation in Y direction; if sigmaY is zero, it is set to be equal to sigmaX, if both sigmas are zeros, they are computed from
         * ksize.width and ksize.height, respectively (see getGaussianKernel for details); to fully control the result regardless of possible future modifications of all this
         * semantics, it is recommended to specify all of ksize, sigmaX, and sigmaY
         * @param borderType pixel extrapolation method, see BorderTypes. BORDER_WRAP is not supported.
         */
        GaussianBlur(
            src: Mat,
            dst: Mat,
            ksize: Size,
            sigmaX: number,
            sigmaY: number,
            borderType: _BorderTypes
        ): void;
        /**
         * Returns filter coefficients for computing spatial image derivatives
         * @param kx Output matrix of row filter coefficients. It has the type ktype .
         * @param ky Output matrix of column filter coefficients. It has the type ktype .
         * @param dx Derivative order in respect of x.
         * @param dy Derivative order in respect of y.
         * @param ksize Aperture size. It can be FILTER_SCHARR, 1, 3, 5, or 7.
         * @param normalize Flag indicating whether to normalize (scale down) the filter coefficients or not. Theoretically, the coefficients should
         * have the denominator =2ksize∗2−dx−dy−2. If you are going to filter floating-point images, you are likely to use the normalized kernels.
         * But if you compute derivatives of an 8-bit image, store the results in a 16-bit image, and wish to preserve all the fractional bits, you may
         * want to set normalize=false .
         * @param ktype
         */
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
        /**
         *
         * @param ksize Size of the filter returned.
         * @param sigma Standard deviation of the gaussian envelope.
         * @param theta Orientation of the normal to the parallel stripes of a Gabor function.
         * @param lambd Wavelength of the sinusoidal factor.
         * @param gamma Spatial aspect ratio.
         * @param psi Phase offset.
         * @param ktype Type of filter coefficients. It can be CV_32F or CV_64F .
         */
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
    }
}

export = ImageFiltering;
