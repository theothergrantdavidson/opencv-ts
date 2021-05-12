declare module  Scalar {
    interface Scalar {
        new(): Scalar;
        new(s1: number): Scalar;
        new(s1: number, s2: number, s3: number, s4?: number): Scalar;
    }
}
export = Scalar