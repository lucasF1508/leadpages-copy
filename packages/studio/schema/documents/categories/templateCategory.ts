import {MdOutlineCategory as icon} from 'react-icons/md'
import {F, G} from '@/schema/tool'

export const categoryTemplate = {
  name: 'templateCategory',
  title: 'Template Category',
  type: 'document',
  icon,
  groups: [...G.fieldGroupDefaults(), G.define('seo', {title: 'SEO'})],
  fields: [
    ...G.group('content', [
      F.title({required: true}),
      F.object({
        name: 'hero',
        fields: [
          F.string({name: 'label'}),
          F.field('blockContentHero', {name: 'heading'}),
          F.text({name: 'content'}),
        ],
      }),
    ]),
    ...G.group('seo', [F.seo()]),
    ...G.group('meta', [
      F.slug({required: true}),
      F.string({
        name: 'templateType',
        options: {
          layout: 'radio',
          direction: 'horizontal',
          list: [
            {title: 'Landing Page Template', value: 'landingPage'},
            {title: 'Website Template', value: 'website'},
          ],
        },
        initialValue: 'landingPage',
        validation: (Rule) => Rule.required(),
      }),
      F.datetime({
        name: 'modified',
        readOnly: true,
        hidden: ({parent}) => !parent?.modified,
        description: 'Temporary field for Studio V3 Migration, value removed in publish hook.',
      }),
    ]),
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
