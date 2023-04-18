import { BsPatchCheck as icon } from 'react-icons/bs'
import { F, P } from 'part:gearbox-schema-tool/schema-builder'

export const schemaFeature = {
  icon,
  name: 'feature',
  title: 'Feature',
  type: 'document',
  fields: [
    F.string({ name: 'title' }),
    F.text({ name: 'content' }),
    F.image({ name: 'icon' }),
    F.reference('categoryFeature', { name: 'category' }),
  ],
  preview: P.titleImage({
    subtitle: 'category.title',
  }),
}
