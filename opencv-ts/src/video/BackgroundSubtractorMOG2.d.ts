import { Mat } from '../core/src/Mat';

export interface BackgroundSubtractorMOG2 {
    new (history: number, varThreshold: number, detectShadows: boolean): BackgroundSubtractorMOG2;
    new (image: number, fgmask: Mat, learningRate: [0, 1]): BackgroundSubtractorMOG2;
    apply(image: Mat, dst: Mat): void;
    getBackgroundImage(backgroundImage: Mat): void;
}
