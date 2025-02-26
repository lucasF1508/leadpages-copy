import {BiImageAdd as icon} from 'react-icons/bi'
import {BsCameraVideo as videoIcon} from 'react-icons/bs'
import {F, G, P} from '@/schema/tool'

export const schemaMediaWithText = F.field('object', {
  icon,
  name: 'mediaWithText',
  groups: [...G.fieldGroupComponentOptions(), G.define('media')],
  fields: [
    ...G.group('content', [
      F.field('blockContentHeadline', {name: 'content'}),
      F.links({
        signUpOption: true,
      }),
    ]),
    ...G.group('media', [
      F.media({
        fields: [
          F.radio(['left', 'right'], {
            name: 'align',
            title: 'Content Alignment',
            initialValue: 'left',
            group: 'options',
          }),
        ],
      }),
      F.image({
        name: 'backgroundImage',
      }),
    ]),
    ...G.group('options', [
      F.radio(['left', 'right'], {
        name: 'align',
        title: 'Content Alignment',
        initialValue: 'left',
      }),
      F.radio(['default', 'bottom'], {
        name: 'alignImage',
        title: 'Image Alignment',
        initialValue: 'default',
      }),
      F.radio(['default', 'wide'], {
        name: 'width',
        title: 'Component Width',
        initialValue: 'default',
      }),
      F.radio(['media', 'content'], {
        name: 'priority',
        title: 'Priority',
        initialValue: 'media',
        description: `Media: media on top, wider media container.
          Content: content on top, wider content container.`,
      }),
      F.checkbox({
        name: 'alignText',
        title: 'Left align text on mobile',
        initialValue: false,
        hidden: ({parent}) => parent?.priority === 'media',
      }),
      F.field('backgroundColorFull', {
        title: 'Background Color',
      }),
      F.array({
        name: 'contentOptions',
        options: {
          list: [{title: 'Remove Gap', value: 'noGap'}],
        },
        of: [{type: 'string'}],
      }),
      F.array({
        name: 'linkDecorators',
        options: {
          list: [
            {title: 'Arrows', value: 'arrows'},
            {title: 'Checkmarks', value: 'checkmarks'},
            {title: 'Gray Color', value: 'gray'},
          ],
        },
        of: [{type: 'string'}],
      }),
    ]),
  ],
  preview: P.preview({
    content: 'content',
    media: 'media',
    prepare: ({content = [], media}) => {
      const {condition, image} = media
      const [heading, ...subtitle] = content

      return {
        title: heading ? P.richText([heading]) : 'Media With Text',
        subtitle: P.richText(subtitle),
        media: condition === 'image' ? image : videoIcon,
      }
    },
  }),
})
