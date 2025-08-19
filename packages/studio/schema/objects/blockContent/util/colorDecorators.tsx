import type {CSSProperties} from 'react'
import type {BlockDecoratorProps} from 'sanity'
import React from 'react'

export const colors = {
  primary: '#603EFF',
  secondary: '#9061EE',
  gradient: {
    start: '#9061EE',
    end: '#C47FF3',
  },
}

export const gradientIcon = () => (
  <span
    style={{
      display: 'block',
      width: '20px',
      height: '20px',
      borderRadius: '4px',
      background: `linear-gradient(to bottom right, ${colors?.gradient.start}, ${colors?.gradient.end})`,
    }}
  />
)

export const colorIcon = (color: CSSProperties['backgroundColor']) => (
  <span
    style={{
      display: 'block',
      width: '20px',
      height: '20px',
      borderRadius: '4px',
      backgroundColor: color,
    }}
  />
)

export const colorDecorators = {
  primary: {
    title: 'Brand - Primary',
    value: 'primary',
    component: ({children}: BlockDecoratorProps) => (
      <span style={{color: colors.primary}}>{children}</span>
    ),
    icon: () => colorIcon(colors.primary),
  },
  secondary: {
    title: 'Brand - Secondary',
    value: 'secondary',
    component: ({children}: BlockDecoratorProps) => (
      <span style={{color: colors.secondary}}>{children}</span>
    ),
    icon: () => colorIcon(colors.secondary),
  },
  gradient: {
    title: 'Text Gradient',
    value: 'textGradient',
    component: ({children}: BlockDecoratorProps) => (
      <span
        style={{
          background: `linear-gradient(to bottom right, ${colors?.gradient.start}, ${colors?.gradient.end})`,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        }}
      >
        {children}
      </span>
    ),
    icon: () => gradientIcon(),
  },
}

export default Object.values(colorDecorators)
