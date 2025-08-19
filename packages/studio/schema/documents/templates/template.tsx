import {PiSidebar as icon} from 'react-icons/pi'
import {F, G} from '@/schema/tool'
import {
  content,
  details,
  included,
  meta,
  templateGroups,
  reviews,
} from '@/schema/documents/groups/template'

export const template = {
  icon,
  name: 'template',
  type: 'document',
  groups: templateGroups,
  fields: [...content, ...meta, ...details, ...included, ...reviews, ...G.group('seo', [F.seo()])],
  preview: {
    select: {
      image: 'thumbnailUrlWebp',
      title: 'title',
    },
    prepare: ({image, title}: {image: string; title: string}) => ({
      title,
      media: image ? (
        <img src={image} style={{objectFit: 'cover', width: '100%', height: '100%'}} />
      ) : (
        icon
      ),
    }),
  },
}
