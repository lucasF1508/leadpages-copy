import { AiOutlineHome as icon } from 'react-icons/ai'
import { F, G } from 'part:gearbox-schema-tool/schema-builder'

export const schemaHeroHome = F.hero({
  name: 'heroHome',
  title: 'Home Hero',
  icon,
  args: {
    align: false,
    label: false,
    link: {
      initialValue: {
        condition: 'none',
        linkStyle: 'button',
      },
    },
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
    ...G.group('links', [F.link({ name: 'watchVideoLink' })]),
    ...G.group('media', [
      F.object({
        name: 'backgroundImages',
        fields: [
          F.image({
            parseType: 'backgroundImage',
            name: 'left',
          }),
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
      F.radio(['default', 'bottom'], {
        name: 'alignBackgroundImages',
        title: 'Background Image Alignment',
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
