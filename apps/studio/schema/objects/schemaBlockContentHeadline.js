import React from 'react'
import { BsListCheck } from 'react-icons/bs'
import { F } from 'part:gearbox-schema-tool/schema-builder'

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

export const LargerTextStyle = (props) => (
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
      marginBottom: '0.5rem',
      color: '#0f0c09',
    }}
  >
    {props.children}
  </span>
)

export const OverlineHighlightedStyle = (props) => (
  <span
    style={{
      fontFamily: 'Space Mono',
      fontSize: '12px',
      letterSpacing: '2px',
      lineHeight: '18px',
      textTransform: 'uppercase',
      opacity: 0.7,
      marginBottom: '0.5rem',
      color: '#0b236d',
      backgroundColor: '#8FEFEF',
      padding: '4px 8px',
      borderRadius: '3px',
      display: 'inline-block',
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
          title: 'Overline Highlighted',
          value: 'overlineHighlighted',
          blockEditor: { render: OverlineHighlightedStyle },
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
    F.media({
      fields: [
        F.string({
          name: 'maxWidth',
          description: 'eg. auto, 100px, 100%, etc.',
          group: 'options',
          hidden: ({ parent }) =>
            parent.condition === 'none' || parent.condition === 'lottie',
        }),
        F.boolean({
          name: 'removeSpaceAround',
          group: 'options',
          initialValue: false,
        }),
      ],
    }),
    {
      type: 'columns',
    },
  ],
})
