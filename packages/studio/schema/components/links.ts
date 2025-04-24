import {F} from '@/schema/tool'

export const links = F.array(
  {
    name: 'links',
    of: [
      F.link({
        args: {
          linkStyle: false,
        },
        fields: [
          F.dropdown(['button-solid', 'button-outline', 'button-secondary', 'text', 'text-secondary'], {
            name: 'linkStyle',
            initialValue: 'inline',
            group:'options'
          }),
        ]      
      }),
      F.field('signUp'),
    ],
    validation: (Rule) => [
      Rule.max(1),
      Rule.custom((field) =>
           field?.some((link: any) => link._type === 'signUp') && field.length > 1
             ? 'When signup link is present, the CTA cannot contain other links'
             : true
          ),
    ],
  },
)