import { BsColumnsGap as icon } from 'react-icons/bs'
import { RiMovieLine } from 'react-icons/ri'
import { F, P, G } from 'part:gearbox-schema-tool/schema-builder'

export const schemaFeatureGrid = F.object({
  icon,
  name: 'featureGrid',
  groups: [...G.fieldGroupComponentOptions(), G.fieldGroup('legacy')],
  fields: [
    ...G.group('content', [
      F.array({
        name: 'items',
        of: F.object({
          groups: [G.content(), G.fieldGroup('image'), G.fieldGroup('link')],
          name: 'item',
          fields: [
            ...G.group('content', [
              F.string({ name: 'title' }),
              F.text({ name: 'content' }),
            ]),
            F.image({ name: 'image', group: 'image', hidden: true }),
            F.media({
              name: 'media',
              group: 'image',
              args: {
                video: false,
              },
            }),
            F.link({
              group: 'link',
              fields: [
                F.boolean({
                  name: 'hasLinkIcon',
                  group: 'options',
                  initialValue: false,
                }),
              ],
            }),
            F.boolean({
              title: 'Hide Link label',
              name: 'hideLabel',
              group: 'link',
              initialValue: false,
              description:
                'The label will default to the page name when left blank. \nWhen toggled, the label field contents [if present] or default label on the card will not be shown on the card. The card will still leverage the specified link.',
            }),
          ],
          preview: P.titleImage({
            subtitle: 'content',
            image: 'image',
            media: 'media',
            prepare: ({ title, subtitle, image: _image, media: _media }) => {
              const { condition, image, lottie } = _media || {}
              const media =
                condition === 'image' && !!image
                  ? image
                  : condition === 'lottie' && !!lottie
                  ? RiMovieLine
                  : _image
              return {
                title,
                subtitle,
                media,
              }
            },
          }),
        }),
      }),
    ]),
    ...G.group('options', [
      F.radio(['3', '4'], {
        name: 'itemsPerRow',
        initialValue: '4',
        hidden: ({ parent }) =>
          ['toolkitCards'].includes(parent.legacyComponent),
      }),
      F.boolean({
        name: 'asCards',
        description:
          'When toggled, items will be displayed within a white, square card.',
        initialValue: false,
        hidden: ({ parent }) =>
          parent?.itemsPerRow === '4' ||
          ['toolkitCards'].includes(parent.legacyComponent),
      }),
      F.checkbox({
        name: 'align',
        title: 'Align left on mobile',
        hidden: ({ parent }) =>
          ['toolkitCards'].includes(parent.legacyComponent) ||
          parent?.asCards === true,
      }),
      F.field('backgroundColor', {
        hidden: ({ parent }) =>
          ['toolkitCards'].includes(parent.legacyComponent),
      }),
      F.boolean({
        name: 'showSectionLink',
        initialValue: false,
        hidden: ({ parent }) =>
          ['toolkitCards'].includes(parent.legacyComponent),
      }),
      F.message(
        'The selected Legacy Component overrides all available options.',
        {
          hidden: ({ parent }) =>
            !['toolkitCards'].includes(parent.legacyComponent),
        }
      ),
    ]),
    ...G.group('legacy', [
      F.dropdown(['toolkitCards'], { name: 'legacyComponent' }),
    ]),
  ],
  preview: P.arrayTitle(),
})
