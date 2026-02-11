import type { Align, BackgroundColor, RackInnerComponent } from '@types'
import React, { createElement, memo } from 'react'
import clsx from 'clsx'
import Pinion from '@/components/Pinion'
import RackComponentList from './RackComponentList'

export type ClassNames = {
  component?: string
  pinion?: string
  root?: string
}

interface PinionParams {
  alignment?: Align
  backgroundColor?: BackgroundColor
  baseStyles?: boolean
  className?: string
  classNames?: ClassNames
  pinion?: boolean
}

export interface RackProps {
  as?: keyof JSX.IntrinsicElements
  children?: React.ReactNode
  className?: string
  classNames?: ClassNames
  components?: RackInnerComponent[]
}

export const RackInner = (
  {
    _key,
    _type: component,
    alignment,
    backgroundColor,
    columnsWidth,
    ...componentData
  }: RackInnerComponent,
  classNames?: ClassNames
) => {
  const _Component = RackComponentList[component] as [
    React.ComponentType<{ className?: string }>,
    PinionParams?,
  ]

  const [Component, pinionParams = {}] = Array.isArray(_Component)
    ? _Component
    : [_Component]

  if (!Component) {
    console.error(
      'Provided component was not found in RackComponentList',
      component,
      'Available components:',
      Object.keys(RackComponentList)
    )
    return null
  }

  if (pinionParams?.pinion === false) {
    return (
      <Component
        className={classNames?.component}
        key={_key}
        {...componentData}
      />
    )
  }

  return (
    <Pinion
      alignment={alignment}
      backgroundColor={backgroundColor}
      columnsWidth={columnsWidth}
      key={_key}
      {...pinionParams}
      className={clsx(classNames?.pinion, pinionParams?.className)}
      component={component}
    >
      <Component className={classNames?.component} {...componentData} />
    </Pinion>
  )
}

const Rack = ({
  as = 'div',
  children,
  className,
  classNames,
  components = [],
}: RackProps) => {
  return createElement(
    as,
    {
      className: clsx(className, classNames?.root),
    },
    children
      ? children
      : !!components?.length &&
          components.map((component) => RackInner(component, classNames))
  )
}

export default memo(Rack)
