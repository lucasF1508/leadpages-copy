const defaults = {
  cols: 12,
  gutter: 32,
  width: 1216,
}

const pxToRem = (value: string) => `${parseInt(value, 10) / 16}rem`

const guttersWidth = ({ cols = defaults.cols, gutter = defaults.gutter }) =>
  (cols - 1) * gutter

const columnWidth = ({
  cols = defaults.cols,
  gutter = defaults.gutter,
  width = defaults.width,
}) => (width - guttersWidth({ cols, gutter })) / cols

const columnsWidth = ({
  cols = defaults.cols,
  gutter = defaults.gutter,
  quantity = defaults.cols,
  width = defaults.width,
}) =>
  quantity * columnWidth({ cols, gutter, width }) +
  guttersWidth({ cols: quantity, gutter })

export const getColumnsWidth = ({
  cols = defaults.cols,
  gutter = defaults.gutter,
  width = defaults.width,
}) => {
  const colsWidths: Record<string, string> = {}
  for (let index = 1; index <= cols; index++) {
    colsWidths[`cols${index}`] = pxToRem(
      columnsWidth({
        cols,
        gutter,
        quantity: index,
        width,
      }).toString()
    )
  }
  return colsWidths
}
