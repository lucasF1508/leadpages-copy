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

  // Keep legacy/default behavior when variant is missing:
  // - Original dark components: missing variant -> dark
  // - Original light components: missing variant -> light
  const isTestimonialLight =
    component === 'testimonialFeaturedBlock' && componentData?.variant === 'light'
  const isFaqPlatformLight =
    component === 'faqPlatform' && componentData?.variant === 'light'
  const isMediaWithItemsLight =
    // If variant is missing (legacy content), default to light.
    component === 'mediaWithItems' && (componentData?.variant === 'light' || componentData?.variant == null)
  const isFeatureCardsLight =
    component === 'featureCards' && componentData?.variant === 'light'
  const isFeatureGridLight =
    component === 'featureGrid' && (componentData?.variant === 'light' || componentData?.variant == null)
  const isIntegrationsLight =
    component === 'integrationsBlock' && (componentData?.variant === 'light' || componentData?.variant == null)
  const pinionLightNoMargin =
    (isTestimonialLight || isFaqPlatformLight || isMediaWithItemsLight || isFeatureCardsLight || isFeatureGridLight || isIntegrationsLight) &&
    '!bg-white !mt-0 !mb-0 !pt-8 md:!pt-12 lg:!pt-20 !pb-8 md:!pb-12 lg:!pb-20'

  return (
    <Pinion
      alignment={alignment}
      backgroundColor={
        isTestimonialLight || isFaqPlatformLight || isMediaWithItemsLight || isFeatureCardsLight || isFeatureGridLight || isIntegrationsLight
          ? undefined
          : backgroundColor
      }
      columnsWidth={columnsWidth}
      key={_key}
      {...pinionParams}
      className={clsx(
        classNames?.pinion,
        pinionParams?.className,
        pinionLightNoMargin
      )}
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
