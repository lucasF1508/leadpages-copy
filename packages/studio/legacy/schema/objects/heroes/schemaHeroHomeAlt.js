import {HiCursorClick as icon} from 'react-icons/hi'
import {F, G} from '@/legacy/schema/tool'

export const schemaHeroHomeAlt = F.hero({
  name: 'heroHomeAlt',
  title: 'Home Hero Alt Test',
  icon,
  args: {
    align: false,
    label: false,
    heading: false,
  },
  fields: [
    ...G.group('content', [
      F.links({
        signUpOption: true,
      }),
    ]),
    ...G.group('media', [
      F.object({
        name: 'backgroundImages',
        fields: [
          F.image({
            parseType: 'backgroundImage',
            name: 'right',
          }),
        ],
      }),
    ]),
    ...G.group('options', [
      F.radio(['default', 'small', 'medium', 'large'], {
        name: 'size',
        title: 'Hero Size',
        initialValue: 'default',
      }),
      F.object({
        name: 'backgroundOptions',
        fields: [
          F.field('backgroundColorFull', {
            name: 'backgroundColor',
          }),
          F.checkbox({name: 'displayBrowserContainer', initialValue: true}),
        ],
      }),
    ]),
  ],
})
