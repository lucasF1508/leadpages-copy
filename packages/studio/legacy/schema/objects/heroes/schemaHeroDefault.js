import {BsFileRichtext as icon} from 'react-icons/bs'
import {F, P} from '@/legacy/schema/tool'

export const schemaHeroDefault = F.hero({
  name: 'heroDefault',
  title: 'Hero With Media',
  icon,
  args: {
    label: false,
    link: {
      initialValue: {
        condition: 'none',
        linkStyle: 'button',
      },
    },
    align: false,
  },
  fields: [
    F.radio(['left', 'right'], {name: 'align', group: 'options', initialValue: 'left'}),
    F.image({
      parseType: 'backgroundImage',
      group: 'media',
      name: 'backgroundImage',
    }),
    F.radio(['center', 'bottom', 'right'], {
      name: 'imageAlign',
      group: 'options',
      initialValue: 'center',
    }),
    F.radio(['small', 'medium', 'large'], {
      name: 'size',
      title: 'Hero Size',
      group: 'options',
      initialValue: 'medium',
    }),
    F.links({group: 'content', signUpOption: true}),
    F.object({
      name: 'backgroundOptions',
      group: 'options',
      fields: [
        F.number({
          name: 'backgroundOffset',
          title: 'Background Mobile Offset',
          description: 'Adjust mobile breakpoint offset as a percentage (%).',
          placeholder: 'ie. -10',
        }),
        F.field('backgroundColorFull', {
          name: 'backgroundColor',
        }),
        F.checkbox({name: 'extendBackgroundColor', initialValue: false}),
      ],
    }),
  ],
  preview: P.preview({
    content: 'content',
    prepare: ({content = []}) => ({
      title: 'Hero With Media',
      subtitle: P.richText(content),
    }),
  }),
})
