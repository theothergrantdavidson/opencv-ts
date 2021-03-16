import { Mat } from './DataStructures';

declare module Histograms {
    enum _HistCompMethods {
        HISTCMP_CORREL = 'HISTCMP_CORREL',
        HISTCMP_CHISQR = 'HISTCMP_CHISQR',
        HISTCMP_INTERSECT = 'HISTCMP_INTERSECT',
        HISTCMP_BHATTACHARYYA = 'HISTCMP_BHATTACHARYYA',
        HISTCMP_HELLINGER = 'HISTCMP_HELLINGER',
        HISTCMP_KL_DIV = 'HISTCMP_KL_DIV',
    }

    interface HistCompMethods {
        HISTCMP_CORREL: _HistCompMethods.HISTCMP_CORREL;
        HISTCMP_CHISQR: _HistCompMethods.HISTCMP_CHISQR;
        HISTCMP_INTERSECT: _HistCompMethods.HISTCMP_INTERSECT;
        HISTCMP_BHATTACHARYYA: _HistCompMethods.HISTCMP_BHATTACHARYYA;
        HISTCMP_HELLINGER: _HistCompMethods.HISTCMP_HELLINGER;
        HISTCMP_KL_DIV: _HistCompMethods.HISTCMP_KL_DIV;
    }

    interface Histograms {
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
        calcHist(
            image: Mat,
            channels: Array<number>,
            mask: Mat,
            hist: Mat,
            histSize: Array<number>,
            ranges: Array<number>,
            accumulate?: boolean
        ): void;
    }
}

export = Histograms;