import type {CSSProperties} from 'react'
import type {BlockDecoratorProps} from 'sanity'
import React from 'react'

export const colors = {
  primary: 'var(--card-fg-color)',
  secondary: '#D1A58C',
}

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
    title: 'Primary',
    value: 'primary',
    component: ({children}: BlockDecoratorProps) => (
      <span style={{color: colors.primary}}>{children}</span>
    ),
    icon: () => colorIcon(colors.primary),
  },
  secondary: {
    title: 'Secondary',
    value: 'secondary',
    component: ({children}: BlockDecoratorProps) => (
      <span style={{color: colors.secondary}}>{children}</span>
    ),
    icon: () => colorIcon(colors.secondary),
  },
}

export default Object.values(colorDecorators)
