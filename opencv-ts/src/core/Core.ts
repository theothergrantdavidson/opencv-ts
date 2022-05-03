import { ColorConversions, IColorConversionCodes } from './src/ColorConversion';
import {
    CoreArray,
    IBorderTypes,
    ICmpTypes,
    IDecompTypes,
    IDftFlags,
    IGemmFlags,
    INormTypes,
    IReduceTypes,
    IRotateFlags,
} from './src/CoreArray';
import { IDataTypes } from './src/HalInterface';
import { IType } from './src/TermCriteria';
import { ISortFlags } from './src/Utils';

type COVAR_SCRAMBLED = 0;
type COVAR_NORMAL = 1;
type COVAR_USE_AVG = 2;
type COVAR_SCALE = 4;
type COVAR_ROWS = 8;
type COVAR_COLS = 16;

export interface ICovarFlags {
    COVAR_SCRAMBLED: COVAR_SCRAMBLED;
    COVAR_NORMAL: COVAR_NORMAL;
    COVAR_USE_AVG: COVAR_USE_AVG;
    COVAR_SCALE: COVAR_SCALE;
    COVAR_ROWS: COVAR_ROWS;
    COVAR_COLS: COVAR_COLS;
}

export type CovarFlags =
    | COVAR_SCRAMBLED
    | COVAR_NORMAL
    | COVAR_USE_AVG
    | COVAR_SCALE
    | COVAR_ROWS
    | COVAR_COLS;

type QUAT_ASSUME_NOT_UNIT = 'QUAT_ASSUME_NOT_UNIT';
type QUAT_ASSUME_UNIT = 'QUAT_ASSUME_UNIT';

interface IQuatAssumeType {
    QUAT_ASSUME_NOT_UNIT: QUAT_ASSUME_NOT_UNIT;
    QUAT_ASSUME_UNIT: QUAT_ASSUME_UNIT;
}

export type QuatAssumeType = QUAT_ASSUME_NOT_UNIT | QUAT_ASSUME_UNIT;

export default interface Core
    extends IDataTypes,
        ICovarFlags,
        IQuatAssumeType,
        IColorConversionCodes,
        IDecompTypes,
        IBorderTypes,
        ICmpTypes,
        IDftFlags,
        IGemmFlags,
        INormTypes,
        IReduceTypes,
        IRotateFlags,
        IType,
        ISortFlags,
        ColorConversions,
        CoreArray {}
