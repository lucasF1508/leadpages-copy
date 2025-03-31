import type { RackComponentList } from '@/components/Rack'
import type { Align, BackgroundColor } from '@types'
import type { ClassValue } from 'clsx'
import React, { createElement } from 'react'
import clsx from 'clsx'

type PinionElements =
  | 'article'
  | 'aside'
  | 'div'
  | 'footer'
  | 'header'
  | 'section'
  | 'span'

interface BasePinionProps {
  align?: Align
  backgroundColor?: BackgroundColor
  baseStyles?: boolean
  classNames?: {
    inner?: ClassValue
    root?: ClassValue
  }
  component?: 'breadcrumbs' | 'hero' | keyof typeof RackComponentList
  inner?: boolean
}

type PinionProps<T extends PinionElements> = {
  as?: T
  className?: ClassValue
} & BasePinionProps &
  Omit<React.ComponentProps<T>, 'className'>

const Pinion = <T extends PinionElements>({
  align,
  as: _as,
  backgroundColor: _backgroundColor,
  baseStyles = true,
  children,
  className,
  classNames,
  component,
  inner = true,
  ...props
}: PinionProps<T>) => {
  const backgroundColor = {
    default: '',
    primary: 'bg-surface',
    secondary: 'bg-surface-muted',
  }[_backgroundColor || 'default']
  const as = _as || 'section'

  return createElement(
    as,
    {
      ...props,
      className: clsx(
        baseStyles && 'pinion',
        component && `pinion-${component}`,
        backgroundColor,
        backgroundColor && 'has-background',
        className,
        classNames?.root
      ),
    },
    inner ? (
      <div
        className={clsx(
          'pinion-inner',
          align && `align-${align}`,
          classNames?.inner
        )}
      >
        {children}
      </div>
    ) : (
      children
    )
  )
}

export default Pinion
