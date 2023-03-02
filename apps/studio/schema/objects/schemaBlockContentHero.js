import React from 'react'
import { F } from 'part:gearbox-schema-tool/schema-builder'
import {
  TitleStyle,
  NormalStyle,
  OverlineStyle,
  LargerTextStyle,
} from './schemaBlockContentHeadline'

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
          blockEditor: { render: LargerTextStyle },
        },
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
        {
          title: 'Title',
          value: 'h1',
          blockEditor: {
            render: TitleStyle,
          },
        },
      ],
      marks: {
        decorators: [
          {
            value: 'textAlt',
            title: 'Text Alt',
            blockEditor: {
              render: (props) => (
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
          },
        ],
      },
    },
  ],
})
