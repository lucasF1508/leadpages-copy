import { BsFlag as icon } from 'react-icons/bs'
import { F, G } from 'part:gearbox-schema-tool/schema-builder'

export const schemaBanner = F.object({
  icon,
  name: 'banner',
  title: 'Banner',
  groups: [G.content(), G.fieldGroup('image'), G.fieldGroup('link')],
  fields: [
    ...G.group('content', [
      F.string({ name: 'heading' }),
      F.text({ name: 'subheading' }),
    ]),
    F.image({ group: 'image' }),
    F.field('link', { group: 'link' }),
  ],
})
