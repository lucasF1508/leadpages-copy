import {F, G} from '@/schema/tool'
import {BiSpaceBar as icon} from 'react-icons/bi'

export const spacer = {
  title: 'Spacer',
  name: 'spacer',
  type: 'object',
  icon,
  fields: [
    F.number({
      name: 'multiplier',
      title: 'Default Multiplier',
      initialValue: 1,
      validation: (Rule) => Rule.precision(1).required(),
      description:
        'This component increases or decreases the vertical space between components at all responsive breakpoints by the multiplier.',
    }),
    F.number({
      name: 'multiplierMedium',
      validation: (Rule) => Rule.precision(1),
      description: 'If set this will override the default for screens >= 960px',
    }),
    F.number({
      name: 'multiplierLarge',
      validation: (Rule) => Rule.precision(1),
      description: 'If set this will override the default for screens >= 1280px',
    }),
  ],
  preview: {
    select: {
      multiplier: 'multiplier',
    },
    prepare({multiplier}) {
      const prefix = multiplier > 0 ? 'Increase' : 'Decrease'
      return {
        title: `${prefix} vertical space`,
        subtitle: `By factor of ${Math.abs(multiplier)}`,
      }
    },
  },
}
