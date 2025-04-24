import {BsListTask as icon} from 'react-icons/bs'
import {F, FS, P, G} from '@/legacy/schema/tool'

export const schemaTabs = F.object({
  icon,
  name: 'tabs',
  groups: G.fieldGroupComponentOptions(),
  fields: [
    ...G.group('content', [
      ...F.contentGroup({
        label: false,
        link: false,
        heading: {hidden: ({parent}) => !parent.alternateLayout},
        content: {hidden: ({parent}) => !parent.alternateLayout},
      }),
      F.array({
        name: 'items',
        of: [
          F.object({
            groups: [G.define('content', {default: true}), G.define('media'), G.define('link')],
            fieldsets: [FS.define('legacyImage')],
            name: 'item',
            fields: [
              ...G.group('content', [F.string({name: 'title'}), F.text({name: 'content'})]),
              ...G.group('media', [
                F.image({name: 'icon'}),
                F.media(),
                F.image({fieldset: 'legacyImage'}),
              ]),
              F.link({group: 'link'}),
            ],
            preview: P.preview({
              media: 'icon',
              title: 'title',
              prepare: ({title, media = {}}) => {
                const {image} = media

                return {
                  title,
                  media: image || icon,
                }
              },
            }),
          }),
        ],
        validation: (Rule) => Rule.max(4),
      }),
      F.link({
        hidden: ({parent, value}) => !value?.condition || !parent.alternateLayout,
      }),
      F.links({
        group: 'link',
        signUpOption: true,
        hidden: ({parent}) => !!parent?.link?.condition,
        validation: (Rule) => Rule.max(1),
      }),
    ]),
    ...G.group('options', [
      F.boolean({
        name: 'autoplay',
        title: 'Enable Autoplay',
        description: 'When enabled, the tabs will automatically progress to the next tab.',
        initialValue: false,
      }),
      F.boolean({
        name: 'loop',
        title: 'Enable Looping',
        description: 'When enabled, the tabs will cycle continuously.',
        initialValue: false,
      }),
      F.boolean({
        name: 'alternateLayout',
        title: 'Use Alternate Sizing',
        description:
          'When enabled, this will toggle the sizing and display of the headings, content and links within the component.',
        initialValue: false,
      }),
      F.radio(['left', 'right'], {
        name: 'align',
        title: 'Tab Alignment',
        initialValue: 'left',
      }),
      F.radio(['narrow', 'wide'], {
        name: 'tabWidth',
        title: 'Tab Width',
        initialValue: 'narrow',
      }),
      F.field('animate'),
    ]),
  ],
  preview: P.preview({
    items: 'items',
    prepare: ({items = []}) => {
      const image = items[0]?.icon || icon
      const subtitle = items?.length > 0 ? `${items.map((item) => item.title)}` : '(Empty)'

      return {
        title: 'Tabs',
        subtitle,
        media: image,
      }
    },
  }),
})
