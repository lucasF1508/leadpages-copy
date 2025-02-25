import {BsColumnsGap as icon} from 'react-icons/bs'
import {F, G, P} from '@/schema/tool'

export const schemaColumns = F.object({
  icon,
  name: 'columns',
  groups: G.fieldGroupComponentOptions(),
  fields: [
    ...G.group('content', [
      F.array({
        name: 'items',
        of: [
          F.object({
            groups: [G.define('content'), G.define('link')],
            name: 'item',
            fields: [
              ...G.group('content', [F.string({name: 'title'}), F.text({name: 'content'})]),
              F.link({group: 'link'}),
            ],
            preview: P.titleImage({
              subtitle: 'content',
            }),
          }),
        ],
      }),
    ]),
    ...G.group('options', [
      F.radio(['1', '2'], {
        name: 'itemsPerRow',
        initialValue: '2',
      }),
    ]),
  ],
  preview: P.defaultPreview(),
})
