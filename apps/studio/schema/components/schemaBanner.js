import { BsFlag as icon } from 'react-icons/bs'
import { F, G } from 'part:gearbox-schema-tool/schema-builder'

export const schemaBanner = F.object({
  icon,
  name: 'banner',
  title: 'Banner',
  groups: [
    G.content(),
    G.fieldGroup('image'),
    G.fieldGroup('link'),
    G.fieldGroup('options'),
  ],
  fields: [
    ...G.group('content', [
      F.string({ name: 'heading' }),
      F.string({ name: 'pill' }),
      F.string({ name: 'subheading' }),
      F.text({ name: 'body' }),
      F.links({
        validation: (Rule) => Rule.max(1),
      }),
    ]),
    ...G.group('image', [
      F.radio(['edge', 'content'], {
        name: 'imagePosition',
        initialValue: 'edge',
        description:
          'This setting will align the image to either the bottom corner of the component or the baseline of the content within the component.',
      }),
      F.image(),
    ]),
    ...G.group('options', [
      F.field('backgroundColorFull', {
        title: 'Background Color',
      }),
      F.field('backgroundColorFull', {
        title: 'Component Color',
      }),
      F.boolean({
        name: 'linkIsHidden',
        initialValue: false,
        title: 'Hide Link',
      }),
    ]),
  ],
})
