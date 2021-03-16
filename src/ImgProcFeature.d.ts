import { Mat } from './DataStructures';

declare module FeatureDetection {
    interface FeatureDetection {
        /**
         * Determines strong corners on an image.
         * @param image Input 8-bit or floating-point 32-bit, single-channel image.
         * @param corners Output vector of detected corners.
         * @param maxCorners Maximum number of corners to return. If there are more corners than are found, the strongest of them is returned. maxCorners <= 0 implies that no limit on the maximum is set and all detected corners are returned.
         * @param qualityLevel Parameter characterizing the minimal accepted quality of image corners. The parameter value is multiplied by the best corner quality measure, which is the minimal eigenvalue (see cornerMinEigenVal ) or the Harris function response (see cornerHarris ). The corners with the quality measure less than the product are rejected. For example, if the best corner has the quality measure = 1500, and the qualityLevel=0.01 , then all the corners with the quality measure less than 15 are rejected.
         * @param minDistance Minimum possible Euclidean distance between the returned corners.
         * @param mask Optional region of interest. If the image is not empty (it needs to have the type CV_8UC1 and the same size as image ), it specifies the region in which the corners are detected.
         * @param blockSize Size of an average block for computing a derivative covariation matrix over each pixel neighborhood. See cornerEigenValsAndVecs .
         * @param useHarrisDetector Parameter indicating whether to use a Harris detector (see cornerHarris) or cornerMinEigenVal.
         * @param k Free parameter of the Harris detector.
         */
        goodFeaturesToTrack(
            image: Mat,
            corners: Mat,
            maxCorners: number,
            qualityLevel: number,
            minDistance: number,
            mask: Mat | undefined,
            blockSize: number,
            useHarrisDetector: boolean,
            k: number | undefined
        ): void;   
    }
}
export = FeatureDetection;
