import {BiImageAdd as icon} from 'react-icons/bi'
import {BsCameraVideo as videoIcon} from 'react-icons/bs'
import {F, G, P} from '@/schema/tool'

export const mediaWithText = F.field('object', {
  icon,
  name: 'mediaWithText',
  groups: [G.define('content', {default: true}), G.define('media'), G.define('options')],
  fields: [
    ...G.group('content', [
      F.string({name: 'pillContent'}),
      F.field('blockContent', {name: 'content'}),
    ]),
    ...G.group('media', [
      F.media({
        args: {caption: false}
      }), 
    ]),
    ...G.group('options', [
      F.radio(['left', 'right'], {
        name: 'alignContent',
        title: 'Content Alignment',
        initialValue: 'right',
      }),
    ]),
  ],
  preview: {
    select: {
      heading: 'heading',
      content: 'content',
      media: 'media',
    },
    prepare: ({heading, content = [], media = {}}) => {
      const {condition, image} = media
      const subtitle = P.richText(content) || ''

      return {
        title: heading || subtitle,
        subtitle: heading ? subtitle : '',
        media: condition === 'image' ? image || icon : videoIcon,
      }
    },
  },
})
