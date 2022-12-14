import { F } from 'part:gearbox-schema-tool/schema-builder'
import { BiSpaceBar as icon } from 'react-icons/bi'

export const spacer = {
  title: 'Spacer',
  name: 'spacer',
  type: 'object',
  icon,
  fields: [
    F.number({
      name: 'multiplier',
      initialValue: 1,
      validation: (Rule) => Rule.precision(1),
      description:
        'This component increases or decrease the vertical space between components at each responsive breakpoint by the multiplier',
    }),
  ],
  preview: {
    select: {
      multiplier: 'multiplier',
    },
    prepare({ multiplier }) {
      const prefix = multiplier > 0 ? 'Increase' : 'Decrease'
      return {
        title: `${prefix} vertical space`,
        subtitle: `By factor of ${Math.abs(multiplier)}`,
      }
    },
  },
}
