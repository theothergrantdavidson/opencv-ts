# opencv-ts
Package for opencvjs in typescript (WIP), adding class and function definiitons progresssively.

## compatibility

Compatible with OpenCV 4.5 version

## example use

```typescript
import cv, { Mat, Rect } from "opencv-ts";

cv.onRuntimeInitialized = () => {
    const src = cv.imread("inputCanvas");
    const dst: Mat = new cv.Mat(src.cols, src.rows, cv.CV_8UC4);

    cv.resize(src, dst, new cv.Size(500, 500), 0, 0, cv.INTER_AREA);

    const roiRect: Rect = new cv.Rect(0, 0, 200, 200);

    const roi = dst.roi(roiRect);

    cv.imshow('outputCanvas', roi);
};

```

## Requirements

It is necessary that opencv is installed on your computer, and the paths configured (windows) correctly as instructed by [OpenCV.org](https://opencv.org/)

## Typings Progress
* Modules
  * Core
    * ~~Basic Structures~~
    * ~~Operations on Arrays~~
  * Image Processing
    * ~~Image Filtering~~
    * ~~Geometric Image Transformations~~
    * ~~Drawing Functions~~
    * ~~Color Space Conversions~~
    * ~~ColorMaps in OpenCV~~
    * ~~Planar Subdivision~~
    * ~~Histograms~~
    * ~~Miscellaneous Image Transformations~~
    * ~~Structural Analysis and Shape Descriptors~~
    * ~~Feature Detection~~
    * ~~Object Detection~~
    * ~~Image Segmentation~~
    * ~~Video: Object Tracking~~
    * 2D Features Framework
    * Computational Photography
      * Inpainting
    * Camera Calibration and 3D Reconstruction
      * Fisheye camera model
