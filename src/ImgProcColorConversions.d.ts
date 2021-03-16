import { Mat } from './DataStructures';

declare module ImageProcessing {
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

    interface ImageProcessing {
        /**
         * Converts an image from one color space to another.
         * @param src input image: 8-bit unsigned, 16-bit unsigned ( CV_16UC... ), or single-precision floating-point.
         * @param dst output image of the same size and depth as src.
         * @param code color space conversion code.
         * @param dstCv number of channels in the destination image; if the parameter is 0, the number of the channels is derived automatically from src and code.
         */
        cvtColor(src: Mat, dst: Mat, code: _ColorConversionCodes, dstCv?: number ): void;
        /**
         * Converts an image from one color space to another where the source image is stored in two planes.
         * @param src1 8-bit image (CV_8U) of the Y plane.
         * @param src2 image containing interleaved U/V plane.
         * @param dst output image.
         * @param code Specifies the type of conversion. It can take any of the following values:
         */
        cvtColorTwoPlane(src1: Mat, src2: Mat, dst: Mat, code: _ColorConversionCodes): void;
        /**
         * main function for all demosaicing processes
         * @param src input image: 8-bit unsigned or 16-bit unsigned.
         * @param dst output image of the same size and depth as src.
         * @param code Color space conversion code (see the description below).
         * @param dstCv number of channels in the destination image; if the parameter is 0, the number of the channels is derived automatically from src and code.
         */
        demosaicing(src: Mat, dst: Mat, code: _ColorConversionCodes, dstCv: number | undefined ): void;
    }
}

export = ImageProcessing;
