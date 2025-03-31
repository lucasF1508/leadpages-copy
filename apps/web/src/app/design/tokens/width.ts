import { getColumnsWidth } from '../utils/grid'

export const columns = getColumnsWidth({
  cols: 12,
  gutter: 32,
  width: 1216,
})

export const width = {
  ...columns,
  // TODO: Fix these types from getColumnsWidth()
  tiny: columns.cols4 || '',
  content: columns.cols6 || '',
  small: columns.cols8 || '',
  narrow: columns.cols10 || '',
  base: columns.cols12 || '',
  none: 'none',
  vast: '120rem', // 1920
  wide: '100rem', // 1600
}
