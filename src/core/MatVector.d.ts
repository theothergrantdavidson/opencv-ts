import { Mat } from "./Mat";

declare module MatVector {
    interface MatVector {
        new (): MatVector;
        push_back(m: Mat): void;
        delete(): void;
    }
}
export = MatVector;
