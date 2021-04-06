declare module Misc {
    enum DistanceTypes {
        DIST_USER = -1,
        DIST_L1 = 1,
        DIST_L2 = 2,
        DIST_C = 3,
        DIST_L12 = 4,
        DIST_FAIR = 5,
        DIST_WELSCH = 6,
        DIST_HUBER = 7,
    }

    interface _DistanceTypes {
        DIST_USER: DistanceTypes.DIST_USER;
        DIST_L1: DistanceTypes.DIST_L1;
        DIST_L2: DistanceTypes.DIST_L2;
        DIST_C: DistanceTypes.DIST_C;
        DIST_L12: DistanceTypes.DIST_L12;
        DIST_FAIR: DistanceTypes.DIST_FAIR;
        DIST_WELSCH: DistanceTypes.DIST_WELSCH;
        DIST_HUBER: DistanceTypes.DIST_HUBER;
    }
}
export = Misc;