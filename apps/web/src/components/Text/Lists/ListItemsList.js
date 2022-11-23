import { defaultSerializers } from '@sanity/block-content-to-react'
import { ListItemCheckmark } from './ListCheckmark'

const ListItemsList = {
  checkmarks: ListItemCheckmark,
}

const ListItemRenderer = (props) => {
  const { node: { listItem: type } = {} } = props
  const listItem = ListItemsList[type] || defaultSerializers.listItem

  return listItem(props)
}

export default ListItemRenderer
