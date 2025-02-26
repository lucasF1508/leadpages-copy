import {BsCurrencyDollar as icon} from 'react-icons/bs'
import {F, G, P} from '@/schema/tool'

export const schemaPricing = F.object({
  icon,
  name: 'pricing',
  title: 'Pricing',
  groups: G.fieldGroupComponentOptions(),
  fields: [
    ...G.group('content', [F.message('Pricing component.')]),
    ...G.group('options', [
      F.string({
        name: 'selectPlanButtonText',
        placeholder: 'Start For Free',
      }),
      F.dropdown(['ascending', 'descending'], {
        name: 'planOrder',
        initialValue: 'descending',
        description: 'Leave blank for the default (Descending).',
      }),
      F.object({
        name: 'contactUsPlan',
        fields: [
          F.url({
            title: 'Link URL',
            placeholder: 'https://lp.leadpages.com/agency/',
          }),
          F.string({name: 'headline', placeholder: 'Need even more?'}),
          F.text({
            name: 'subheadline',
            placeholder:
              'The Leadpages Advanced Plan helps you stay organized with a master account and 5 client accounts, each loaded with Pro Plan features, advanced integrations, and a 1-on-1 onboarding call.',
          }),
        ],
      }),
    ]),
  ],
  preview: P.text('Pricing Table'),
})
