import { Mat } from '../core/src/Mat';

export interface BackgroundSubtractor {
    new (): BackgroundSubtractor;
    apply(image: Mat): void;
    getBackgroundImage(backgroundImage: Mat): void;
}
