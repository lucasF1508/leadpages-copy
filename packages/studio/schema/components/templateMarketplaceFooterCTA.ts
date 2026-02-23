import {RxSection as icon} from 'react-icons/rx'
import {F, G} from '@/schema/tool'

export const templateMarketplaceFooterCTA = F.object({
  icon,
  name: 'templateMarketplaceFooterCTA',
  title: 'Template Marketplace Footer CTA',
  groups: [
    G.define('content', {title: 'Content', default: true}),
    G.define('actions', {title: 'Actions'}),
  ],
  fields: [
    ...G.group('content', [
      F.string({name: 'label'}),
      F.field('blockContentHero', {name: 'heading'}),
      F.text({name: 'subheading'}),
    ]),
    ...G.group('actions', [
      F.string({
        name: 'inputPlaceholder',
        title: 'Input Placeholder',
        description: 'Placeholder text for the email input (e.g., Sample@gmail.com)',
      }),
      F.string({
        name: 'buttonText',
        title: 'Button Text',
        description: 'Text for the submit button (e.g., Submit Email)',
      }),
      F.string({
        name: 'buttonHref',
        title: 'Button URL',
        description: 'URL or path where the button will redirect when clicked (e.g., /signup or https://example.com)',
      }),
    ]),
  ],
  preview: {
    select: {label: 'label', buttonText: 'buttonText'},
    prepare({label = '', buttonText = ''}) {
      return {
        title: 'Template Marketplace Footer CTA',
        subtitle: label || buttonText,
        media: icon,
      }
    },
  },
})


