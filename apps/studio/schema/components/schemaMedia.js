import { F } from 'part:gearbox-schema-tool/schema-builder'

export const schemaMedia = F.media({
  fields: [
    F.string({
      name: 'maxWidth',
      description: 'eg. auto, 100px, 100%, etc.',
      group: 'options',
      hidden: ({ parent }) =>
        parent.condition === 'none' || parent.condition === 'lottie',
    }),
    F.radio(['left', 'center', 'right'], {
      name: 'align',
      description:
        'Takes effect when the size of the image, controlled by Max Width, is smaller than the container.',
      title: 'Image Alignment',
      initialValue: 'center',
      group: 'options',
      hidden: ({ parent }) => !parent.maxWidth,
    }),
  ],
})
