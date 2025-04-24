import {BsPlug as icon} from 'react-icons/bs'
import {F, P, G} from '@/legacy/schema/tool'

export const schemaHeroIntegration = F.object({
  name: 'heroIntegration',
  title: 'Integration Hero (Legacy)',
  icon,
  groups: [
    G.define('content', {title: 'Content', default: true}),
    G.define('media', {title: 'Media'}),
    G.define('options', {title: 'Options'}),
  ],
  fields: [
    F.field('blockContentHero', {group: 'content', name: 'content'}),
    F.image({
      parseType: 'backgroundImage',
      group: 'media',
      name: 'backgroundImage',
    }),
    F.links({group: 'content', signUpOption: true}),
    F.media({
      conditions: {none: []},
      initialValue: {condition: 'none'},
      args: {caption: false},
      group: 'media',
    }),
    F.radio(['left', 'right'], {group: 'options', name: 'align'}),
  ],
  preview: P.preview({
    prepare: ({content = []}) => ({
      title: 'Integration Hero (Legacy)',
      subtitle: P.richText(content),
    }),
  }),
})
