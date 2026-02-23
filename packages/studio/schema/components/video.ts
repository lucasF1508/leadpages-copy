import {MdOndemandVideo as icon} from 'react-icons/md'
import {F} from '@/schema/tool'

const SANITY_STUDIO_VIMEO_TOKEN = import.meta.env.SANITY_STUDIO_VIMEO_TOKEN

export const video = SANITY_STUDIO_VIMEO_TOKEN
  ? F.field('vimeoVideo', {name: 'video'})
  : F.object({
      icon,
      name: 'video',
      fields: [
        {
          name: 'file',
          title: 'Video File',
          type: 'file',
          description: 'Upload a video file (mp4, webm, mov, etc.)',
          options: {accept: 'video/*'},
        },
      ],
      preview: {
        select: {title: 'file.asset.originalFilename'},
        prepare: ({title}: any) => ({
          title: title || 'Video (empty)',
          media: icon,
        }),
      },
    })
