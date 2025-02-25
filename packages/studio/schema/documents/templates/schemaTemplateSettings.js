import {MdOutlineCategory as icon} from 'react-icons/md'
import {F, G} from '@/schema/tool'
import {
  schemaTemplateGroups,
  templateContentGroup,
  templateDetailsGroup,
  templateIncludedGroup,
  templateReviewsGroup,
} from '../../groups/template'

export const schemaTemplateSettings = {
  name: 'templateSettings',
  type: 'document',
  icon,
  groups: schemaTemplateGroups,
  fields: [
    ...G.group('content', [F.field('templateSettingsMessage', {name: 'contentMessage'})]),
    ...templateContentGroup,
    ...G.group('content', [
      F.reference('cta', {
        name: 'cta',
        title: 'Call to Action',
        description: 'Leave blank to omit page call to action.',
      }),
    ]),
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
