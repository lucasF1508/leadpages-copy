import { BiImageAdd as icon } from 'react-icons/bi'
import { BsCameraVideo as videoIcon } from 'react-icons/bs'
import { F, G, P } from 'part:gearbox-schema-tool/schema-builder'

export const schemaMediaWithText = F.field('object', {
  icon,
  name: 'mediaWithText',
  groups: G.fieldGroupComponentOptions(),
  fields: [
    ...G.group('options', [
      F.radio(['left', 'right'], {
        name: 'align',
        title: 'Content Alignment',
        initialValue: 'right',
      }),
    ]),
    ...G.group('content', [
      F.field('media'),
      F.string({ name: 'heading' }),
      F.blockContent({ name: 'content', title: 'Content' }),
    ]),
  ],
  preview: {
    select: {
      heading: 'heading',
      content: 'content',
      media: 'media',
    },
    prepare: ({ heading, content = [], media = {} }) => {
      const { condition, image } = media
      const subtitle = P.richText(content) || ''

      return {
        title: heading || subtitle,
        subtitle: heading ? subtitle : '',
        media: condition === 'image' ? image : videoIcon,
      }
    },
  },
})
