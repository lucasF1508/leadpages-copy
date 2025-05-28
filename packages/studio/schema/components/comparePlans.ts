import {F, P} from '@/schema/tool'
import startCase from 'lodash/startCase'
import { MdPriceChange } from 'react-icons/md'
import { GrTable as icon } from "react-icons/gr";
import { TbSection, TbLayoutRows } from "react-icons/tb";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";

export const comparePlans = F.object({
  name: 'comparePlans',
  icon,
  fields: [
    F.field('blockContentSimple', {name: 'content'}),
    F.dropdown(['open', 'collapsed'], {
      name: 'defaultState',
    }),
    F.array({
      name: 'columns',
      validation: (Rule) => Rule.min(1),
      of: [
        F.object({
          name: 'column',
          fields: [
            F.title(),
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
                      hidden: ({parent}) => parent?.period !== 'yearly' && !!parent?.override && !parent?.override,
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
                        icon: MdPriceChange,
                      }
                    }
                  },
                })
              ]
            }), 
          ],
          preview: {
            select: {
              title: 'title',
              price: 'price',
              currency: 'currency',
              period: 'period',
            },
            prepare({title, price, currency}) {
              return {
                title: title || 'Column',
                subtitle: price && currency ?  `${price}${currency}` : '',
                icon: MdPriceChange,
              }
            }
          },
        })
      ]
    }), 
    F.array({
      name: 'sections',
      validation: (Rule) => Rule.min(1),
      of: [
        F.object({
          name: 'section',
          fields: [
            F.title({required: true}),
            F.array({
              name: 'features',
              validation: (Rule) => Rule.min(1),
              of: [
                F.object({
                  name: 'feature',
                  icon: TbLayoutRows,
                  fields: [
                    F.title({required: true}),
                    F.field('blockContentBare', {name: 'description'}),
                    F.array({
                      validation: (Rule) => Rule.min(1),
                      name: 'columns',
                      of: [
                        F.object({
                          name: 'column',
                          fields: [
                            F.boolean({name: 'isAvailable', required: true, initialValue: true}),
                            F.title({name: 'text'}),
                            F.text({name: 'textSecondary'}),
                          ],
                          preview: {
                            select: {
                              title: 'text',
                              isAvailable: 'isAvailable',
                              subtitle: 'textSecondary',
                            },
                            prepare({title = '', subtitle = '', isAvailable}) {
                              return {
                                title: title || 'No Description',
                                subtitle: subtitle || '',
                                icon: isAvailable ? FiCheckCircle : FiXCircle,
                              }
                            }
                          }
                        }),
                      ]
                    }),
                  ],
                  preview: {
                    select: {
                      title: 'title',
                      description: 'description',
                    },
                    prepare({title = '', description = []}) {
                      const subtitle = P.richText(description)
                      return {
                        title: title || 'Feature',
                        subtitle,
                      }
                    }
                  }
                })
              ]
            }),
          ],
          preview: {
            select: {
              title: 'title',
              description: 'description',
            },
            prepare({title = '', description = ''}) {
              return {
                title: title || 'Section',
                subtitle: description || '',
                icon: TbSection,
              }
            }
          }
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({
        title: "Compare Plans"
    })
  },
})