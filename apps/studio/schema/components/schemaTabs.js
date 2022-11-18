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
            F.image({ name: 'image', group: 'media' }),
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
    ...G.group('options', []),
  ],
  preview: P.arrayTitle(),
})
