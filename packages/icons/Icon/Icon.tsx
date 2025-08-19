import type { ClassValue } from 'clsx'
import type { SVGAttributes } from 'react'
import clsx from 'clsx'

export interface IconData {
  'aria-hidden'?: 'false' | 'true' | boolean
  height: number
  label?: string
  path: string[]
  stroke?: Pick<
    SVGAttributes<SVGElement>,
    | 'clipRule'
    | 'fill'
    | 'fillRule'
    | 'stroke'
    | 'strokeLinecap'
    | 'strokeLinejoin'
    | 'strokeWidth'
  >[]
  width: number
}

export interface IconProps extends IconData {
  className?: ClassValue
  classNames?: {
    path?: ClassValue
    root?: ClassValue
  }
  hasStatePaths?: boolean
}

const Icon = ({
  'aria-hidden': ariaHidden = true,
  className = '',
  classNames = {
    path: '',
    root: '',
  },
  hasStatePaths = false,
  height,
  path: _pathData,
  stroke: _strokeData,
  width,
}: IconProps) => {
  if (!_pathData) return null
  const pathData = Array.isArray(_pathData) ? _pathData : [_pathData]
  const strokeData = Array.isArray(_strokeData) ? _strokeData : [_strokeData]
  const states = hasStatePaths
    ? ['icon-path-initial', 'icon-path-active']
    : ['icon-path-initial']

  return (
    <svg
      aria-hidden={ariaHidden}
      className={clsx(className, classNames?.root)}
      fill="none"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      {states.map((state) =>
        pathData.map((path, i) => {
          const { fill, stroke, ...rest } = strokeData[i] || {}

          return (
            <path
              className={clsx(classNames?.path, state)}
              d={path}
              fill={fill ? 'currentColor' : 'none'}
              key={`${state}-${i}`}
              stroke={stroke ? 'currentColor' : 'none'}
              {...rest}
            />
          )
        })
      )}
    </svg>
  )
}
export default Icon
