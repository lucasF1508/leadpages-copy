import React, { useContext } from 'react'
import { defaultSerializers } from '@sanity/block-content-to-react'
import dynamic from 'next/dynamic'
import { styled } from '@design'
import slugify from 'slugify'
import { SidebarContext } from '@components/Sidebar/SidebarProvider'

const Waypoint = dynamic(() => import('@components/Waypoint'))

const $StyledText = styled('p', {})
const defaultRenderer = ['normal', 'h4', 'h5', 'h6', 'blockquote']

const BlockRenderer = (props) => {
  const { pushActive, popActive } = useContext(SidebarContext) || {}

  // Renderer settings
  const { styleMap = {}, style = 'normal', displayIds = false } = props.node
  const { types } = defaultSerializers
  const asDefault = typeof props.index !== 'undefined' ? 'span' : 'p'
  const color = props.node.children[0].marks.includes('textAlt') && '$textAlt'

  const id =
    displayIds &&
    ['headlineTitle', 'headlineSubtitle', 'h1', 'h2'].includes(style)
      ? slugify(props.children[0], { lower: true, remove: /[*+~.()'"!:@]/g })
      : undefined

  if (
    defaultRenderer.includes(style) &&
    !Object.keys(styleMap).includes(style)
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
      <Waypoint
        css={{
          position: 'absolute',
          mt: -70,
        }}
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
