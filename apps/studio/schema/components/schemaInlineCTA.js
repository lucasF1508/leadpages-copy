import { F, G } from 'part:gearbox-schema-tool/schema-builder'
import { BsCapslock as icon } from 'react-icons/bs'
import { uuid } from '@sanity/uuid'

export const schemaInlineCTA = {
  icon,
  title: 'Inline CTA',
  name: 'inlineCTA',
  type: 'object',
  groups: G.fieldGroupComponentOptions(),
  fields: [
    ...G.group('content', [
      F.string({
        name: 'title',
        initialValue: 'Try Leadpages free for 14 days',
        group: 'content',
      }),
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
      F.link({
        name: 'ctaLink',
        group: 'content',
        args: {
          url: { initialValue: 'https://lp.leadpages.com/free-trial/' },
          label: { initialValue: 'Start a Free Trial' },
          condition: { initialValue: 'external' },
        },
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
          ],
          layout: 'radio',
        },
      }),
    ]),
  ],
}
