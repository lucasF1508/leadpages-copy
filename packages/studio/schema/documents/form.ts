import {FaWpforms as icon} from 'react-icons/fa'
import {F, FS} from '@/schema/tool'

export const form = {
  icon,
  name: 'form',
  title: 'Forms',
  type: 'document',
  fieldsets: [FS.define('meta', {collapsed: true})],
  fields: [
    F.string({name: 'name'}),
    ...FS.fieldset('meta', [F.slug()]),
    F.field('formFields', {
      name: 'fields',
      title: 'Fields',
    }),
    F.string({
      name: 'notificationEmail',
      title: 'Notification Email',
    }),
    F.text({
      name: 'confirmation',
      title: 'Confirmation',
    }),
  ],
}
