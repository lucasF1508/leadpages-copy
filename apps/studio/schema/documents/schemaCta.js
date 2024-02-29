import { BsCapslock as icon } from 'react-icons/bs'
import { F, P, G } from 'part:gearbox-schema-tool/schema-builder'

export const schemaCta = {
  icon,
  name: 'cta',
  title: 'CTA',
  type: 'document',
  groups: G.fieldGroupComponentOptions(),
  fields: [
    ...G.group('content', [
      F.string({ name: 'overline' }),
      F.string({ name: 'title' }),
      F.field('blockContentBare', { name: 'content' }),
      F.links({
        additionalFields: [F.field('signUp')],
        validation: (Rule) =>
          Rule.custom((field) =>
            field.some((link) => link._type === 'signUp') && field.length > 1
              ? 'When signup link is present, the CTA cannot contaain other links'
              : true
          ),
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
