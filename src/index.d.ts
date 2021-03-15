import cv from './opencv';

export default cv.cv;

export type Mat = InstanceType<typeof cv.Mat>;
export type Rect = InstanceType<typeof cv.Rect>;
export type Scalar = InstanceType<typeof cv.Scalar>;
export type Size = InstanceType<typeof cv.Size>;
export type Point = InstanceType<typeof cv.Point>;
