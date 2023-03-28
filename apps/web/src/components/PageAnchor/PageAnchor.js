import React, { useContext } from 'react'
import kebabCase from 'lodash/kebabCase'
import { styled } from '@design'
import dynamic from 'next/dynamic'
import { SidebarContext } from '@components/Sidebar/SidebarProvider'

const Waypoint = dynamic(() => import('@components/Waypoint'))

export const $Waypoint = styled(Waypoint, {
  position: 'absolute',
  mt: -110,
})

const $PageAnchor = styled('a', {
  position: 'absolute',
  visibility: 'hidden',
})

const PageAnchor = ({ slug, ...props }) => {
  const { pushActive, popActive } = useContext(SidebarContext) || {}

  const id = kebabCase(slug || '').replace('#', '')

  if (!id) {
    return null
  }

  const Component = () => (
    <$PageAnchor
      id={id}
      href={`#${id}`}
      aria-label={`Link to ${slug}`}
      {...props}
    >
      {slug}
    </$PageAnchor>
  )

  return pushActive ? (
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

export default PageAnchor
