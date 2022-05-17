import { pxToRem, getColumnsWidth } from '@design/utils'

const gridDimensions = {
  cols: 12,
  width: 1216,
  gutter: 32,
  row: 48,
}
export const colsWidths = getColumnsWidth(gridDimensions)
export const grid = {
  cols: gridDimensions.cols,
  width: pxToRem(gridDimensions.width),
  x: pxToRem(gridDimensions.gutter),
  y: pxToRem(gridDimensions.row),
}

export default grid
