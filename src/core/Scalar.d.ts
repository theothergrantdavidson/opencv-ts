declare module  Scalar {
    interface Scalar {
        new(): Scalar;
        new(s1: number): Scalar;
        new(s1: number, s2: number, s3: number, s4?: number): Scalar;

        //returns a scalar with all elements set to v0
        all(v0: number): Scalar;
    }
}
export = Scalar
