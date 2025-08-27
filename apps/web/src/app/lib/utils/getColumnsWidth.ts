import type { ColumnsWidth } from '@/types'

/**
 * Returns a corresponding Tailwind CSS `!max-w-colsX` class string
 * based on the provided column width key.
 *
 * This utility function is used to map a semantic column width key
 * (e.g., `cols1`, `cols2`, ..., `cols12`) to a Tailwind CSS class name
 * that sets the maximum width of an element.
 *
 * @param {ColumnsWidth} key - A string representing the desired column width key (e.g., 'cols1', 'cols2', ..., 'cols12').
 * @returns {string | undefined} The corresponding Tailwind `!max-w-colsX` class name, or `undefined` if the key is falsy or not recognized.
 *
 * @example
 * getColumnsWidth('cols3'); // returns 'max-w-cols3'
 * getColumnsWidth(undefined); // returns undefined
 */

export const getColumnsWidth = (key?: ColumnsWidth): string | undefined =>
  !key
    ? undefined
    : {
        cols1: '!max-w-cols1',
        cols2: '!max-w-cols2',
        cols3: '!max-w-cols3',
        cols4: '!max-w-cols4',
        cols5: '!max-w-cols5',
        cols6: '!max-w-cols6',
        cols7: '!max-w-cols7',
        cols8: '!max-w-cols8',
        cols9: '!max-w-cols9',
        cols10: '!max-w-cols10',
        cols11: '!max-w-cols11',
        cols12: '!max-w-cols12',
      }[key]
