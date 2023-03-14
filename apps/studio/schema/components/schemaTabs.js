import { BsListTask as icon } from 'react-icons/bs'
import { F, P, G } from 'part:gearbox-schema-tool/schema-builder'

export const schemaTabs = F.object({
  icon,
  name: 'tabs',
  groups: G.fieldGroupComponentOptions(),
  fields: [
    ...G.group('content', [
      F.array({
        name: 'items',
        of: F.object({
          groups: [G.content(), G.fieldGroup('media'), G.fieldGroup('link')],
          name: 'item',
          fields: [
            ...G.group('content', [
              F.string({ name: 'title' }),
              F.text({ name: 'content' }),
            ]),
            F.image({ name: 'icon', group: 'media' }),
            F.media({ group: 'media' }),
            F.link({ group: 'link' }),
          ],
          preview: P.titleImage({
            media: 'icon',
            subtitle: 'content',
          }),
        }),
        validation: (Rule) => Rule.max(4),
      }),
    ]),
    ...G.group('options', [
      F.boolean({
        name: 'autoplay',
        title: 'Enable Autoplay',
        description:
          'When enabled, the tabs will automatically progress to the next tab.',
        initialValue: false,
      }),
      F.boolean({
        name: 'loop',
        title: 'Enable Looping',
        description: 'When enabled, the tabs will cycle continuously.',
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
    ]),
  ],
  preview: P.arrayTitle(),
})
