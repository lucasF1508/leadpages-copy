import { BsPlug as icon } from 'react-icons/bs'
import { F, FS, G, P } from 'part:gearbox-schema-tool/schema-builder'

export const schemaCategoryIntegrationStatus = {
  icon,
  name: 'categoryIntegrationStatus',
  title: 'Integration Status',
  type: 'document',
  groups: [...G.fieldGroupDefaults()],
  fieldsets: [FS.fieldset('meta')],
  fields: [...F.fieldDefaults(), ...G.group('content', [F.text()])],
  preview: P.titleImage({
    prepare: ({ title }) => ({ title, subtitle: 'Category' }),
  }),
}
