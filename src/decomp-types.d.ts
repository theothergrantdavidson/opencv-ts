export class DECOMP_LU {}
export class DECOMP_SVD {}
export class DECOMP_EIG {}
export class DECOMP_CHOLESKY {}
export class DECOMP_QR {}
export class DECOMP_NORMAL {}

export type DecompTypes =
    | typeof DECOMP_LU
    | typeof DECOMP_SVD
    | typeof DECOMP_EIG
    | typeof DECOMP_CHOLESKY
    | typeof DECOMP_QR
    | typeof DECOMP_NORMAL;