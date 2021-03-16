declare module Core {
    enum _CovarFlags {
        COVAR_SCRAMBLED = 'COVAR_SCRAMBLED',
        COVAR_NORMAL = 'COVAR_NORMAL',
        COVAR_USE_AVG = 'COVAR_USE_AVG',
        COVAR_SCALE = 'COVAR_SCALE',
        COVAR_ROWS = 'COVAR_ROWS',
        COVAR_COLS = 'COVAR_COLS',
    }

    interface CovarFlags {
        COVAR_SCRAMBLED: _CovarFlags.COVAR_SCRAMBLED;
        COVAR_NORMAL: _CovarFlags.COVAR_NORMAL;
        COVAR_USE_AVG: _CovarFlags.COVAR_USE_AVG;
        COVAR_SCALE: _CovarFlags.COVAR_SCALE;
        COVAR_ROWS: _CovarFlags.COVAR_ROWS;
        COVAR_COLS: _CovarFlags.COVAR_COLS;
    }
}
export = Core;
