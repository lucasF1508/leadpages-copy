import { BiUserPlus as icon } from 'react-icons/bi'
import { F } from 'part:gearbox-schema-tool/schema-builder'

export const schemaSignUpLink = F.field('object', {
  name: 'signUp',
  title: 'Inline Sign Up Field',
  icon,
  fields: [
    F.string({
      name: 'label',
      title: 'Button Text',
      initialValue: 'Start my trial',
    }),
    F.string({
      name: 'placeholder',
      title: 'Placeholder',
      initialValue: 'Enter your email',
    }),
    F.boolean({ name: 'hasIcon', title: 'Show Icon', initialValue: true }),
    F.string({
      name: 'type',
      title: 'Link To',
      options: {
        list: [
          { title: 'Standard Annual', value: 'standardAnnual' },
          { title: 'Standard Monthly', value: 'standardMonthly' },
          { title: 'Pro Annual', value: 'proAnnual' },
          { title: 'Pro Monthly', value: 'proMonthly' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'standardAnnual',
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'type',
    },
    prepare: (props) => ({ ...props, media: icon }),
  },
})
