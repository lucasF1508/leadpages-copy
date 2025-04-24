import {BsShare as icon} from 'react-icons/bs'
import {F, FS, P, G} from '@/legacy/schema/tool'

export const schemaPress = {
  icon,
  name: 'press',
  title: 'Press',
  type: 'document',
  groups: [...G.fieldGroupDefaults(), G.define('seo', {title: 'SEO'})],
  fields: [
    ...F.fieldDefaultsCustom(),
    ...G.group('content', [F.hero(), F.field('components', {})]),
    ...G.group('seo', [F.seo()]),
  ],
  preview: P.titleImage(),
}
