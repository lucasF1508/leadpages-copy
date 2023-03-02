import { BsBriefcaseFill as icon } from 'react-icons/bs'
import { F } from 'part:gearbox-schema-tool/schema-builder'

export const schemaHeroCareers = F.hero({
  name: 'heroCareers',
  title: 'Careers Hero',
  icon,
  args: {
    label: false,
    align: false,
    media: false,
    link: false,
  },
  fields: [
    F.string({ name: 'label', title: 'Button Text' }),
    F.media({
      name: 'mediaLeft',
      group: 'media',
      conditions: { none: [] },
      initialValue: {
        condition: 'none',
      },
      args: { caption: false },
    }),
    F.media({
      name: 'mediaRight',
      group: 'media',
      conditions: { none: [] },
      initialValue: {
        condition: 'none',
      },
      args: { caption: false },
    }),
    F.image({
      parseType: 'backgroundImage',
      group: 'media',
      name: 'backgroundImageLeft',
    }),
    F.image({
      parseType: 'backgroundImage',
      group: 'media',
      name: 'backgroundImageRight',
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
      ],
    }),
  ],
})
