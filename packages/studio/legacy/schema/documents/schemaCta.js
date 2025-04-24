import {BsCapslock as icon} from 'react-icons/bs'
import {F, G, P} from '@/legacy/schema/tool'

export const schemaCta = {
  icon,
  name: 'cta',
  title: 'CTA',
  type: 'document',
  groups: G.fieldGroupComponentOptions(),
  fields: [
    ...G.group('content', [
      F.string({name: 'overline'}),
      F.string({name: 'title'}),
      F.field('blockContentBare', {name: 'content'}),
      F.links({
        signUpOption: true,
      }),
    ]),
    ...G.group('options', [
      F.field('backgroundColorFull', {
        name: 'bgColor',
        title: 'Background Color',
      }),
    ]),
  ],
  preview: P.titleImage({
    subtitle: 'links.0.label',
  }),
}
