import {BiStats as icon} from 'react-icons/bi'
import {F, G} from '@/schema/tool'

export const schemaHeroHomeStats = F.object({
  name: 'heroHomeStats',
  title: 'Home Hero Stats',
  icon,
  groups: [G.define('content', {default: true}), G.define('media'), G.define('stats')],
  fields: [
    ...G.group('content', [
      F.string({name: 'heading'}),
      F.array({
        title: 'Cycling Words',
        name: 'words',
        of: [F.string({title: ' ', name: 'word'})],
      }),
      F.text({name: 'content'}),
      F.links({
        group: 'content',
        validation: (Rule) => Rule.max(1),
        signUpOption: true,
      }),
    ]),
    ...G.group('media', [
      F.array({
        name: 'cards',
        title: 'Cards',

        of: [
          F.object({
            name: 'card',
            fields: [
              F.string({name: 'stat'}),
              F.string({name: 'label'}),
              F.image({
                name: 'image',
              }),
              F.string({name: 'name'}),
              F.string({name: 'title'}),
            ],
            preview: {
              select: {
                stat: 'stat',
                label: 'label',
                name: 'name',
                title: 'title',
                image: 'image',
              },
              prepare: ({stat, label, name, title, image}) => ({
                title: [stat, label].join(' - '),
                subtitle: [name, title].join(', '),
                media: image,
              }),
            },
          }),
        ],
      }),
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
    ...G.group('stats', [
      F.array({
        name: 'stats',
        title: 'Stats',

        of: [
          F.object({
            name: 'stat',
            fields: [F.string({name: 'heading'}), F.string({name: 'content'})],
            preview: {
              select: {
                title: 'heading',
                subtitle: 'content',
              },
              prepare: (props) => ({...props, media: icon}),
            },
          }),
        ],
      }),
    ]),
    F.object({
      name: 'backgroundOptions',
      hidden: true,
      fields: [
        F.field('backgroundColorFull', {
          initialValue: 'purpleDark',
          name: 'backgroundColor',
          hidden: true,
        }),
      ],
    }),
  ],
})
