import { Mat } from '../core/Mat';
import { Rect } from '../core/Rect';
import { Size } from '../core/Size';
import { RotatedRect } from '../core/RotatedRect';
import { TermCriteria } from '../core/TermCriteria';

declare module ObjectTracking {
    enum Optflow {
        OPTFLOW_USE_INITIAL_FLOW = 4,
        OPTFLOW_LK_GET_MIN_EIGENVALS = 8,
        OPTFLOW_FARNEBACK_GAUSSIAN = 256,
    }

    interface _Optflow {
        OPTFLOW_USE_INITIAL_FLOW: Optflow.OPTFLOW_USE_INITIAL_FLOW;
        OPTFLOW_LK_GET_MIN_EIGENVALS: Optflow.OPTFLOW_LK_GET_MIN_EIGENVALS;
        OPTFLOW_FARNEBACK_GAUSSIAN: Optflow.OPTFLOW_FARNEBACK_GAUSSIAN;
    }

    enum Motion {
        MOTION_TRANSLATION = 0,
        MOTION_EUCLIDEAN = 1,
        MOTION_AFFINE = 2,
        MOTION_HOMOGRAPHY = 3,
    }

    interface _Motion {
        MOTION_TRANSLATION: Motion.MOTION_TRANSLATION;
        MOTION_EUCLIDEAN: Motion.MOTION_EUCLIDEAN;
        MOTION_AFFINE: Motion.MOTION_AFFINE;
        MOTION_HOMOGRAPHY: Motion.MOTION_HOMOGRAPHY;
    }

    interface ObjectTracking {
        /**
         * Computes a dense optical flow using the Gunnar Farneback's algorithm
         * @param prev first 8-bit single-channel input image.
         * @param next second input image of the same size and the same type as prev
         * @param flow computed flow image that has the same size as prev and type CV_32FC2
         * @param pyr_scale parameter, specifying the image scale (<1) to build pyramids for each image; pyr_scale=0.5 means a classical pyramid, where each next layer is twice smaller than the previous one
         * @param levels number of pyramid layers including the initial image; levels=1 means that no extra layers are created and only the original images are used
         * @param winsize averaging window size; larger values increase the algorithm robustness to image noise and give more chances for fast motion detection, but yield more blurred motion field
         * @param iterations number of iterations the algorithm does at each pyramid level
         * @param poly_n size of the pixel neighborhood used to find polynomial expansion in each pixel; larger values mean that the image will be approximated with smoother surfaces, yielding more robust algorithm and more blurred motion field, typically poly_n =5 or 7.
         * @param poly_sigma standard deviation of the Gaussian that is used to smooth derivatives used as a basis for the polynomial expansion; for poly_n=5, you can set poly_sigma=1.1, for poly_n=7, a good value would be poly_sigma=1.5.
         * @param flags operation flags that can be a combination of the following:
         *  - OPTFLOW_USE_INITIAL_FLOW uses the input flow as an initial flow approximation.
         *  - OPTFLOW_FARNEBACK_GAUSSIAN uses the Gaussian 𝚠𝚒𝚗𝚜𝚒𝚣𝚎×𝚠𝚒𝚗𝚜𝚒𝚣𝚎 filter instead of a box filter of the same size for optical flow estimation; usually, this option gives z more accurate flow than with a box filter, at the cost of lower speed; normally, winsize for a Gaussian window should be set to a larger value to achieve the same level of robustness.
         */
        calcOpticalFlowFarneback(
            prev: Mat,
            next: Mat,
            flow: Mat,
            pyr_scale: number,
            levels: number,
            winsize: number,
            iterations: number,
            poly_n: number,
            poly_sigma: number,
            flags: number
        ): void;
        /**
         * Calculates an optical flow for a sparse feature set using the iterative Lucas-Kanade method with pyramids
         * @param prevImg first 8-bit input image or pyramid constructed by buildOpticalFlowPyramid.
         * @param nextImg second input image or pyramid of the same size and the same type as prevImg
         * @param prevPts vector of 2D points for which the flow needs to be found; point coordinates must be single-precision floating-point numbers
         * @param nextPts output vector of 2D points (with single-precision floating-point coordinates) containing the calculated new positions of input features in the second image; when OPTFLOW_USE_INITIAL_FLOW flag is passed, the vector must have the same size as in the input
         * @param status output status vector (of unsigned chars); each element of the vector is set to 1 if the flow for the corresponding features has been found, otherwise, it is set to 0
         * @param err output vector of errors; each element of the vector is set to an error for the corresponding feature, type of the error measure can be set in flags parameter; if the flow wasn't found then the error is not defined (use the status parameter to find such cases).
         * @param winSize size of the search window at each pyramid level
         * @param maxLevel 0-based maximal pyramid level number; if set to 0, pyramids are not used (single level), if set to 1, two levels are used, and so on; if pyramids are passed to input then algorithm will use as many levels as pyramids have but no more than maxLevel.
         * @param criteria parameter, specifying the termination criteria of the iterative search algorithm (after the specified maximum number of iterations criteria.maxCount or when the search window moves by less than criteria.epsilon
         */
        calcOpticalFlowPyrLK(
            prevImg: Mat,
            nextImg: Mat,
            prevPts: Mat,
            nextPts: Mat,
            status: Mat,
            err: Mat,
            winSize: Size,
            maxLevel: number,
            criteria: TermCriteria
        ): void;
        /**
         * Finds an object center, size, and orientation
         * @param probImage Back projection of the object histogram. See calcBackProject
         * @param window Initial search window
         * @param criteria Stop criteria for the underlying meanShift. returns (in old interfaces) Number of iterations CAMSHIFT took to converge The function implements the CAMSHIFT object tracking algorithm [33] . First, it finds an object center using meanShift and then adjusts the window size and finds the optimal rotation. The function returns the rotated rectangle structure that includes the object position, size, and orientation. The next position of the search window can be obtained with RotatedRect::boundingRect()
         * @returns returns the rotated rectangle structure that includes the object position, size, and orientation.
         */
        CamShift(probImage: Mat, window: Rect, criteria: TermCriteria): [RotatedRect, Rect];
        /**
         * Finds the geometric transform (warp) between two images in terms of the ECC criterion
         * @param templateImage single-channel template image; CV_8U or CV_32F array.
         * @param inputImage single-channel input image which should be warped with the final warpMatrix in order to provide an image similar to templateImage, same type as templateImage
         * @param warpMatrix floating-point 2×3 or 3×3 mapping matrix (warp
         * @param motionType parameter, specifying the type of motion:
         *  - MOTION_TRANSLATION sets a translational motion model; warpMatrix is 2×3 with the first 2×2 part being the unity matrix and the rest two parameters being estimated.
         *  - MOTION_EUCLIDEAN sets a Euclidean (rigid) transformation as motion model; three parameters are estimated; warpMatrix is 2×3.
         *  - MOTION_AFFINE sets an affine motion model (DEFAULT); six parameters are estimated; warpMatrix is 2×3.
         *  - MOTION_HOMOGRAPHY sets a homography as a motion model; eight parameters are estimated;`warpMatrix` is 3×3
         * @param criteria parameter, specifying the termination criteria of the ECC algorithm; criteria.epsilon defines the threshold of the increment in the correlation coefficient between two iterations (a negative criteria.epsilon makes criteria.maxcount the only termination criterion). Default values are shown in the declaration above
         * @param inputMask An optional mask to indicate valid values of inputImage
         * @param gaussFiltSize An optional value indicating size of gaussian blur filter
         */
        /**
         * Finds an object on a back projection image
         * @param probImage Back projection of the object histogram. See calcBackProject for details
         * @param window Initial search window
         * @param criteria Stop criteria for the iterative search algorithm. returns : Number of iterations CAMSHIFT took to converge. The function implements the iterative object search algorithm. It takes the input back projection of an object and the initial position. The mass center in window of the back projection image is computed and the search window center shifts to the mass center. The procedure is repeated until the specified number of iterations criteria.maxCount is done or until the window center shifts by less than criteria.epsilon. The algorithm is used inside CamShift and, unlike CamShift , the search window size or orientation do not change during the search. You can simply pass the output of calcBackProject to this function. But better results can be obtained if you pre-filter the back projection and remove the noise. For example, you can do this by retrieving connected components with findContours , throwing away contours with small area ( contourArea ), and rendering the remaining contours with drawContours
         */
        meanShift(probImage: Mat, window: Rect, criteria: TermCriteria): [number, Rect];
        findTransformECC(
            templateImage: Mat,
            inputImage: Mat,
            warpMatrix: Mat,
            motionType: number,
            criteria: TermCriteria,
            inputMask: Mat,
            gaussFiltSize: number
        ): void;
    }
}
export = ObjectTracking;
