import React from 'react'
import { F } from 'part:gearbox-schema-tool/schema-builder'
import { colors } from '../decorators/colors'

export const blockContentTemplate = F.array({
  title: 'Block Content Template',
  name: 'blockContentTemplate',
  parseType: 'blockContent',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [{ title: 'Normal', value: 'normal' }],
      lists: [],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          {
            title: 'UnderLine',
            value: 'underline',
            blockEditor: {
              icon: () => (
                <span style={{ textDecoration: 'underline', fontWeight: 700 }}>
                  U
                </span>
              ),
            },
          },
          ...colors,
        ],
        annotations: [
          F.link({
            name: 'link',
            fields: [
              F.string({
                name: 'href',
                hidden: ({ parent }) => !parent.href,
                group: 'content',
              }),
            ],
          }),
        ],
      },
    },
  ],
})
