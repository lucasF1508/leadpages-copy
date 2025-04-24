import capitalize from 'lodash/capitalize'
import {AiOutlineShareAlt as icon} from 'react-icons/ai'
import {F} from '@/schema/tool'

export const socialLinks = F.object({
  name: 'socialLinks',
  fields: [F.field('social')],
  icon,
  preview: {
    select: {
      social: 'social',
    },
    prepare: ({social = []}) => {
      const title = social
        .map(({url = ''} = {}) => {
          const [, domainName] =
            url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im) || []
          return capitalize(domainName.split('.').shift())
        })
        .join(', ')

      return {
        title,
        media: icon,
      }
    },
  },
})
