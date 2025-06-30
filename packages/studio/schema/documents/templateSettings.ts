import {MdOutlineCategory as icon} from 'react-icons/md'
import {F, G} from '@/schema/tool'
import {
  content as templateContentGroup,
  details as templateDetailsGroup,
  templateGroups,
  included as templateIncludedGroup,
  reviews as templateReviewsGroup,
} from '@/schema/documents/groups/template'


export const templateSettings = {
  name: 'templateSettings',
  type: 'document',
  icon,
  groups: templateGroups,
  fields: [
    ...G.group('content', [F.field('templateSettingsMessage', {name: 'contentMessage'})]),
    ...templateContentGroup,
    ...G.group('details', [F.field('templateSettingsMessage', {name: 'detailsMessage'})]),
    ...templateDetailsGroup,
    ...G.group('included', [F.field('templateSettingsMessage', {name: 'includedMessage'})]),
    ...templateIncludedGroup,
    ...G.group('reviews', [F.field('templateSettingsMessage', {name: 'reviewsMessage'})]),
    ...templateReviewsGroup,
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'templateType',
    },
    prepare({title, subtitle}) {
      return {
        title,
        subtitle: subtitle === 'landingPage' ? 'Landing Page' : 'Website',
      }
    },
  },
}
