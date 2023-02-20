export declare class Scalar {
    constructor();
    constructor(s1: number);
    constructor(s1: number, s2: number, s3: number);
    constructor(s1: number, s2: number, s3: number, s4: number);

    //returns a scalar with all elements set to v0
    all(v0: number): Scalar;
}
