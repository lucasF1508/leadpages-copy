import {F, P, G} from '@/schema/tool'
import {BsCapslock as icon} from 'react-icons/bs'

export const inlineCTA = {
  icon,
  name: 'inlineCTA',
  title: 'Legacy Inline CTA',
  type: 'object',
  groups: [...G.fieldGroupComponentOptions(), G.define('links')],
  fields: [
    ...G.group('content', [
      F.message(
        '⚠️ This is a legacy blog CTA and is not global. Changes to this CTA will not be reflected anywhere else. Consider deleting this and adding a new global CTA instead.',
        {
          name: 'legacyWarning',
        }
      ),
      F.field('blockContentSimple', {
        name: 'content',
        validation: (Rule: any) => Rule.required(),
      }),
      F.image({
        name: 'image',
      }),
    ]),
    ...G.group('links', [
      F.link({
        name: 'ctaLink',
        hidden: ({parent}: any) => !parent?.legacyLink,
        args: {
          url: {initialValue: 'https://lp.leadpages.com/free-trial/'},
          label: {initialValue: 'Start a Free Trial'},
          condition: {initialValue: 'external'},
          popUpId: {initialValue: 'rMjFeuLYTU7X8rt2hg7tTm'},
          leadpagesDomain: {initialValue: 'lps.lpages.co'},
        },
      }),
      F.links({
        signUpOption: true,
        hidden: ({parent}: any) => parent?.legacyLink,
      }),
    ]),
    ...G.group('options', [
      F.boolean({
        name: 'contentRight',
        initialValue: true,
      }),
      F.boolean({
        name: 'imageBottom',
        title: 'Align Image at Bottom',
        initialValue: false,
      }),
      F.boolean({
        name: 'legacyLink',
        title: 'Use Legacy Link options',
        initialValue: false,
      }),
      F.string({
        name: 'imageWidth',
        initialValue: 'third',
        options: {
          list: [
            {title: '1/4', value: 'quarter'},
            {title: '1/3', value: 'third'},
            {title: '1/2', value: 'half'},
          ],
          layout: 'radio',
        },
      }),
      F.string({
        title: 'Background Color',
        name: 'bgColor',
        initialValue: 'grayAlt',
        validation: (Rule: any) => Rule.required(),
        options: {
          list: [
            {title: 'Light', value: 'grayAlt'},
            {title: 'Dark', value: 'primary'},
            {title: 'Alternate', value: 'secondary'},
            {title: 'Tan', value: 'tan'},
            {title: 'Lavender light', value: 'lavenderLight'},
            {title: 'Transparent', value: 'transparent'},
            {title: 'Text Highlight', value: 'textHighlight'},
            {title: 'Magnolia', value: 'magnolia'},
          ],
          layout: 'radio',
        },
      }),
    ]),
  ],
  preview: {
    select: {
      content: 'content',
      image: 'image',
      bgColor: 'bgColor',
    },
    prepare: ({content, image, bgColor}: any) => ({
      title: P.richText(content) || 'Legacy Inline CTA',
      subtitle: `Background: ${bgColor || 'N/A'} (Legacy)`,
      media: image || icon,
    }),
  },
}
