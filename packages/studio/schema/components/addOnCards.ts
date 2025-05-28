import {F, G, P} from '@/schema/tool'
import startCase from 'lodash/startCase'
import { MdOutlineFeaturedPlayList as icon, MdPriceChange } from "react-icons/md";

export const addOnCards = F.object({
  name: 'addOnCards',
  icon,
  groups: [G.define('cards', {title: 'Cards', default: true}), G.define('content', {title: 'Content'})],
  fields: [
    ...G.group('content', [
      F.string({name: 'pillContent'}),
      F.field('blockContent', {name: 'content'})
    ]),
    ...G.group('cards', [
      F.array({
        name: 'cards',
        of: [
          F.object({
            name: 'card',
            fields: [
              F.image({name: 'icon'}),
              F.string({name: 'title'}),
              F.text({name: 'content'}),
              F.string({name: 'pricesLabel', placeholder: 'From'}),
              F.array({
                name: 'prices',
                validation: (Rule) => Rule.min(1),
                of: [
                  F.object({
                    name: 'price',
                    fields: [
                      F.string({name: 'currency', required: true}),
                      F.dropdown(['monthly', 'yearly'], {name: 'period', required: true}),
                      F.string({name: 'price', description: 'Monthly price for period', required: true}),
                      F.string({name: 'symbol', required: true}),
                      F.string({name: 'priceIncludes'}),
                    ],
                    preview: {
                      select: {
                        title: 'price',
                        subtitle: 'currency',
                        period: 'period',
                      },
                      prepare({title, subtitle, period}) {
                        return {
                          title: startCase(period) || 'Price',
                          subtitle: title && subtitle ?  `${title} ${subtitle}` : '',
                          icon: MdPriceChange,
                        }
                      }
                    },
                  })
                ]
              }), 
              F.links({
                validation: (Rule) => Rule.max(1),
              }),
            ],
          }),
        ],
      }),
    ]),
  ],
  preview: {
    select: {
      content: 'content',
    },
    prepare({content = []}) {
      const [title, ...subheading] = content || {}
      return {
        title: P.richText([title]) || 'Add On Cards',
        subtitle: subheading ? P.richText(subheading) : 'Add On Cards',
        media: icon,
      }
    },
  },
})