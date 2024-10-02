import { F, P } from 'part:gearbox-schema-tool/schema-builder'
import { BsCapslock as icon } from 'react-icons/bs'

export const schemaInlineCTAGlobalBlock = {
  icon,
  title: 'Inline CTA',
  name: 'schemaInlineCTAGlobalBlock',
  type: 'object',
  fields: [
    F.reference('inlineCTAGlobal', {
      name: 'cta',
      title: 'Reference to Global Blog CTA',
    }),
  ],
  preview: {
    select: {
      content: 'cta.content',
      image: 'cta.image',
      contentRight: 'cta.contentRight',
      imageBottom: 'cta.imageBottom',
    },
    prepare: ({ content, image, contentRight, imageBottom }) => ({
      title: P.richText({ content }),
      media: image || icon,
      subtitle: `${contentRight ? 'Content Right' : 'Content Left'}${
        imageBottom ? ' Image Bottom' : ''
      }`,
    }),
  },
}
