import React, { useContext } from 'react'
import { defaultSerializers } from '@sanity/block-content-to-react'
import dynamic from 'next/dynamic'
import { styled } from '@design'
import slugify from 'slugify'
import { SidebarContext } from '@components/Sidebar/SidebarProvider'
import { blocksToText } from '@lib/utils/blockContent'

const Waypoint = dynamic(() => import('@components/Waypoint'))

const $Waypoint = styled(Waypoint, {
  position: 'absolute',
  mt: -70,
})

const $StyledText = styled('p', {})
const defaultRenderer = ['normal', 'h4', 'h5', 'h6', 'blockquote']
const defaultIdStyles = ['headlineTitle', 'headlineSubtitle', 'h1', 'h2', 'h3']

const BlockRenderer = (props) => {
  const { pushActive, popActive } = useContext(SidebarContext) || {}
  const { node } = props

  // Renderer settings
  const { styleMap = {}, style = 'normal', displayIds = false } = node
  const isCustomSidebarLink = node.markDefs?.find(
    ({ _type }) => _type === 'sidebarLink'
  )
  const { types } = defaultSerializers
  const asDefault = typeof props.index !== 'undefined' ? 'span' : 'p'
  const color = node.children[0].marks.includes('textAlt') && '$textAlt'
  const text = blocksToText([node])
  const idText = isCustomSidebarLink
    ? node.children.find(({ marks }) =>
        marks.includes(isCustomSidebarLink._key)
      )
    : undefined

  const displayId =
    displayIds && (defaultIdStyles.includes(style) || isCustomSidebarLink)

  const id = displayId
    ? slugify(idText?.text || text, { lower: true, remove: /[*+~.()'"!:@]/g })
    : undefined

  if (
    defaultRenderer.includes(style) &&
    !Object.keys(styleMap).includes(style) &&
    !isCustomSidebarLink
  ) {
    return types.block(props)
  }

  const type = {
    large: 'baseTypeLarge',
    normal: 'baseType',
    small: 'smallType',
    extraSmall: 'input',
    ...styleMap,
  }[style || 'normal']

  const as = {
    headlineTitle: 'h2',
    headlineSubtitle: 'h3',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    ...styleMap,
  }[style]

  const Component = () => (
    <$StyledText
      id={id}
      as={as || asDefault}
      css={{ type: type || style, color }}
    >
      {props.children}
    </$StyledText>
  )

  return pushActive && id ? (
    <>
      <$Waypoint
        onEnter={(direction) => direction === 'top' && popActive(id)}
        onLeave={(direction) => direction === 'top' && pushActive(id)}
      />
      <Component />
    </>
  ) : (
    <Component />
  )
}

export default BlockRenderer
