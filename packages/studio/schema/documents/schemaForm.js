import {FaWpforms as icon} from 'react-icons/fa'
import {F, FS, P} from '@/schema/tool'

export const schemaForm = {
  icon,
  name: 'form',
  title: 'Forms',
  type: 'document',
  fields: [
    F.string({name: 'name'}),
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
