import {F} from '@/schema/tool'
import {defaultDecorators} from './util'

export const blockContentBare = F.array({
  title: 'Block Content Bare',
  name: 'blockContentBare',
  of: [
    {
      type: 'block',
      title: 'Block',
      styles: [
        {
          title: 'Normal',
          value: 'normal',
        },
      ],
      lists: [],
      marks: {
        decorators: [...defaultDecorators],
        annotations: [
          F.link({
            name: 'link',
            args: {
              label: false,
              linkStyle: false,
              linkSize: false,
            },
            fields: [
              F.dropdown(['inline'], {
                name: 'linkStyle',
                initialValue: 'inline',
                group:'options',
                hidden: true
              }),
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
