# opencv-ts
Package for opencvjs in typescript (WIP), adding class and function definiitons progresssively.


#example use

```typescript
import cv, { Mat, Rect } from "opencv-ts";

const src = cv.imread("inputCanvas");
const dst: Mat = new cv.Mat(src.cols, src.rows, cv.CV_8UC4);

cv.resize(src, dst, new cv.Size(500, 500), 0, 0, cv.INTER_AREA);

const roiRect: Rect = new cv.Rect(0, 0, 200, 200);

const roi = dst.roi(roiRect);

cv.imshow('outputCanvas', roi);

```