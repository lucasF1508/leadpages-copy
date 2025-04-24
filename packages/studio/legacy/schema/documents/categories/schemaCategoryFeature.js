import {BsPatchCheck as icon} from 'react-icons/bs'
import {F, FS, P, G} from '@/legacy/schema/tool'

export const schemaCategoryFeature = {
  icon,
  name: 'categoryFeature',
  title: 'Feature Category',
  type: 'document',
  groups: [...G.fieldGroupDefaults()],
  fields: [F.title({group: 'content'}), F.slug({group: 'meta'})],
  preview: P.titleImage({
    prepare: ({title}) => ({title, subtitle: 'Category'}),
  }),
}
