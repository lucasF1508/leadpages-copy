import { F, G } from 'part:gearbox-schema-tool/schema-builder'
import { BsCapslock as icon } from 'react-icons/bs'

export const schemaInlineCTA = {
  icon,
  title: 'Inline CTA',
  name: 'inlineCTA',
  type: 'object',
  groups: [
    ...G.fieldGroupComponentOptions(),
    G.fieldGroup('links', { title: 'Links' }),
  ],
  fields: [
    ...G.group('content', [
      F.field('blockContentSimple', {
        name: 'content',
        validation: (Rule) => Rule.required(),
        group: 'content',
        initialValue: [
          {
            _type: 'block',
            children: [
              {
                _key: '123',
                _type: 'span',
                marks: [],
                text: 'Easily create your website and landing pages with the only platform engineered by marketing nerds.',
              },
            ],
            markDefs: [],
            style: 'normal',
          },
        ],
      }),
      F.image({
        name: 'image',
        group: 'content',
        initialValue: {
          _type: 'image',
          asset: {
            _ref: 'image-544ef3b49618476db2f03f10384d86438b9f6e03-598x600-png',
            _type: 'reference',
          },
        },
      }),
    ]),
    ...G.group('links', [
      F.link({
        name: 'ctaLink',
        group: 'content',
        args: {
          url: { initialValue: 'https://lp.leadpages.com/free-trial/' },
          label: { initialValue: 'Start a Free Trial' },
          condition: { initialValue: 'external' },
          popUpId: { initialValue: 'rMjFeuLYTU7X8rt2hg7tTm' },
          leadpagesDomain: { initialValue: 'lps.lpages.co' },
        },
      }),
    ]),
    ...G.group('options', [
      F.boolean({
        name: 'contentRight',
        initialValue: true,
        group: 'options',
      }),
      F.boolean({
        name: 'imageBottom',
        title: 'Align Image at Bottom',
        initialValue: false,
        group: 'options',
      }),
      F.string({
        name: 'imageWidth',
        type: 'string',
        initialValue: 'third',
        group: 'options',
        options: {
          list: [
            { title: '1/4', value: 'quarter' },
            { title: '1/3', value: 'third' },
            { title: '1/2', value: 'half' },
          ],
          layout: 'radio',
        },
      }),
      F.string({
        title: 'Background Color',
        name: 'bgColor',
        type: 'string',
        initialValue: 'grayAlt',
        validation: (Rule) => Rule.required(),
        group: 'options',
        options: {
          list: [
            { title: 'Light', value: 'grayAlt' },
            { title: 'Dark', value: 'primary' },
            { title: 'Alternate', value: 'secondary' },
            { title: 'Tan', value: 'tan' },
            { title: 'Lavender light', value: 'lavenderLight' },
            { title: 'Transparent', value: 'transparent' },
            { title: 'Text Highlight', value: 'textHighlight' },
            { title: 'Champagne', value: 'champagne' },
            { title: 'Magnolia', value: 'magnolia' },
          ],
          layout: 'radio',
        },
      }),
    ]),
  ],
  preview: {
    select: {
      title: 'title',
      image: 'image',
      content: 'content',
    },
    prepare(selection) {
      const { title, image, content } = selection
      return {
        title: title || 'Inline CTA',
        media: image,
      }
    },
  },
}
