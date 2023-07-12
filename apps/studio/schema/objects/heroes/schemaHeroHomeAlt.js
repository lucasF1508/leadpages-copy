import { HiCursorClick as icon } from 'react-icons/hi'
import { F, G } from 'part:gearbox-schema-tool/schema-builder'

export const schemaHeroHomeAlt = F.hero({
  name: 'heroHomeAlt',
  title: 'Home Hero Alt',
  icon,
  args: {
    align: false,
    label: false,
    media: {
      fields: [
        F.string({
          name: 'maxWidth',
          description: 'eg. auto, 100px, 100%, etc.',
          group: 'options',
          hidden: ({ parent }) =>
            parent.condition === 'none' || parent.condition === 'lottie',
        }),
      ],
    },
  },
  fields: [
    ...G.group('media', [
      F.object({
        name: 'backgroundImages',
        fields: [
          F.image({
            parseType: 'backgroundImage',
            name: 'right',
          }),
        ],
      }),
    ]),
    ...G.group('options', [
      F.radio(['default', 'small', 'medium', 'large'], {
        name: 'size',
        title: 'Hero Size',
        initialValue: 'default',
      }),
      F.object({
        name: 'backgroundOptions',
        fields: [
          F.field('backgroundColorFull', {
            name: 'backgroundColor',
          }),
          F.checkbox({ name: 'displayBrowserContainer', initialValue: true }),
        ],
      }),
    ]),
  ],
})
