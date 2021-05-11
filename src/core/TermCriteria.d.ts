declare module TermCriteria {
    enum Type {
        TERM_CRITERIA_COUNT = 1,
        TERM_CRITERIA_MAX_ITER =  1,
        TERM_CRITERIA_EPS = 2
    }

    interface _Type {
        TERM_CRITERIA_COUNT: Type.TERM_CRITERIA_COUNT,
        TERM_CRITERIA_MAX_ITER: Type.TERM_CRITERIA_MAX_ITER;
        TERM_CRITERIA_EPS: Type.TERM_CRITERIA_EPS
    }

    interface TermCriteria {
        new (): TermCriteria;
        /**
         * @param type The type of termination criteria, one of TermCriteria::Type
         * @param maxCount The maximum number of iterations or elements to compute.
         * @param epsilon The desired accuracy or change in parameters at which the iterative algorithm stops.

         */
        new (type: Type , maxCount: number, epsilon: number): TermCriteria;
        Type: Type;
        isValid(): boolean;
        epsilon: number;
        maxCount: number;
        type: Type
    }
}
export = TermCriteria;