import {BsFlag as icon} from 'react-icons/bs'
import {F} from '@/schema/tool'

export const websiteBanner = {
  icon,
  name: 'websiteBanner',
  title: 'Website Banner',
  type: 'document',
  __experimental_actions: ['update', 'publish' /*'create', 'delete' */],
  fields: [
    F.boolean({
      name: 'enabled',
      title: 'Enable Banner',
      initialValue: false,
      description: 'Toggle to show or hide the website banner',
    }),
    F.string({
      name: 'text',
      title: 'Banner Text',
      description: 'The main text to display in the banner',
      validation: (Rule) => Rule.required(),
    }),
    F.links({
      name: 'link',
      title: 'Banner Link',
      description: 'Link that appears at the end of the banner text (e.g., "Check it out →")',
      validation: (Rule) => Rule.max(1).required(),
    }),
  ],
  preview: {
    select: {
      enabled: 'enabled',
      text: 'text',
    },
    prepare({enabled, text = ''}) {
      return {
        title: enabled ? 'Website Banner (Enabled)' : 'Website Banner (Disabled)',
        subtitle: text || 'No text set',
        media: icon,
      }
    },
  },
}

