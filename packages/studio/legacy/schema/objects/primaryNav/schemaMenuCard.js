import {F, G} from '@/legacy/schema/tool'
import {CgCardSpades as icon} from 'react-icons/cg'

export const schemaMenuCard = F.object({
  icon,
  name: 'menuCard',
  groups: [...G.fieldGroupComponentOptions()],
  fields: [
    ...G.group('content', [
      F.image({required: true}),
      F.link({
        args: {
          linkStyle: false,
          file: false,
          hasIcon: false,
          label: false,
        },
      }),
      F.string({name: 'label'}),
    ]),
    ...G.group('options', [
      F.string({
        name: 'backgroundColor',
        description:
          "Add a valid hex code prepended with a '#', This will be the background color of the card when hovered.",
        placeholder: '#000000',
      }),
      F.boolean('disableHover', {
        name: 'disableHover',
        description: 'Maintain Image Color on Hover',
        initialValue: false,
      }),
      F.radio(['white', 'black'], {
        name: 'hoverColor',
        description: 'This will be the color of the image when the user hovers over it.',
        initialValue: 'white',
      }),
    ]),
  ],
  preview: {
    select: {
      title: 'label',
      media: 'image',
    },
    prepare: ({title, media}) => ({
      title,
      media: media || icon,
    }),
  },
})
