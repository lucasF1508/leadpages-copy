import { BiUserPlus as icon } from 'react-icons/bi'
import { F, G } from 'part:gearbox-schema-tool/schema-builder'

export const schemaSignUpLink = F.field('object', {
  name: 'signUp',
  title: 'Inline Sign Up Field',
  icon,
  groups: G.fieldGroupComponentOptions(),
  fields: [
    ...G.group('content', [
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
        hidden: ({ parent }) => parent.signUpType === 'external',
      }),
      F.object({
        name: 'external',
        hidden: ({ parent }) => parent.signUpType !== 'external',
        fields: [
          F.string({
            name: 'url',
            title: 'Redirect URL',
            description: 'eg: https://google.com',
            required: true,
          }),
          F.string({
            name: 'portalId',
            title: 'HubSpot Portal ID',
            placeholder: '21794907',
          }),
          F.string({
            name: 'formId',
            title: 'HubSpot Form ID',
            placeholder: 'b9cf01c6-afce-4838-a074-d7bf202da044',
          }),
        ],
      }),
    ]),
    ...G.group('options', [
      F.radio(['plan', 'external'], {
        name: 'signUpType',
        initialValue: 'plan',
      }),
      F.boolean({ name: 'hasIcon', title: 'Show Icon', initialValue: true }),
    ]),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'type',
    },
    prepare: (props) => ({ ...props, media: icon }),
  },
})
