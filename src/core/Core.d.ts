import { Point } from './Point';

declare module Core {
    type NDArray<T> = NDimensionArray<T>;
    interface NDimensionArray<T> extends Array<NDArray<T> | T > {}

    enum CovarFlags {
        COVAR_SCRAMBLED = 0,
        COVAR_NORMAL = 1,
        COVAR_USE_AVG = 2,
        COVAR_SCALE = 4,
        COVAR_ROWS = 8,
        COVAR_COLS = 16,
    }

    interface _CovarFlags {
        COVAR_SCRAMBLED: CovarFlags.COVAR_SCRAMBLED;
        COVAR_NORMAL: CovarFlags.COVAR_NORMAL;
        COVAR_USE_AVG: CovarFlags.COVAR_USE_AVG;
        COVAR_SCALE: CovarFlags.COVAR_SCALE;
        COVAR_ROWS: CovarFlags.COVAR_ROWS;
        COVAR_COLS: CovarFlags.COVAR_COLS;
    }

    enum QuatAssumeType {
        QUAT_ASSUME_NOT_UNIT = 'QUAT_ASSUME_NOT_UNIT',
        QUAT_ASSUME_UNIT = 'QUAT_ASSUME_UNIT',
    }

    interface _QuatAssumeType {
        QUAT_ASSUME_NOT_UNIT: QuatAssumeType.QUAT_ASSUME_NOT_UNIT;
        QUAT_ASSUME_UNIT: QuatAssumeType.QUAT_ASSUME_UNIT;
    }
}
export = Core;
