import React from 'react'

const colorText = 'var(--card-fg-color)'
const colorTextAlt = 'var(--card-muted-fg-color)'
const colorTextHighlight = '#603eff'
const colorTextHighlightAlt = '#34afbb'

export const colors = [
  {
    title: 'Default Color',
    value: 'textColor',
    color: colorText,
  },
  {
    title: 'Alt Color',
    value: 'textColorAlt',
    color: colorTextAlt,
  },
  {
    title: 'Highlight Color',
    value: 'textColorHighlight',
    color: colorTextHighlight,
  },
  {
    title: 'Alt Highlight Color',
    value: 'textColorHighlightAlt',
    color: colorTextHighlightAlt,
  },
].map(({title, value, color}) => ({
  title,
  value,
  component: (props) => (
    <span
      style={{
        color,
      }}
    >
      {props.children}
    </span>
  ),
  icon: () => (
    <span
      style={{
        display: 'block',
        width: '20px',
        height: '20px',
        borderRadius: '4px',
        backgroundColor: color,
      }}
    />
  ),
}))
