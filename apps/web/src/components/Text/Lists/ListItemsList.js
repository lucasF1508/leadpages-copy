import { defaultSerializers } from '@sanity/block-content-to-react'
import { ListItemCheckmark } from './ListCheckmark'

const ListItemsList = {
  checkmarks: ListItemCheckmark,
  checkmarksPlain: (props) => ListItemCheckmark({ variant: 'plain', ...props }),
  checkmarksBranded: (props) =>
    ListItemCheckmark({ variant: 'branded', ...props }),
}

const ListItemRenderer = (props) => {
  const { node: { listItem: type } = {} } = props
  const listItem = ListItemsList[type] || defaultSerializers.listItem

  return listItem(props)
}

export default ListItemRenderer
