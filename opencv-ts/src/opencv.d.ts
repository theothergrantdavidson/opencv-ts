import Core from './core/Core';
import { DataTypes } from './core/src/HalInterface';
import { Mat } from './core/src/Mat';
import { MatVector } from './core/src/MatVector';
import { Point } from './core/src/Point';
import { Range } from './core/src/Range';
import { Rect } from './core/src/Rect';
import { RotatedRect } from './core/src/RotatedRect';
import { Scalar } from './core/src/Scalar';
import { Size } from './core/src/Size';
import { TermCriteria } from './core/src/TermCriteria';
import dnn, { dnn_Net } from './dnn/dnn';
import ImageProcessing from './ImageProcessing/ImageProc';
import { ObjectDetection } from './ImageProcessing/src/Object';
import { QuadEdge, Subdiv2D, Vertex } from './ImageProcessing/src/Subdiv2D';
import { BackgroundSubtractor } from './video/BackgroundSubtractor';
import { BackgroundSubtractorMOG2 } from './video/BackgroundSubtractorMOG2';
interface VideoCapture {
    /**
     * Creates a VideoCapture object that reads from a source HTMLVideoElement
     */
    new (videoSource: string | HTMLVideoElement): VideoCapture;
    /**
     * Outputs a HTMLVideo elements frame to an instance of a Mat object
     * @param src cv.Mat to output to
     */
    read(src: Mat): void;
}
interface cv extends Core, dnn, ImageProcessing, ObjectDetection {
    // JS only helper functions
    /**
     * Renders an input Mat to a canvas object
     * @param canvasSource HTMLCanvas element or id of HTMLCanvas to output Mat to
     * @param mat input source mat
     */
    imshow(canvasSource: string | HTMLCanvasElement, mat: Mat): void;
    /**
     * Reads image data from a source canvas and outputs it to an instance of cv.Mat
     * @param imageSource source canvas to read imagedata from
     */
    imread(imageSource: string | HTMLImageElement | HTMLCanvasElement): Mat;

    /**
     * Create a Mat from the specified image data.
     * @param imageData image data used to create the Mat
     */
    matFromImageData(imageData: ImageData): Mat;

    /**
     * Create a Mat from a data array.
     * @param rows number of rows of the Mat.
     * @param cols number of columns of the Mat.
     * @param type data type of the Mat.
     * @param array source data array.
     */
    matFromArray(rows: number, cols: number, type: DataTypes, array: number[]): Mat;

    /**
     * Function called when opencv is initialized
     */
    onRuntimeInitialized: () => void;

    VideoCapture: VideoCapture;
    TermCriteria: TermCriteria;

    // Core classes
    Mat: Mat;
    Size: Size;
    Point: Point;
    Range: Range;
    Scalar: Scalar;
    Rect: Rect;
    RotatedRect: RotatedRect;
    Subdiv2D: Subdiv2D;
    QuadEdge: QuadEdge;
    Vertex: Vertex;
    BackgroundSubtractor: BackgroundSubtractor;
    BackgroundSubtractorMOG2: BackgroundSubtractorMOG2;
    MatVector: MatVector;
}

declare const cv: cv;

export default cv;
export { Mat, MatVector, Point, Range, Rect, RotatedRect, Size, TermCriteria, dnn_Net };
