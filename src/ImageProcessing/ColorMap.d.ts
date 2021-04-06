import { Mat } from "../core/Mat";

declare module ColorMap {
    enum ColormapTypes {
        COLORMAP_AUTUMN = 0,
        COLORMAP_BONE = 1,
        COLORMAP_JET = 2,
        COLORMAP_WINTER = 3,
        COLORMAP_RAINBOW = 4,
        COLORMAP_OCEAN = 5,
        COLORMAP_SUMMER = 6,
        COLORMAP_SPRING = 7,
        COLORMAP_COOL = 8,
        COLORMAP_HSV = 9,
        COLORMAP_PINK = 10,
        COLORMAP_HOT = 11,
        COLORMAP_PARULA = 12,
        COLORMAP_MAGMA = 13,
        COLORMAP_INFERNO = 14,
        COLORMAP_PLASMA = 15,
        COLORMAP_VIRIDIS = 16,
        COLORMAP_CIVIDIS = 17,
        COLORMAP_TWILIGHT = 18,
        COLORMAP_TWILIGHT_SHIFTED = 19,
        COLORMAP_TURBO = 20,
        COLORMAP_DEEPGREEN = 21,
    }

    interface _ColormapTypes {
        COLORMAP_AUTUMN: ColormapTypes.COLORMAP_AUTUMN;
        COLORMAP_BONE: ColormapTypes.COLORMAP_BONE;
        COLORMAP_JET: ColormapTypes.COLORMAP_JET;
        COLORMAP_WINTER: ColormapTypes.COLORMAP_WINTER;
        COLORMAP_RAINBOW: ColormapTypes.COLORMAP_RAINBOW;
        COLORMAP_OCEAN: ColormapTypes.COLORMAP_OCEAN;
        COLORMAP_SUMMER: ColormapTypes.COLORMAP_SUMMER;
        COLORMAP_SPRING: ColormapTypes.COLORMAP_SPRING;
        COLORMAP_COOL: ColormapTypes.COLORMAP_COOL;
        COLORMAP_HSV: ColormapTypes.COLORMAP_HSV;
        COLORMAP_PINK: ColormapTypes.COLORMAP_PINK;
        COLORMAP_HOT: ColormapTypes.COLORMAP_HOT;
        COLORMAP_PARULA: ColormapTypes.COLORMAP_PARULA;
        COLORMAP_MAGMA: ColormapTypes.COLORMAP_MAGMA;
        COLORMAP_INFERNO: ColormapTypes.COLORMAP_INFERNO;
        COLORMAP_PLASMA: ColormapTypes.COLORMAP_PLASMA;
        COLORMAP_VIRIDIS: ColormapTypes.COLORMAP_VIRIDIS;
        COLORMAP_CIVIDIS: ColormapTypes.COLORMAP_CIVIDIS;
        COLORMAP_TWILIGHT: ColormapTypes.COLORMAP_TWILIGHT;
        COLORMAP_TWILIGHT_SHIFTED: ColormapTypes.COLORMAP_TWILIGHT_SHIFTED;
        COLORMAP_TURBO: ColormapTypes.COLORMAP_TURBO;
        COLORMAP_DEEPGREEN: ColormapTypes.COLORMAP_DEEPGREEN;
    }

    interface ColorMap {
        applyColorMap(src: Mat, dst: Mat, colormap: ColormapTypes): void;
    }
}
export = ColorMap;
