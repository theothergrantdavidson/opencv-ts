import { ColorMap, IColormapTypes } from './src/ColorMap';
import { IMarkerTypes, ILineTypes, IHersheyFonts, DrawingFunctions } from './src/DrawingFunctions';
import { IHoughModes, ILineSegmentDetectorModes, FeatureDetection } from './src/Feature';
import {
    IInterpolationFlags,
    IInterpolationMasks,
    IWarpPolarMode,
    GeometricImageTransformations,
} from './src/GeometricImageTransformations';
import { Histograms, IHistCompMethods } from './src/Histograms';
import { IMorphTypes, ISpecialFilter, ImageFiltering } from './src/ImageFiltering';
import {
    IDistanceTypes,
    IFloodFillFlags,
    IGrabCutClasses,
    IAdaptiveThresholdTypes,
    IDistanceTransformLabelTypes,
    IDistanceTransformMasks,
    IGrabCutModes,
    IThresholdTypes,
    Misc,
} from './src/Misc';
import { ITemplateMatchModes, ObjectDetection } from './src/Object';
import { ImageSegmentation } from './src/Segmentation';
import {
    IConnectedComponentsAlgorithmsTypes,
    IConnectedComponentsTypes,
    IContourApproximationModes,
    IRectanglesIntersectTypes,
    IRetrievalModes,
    IShapeMatchModes,
    StructuralAnalysisShapeDescriptors,
} from './src/Shape';
import { IEdgeType } from './src/Subdiv2D';


export default interface ImageProcessing
    extends IColormapTypes,
        IMarkerTypes,
        ILineTypes,
        IHersheyFonts,
        IHoughModes,
        ILineSegmentDetectorModes,
        IInterpolationFlags,
        IInterpolationMasks,
        IWarpPolarMode,
        IHistCompMethods,
        IMorphTypes,
        ISpecialFilter,
        IDistanceTypes,
        IFloodFillFlags,
        IGrabCutClasses,
        IAdaptiveThresholdTypes,
        IDistanceTransformLabelTypes,
        IDistanceTransformMasks,
        IGrabCutModes,
        IThresholdTypes,
        ITemplateMatchModes,
        IConnectedComponentsAlgorithmsTypes,
        IConnectedComponentsTypes,
        IContourApproximationModes,
        IRectanglesIntersectTypes,
        IRetrievalModes,
        IShapeMatchModes,
        IEdgeType,
        StructuralAnalysisShapeDescriptors,
        ImageSegmentation,
        ObjectDetection,
        Misc,
        ImageFiltering,
        Histograms,
        GeometricImageTransformations,
        FeatureDetection,
        ColorMap,
        DrawingFunctions {}
