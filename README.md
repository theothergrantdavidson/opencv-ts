# opencv-ts
Package for opencvjs in typescript (WIP), adding class and function definiitons progresssively.


#example use

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

#Typings Progress
    - Modules
      - Core
        - Basic Structures: Done
        - Operations on Arrays: In progress
      - Image Processing
        - Image Filtering: Done
        - Geometric Image Transformations: started
        - Drawing Functions: Not started
        - Color Space Conversions: Done
        - ColorMaps in OpenCV: Not started
        - Planar Subdivision: Not started
        - Histograms: Not started
        - Structural Analysis and Shape Descriptors: Not started
        - Motion Analysis and Object Tracking: Not started
        - Feature Detection: Not started
        - Object Detection: Not started
        - Image Segmentation: Not started
