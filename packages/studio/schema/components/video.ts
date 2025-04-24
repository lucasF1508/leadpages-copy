import {MdOndemandVideo as icon} from 'react-icons/md'
import {F} from '@/schema/tool'

const SANITY_STUDIO_VIMEO_TOKEN = import.meta.env.SANITY_STUDIO_VIMEO_TOKEN

export const video = SANITY_STUDIO_VIMEO_TOKEN
  ? F.field('vimeoVideo', {name: 'video'})
  : F.object({
      icon,
      name: 'video',
      fields: [F.url()],
      preview: {
        select: {title: 'url'},
        prepare: ({title}) => ({
          title: title || 'Video (empty)',
          media: icon,
        }),
      },
    })
