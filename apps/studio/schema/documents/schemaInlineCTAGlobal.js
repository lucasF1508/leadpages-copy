import { BsCapslock as icon } from 'react-icons/bs'
import { P, G } from 'part:gearbox-schema-tool/schema-builder'
import { fields } from '../shared/inlineCTA'

export const schemaInlineCTAGlobal = {
  icon,
  name: 'inlineCTAGlobal',
  title: 'Blog CTA',
  type: 'document',
  groups: [
    ...G.fieldGroupComponentOptions(),
    G.fieldGroup('links', { title: 'Links' }),
  ],
  fields,
  preview: {
    select: {
      content: 'content',
      image: 'image',
      contentRight: 'contentRight',
      imageBottom: 'imageBottom',
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
