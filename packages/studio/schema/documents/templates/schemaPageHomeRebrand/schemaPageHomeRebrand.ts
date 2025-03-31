import {AiOutlineHome as icon} from 'react-icons/ai'
import {F, P, G} from '@/schema/tool'
import mediaWithItems from './mediaWithItems'
import spacer from './spacer'
import textBlock from './textBlock'
import resourceCards from './resourceCards'
import testimonial from './testimonial'
import featureCards from './featureCards'
import cta from './cta'
import cardsBlock from './cardsBlock'
import textWithStats from './textWithStats'
import marquee from './marquee'
import mediaWithTextSticky from './mediaWithTextSticky'
import { links } from './links'

const section = F.object({
  name: 'section',
  fields: [
    F.array({name: 'components', of: [marquee, textBlock, textWithStats, mediaWithTextSticky, spacer]}),
  ],
  preview: {
    prepare: () => ({
      title: 'Section',
    })
  },
})

const components = F.array({
  name: 'components',
  of: [
    section, 
    textBlock, 
    cardsBlock, 
    cta, 
    featureCards, 
    mediaWithItems, 
    testimonial, 
    resourceCards,
    spacer
  ],
})

export const schemaPageHomeRebrand = {
  icon,
  name: 'pageHomeRebrand',
  title: 'Home Page',
  type: 'document',
  groups: [...G.fieldGroupDefaults(), G.define('seo', {title: 'SEO'})],
  fields: [ 
    ...F.fieldDefaultsCustom({parent: {hidden: true}}),
    ...G.group('content', [
      F.array({
        name: 'hero',
        validation: (Rule) => Rule.max(1),
        of: [
          F.object({
            name: 'heroHome',
            fields: [
              F.string({name: 'heading'}),
              F.text({name: 'content'}),
              links,
            ],
            preview: {
              select: {
                title: 'heading',
                content: 'content',
              },
              prepare: ({title, content}) => ({
                title: title || 'Hero',
                subtitle: content || 'Home Rebrand',
              }),
            },
          }),
        ],  
      }),
      components,
    ]),
    ...G.group('seo', [F.seo()]),
  ],
  preview: P.titleImage(),
}
