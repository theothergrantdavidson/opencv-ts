import { Mat } from './Mat';

export interface MatVector {
    new (): MatVector;
    push_back(m: Mat): void;
    delete(): void;
    get(n: number): Mat;
    size(): number;
}
