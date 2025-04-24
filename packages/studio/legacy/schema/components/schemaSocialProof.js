import {BsCapslock as icon} from 'react-icons/bs'
import {F, G, P} from '@/legacy/schema/tool'

export const schemaSocialProof = F.object({
  icon,
  name: 'socialProof',
  groups: [...G.fieldGroupComponentOptions(), G.define('media')],
  fields: [
    ...G.group('content', [
      F.string({name: 'overline'}),
      F.blockContent({name: 'content'}),
      F.links({
        signUpOption: true,
      }),
    ]),
    ...G.group('options', [
      F.field('backgroundColorFull', {
        name: 'bgColor',
        title: 'Background Color',
        initialValue: 'purple',
        description: null,
      }),
      F.field('rating'),
    ]),
    ...G.group('media', [
      F.media({
        name: 'image',
        args: {wistia: false, video: false},
        validation: (Rule) => Rule.required(),
      }),
      F.image({
        name: 'background',
        validation: (Rule) => Rule.required(),
      }),
    ]),
  ],
  preview: P.preview({
    content: 'content',
    media: 'media',
    prepare: ({content = [], media = {}}) => {
      const {image} = media
      const [heading, ...subTitle] = content

      return {
        title: heading ? P.richText([heading]) : 'Social Proof',
        subtitle: subTitle && P.richText([...subTitle]),
        media: image || icon,
      }
    },
  }),
})
