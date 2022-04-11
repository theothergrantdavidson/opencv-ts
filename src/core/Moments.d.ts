declare module Moments {
    interface Moments {
        new() : Moments;

        // spatial moments
        m00: number;
        m10: number;
        m01: number;
        m20: number;
        m11: number;
        m02: number;
        m30: number;
        m21: number;
        m12: number;
        m03: number;
        // central moments
        mu20: number;
        mu11: number;
        mu02: number;
        mu30: number;
        mu21: number;
        mu12: number;
        mu03: number;
        // central normalized moments
        nu20: number;
        nu11: number;
        nu02: number;
        nu30: number;
        nu21: number;
        nu12: number;
        nu03: number;
    }
}

export = Moments;
