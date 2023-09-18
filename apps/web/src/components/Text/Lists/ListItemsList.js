import { defaultSerializers } from '@sanity/block-content-to-react'
import { ListItemCheckmark } from './ListCheckmark'
import { ListItemBranded } from './ListBranded'

const ListItemsList = {
  checkmarks: ListItemCheckmark,
  checkmarksPlain: (props) => ListItemCheckmark({ variant: 'plain', ...props }),
  checkmarksBranded: (props) =>
    ListItemCheckmark({ variant: 'branded', ...props }),
  numberBranded: ListItemBranded,
}

const ListItemRenderer = (props) => {
  const { node: { listItem: type } = {} } = props
  const listItem = ListItemsList[type] || defaultSerializers.listItem

  return listItem(props)
}

export default ListItemRenderer
