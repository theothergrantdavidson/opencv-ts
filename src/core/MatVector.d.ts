import { Mat } from "./Mat";

declare module MatVector {
    interface MatVector {
        new (): MatVector;
        push_back(m: Mat): void;
        delete(): void;
        get(n: number): Mat;
        size(): number;
    }
}
export = MatVector;
