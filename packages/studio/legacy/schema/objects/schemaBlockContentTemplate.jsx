import React from 'react'
import {F} from '@/legacy/schema/tool'
import {colors} from '@/schema/decorators/colors'

export const blockContentTemplate = F.array({
  title: 'Block Content Template',
  name: 'blockContentTemplate',
  parseType: 'blockContent',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [{title: 'Normal', value: 'normal'}],
      lists: [],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {
            title: 'UnderLine',
            value: 'underline',
            icon: () => <span style={{textDecoration: 'underline', fontWeight: 700}}>U</span>,
          },
          ...colors,
        ],
        annotations: [
          F.link({
            name: 'link',
            fields: [
              F.string({
                name: 'href',
                hidden: ({parent}) => !parent.href,
                group: 'content',
              }),
            ],
          }),
        ],
      },
    },
  ],
})
