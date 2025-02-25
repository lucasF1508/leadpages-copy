import {BsLightning as icon} from 'react-icons/bs'
import {F} from '@/schema/tool'

export const schemaMockdata = {
  icon,
  name: 'mockData',
  title: 'Mock Data',
  type: 'document',
  fields: [
    F.slug({
      hidden: true,
      readOnly: true,
      initialValue: {
        current: 'mockdata',
      },
    }),
    F.string({
      name: 'heading',
      initialValue: 'Heading: Welcome to the Heading',
    }),
    F.blockContent({
      initialValue: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              marks: [],
              text: 'Content: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
    }),
    F.excerpt({
      initialValue:
        'Excerpt: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    }),
    F.image(),
    F.array({
      name: 'images',
      of: [F.image()],
      options: {
        layout: 'grid',
      },
    }),
    F.field('components'),
  ],
}
