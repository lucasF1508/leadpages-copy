import * as F from '../../fields'
import getConditions from '../../utils/getConditions'

const vimeoToken = process.env.SANITY_STUDIO_VIMEO_TOKEN

export const video = (args = {}) => {
  const vimeo = vimeoToken ? { vimeo: [] } : {}
  const [conditions, conditionValues] = getConditions({
    files: [],
    embed: [],
    ...vimeo,
  })

  return F.object({
    name: 'video',
    ...args,
    fields: [
      F.radio(conditions, {
        name: 'condition',
        title: 'Video Type',
        initialValue: 'files',
      }),
      F.field('vimeo.videoAsset', {
        name: 'vimeo',
        hidden: ({ parent }) => parent.condition !== 'vimeo',
      }),
      F.array({
        name: 'files',
        hidden: ({ parent }) => parent.condition !== 'files',
        of: [
          F.url({
            name: 'url',
            title: 'URL',
          }),
        ],
      }),
      F.text({
        name: 'embed',
        hidden: ({ parent }) => parent.condition !== 'embed',
      }),
      F.image({ name: 'fallbackImage' }),
      ...conditionValues.flat(),
    ].filter(Boolean),
  })
}

export default video
