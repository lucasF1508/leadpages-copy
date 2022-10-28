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
      F.array({
        name: 'linkDecorators',
        options: {
          list: [
            { title: 'Arrows', value: 'arrows' },
            { title: 'Checkmarks', value: 'checkmarks' },
          ],
        },
        of: [{ type: 'string' }],
      }),
    ]),
    ...G.group('content', [
      F.field('blockContentHeadline', { name: 'content' }),
      F.array({
        name: 'links',
        of: [F.link()],
      }),
    ]),
    ...G.group('media', [
      F.field('media'),
      F.image({ name: 'backgroundImage' }),
    ]),
  ],
  preview: {
    select: {
      content: 'content',
      media: 'media',
    },
    prepare: ({ content = [], media = {} }) => {
      const { condition, image } = media
      const [heading, ...subtitle] = content

      return {
        title: P.richText({ content: [heading], title: 'Media with Text' }),
        subtitle: P.richText({ content: subtitle }),
        media: condition === 'image' ? image : videoIcon,
      }
    },
  },
})
