import React, { memo } from 'react'
import { styled, darkTheme } from '@design'
import { AnimatePresence } from 'framer-motion'
import Pinion from '@components/Pinion'
import { features } from 'config'
import { RackComponentList } from '../Rack'

const $Rack = styled('main', {
  [`
    > section,
    > section::before,
    > section::after
  `]: {
    boxSizing: 'border-box',
  },
})

const Rack = ({ components, children, ...props }) => {
  if (children) {
    return <$Rack {...props}>{children}</$Rack>
  }

  return (
    <AnimatePresence initial={true}>
      <$Rack {...props}>
        {!!components?.length &&
          components.map(
            ({ _key, _type: component, width, ...componentData }) => {
              const Component = RackComponentList[component]
              const { backgroundColor, legacyComponent } = componentData
              const useDarkTheme =
                features.darkBackgrounds.includes(backgroundColor)

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
                <Pinion
                  key={_key}
                  width={width}
                  backgroundColor={backgroundColor}
                  legacyComponent={legacyComponent}
                  component={component}
                  className={useDarkTheme && darkTheme}
                >
                  <Component {...componentData} />
                </Pinion>
              )
            }
          )}
      </$Rack>
    </AnimatePresence>
  )
}

export default memo(Rack)
