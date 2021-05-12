import { Mat } from '../core/Mat';

declare module BackgroundSubtractorMOG2 {
    interface BackgroundSubtractorMOG2 {
        new (image: number, fgmask: Mat | number, learningRate: boolean): BackgroundSubtractorMOG2;
        apply(image: Mat, dst: Mat): void;
        getBackgroundImage(backgroundImage: Mat): void;
    }
}
export = BackgroundSubtractorMOG2;
