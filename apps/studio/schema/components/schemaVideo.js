import { MdOndemandVideo as icon } from 'react-icons/md'
import { F } from 'part:gearbox-schema-tool/schema-builder'

export const schemaVideo = F.object({
  icon,
  name: 'video',
  fields: [F.url()],
  preview: {
    select: { title: 'url' },
    prepare: ({ title }) => ({
      title: title || 'Video (empty)',
    }),
  },
})
