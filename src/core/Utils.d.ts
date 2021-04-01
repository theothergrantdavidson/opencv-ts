declare module Utils {
    enum SortFlags {
        SORT_EVERY_ROW = 0,
        SORT_EVERY_COLUMN = 1,
        SORT_ASCENDING = 0,
        SORT_DESCENDING = 16,
    }

    interface _SortFlags {
        SORT_EVERY_ROW: SortFlags.SORT_EVERY_ROW,
        SORT_EVERY_COLUMN: SortFlags.SORT_EVERY_COLUMN,
        SORT_ASCENDING: SortFlags.SORT_ASCENDING,
        SORT_DESCENDING: SortFlags.SORT_DESCENDING,
    }
}
export = Utils;
