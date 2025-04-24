import {MdSettings as icon} from 'react-icons/md'
import {F} from '@/schema/tool'

export const siteSettings = {
  icon,
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: ['update', 'publish' /*'create', 'delete' */],
  fields: [
    F.title(),
    F.text({name: 'description'}),
    F.array({
      name: 'keywords',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
    }),
    F.string({name: 'author'}),
  ],
}
