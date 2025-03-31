import {F} from '@/schema/tool'
import { links } from './links'

const resourceCards = F.object({
  name: 'resourceCards',
  fields: [
    F.string({name: 'heading'}),
    F.string({name: 'title'}),
    links,
    F.array({
      name: 'cards',
      title: 'Resource Cards',
      of: [
        F.object({ name: 'card', fields: [
          F.string({name: 'heading'}),
          F.string({name: 'title'}),
          F.boolean({name: 'fullWidth', initialValue: false}),
          F.link({
            args: {
              linkStyle: false,
              label: false,
              hasHash: false,
              linkSize: false,
            },
          }),
          F.image({
            hidden: ({parent}) => !parent.fullWidth,
          }),
        ]}),
      ]
    }),
  ],
})

export default resourceCards