import {TfiLayoutAccordionMerged as icon} from 'react-icons/tfi'
import {F, G, P} from '@/schema/tool'

export const mediaWithItems = F.field('object', {
  icon,
  name: 'mediaWithItems',
  title: 'Media With Accordion',
  groups: G.fieldGroupComponentOptions(),
  fields: [
    ...G.group('content', [
      F.string({name: 'title'}),
      F.field('blockContentSimple', {name: 'content'}),
      F.radio(['dark', 'light'], {
        name: 'variant',
        title: 'Variant',
        description: 'Choose between dark (default) or light theme',
        initialValue: 'dark',
      }),
      F.array({
        name: 'mediaItems',
        title: 'Media',
        of: [F.media({conditions: {none: ''}, required: true})],
        validation: (Rule) =>
          Rule.required().custom((images, {parent}: any) => {
            if (parent?.items?.length !== images?.length && images?.length !== 1) {
              return 'The amount of images must be 1 or equal the amount of items'
            }

            return true
          }),
      }),
      F.array({
        name: 'items',
        validation: (Rule) => Rule.min(1).max(5),
        of: [
          F.object({
            fields: [
              F.title({required: true}),
              F.text({name: 'content'}),
              F.link({
                initialValue: {
                  linkStyle: 'inline',
                },
              }),
            ],
            name: 'accordionItems',
            preview: {
              select: {
                title: 'title',
                content: 'content',
              },
              prepare: ({title, content}) => ({
                title: title || 'Accordion Item',
                subtitle: content ? P.richText([content]) : '',
              }),
            },
          }),
        ],
      }),
    ]),
  ],
  preview: {
    select: {
      content: 'content',
      items: 'items',
    },
    prepare: ({content = [], items = []}) => {
      const heading = P.richText(content) || ''
      const subtitle = !!items?.length ? items.map((item: any) => item.title).join(', ') : ''
      return {
        title: heading || subtitle,
        subtitle: heading ? subtitle : '',
      }
    },
  },
})
