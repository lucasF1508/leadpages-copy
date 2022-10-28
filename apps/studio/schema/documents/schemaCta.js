import { BsCapslock as icon } from 'react-icons/bs'
import { F, P } from 'part:gearbox-schema-tool/schema-builder'

export const schemaCta = {
  icon,
  name: 'cta',
  title: 'CTA',
  type: 'document',
  fields: [
    F.string({ name: 'overline' }),
    F.string({ name: 'title' }),
    F.field('blockContentBare', { name: 'content' }),
    F.links(),
  ],
  preview: P.titleImage({
    subtitle: 'links.0.label',
  }),
}
