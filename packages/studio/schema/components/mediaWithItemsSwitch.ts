import {F, G, P} from '@/schema/tool'
import {BiLayer as icon} from 'react-icons/bi'

const mediaWithTextItem = F.object({
  name: 'mediaWithTextItem',
  groups: [G.define('content', {default: true}), G.define('media'), G.define('options')],
  fields: [
    ...G.group('content', [
      F.string({name: 'pillContent'}),
      F.field('blockContent', {name: 'content'}),
      F.links(),
    ]),
    ...G.group('media', [
      F.media({
        args: {caption: false},
      }),
    ]),
    ...G.group('options', [
      F.radio(['left', 'right'], {
        name: 'alignContent',
        title: 'Content Alignment',
        initialValue: 'right',
      }),
    ]),
  ],
  preview: {
    select: {
      content: 'content',
      pillContent: 'pillContent',
    },
    prepare: ({content = [], pillContent}) => ({
      title: pillContent || 'Media With Text',
      subtitle: content?.length ? P.richText([content[0]]) : '',
    }),
  },
})

export const mediaWithItemsSwitch = F.field('object', {
  icon,
  name: 'mediaWithItemsSwitch',
  title: 'Media With Items Switch',
  groups: G.fieldGroupComponentOptions(),
  fields: [
    F.radio(['light', 'dark'], {
      name: 'variant',
      title: 'Theme',
      description: 'Light or dark version',
      initialValue: 'light',
      group: 'options',
    }),
    ...G.group('content', [
      F.string({
        name: 'label',
        title: 'Label',
        description: 'Small label above the title (e.g. "The Platform")',
      }),
      F.string({
        name: 'title',
        title: 'Title',
        description: 'Main heading (e.g. "What you get with Leadpages")',
      }),
      F.field('blockContent', {
        name: 'content',
        title: 'Intro content',
        description: 'Optional intro paragraph below the title',
      }),
      F.dropdown(
        [
          {value: 'default', title: 'Default (purple)'},
          {value: 'green', title: 'Green background + black text'},
        ],
        {
          name: 'linkButtonVariant',
          title: 'Link/Button color',
          description: 'Style for buttons (e.g. Learn More). Affects all items in this component.',
          initialValue: 'default',
          group: 'options',
        }
      ),
      F.array({
        name: 'sections',
        title: 'Tabs',
        validation: (Rule) => Rule.min(1).max(6),
        of: [
          F.object({
            name: 'mediaWithItemsSwitchSection',
            title: 'Tab',
            fields: [
              F.string({
                name: 'tabLabel',
                title: 'Tab Label',
                validation: (Rule) => Rule.required(),
              }),
              F.array({
                name: 'items',
                title: 'Items',
                of: [mediaWithTextItem],
                validation: (Rule) => Rule.min(1),
              }),
            ],
            preview: {
              select: {
                tabLabel: 'tabLabel',
                items: 'items',
              },
              prepare: ({tabLabel, items = []}) => ({
                title: tabLabel || 'Tab',
                subtitle: `${items?.length ?? 0} item(s)`,
              }),
            },
          }),
        ],
      }),
    ]),
  ],
  preview: {
    select: {
      sections: 'sections',
    },
    prepare: ({sections = []}) => ({
      title: 'Media With Items Switch',
      subtitle: sections.map((s: {tabLabel?: string}) => s?.tabLabel).filter(Boolean).join(', ') || '',
    }),
  },
})
