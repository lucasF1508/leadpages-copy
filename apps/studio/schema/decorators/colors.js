import React from 'react'

const colorText = '#0f0c09'
const colorTextAlt = '#575452'
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
].map(({ title, value, color }) => ({
  title,
  value,
  blockEditor: {
    render: (props) => (
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
  },
}))
