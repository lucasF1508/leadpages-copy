import React from 'react'
import { F } from 'part:gearbox-schema-tool/schema-builder'
import styled from 'styled-components'
import { MdFormatListNumbered } from 'react-icons/md'
import { blockContentHeadline } from './schemaBlockContentHeadline'

const [toolbar] = blockContentHeadline?.of || []

const colorText = '#0f0c09'
const colorTextAlt = '#575452'
const colorTextHighlight = '#603eff'
const colorTextHighlightAlt = '#34afbb'

const colors = [
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

export const blockContentSimple = F.array({
  title: 'Block Content Simple',
  name: 'blockContentSimple',
  parseType: 'blockContent',
  of: [
    {
      ...toolbar,
      marks: {
        ...toolbar?.marks,
        decorators: [...toolbar?.marks?.decorators, ...colors],
      },
      lists: [
        ...toolbar?.lists,
        {
          title: 'Numbered (Branded)',
          value: 'numberBranded',
          blockEditor: {
            icon: () => {
              const $TbListCheck = styled(MdFormatListNumbered)`
                > path[d^='M2'] {
                  color: #603eff;
                }
              `
              return <$TbListCheck />
            },
          },
        },
      ],
    },
  ],
})
