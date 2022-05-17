import { FaWpforms as icon } from 'react-icons/fa'
import { F, FS, P } from 'part:gearbox-schema-tool/schema-builder'

export const schemaForm = {
  icon,
  name: 'form',
  title: 'Forms',
  type: 'document',
  fieldsets: [FS.fieldset('meta', { collapsed: true })],
  fields: [
    F.string({ name: 'name' }),
    ...FS.fieldsetGroup('meta', [F.slug()]),
    F.field('formFields', {
      name: 'fields',
      title: 'Fields',
    }),
    F.text({
      name: 'confirmation',
      title: 'Confirmation',
    }),
  ],
}
