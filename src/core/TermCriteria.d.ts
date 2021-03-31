declare module TermCriteria {
    enum Type {
        COUNT = 'COUNT',
        MAX_ITER = 'MAX_ITER',
        EPS = 'EPS'
    }

    interface _Type {
        COUNT: Type.COUNT,
        MAX_ITER: Type.MAX_ITER;
        EPS: Type.EPS
    }

    interface TermCriteria {
        new (): TermCriteria;
        /**
         * @param type The type of termination criteria, one of TermCriteria::Type
         * @param maxCount The maximum number of iterations or elements to compute.
         * @param epsilon The desired accuracy or change in parameters at which the iterative algorithm stops.

         */
        new (type: Type, maxCount: number, epsilon: number): TermCriteria;
        Type: Type;
        isValid(): boolean;
        epsilon: number;
        maxCount: number;
        type: Type
    }
}
export = TermCriteria;