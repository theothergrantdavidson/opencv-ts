import {
    CV_8U,
    CV_8UC1,
    CV_8UC2,
    CV_8UC3,
    CV_8UC4,
    CV_8S,
    CV_8SC1,
    CV_8SC2,
    CV_8SC3,
    CV_8SC4,
    CV_16U,
    CV_16UC1,
    CV_16UC2,
    CV_16UC3,
    CV_16UC4,
    CV_16S,
    CV_16SC1,
    CV_16SC2,
    CV_16SC3,
    CV_16SC4,
    CV_32S,
    CV_32SC1,
    CV_32SC2,
    CV_32SC3,
    CV_32SC4,
    CV_32F,
    CV_32FC1,
    CV_32FC2,
    CV_32FC3,
    CV_32FC4,
    CV_64F,
    CV_64FC1,
    CV_64FC2,
    CV_64FC3,
    CV_64FC4,
    CV_16F,
    CV_16FC1,
    CV_16FC2,
    CV_16FC3,
    CV_16FC4,
} from './array-types';

import { Mat } from './mat';
import { Scalar } from './scalar';
import { Size } from './size';
import { Range } from './range';
import { Rect } from './rect';
import { Point } from './point';
import {
    DECOMP_LU,
    DECOMP_SVD,
    DECOMP_EIG,
    DECOMP_CHOLESKY,
    DECOMP_QR,
    DECOMP_NORMAL,
} from './decomp-types';

declare namespace cv {
    // Type exports
    export {
        CV_8U,
        CV_8UC1,
        CV_8UC2,
        CV_8UC3,
        CV_8UC4,
        CV_8S,
        CV_8SC1,
        CV_8SC2,
        CV_8SC3,
        CV_8SC4,
        CV_16U,
        CV_16UC1,
        CV_16UC2,
        CV_16UC3,
        CV_16UC4,
        CV_16S,
        CV_16SC1,
        CV_16SC2,
        CV_16SC3,
        CV_16SC4,
        CV_32S,
        CV_32SC1,
        CV_32SC2,
        CV_32SC3,
        CV_32SC4,
        CV_32F,
        CV_32FC1,
        CV_32FC2,
        CV_32FC3,
        CV_32FC4,
        CV_64F,
        CV_64FC1,
        CV_64FC2,
        CV_64FC3,
        CV_64FC4,
        CV_16F,
        CV_16FC1,
        CV_16FC2,
        CV_16FC3,
        CV_16FC4,
    };

    export { DECOMP_LU, DECOMP_SVD, DECOMP_EIG, DECOMP_CHOLESKY, DECOMP_QR, DECOMP_NORMAL };

    // Core classes
    export { Mat };
    export { Size };
    export { Scalar };
    export { Range };
    export { Rect };
    export { Point };

    // JS functions
    export const imshow: (src: string | HTMLCanvasElement, mat: Mat) => void;
    export let onRuntimeInitialized: () => void;
    export const matFromImageData: (imageData: ImageData) => Mat;
    export const matFromFileAsync: (file: File) => Promise<Mat>;
}

export default cv;
