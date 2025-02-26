import {BsFileEarmarkText as icon} from 'react-icons/bs'
import {F, G} from '@/schema/tool'

export const schemaHeroSimple = F.hero({
  name: 'heroSimple',
  title: 'Hero with Text',
  icon,
  args: {
    media: false,
    align: false,
    label: false,
    link: false,
  },
  fields: [
    F.links({group: 'content', signUpOption: true}),
    ...G.group('media', [
      F.image({
        parseType: 'backgroundImage',
        name: 'backgroundImage',
      }),
    ]),
    ...G.group('options', [
      F.radio(['left', 'center'], {
        name: 'align',
        title: 'Content Alignment',
        initialValue: 'left',
      }),
      F.radio(['small', 'medium', 'large'], {
        name: 'maxWidth',
        title: 'Content Max Width',
        initialValue: 'medium',
      }),
      F.object({
        name: 'backgroundOptions',
        fields: [
          F.field('backgroundColorFull', {
            name: 'backgroundColor',
            hidden: ({parent}) => parent?.extendBackgroundColor === true,
          }),
          F.number({
            name: 'backgroundOffset',
            title: 'Background Mobile Offset',
            description: 'Adjust mobile breakpoint offset as a percentage (%).',
            placeholder: 'ie. -10',
          }),
          F.checkbox({
            name: 'extendBackgroundColor',
            initialValue: false,
          }),
        ],
      }),
    ]),
  ],
})
