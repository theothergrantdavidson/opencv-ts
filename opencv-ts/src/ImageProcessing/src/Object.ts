import { Mat } from '../../core/src/Mat';

type TM_SQDIFF = 0;
type TM_SQDIFF_NORMED = 1;
type TM_CCORR = 2;
type TM_CCORR_NORMED = 3;
type TM_CCOEFF = 4;
type TM_CCOEFF_NORMED = 5;

export type TemplateMatchModes =
    | TM_SQDIFF
    | TM_SQDIFF_NORMED
    | TM_CCORR
    | TM_CCORR_NORMED
    | TM_CCOEFF
    | TM_CCOEFF_NORMED;

export interface ITemplateMatchModes {
    TM_SQDIFF: TM_SQDIFF;
    TM_SQDIFF_NORMED: TM_SQDIFF_NORMED;
    TM_CCORR: TM_CCORR;
    TM_CCORR_NORMED: TM_CCORR_NORMED;
    TM_CCOEFF: TM_CCOEFF;
    TM_CCOEFF_NORMED: TM_CCOEFF_NORMED;
}

export interface ObjectDetection {
    /**
     * Compares a template against overlapped image regions
     * @param image Image where the search is running. It must be 8-bit or 32-bit floating-point
     * @param templ Searched template. It must be not greater than the source image and have the same data type.
     * @param result Map of comparison results. It must be single-channel 32-bit floating-point. If image is W×H and templ is w×h , then result is (W−w+1)×(H−h+1) .
     * @param method Parameter specifying the comparison method, @see TemplateMatchModes
     * @param mask Mask of searched template. It must have the same datatype and size with templ. It is not set by default. Currently, only the TM_SQDIFF and TM_CCORR_NORMED methods are supported
     */
    matchTemplate(image: Mat, templ: Mat, result: Mat, method: TemplateMatchModes, mask: Mat): void;
}
