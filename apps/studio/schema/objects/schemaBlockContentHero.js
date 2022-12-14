import { F } from 'part:gearbox-schema-tool/schema-builder'
import {
  TitleStyle,
  NormalStyle,
  OverlineStyle,
} from './schemaBlockContentHeadline'

export const blockContentHero = F.array({
  title: 'Block Content Hero',
  name: 'blockContentHero',
  parseType: 'blockContent',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        {
          title: 'Normal',
          value: 'normal',
          blockEditor: { render: NormalStyle },
        },
        {
          title: 'Overline',
          value: 'headlineSupertitle',
          blockEditor: { render: OverlineStyle },
        },
        {
          title: 'Title',
          value: 'h1',
          blockEditor: {
            render: TitleStyle,
          },
        },
      ],
    },
  ],
})
