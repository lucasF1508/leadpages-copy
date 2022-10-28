import React from 'react'
import { F } from 'part:gearbox-schema-tool/schema-builder'

const TitleStyle = (props) => (
  <span
    style={{
      fontSize: '2.5rem',
      fontFamily: 'Value Serif',
      lineHeight: '3rem',
      marginBottom: '1.5rem',
    }}
  >
    {props.children}
  </span>
)

const SubtitleStyle = (props) => (
  <span
    style={{
      fontSize: '2rem',
      fontFamily: 'Value Serif',
      lineHeight: '3rem',
      marginBottom: '1.5rem',
    }}
  >
    {props.children}
  </span>
)

const NormalStyle = (props) => (
  <span
    style={{
      fontSize: '18px',
      fontFamily: 'Apercu Pro',
      lineHeight: '28px',
      color: '#575452',
    }}
  >
    {props.children}
  </span>
)

const OverlineStyle = (props) => (
  <span
    style={{
      fontFamily: 'Space Mono',
      fontSize: '12px',
      letterSpacing: '2px',
      lineHeight: '18px',
      tt: 'uppercase',
      opacity: 0.7,
      mb: '0.5rem',
      c: '$text',
    }}
  >
    {props.children}
  </span>
)

export const blockContentHeadline = F.array({
  name: 'blockContentHeadline',
  parseType: 'blockContent',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        {
          title: 'Normal',
          value: 'normal',
          blockEditor: { render: NormalStyle },
        },
        {
          title: 'Overline',
          value: 'headlineSupertitle',
          blockEditor: { render: OverlineStyle },
        },
        { title: 'Overline Alt', value: 'headlineAlternateSupertitle' },
        {
          title: 'Title',
          value: 'headlineTitle',
          blockEditor: {
            render: TitleStyle,
          },
        },
        {
          title: 'Subtitle',
          value: 'headlineSubtitle',
          blockEditor: { render: SubtitleStyle },
        },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [
          F.link({
            name: 'link',
            fields: [],
            isGrouped: false,
            args: {
              label: false,
            },
          }),
        ],
      },
    },
    {
      type: 'media',
    },
    {
      type: 'columns',
    },
  ],
})
