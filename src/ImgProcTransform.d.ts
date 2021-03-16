import { Mat, Size } from "./DataStructures";

declare module GeometricImageTransformations {
    enum _InterpolationFlags {
        INTER_NEAREST = 'INTER_NEAREST',
        INTER_LINEAR = 'INTER_LINEAR',
        INTER_CUBIC = 'INTER_CUBIC',
        INTER_AREA = 'INTER_AREA',
        INTER_LANCZOS4 = 'INTER_LANCZOS4',
        INTER_LINEAR_EXACT = 'INTER_LINEAR_EXACT',
        INTER_NEAREST_EXACT = 'INTER_NEAREST_EXACT',
        INTER_MAX = 'INTER_MAX',
        WARP_FILL_OUTLIERS = 'WARP_FILL_OUTLIERS',
        WARP_INVERSE_MAP = 'WARP_INVERSE_MAP',
    }

    interface InterpolationFlags {
        INTER_NEAREST: _InterpolationFlags.INTER_NEAREST;
        INTER_LINEAR: _InterpolationFlags.INTER_LINEAR;
        INTER_CUBIC: _InterpolationFlags.INTER_CUBIC;
        INTER_AREA: _InterpolationFlags.INTER_AREA;
        INTER_LANCZOS4: _InterpolationFlags.INTER_LANCZOS4;
        INTER_LINEAR_EXACT: _InterpolationFlags.INTER_LINEAR_EXACT;
        INTER_NEAREST_EXACT: _InterpolationFlags.INTER_NEAREST_EXACT;
        INTER_MAX: _InterpolationFlags.INTER_MAX;
        WARP_FILL_OUTLIERS: _InterpolationFlags.WARP_FILL_OUTLIERS;
        WARP_INVERSE_MAP: _InterpolationFlags.WARP_INVERSE_MAP;
    }

    interface GeometricImageTransformations {
        resize(
            src: Mat,
            dst: Mat,
            dsize: Size,
            fx: number,
            fy: number,
            code: _InterpolationFlags
        ): void;
    }
    

}

export = GeometricImageTransformations;
