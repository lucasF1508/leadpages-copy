import React from 'react'
import {BsListCheck} from 'react-icons/bs'
import {F} from '@/schema/tool'

const colorText = 'var(--card-fg-color)'

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
    }}
  >
    {props.children}
  </span>
)

export const LargerTextStyle = (props) => (
  <span style={{fontSize: '1.125em'}}>{props.children}</span>
)

const SmallTextStyle = (props) => <span style={{fontSize: '1rem'}}>{props.children}</span>

const ExtraSmallTextStyle = (props) => <span style={{fontSize: '0.875rem'}}>{props.children}</span>

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
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {
          title: 'Extra Small',
          value: 'extraSmall',
          component: ExtraSmallTextStyle,
        },
        {
          title: 'Small',
          value: 'small',
          component: SmallTextStyle,
        },
        {
          title: 'Normal',
          value: 'normal',
          component: NormalStyle,
        },
        {
          title: 'Large',
          value: 'large',
          component: LargerTextStyle,
        },
        {
          title: 'Overline',
          value: 'headlineSupertitle',
          component: OverlineStyle,
        },
        {
          title: 'Overline Highlighted',
          value: 'overlineHighlighted',
          component: OverlineHighlightedStyle,
        },
        {
          title: 'Title',
          value: 'headlineTitle',
          component: TitleStyle,
        },
        {
          title: 'Subtitle',
          value: 'headlineSubtitle',
          component: SubtitleStyle,
        },
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
        {
          title: 'Checkmarks',
          value: 'checkmarks',
          icon: BsListCheck,
        },
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {
            title: 'Text',
            value: 'text',
            component: (props) => (
              <span
                style={{
                  color: colorText,
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
                  backgroundColor: colorText,
                }}
              />
            ),
          },
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
        F.radio(['left', 'center', 'right'], {
          name: 'align',
          description:
            'Takes effect when the size of the image, controlled by Max Width, is smaller than the container.',
          title: 'Image Alignment',
          initialValue: 'center',
          group: 'options',
          hidden: ({parent}) => !parent.maxWidth,
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
