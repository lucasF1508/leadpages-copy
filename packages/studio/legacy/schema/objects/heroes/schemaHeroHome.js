import {AiOutlineHome as icon} from 'react-icons/ai'
import {F, G, P} from '@/legacy/schema/tool'

export const schemaHeroHome = F.object({
  name: 'heroHome',
  title: 'Home Hero',
  icon,
  groups: [
    G.define('content', {default: true}),
    G.define('links'),
    G.define('media'),
    G.define('options'),
  ],
  args: {
    align: false,
    label: false,
    link: {
      initialValue: {
        condition: 'none',
        linkStyle: 'button',
      },
    },
  },
  fields: [
    F.field('blockContentHero', {group: 'content', name: 'content'}),
    F.links({group: 'content', signUpOption: true}),
    F.link({
      name: 'watchVideoLink',
      group: 'links',
      args: {
        condition: {name: 'condition', required: false, group: 'content'},
      },
    }),
    F.media({group: 'media'}),
    F.object({
      group: 'media',
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
          F.checkbox({name: 'displayBrowserContainer', initialValue: true}),
        ],
      }),
    ]),
  ],
  preview: P.preview({
    content: 'content',
    prepare: ({content = []}) => ({
      title: 'Home Hero',
      subtitle: P.richText(content),
    }),
  }),
})
