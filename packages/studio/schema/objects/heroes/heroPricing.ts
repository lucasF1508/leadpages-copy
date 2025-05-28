import {BiImage as icon, BiCheckCircle, BiXCircle} from 'react-icons/bi'
import { MdPriceChange } from "react-icons/md";
import {F, G, P} from '@/schema/tool'
import startCase from 'lodash/startCase'

export const heroPricing = F.object({
  icon,
  name: 'heroPricing',
  groups: [...G.fieldGroupDefaults()],
  fields: [
    ...G.group('content', [
      F.field('blockContentHero', {
        name: 'content',
      }),
      F.array({
        name: 'plans',
        of: [
          F.object({
            name: 'plan',
            fields: [
              F.title({required: true}),
              F.text({name: 'description'}),
              F.array({
                name: 'features',
                of: [
                  F.object({
                    name: 'feature',
                    fields: [
                      F.string({name: 'description'}),
                      F.boolean({name: 'visibleOnDesktop'}),
                      F.dropdown(
                        ['checkmark', 'x'], 
                        {
                          name: 'icon', 
                          initialValue: 'x'
                        }
                      ),
                      F.text({name: 'tooltipText'}),
                    ],
                    preview: {
                      select: {
                        title: 'description',
                        visibleOnDesktop: 'visibleOnDesktop',
                        icon: 'icon',
                      },
                      prepare({title, visibleOnDesktop, icon}) {
                        return {
                          title: title || 'Feature',
                          subtitle: `Visible on Desktop: ${visibleOnDesktop}`,
                          media: icon === 'checkmark' ? BiCheckCircle : BiXCircle,
                        }
                      }
                    },
                  })]
              }),
              F.string({name: 'featuresText'}),
              F.boolean({name: 'isFeatured'}),
              F.string({name: 'pillContent'}),
              F.array({
                name: 'prices',
                validation: (Rule) => Rule.min(1),
                of: [
                  F.object({
                    name: 'price',
                    fields: [
                      F.boolean({
                        initialValue: false,
                        name: 'override', 
                        description: 'Use this when you would prefer words to be displayed instead of the amount'
                      }),
                      F.string({
                        name: 'currency', 
                        required: true,
                        hidden: ({parent}) => !!parent?.override,
                      }),
                      F.dropdown(["monthly", "yearly"],{
                        name: 'period', 
                        required: true,
                        hidden: ({parent}) => !!parent?.override,
                      }),
                      F.string({
                        name: 'price', 
                        description: 'Monthly price for period', 
                        required: true,
                        hidden: ({parent}) => !!parent?.override,
                      }),
                      F.string({
                        name: 'priceOverride', description: 'Text added here will be displayed instead of the amount', 
                        placeholder: 'Let\'s Talk', 
                        hidden: ({parent}) => !parent?.override
                      }),
                      F.string({
                        name: 'compareAtString', 
                        hidden: ({parent}) => parent?.period !== 'yearly' && !!parent?.override,
                      }),
                      F.string({
                        name: 'symbol', 
                        required: true,
                        hidden: ({parent}) => !!parent?.override,
                      }),
                      F.string({
                        hidden: ({parent}) => !parent?.override,
                        name: 'compareAtOverride', 
                        description: 'Text added here will be displayed instead of the billing cycle information', 
                        placeholder: 'Get in touch for custom pricing' 
                      }),
                      F.links({
                        validation: (Rule) => Rule.max(1),
                      }),
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
                        }
                      }
                    },
                })
              ]
            })
          ],
          preview: {
            select: {
              title: 'title',
              description: 'description',
            },
            prepare({title, description}) {
              return {
                title: title || 'Plan',
                subtitle: description,
                icon: MdPriceChange,
              }
            }
          }
        })]
      })
    ]),
  ],
  preview: {
    select: {
      content: 'content',
    },
    prepare({content = []}) {
      const [title, ...rest] = content

      return {
        title: title ? P.richText([title]) : 'Media with Text',
        subtitle: P.richText(rest),
        media: icon,
      }
    },
  },
})
