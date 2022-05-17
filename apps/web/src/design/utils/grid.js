const defaults = {
  width: 1416,
  cols: 12,
  gutter: 24,
}

export const pxToRem = (value) => `${parseInt(value, 10) / 16}rem`

export const guttersWidth = ({
  cols = defaults.cols,
  gutter = defaults.gutter,
}) => (cols - 1) * gutter

export const columnWidth = ({
  width = defaults.width,
  cols = defaults.cols,
  gutter = defaults.gutter,
}) => (width - guttersWidth({ cols, gutter })) / cols

export const columnsWidth = ({
  quantity = defaults.cols,
  cols = defaults.cols,
  gutter = defaults.gutter,
  width = defaults.width,
}) =>
  quantity * columnWidth({ width, cols, gutter }) +
  guttersWidth({ cols: quantity, gutter })

export const getColumnsWidth = ({
  width = defaults.width,
  gutter = defaults.gutter,
  cols = defaults.cols,
}) => {
  const colsWidths = {}
  for (let index = 1; index <= cols; index++) {
    colsWidths[`cols${index}`] = pxToRem(
      columnsWidth({
        cols,
        quantity: index,
        gutter,
        width,
      })
    )
  }
  return colsWidths
}
