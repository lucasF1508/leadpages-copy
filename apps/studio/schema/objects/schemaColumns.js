import { BsColumnsGap as icon } from 'react-icons/bs'
import { F, P, G } from 'part:gearbox-schema-tool/schema-builder'

export const schemaColumns = F.object({
  icon,
  name: 'columns',
  groups: G.fieldGroupComponentOptions(),
  fields: [
    ...G.group('content', [
      F.array({
        name: 'items',
        of: F.object({
          groups: [G.content(), G.fieldGroup('link')],
          name: 'item',
          fields: [
            ...G.group('content', [
              F.string({ name: 'title' }),
              F.text({ name: 'content' }),
            ]),
            F.link({ group: 'link' }),
          ],
          preview: P.titleImage({
            subtitle: 'content',
          }),
        }),
      }),
    ]),
    // ...G.group('options', [
    //   F.radio(['3', '4'], {
    //     name: 'itemsPerRow',
    //     initialValue: '4',
    //   }),
    // ]),
  ],
  preview: P.arrayTitle(),
})
