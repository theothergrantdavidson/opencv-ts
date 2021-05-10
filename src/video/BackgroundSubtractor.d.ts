import { Mat } from '../core/Mat';

declare module BackgroundSubtractor {
    interface BackgroundSubtractor {
        new (): BackgroundSubtractor;
        apply(image: Mat): void;
        getBackgroundImage(backgroundImage: Mat): void;
    }
}
export = BackgroundSubtractor;
