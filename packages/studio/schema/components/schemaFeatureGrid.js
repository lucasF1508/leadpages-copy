import {BsColumnsGap as icon} from 'react-icons/bs'
import {RiMovieLine} from 'react-icons/ri'
import {F, G, P} from '@/schema/tool'

export const schemaFeatureGrid = F.object({
  icon,
  name: 'featureGrid',
  groups: [G.define('content', {default: true}), G.define('options'), G.define('legacy')],
  fields: [
    ...G.group('content', [
      F.array({
        name: 'items',
        of: [
          F.object({
            groups: [G.define('content', {default: true}), G.define('image'), G.define('link')],
            name: 'item',
            fields: [
              F.string({name: 'title', group: 'content'}),
              F.text({name: 'content', group: 'content'}),
              F.image({name: 'image', group: 'image', hidden: true}),
              F.media({
                name: 'media',
                group: 'image',
                conditions: {
                  wistia: false,
                  video: false,
                },
                args: {
                  video: false,
                  wistia: false,
                },
              }),
              F.link({
                args: {
                  condition: {name: 'condition', required: false, group: 'content'},
                },
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
              prepare: ({title, subtitle, image: _image, media: _media}) => {
                const {condition, image, lottie} = _media || {}
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
        ],
      }),
    ]),
    ...G.group('options', [
      F.radio(['3', '4'], {
        name: 'itemsPerRow',
        initialValue: '4',
        hidden: ({parent}) => ['toolkitCards'].includes(parent.legacyComponent),
      }),
      F.boolean({
        name: 'asCards',
        description: 'When toggled, items will be displayed within a white, square card.',
        initialValue: false,
        hidden: ({parent}) =>
          parent?.itemsPerRow === '4' || ['toolkitCards'].includes(parent.legacyComponent),
      }),
      F.checkbox({
        name: 'align',
        title: 'Align left on mobile',
        hidden: ({parent}) =>
          ['toolkitCards'].includes(parent.legacyComponent) || parent?.asCards === true,
      }),
      F.field('backgroundColor', {
        hidden: ({parent}) => ['toolkitCards'].includes(parent.legacyComponent),
      }),
      F.boolean({
        name: 'showSectionLink',
        initialValue: false,
        hidden: ({parent}) => ['toolkitCards'].includes(parent.legacyComponent),
      }),
      F.message('The selected Legacy Component overrides all available options.', {
        hidden: ({parent}) => !['toolkitCards'].includes(parent.legacyComponent),
      }),
    ]),
    ...G.group('legacy', [F.dropdown(['toolkitCards'], {name: 'legacyComponent'})]),
  ],
  preview: P.preview({
    items: 'items',
    prepare: ({items}) => {
      const title = items?.length > 0 ? items.map((item) => item.title).join(', ') : 'Feature Grid'
      return {title}
    },
  }),
})
