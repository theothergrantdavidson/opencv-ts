import { Mat } from '../core/Mat';

declare module BackgroundSubtractorMOG2 {
    interface BackgroundSubtractorMOG2 {
        new (): BackgroundSubtractorMOG2;
        apply(image: Mat): void;
        getBackgroundImage(backgroundImage: Mat): void;
    }
}
export = BackgroundSubtractorMOG2;
