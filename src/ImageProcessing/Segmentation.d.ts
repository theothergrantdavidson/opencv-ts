import { Mat } from '../core/Mat';
import { Rect } from '../core/Rect';
import { GrabCutModes } from './Misc';

declare module ImageSegmentation {
    interface ImageSegmentation {
        /**
         * Runs the GrabCut algorithm
         * @param img Input 8-bit 3-channel image
         * @param mask Input/output 8-bit single-channel mask. The mask is initialized by the function when mode is set to GC_INIT_WITH_RECT. Its elements may have one of the GrabCutClasses.
         * @param rect ROI containing a segmented object. The pixels outside of the ROI are marked as "obvious background".
         * @param bgdModel Temporary array for the background model. Do not modify it while you are processing the same image.
         * @param fgdModel Temporary arrays for the foreground model. Do not modify it while you are processing the same image
         * @param iterCount Number of iterations the algorithm should make before returning the result
         */
        grabCut(
            img: Mat,
            mask: Mat,
            rect: Rect,
            bgdModel: Mat,
            fgdModel: Mat,
            iterCount: number,
            mode: GrabCutModes
        ): void;
        /**
         * Performs a marker-based image segmentation using the watershed algorithm
         * @param image Input 8-bit 3-channel image
         * @param markers Input/output 32-bit single-channel image (map) of markers. It should have the same size as image
         */
        watershed(image: Mat, markers: Mat): void;
    }
}

export = ImageSegmentation;
