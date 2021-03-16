import { Mat } from './DataStructures';

declare module ObjectDetection {
    enum _TemplateMatchModes {
        TM_SQDIFF = 'TM_SQDIFF',
        TM_SQDIFF_NORMED = 'TM_SQDIFF_NORMED',
        TM_CCORR = 'TM_CCORR',
        TM_CCORR_NORMED = 'TM_CCORR_NORMED',
        TM_CCOEFF = 'TM_CCOEFF',
        TM_CCOEFF_NORMED = 'TM_CCOEFF_NORMED',
    }

    interface TemplateMatchModes {
        TM_SQDIFF: _TemplateMatchModes.TM_SQDIFF;
        TM_SQDIFF_NORMED: _TemplateMatchModes.TM_SQDIFF_NORMED;
        TM_CCORR: _TemplateMatchModes.TM_CCORR;
        TM_CCORR_NORMED: _TemplateMatchModes.TM_CCORR_NORMED;
        TM_CCOEFF: _TemplateMatchModes.TM_CCOEFF;
        TM_CCOEFF_NORMED: _TemplateMatchModes.TM_CCOEFF_NORMED;
    }

    interface ObjectDetection {
        /**
         * Compares a template against overlapped image regions.
         * @param image image where the search is running. It must be 8-bit or 32-bit floating-point.
         * @param templ searched template. It must be not greater than the source image and have the same data type.
         * @param result map of comparison results. It must be single-channel 32-bit floating-point.
         * @param method parameter specifying the comparison method(see cv.TemplateMatchModes).
         * @param mask mask of searched template. It must have the same datatype and size with templ. It is not set by default.
         * @see https://docs.opencv.org/master/d8/dd1/tutorial_js_template_matching.html
         */
        matchTemplate(
            image: Mat,
            templ: Mat,
            result: Mat,
            method: _TemplateMatchModes,
            mask?: Mat
        ): void;
    }
}
export = ObjectDetection;
