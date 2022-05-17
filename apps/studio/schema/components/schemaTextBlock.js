import { BsTextareaT as icon } from 'react-icons/bs'
import capitalize from 'lodash/capitalize'
import { F } from 'part:gearbox-schema-tool/schema-builder'

export const schemaTextBlock = F.object({
  icon,
  title: 'Text',
  name: 'textBlock',
  fields: [F.blockContent()],
  preview: {
    select: {
      content: 'content',
    },
    prepare: ({ content = [] }) => {
      let title = 'Text Block'
      const blocks = content.filter((blocks) => blocks._type === 'block')
      if (blocks.length) {
        title = blocks
          .map(({ children }) => children.map(({ text }) => text))
          .join(' ')
      }

      return {
        title: capitalize(title),
        media: icon,
      }
    },
  },
})
