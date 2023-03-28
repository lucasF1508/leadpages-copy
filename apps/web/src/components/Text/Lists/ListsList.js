import { defaultSerializers } from '@sanity/block-content-to-react'
import { ListCheckmark } from './ListCheckmark'

const ListsList = {
  checkmarks: ListCheckmark,
  checkmarksPlain: (props) => ListCheckmark({ variant: 'plain', ...props }),
  checkmarksBranded: (props) => ListCheckmark({ variant: 'branded', ...props }),
}

const ListRenderer = (props) => {
  const { type } = props
  const list = ListsList[type] || defaultSerializers.list

  return list(props)
}

export default ListRenderer
