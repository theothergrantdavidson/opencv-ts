type TERM_CRITERIA_COUNT = 1;
type TERM_CRITERIA_MAX_ITER = 1;
type TERM_CRITERIA_EPS = 2;

type Type = TERM_CRITERIA_COUNT | TERM_CRITERIA_MAX_ITER | TERM_CRITERIA_EPS;

export interface IType {
    TERM_CRITERIA_COUNT: TERM_CRITERIA_COUNT;
    TERM_CRITERIA_MAX_ITER: TERM_CRITERIA_MAX_ITER;
    TERM_CRITERIA_EPS: TERM_CRITERIA_EPS;
}

export interface TermCriteria {
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
    type: Type;
}
