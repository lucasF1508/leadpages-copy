import type { ClassValue } from 'clsx'
import React from 'react'
import { BallTriangle } from 'react-loader-spinner'
import clsx from 'clsx'
import theme from '@/design/theme'

interface LoaderProps extends Omit<React.ComponentProps<'div'>, 'className'> {
  className?: ClassValue
  color?: string
  height?: number | string
  label?: string
  width?: number | string
}

const Loader = ({
  className,
  color,
  height = 30,
  label,
  width = 30,
  ...props
}: LoaderProps) => (
  <div
    className={clsx(
      'relative my-auto ml-2 inline-flex flex-row flex-nowrap items-center justify-start',
      className
    )}
    {...props}
  >
    <BallTriangle
      color={color || theme?.colors?.brand?.DEFAULT}
      height={height}
      width={width}
    />
    {label && label}
  </div>
)
export default Loader
