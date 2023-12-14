import { defaultSerializers } from '@sanity/block-content-to-react'
import slugify from 'slugify'
import React, { useContext } from 'react'
import dynamic from 'next/dynamic'
import { styled } from '@design'
import { SidebarContext } from '@components/Sidebar/SidebarProvider'
import { ListItemCheckmark } from './ListCheckmark'
import { ListItemBranded } from './ListBranded'

const ListItemsList = {
  checkmarks: ListItemCheckmark,
  checkmarksPlain: (props) => ListItemCheckmark({ variant: 'plain', ...props }),
  checkmarksBranded: (props) =>
    ListItemCheckmark({ variant: 'branded', ...props }),
  numberBranded: ListItemBranded,
}

const Waypoint = dynamic(() => import('@components/Waypoint'))
const $Waypoint = styled(Waypoint, {
  position: 'absolute',
  mt: -70,
})

const ListItemRenderer = (props) => {
  const { pushActive, popActive } = useContext(SidebarContext) || {}
  const { node } = props || {}
  const { listItem: type } = props
  const listItem = ListItemsList[type] || defaultSerializers.listItem

  const isCustomSidebarLink = node.markDefs?.find(
    ({ _type }) => _type === 'sidebarLink'
  )

  const idText = isCustomSidebarLink
    ? node.children.find(({ marks }) =>
        marks.includes(isCustomSidebarLink._key)
      )
    : undefined

  const id =
    idText?.text &&
    slugify(idText?.text, { lower: true, remove: /[*+~.()'"!:@]/g })

  const renderedListItem = listItem(props)

  if (id) {
    return (
      <>
        <$Waypoint
          onEnter={(direction) => direction === 'top' && popActive(id)}
          onLeave={(direction) => direction === 'top' && pushActive(id)}
        />
        {React.cloneElement(renderedListItem, { id })}
      </>
    )
  }

  return renderedListItem
}

export default ListItemRenderer
