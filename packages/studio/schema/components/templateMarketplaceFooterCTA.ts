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
      F.string({name: 'ctaLabel'}),
      F.url({name: 'ctaHref'}),
      F.dropdown(['_self', '_blank'], {name: 'target'}),
    ]),
  ],
  preview: {
    select: {label: 'label', ctaLabel: 'ctaLabel'},
    prepare({label = '', ctaLabel = ''}) {
      return {
        title: 'Template Marketplace Footer CTA',
        subtitle: label || ctaLabel,
        media: icon,
      }
    },
  },
})


