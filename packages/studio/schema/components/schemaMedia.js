import {F} from '@/schema/tool'

export const schemaMedia = F.media({
  fields: [
    F.radio(['left', 'center', 'right'], {
      name: 'align',
      description:
        'Takes effect when the size of the image, controlled by Max Width, is smaller than the container.',
      title: 'Image Alignment',
      initialValue: 'center',
      group: 'options',
      hidden: ({parent}) => !parent.maxWidth,
    }),
  ],
})
