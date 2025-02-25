import React from 'react'
import {F} from '@/schema/tool'
import {TitleStyle, NormalStyle, OverlineStyle, LargerTextStyle} from './schemaBlockContentHeadline'

export const blockContentHero = F.array({
  title: 'Block Content Hero',
  name: 'blockContentHero',
  parseType: 'blockContent',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        {
          title: 'Large',
          value: 'large',
          component: LargerTextStyle,
        },
        {
          title: 'Normal',
          value: 'normal',
          component: NormalStyle,
        },
        {
          title: 'Overline',
          value: 'headlineSupertitle',
          component: OverlineStyle,
        },
        {
          title: 'Title',
          value: 'h1',
          component: TitleStyle,
        },
      ],
      marks: {
        decorators: [
          {
            value: 'textAlt',
            title: 'Text Alt',
            component: (props) => (
              <span
                style={{
                  color: '#575452',
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
                  backgroundColor: '#575452',
                }}
              />
            ),
          },
        ],
      },
    },
  ],
})
