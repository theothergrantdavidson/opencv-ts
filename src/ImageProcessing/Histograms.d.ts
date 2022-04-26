import { Mat } from '../core/Mat';
import { MatVector } from '../core/MatVector';
import { DistanceTypes } from './Misc';

declare module Histograms {
    enum HistCompMethods {
        HISTCMP_CORREL = 0,
        HISTCMP_CHISQR = 1,
        HISTCMP_INTERSECT = 2,
        HISTCMP_BHATTACHARYYA = 3,
        HISTCMP_HELLINGER = HISTCMP_BHATTACHARYYA,
        HISTCMP_CHISQR_ALT = 4,
        HISTCMP_KL_DIV = 5,
    }

    interface _HistCompMethods {
        HISTCMP_CORREL: HistCompMethods.HISTCMP_CORREL;
        HISTCMP_CHISQR: HistCompMethods.HISTCMP_CHISQR;
        HISTCMP_INTERSECT: HistCompMethods.HISTCMP_INTERSECT;
        HISTCMP_BHATTACHARYYA: HistCompMethods.HISTCMP_BHATTACHARYYA;
        HISTCMP_HELLINGER: HistCompMethods.HISTCMP_HELLINGER;
        HISTCMP_CHISQR_ALT: HistCompMethods.HISTCMP_CHISQR_ALT;
        HISTCMP_KL_DIV: HistCompMethods.HISTCMP_KL_DIV;
    }

    interface Histograms {
        /**
         *
         * @param images source arrays. They all should have the same depth, cv.CV_8U, cv.CV_16U or cv.CV_32F , and the same size. Each of them can have an arbitrary number of channels
         * @param channels the list of channels used to compute the back projection. The number of channels must match the histogram dimensionality
         * @param hist input histogram that can be dense or sparse
         * @param dst destination back projection array that is a single-channel array of the same size and depth as images[0].
         * @param ranges array of arrays of the histogram bin boundaries in each dimension
         * @param scale optional scale factor for the output back projection.
         * @example
         * let src = cv.imread('srcCanvasInput');
         * let dst = cv.imread('dstCanvasInput');
         * cv.cvtColor(src, src, cv.COLOR_RGB2HSV, 0);
         * cv.cvtColor(dst, dst, cv.COLOR_RGB2HSV, 0);
         * let srcVec = new cv.MatVector();
         * let dstVec = new cv.MatVector();
         * srcVec.push_back(src); dstVec.push_back(dst);
         * let backproj = new cv.Mat();
         * let none = new cv.Mat();
         * let mask = new cv.Mat();
         * let hist = new cv.Mat();
         * let channels = [0];
         * let histSize = [50];
         * let ranges = [0, 180];
         * let accumulate = false;
         * cv.calcHist(srcVec, channels, mask, hist, histSize, ranges, accumulate);
         * cv.normalize(hist, hist, 0, 255, cv.NORM_MINMAX, -1, none);
         * cv.calcBackProject(dstVec, channels, hist, backproj, ranges, 1);
         * cv.imshow('canvasOutput', backproj);
         * src.delete(); dst.delete(); srcVec.delete(); dstVec.delete();
         * backproj.delete(); mask.delete(); hist.delete(); none.delete();
         */
        calcBackProject(
            images: Mat | MatVector,
            channels: number | number[],
            hist: Mat,
            dst: Mat,
            ranges: MatVector | number[],
            scale?: number
        ): void;
        /**
         * Calculates a histogram of a set of arrays
         * @param image Source arrays. They all should have the same depth, CV_8U, CV_16U or CV_32F , and the same size. Each of them can have an arbitrary number of channels
         * @param channels List of the dims channels used to compute the histogram. The first array channels are numerated from 0 to images[0].channels()-1 , the second array channels are counted from images[0].channels() to images[0].channels() + images[1].channels()-1, and so on.
         * @param mask Optional mask. If the matrix is not empty, it must be an 8-bit array of the same size as images[i] . The non-zero mask elements mark the array elements counted in the histogram
         * @param hist Output histogram, which is a dense or sparse dims -dimensional array
         * @param histSize Array of histogram sizes in each dimension
         * @param ranges Array of the dims arrays of the histogram bin boundaries in each dimension
         * @param accumulate Accumulation flag. If it is set, the histogram is not cleared in the beginning when it is allocated. This feature enables you to compute a single histogram from several sets of arrays, or to update the histogram in time
         * @example
         * let src = cv.imread('canvasInput');
         * cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
         * let srcVec = new cv.MatVector();
         * srcVec.push_back(src);
         * let accumulate = false;
         * let channels = [0];
         * let histSize = [256];
         * let ranges = [0, 255];
         * let hist = new cv.Mat();
         * let mask = new cv.Mat();
         * let color = new cv.Scalar(255, 255, 255);
         * let scale = 2;
         * // You can try more different parameters
         * cv.calcHist(srcVec, channels, mask, hist, histSize, ranges, accumulate);
         * let result = cv.minMaxLoc(hist, mask);
         * let max = result.maxVal;
         * let dst = new cv.Mat.zeros(src.rows, histSize[0] * scale, cv.CV_8UC3);
         * // draw histogram
         * for (let i = 0; i < histSize[0]; i++) {
         *     let binVal = hist.data32F[i] * src.rows / max;
         *     let point1 = new cv.Point(i * scale, src.rows - 1);
         *     let point2 = new cv.Point((i + 1) * scale - 1, src.rows - binVal);
         *     cv.rectangle(dst, point1, point2, color, cv.FILLED);
         * }
         * cv.imshow('canvasOutput', dst);
         * src.delete(); dst.delete(); srcVec.delete(); mask.delete(); hist.delete();
         */
        calcHist(
            image: Mat | MatVector,
            channels: number | number[],
            mask: Mat,
            hist: Mat,
            histSize: number | number[],
            ranges: number | number[],
            accumulate?: boolean
        ): void;
        /**
         *
         * @param H1 First compared histogram
         * @param H2 Second compared histogram of the same size as H1
         * @param method Comparison method, see HistCompMethods
         * @returns returns d(H1,H2)
         */
        compareHist(H1: Mat, H2: Mat, method: HistCompMethods): number;
        /**
         * Computes the "minimal work" distance between two weighted point configurations
         * @param signature1 First signature, a 𝚜𝚒𝚣𝚎𝟷×𝚍𝚒𝚖𝚜+1 floating-point matrix. Each row stores the point weight followed by the point coordinates. The matrix is allowed to have a single column (weights only) if the user-defined cost matrix is used. The weights must be non-negative and have at least one non-zero value
         * @param signature2 Second signature of the same format as signature1 , though the number of rows may be different. The total weights may be different. In this case an extra "dummy" point is added to either signature1 or signature2. The weights must be non-negative and have at least one non-zero value
         * @param distType Used metric. See DistanceTypes.
         * @param cost User-defined 𝚜𝚒𝚣𝚎𝟷×𝚜𝚒𝚣𝚎𝟸 cost matrix. Also, if a cost matrix is used, lower boundary lowerBound cannot be calculated because it needs a metric function
         * @param lowerBound Optional input/output parameter: lower boundary of a distance between the two signatures that is a distance between mass centers. The lower boundary may not be calculated if the user-defined cost matrix is used, the total weights of point configurations are not equal, or if the signatures consist of weights only (the signature matrices have a single column). You must** initialize *lowerBound . If the calculated distance between mass centers is greater or equal to *lowerBound (it means that the signatures are far enough), the function does not calculate EMD. In any case *lowerBound is set to the calculated distance between mass centers on return. Thus, if you want to calculate both distance between mass centers and EMD, *lowerBound should be set to 0.
         * @param flow Resultant 𝚜𝚒𝚣𝚎𝟷×𝚜𝚒𝚣𝚎𝟸 flow matrix: 𝚏𝚕𝚘𝚠i,j is a flow from i -th point of signature1 to j -th point of signature2
         */
        EMD(
            signature1: Mat,
            signature2: Mat,
            distType: DistanceTypes,
            cost: MatVector | Mat,
            lowerBound: number,
            flow?: Mat
        ): number;
        /**
         * Equalizes the histogram of a grayscale image
         * @param src Source 8-bit single channel image
         * @param dst Destination image of the same size and type as src
         * let src = cv.imread('canvasInput');
         * @example
         * let dst = new cv.Mat();
         * cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
         * cv.equalizeHist(src, dst);
         * cv.imshow('canvasOutput', src);
         * cv.imshow('canvasOutput', dst);
         * src.delete(); dst.delete();
         */
        equalizeHist(src: Mat, dst: Mat): void;
    }
}
export = Histograms;
