import { BsFileRichtext as icon } from 'react-icons/bs'
import { F } from 'part:gearbox-schema-tool/schema-builder'
import { features } from 'config'

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
  },
  fields: [
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
        F.dropdown(
          ['transparent', ...features.darkHeros, ...features.lightHeros],
          {
            name: 'backgroundColor',
            description: 'Defaults to transparent.',
          }
        ),
        F.checkbox({ name: 'extendBackgroundColor', initialValue: false }),
      ],
    }),
  ],
})
