type CV_8U = 0;
type CV_8S = 1;
type CV_16U = 2;
type CV_16S = 3;
type CV_32S = 4;
type CV_32F = 5;
type CV_64F = 6;
type CV_16F = 7;
type CV_8UC1 = 0;
type CV_8UC2 = 8;
type CV_8UC3 = 16;
type CV_8UC4 = 24;
type CV_8SC1 = 1;
type CV_8SC2 = 9;
type CV_8SC3 = 17;
type CV_8SC4 = 25;
type CV_16UC1 = 2;
type CV_16UC2 = 10;
type CV_16UC3 = 18;
type CV_16UC4 = 26;
type CV_16SC1 = 3;
type CV_16SC2 = 11;
type CV_16SC3 = 19;
type CV_16SC4 = 27;
type CV_32SC1 = 4;
type CV_32SC2 = 12;
type CV_32SC3 = 20;
type CV_32SC4 = 28;
type CV_32FC1 = 5;
type CV_32FC2 = 13;
type CV_32FC3 = 21;
type CV_32FC4 = 29;
type CV_64FC1 = 6;
type CV_64FC2 = 14;
type CV_64FC3 = 22;
type CV_64FC4 = 30;
type CV_16FC1 = 7;
type CV_16FC2 = 15;
type CV_16FC3 = 23;
type CV_16FC4 = 31;

export type DataTypes =
    | CV_8U
    | CV_8S
    | CV_16U
    | CV_16S
    | CV_32S
    | CV_32F
    | CV_64F
    | CV_16F
    | CV_8UC1
    | CV_8UC2
    | CV_8UC3
    | CV_8UC4
    | CV_8SC1
    | CV_8SC2
    | CV_8SC3
    | CV_8SC4
    | CV_16UC1
    | CV_16UC2
    | CV_16UC3
    | CV_16UC4
    | CV_16SC1
    | CV_16SC2
    | CV_16SC3
    | CV_16SC4
    | CV_32SC1
    | CV_32SC2
    | CV_32SC3
    | CV_32SC4
    | CV_32FC1
    | CV_32FC2
    | CV_32FC3
    | CV_32FC4
    | CV_64FC1
    | CV_64FC2
    | CV_64FC3
    | CV_64FC4
    | CV_16FC1
    | CV_16FC2
    | CV_16FC3
    | CV_16FC4;

export interface IDataTypes {
    CV_8U: CV_8U;
    CV_8S: CV_8S;
    CV_16U: CV_16U;
    CV_16S: CV_16S;
    CV_32S: CV_32S;
    CV_32F: CV_32F;
    CV_64F: CV_64F;
    CV_16F: CV_16F;
    CV_8UC1: CV_8UC1;
    CV_8UC2: CV_8UC2;
    CV_8UC3: CV_8UC3;
    CV_8UC4: CV_8UC4;
    CV_8SC1: CV_8SC1;
    CV_8SC2: CV_8SC2;
    CV_8SC3: CV_8SC3;
    CV_8SC4: CV_8SC4;
    CV_16UC1: CV_16UC1;
    CV_16UC2: CV_16UC2;
    CV_16UC3: CV_16UC3;
    CV_16UC4: CV_16UC4;
    CV_16SC1: CV_16SC1;
    CV_16SC2: CV_16SC2;
    CV_16SC3: CV_16SC3;
    CV_16SC4: CV_16SC4;
    CV_32SC1: CV_32SC1;
    CV_32SC2: CV_32SC2;
    CV_32SC3: CV_32SC3;
    CV_32SC4: CV_32SC4;
    CV_32FC1: CV_32FC1;
    CV_32FC2: CV_32FC2;
    CV_32FC3: CV_32FC3;
    CV_32FC4: CV_32FC4;
    CV_64FC1: CV_64FC1;
    CV_64FC2: CV_64FC2;
    CV_64FC3: CV_64FC3;
    CV_64FC4: CV_64FC4;
    CV_16FC1: CV_16FC1;
    CV_16FC2: CV_16FC2;
    CV_16FC3: CV_16FC3;
    CV_16FC4: CV_16FC4;
}
