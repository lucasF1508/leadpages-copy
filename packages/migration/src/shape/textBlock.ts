import mapBlockContent from '@src/map/map-block-content'
import { omit } from 'lodash'

const map = {
  table: (item: any) => {
    const { rows } = item

    if (!Array.isArray(rows) || rows.length === 0) {
      return {}
    }

    const firstRow = rows[0]
    const hasHeaderRow = firstRow?.cells?.every(
      (cell: string) => typeof cell === 'string'
    )

    const dynamicTitles = hasHeaderRow
      ? firstRow.cells.map((title: string) => title.trim())
      : []

    const dataRows = hasHeaderRow ? rows.slice(1) : rows

    const mappedItems = dataRows.flatMap(({ cells }: any) =>
      cells.flatMap((value: string, index: number) => {
        const title = dynamicTitles[index] || `Item ${index + 1}`

        return [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                marks: ['strong'],
                text: title,
              },
            ],
            markDefs: [],
            style: 'normal',
          },
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                marks: [],
                text: value,
              },
            ],
            markDefs: [],
            style: 'normal',
          },
        ]
      })
    )

    return mappedItems
  },
}

const shapeTextBlock = (
  component: Record<string, any>
): Record<string, any> => {
  const filteredFields = omit(component, [])

  return {
    ...filteredFields,
    _type: 'textBlock',
    content: mapBlockContent(component.content, map),
  }
}

export default shapeTextBlock
