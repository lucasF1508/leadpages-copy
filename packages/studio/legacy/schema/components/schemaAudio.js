import {BsMusicNoteBeamed as icon} from 'react-icons/bs'
import {F, P} from '@/legacy/schema/tool'

export const schemaAudio = F.object({
  icon,
  name: 'audio',
  fields: [F.url({name: 'src', title: 'Audio File URL'})],
  preview: P.titleImage({title: 'src'}),
})
