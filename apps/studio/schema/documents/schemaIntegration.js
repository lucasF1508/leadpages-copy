// import { BsDiagram3 as icon } from 'react-icons/bs'
// import { BsPlug as icon } from 'react-icons/bs'
import { BsPuzzle as icon } from 'react-icons/bs'
import { F, FS, G, P } from 'part:gearbox-schema-tool/schema-builder'

export const schemaIntegration = {
  icon,
  name: 'integration',
  title: 'Integration',
  type: 'document',
  groups: [...G.fieldGroupDefaults(), G.fieldGroup('seo', { title: 'SEO' })],
  fieldsets: [FS.seo(), FS.fieldset('meta', { collapsed: false })],
  fields: [
    ...F.fieldDefaults(),
    ...G.group('content', [F.field('hero'), F.field('components', {})]),
    ...G.group('seo', [F.seo()]),
  ],
  preview: P.titleImage(),
}
