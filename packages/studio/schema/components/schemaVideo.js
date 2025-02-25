import {F} from '@/schema/tool'

export const video = F.object({
  name: 'video',
  fields: [
    F.radio(['files', 'embed'], {
      name: 'condition',
      title: 'Video Type',
      initialValue: 'files',
    }),
    F.array({
      name: 'files',
      hidden: ({parent}) => parent?.condition !== 'files',
      of: [
        F.url({
          name: 'url',
          title: 'URL',
        }),
      ],
    }),
    F.text({
      name: 'embed',
      hidden: ({parent}) => parent?.condition !== 'embed',
    }),
    F.image({name: 'fallbackImage'}),
  ].filter(Boolean),
})

export default video
