import React, { memo } from 'react'
import { styled } from '@design'
import { AnimatePresence } from 'framer-motion'
import Pinion from '@components/Pinion'
import { RackComponentList } from '../Rack'

const $Rack = styled('main', {})

const Rack = ({ components, children, ...props }) => {
  if (children) {
    return <$Rack {...props}>{children}</$Rack>
  }

  return (
    <AnimatePresence initial={true}>
      <$Rack {...props}>
        {!!components?.length &&
          components.map(({ _key, _type: component, ...componentData }) => {
            const Component = RackComponentList[component]

            if (!Component) {
              console.error(
                'Provided component was not found in RackComponentList',
                component
              )
              return null
            }

            if (['spacer', 'pageAnchor'].includes(component)) {
              return <Component key={_key} {...componentData} />
            }

            return (
              <Pinion key={_key} component={component}>
                <Component {...componentData} />
              </Pinion>
            )
          })}
      </$Rack>
    </AnimatePresence>
  )
}

export default memo(Rack)
