import {F, G} from '@/schema/tool'
import {MdOutlinePlaylistAddCheck as icon} from 'react-icons/md'

export const howItWorks = F.object({
  icon,
  title: 'How It Works',
  name: 'howItWorks',
  groups: [G.define('content', {title: 'Content', default: true})],
  fields: [
    ...G.group('content', [
      F.string({
        name: 'heading',
        title: 'Heading',
        initialValue: 'How It Works',
      }),
      F.array({
        name: 'steps',
        title: 'Steps',
        of: [
          F.object({
            name: 'step',
            fields: [
              F.image({
                name: 'icon',
                title: 'Icon',
                description: 'Small icon for the step',
              }),
              F.string({
                name: 'title',
                title: 'Title',
                validation: (Rule) => Rule.required(),
              }),
              F.text({
                name: 'description',
                title: 'Description',
                rows: 2,
              }),
            ],
            preview: {
              select: {
                title: 'title',
                subtitle: 'description',
                media: 'icon',
              },
            },
          }),
        ],
        initialValue: [
          {
            title: 'Enter details',
            description: 'Add your name, job title, contact info, and social links.',
          },
          {
            title: 'Upload logo',
            description: 'Add your professional photo and company logo.',
          },
          {
            title: 'Choose template',
            description: 'Select from 3 professionally designed signature templates.',
          },
          {
            title: 'Copy HTML',
            description: 'Export your signature HTML with one click.',
          },
        ],
      }),
    ]),
  ],
  preview: {
    select: {
      heading: 'heading',
      steps: 'steps',
    },
    prepare({heading, steps}) {
      const stepsCount = steps?.length || 0
      return {
        title: heading || 'How It Works',
        subtitle: `${stepsCount} steps`,
        media: icon,
      }
    },
  },
})

