import React from 'react'
import { BsListCheck } from 'react-icons/bs'
import { F } from 'part:gearbox-schema-tool/schema-builder'

const colorText = '#0f0c09'
const colorTextAlt = '#575452'
const colorTextHighlight = '#603eff'
const colorTextHighlightAlt = '#34afbb'

export const TitleStyle = (props) => (
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

export const SubtitleStyle = (props) => (
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

export const NormalStyle = (props) => (
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

const LargerTextStyle = (props) => (
  <span style={{ fontSize: '1.125em' }}>{props.children}</span>
)

export const OverlineStyle = (props) => (
  <span
    style={{
      fontFamily: 'Space Mono',
      fontSize: '12px',
      letterSpacing: '2px',
      lineHeight: '18px',
      textTransform: 'uppercase',
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
          title: 'Large',
          value: 'large',
          blockEditor: { render: LargerTextStyle },
        },
        {
          title: 'Overline',
          value: 'headlineSupertitle',
          blockEditor: { render: OverlineStyle },
        },
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
        {
          title: 'Checkmarks',
          value: 'checkmarks',
          blockEditor: {
            icon: BsListCheck,
          },
        },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          ...[
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
          })),
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
