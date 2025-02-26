import {BsPeople as icon} from 'react-icons/bs'
import {F, FS, P, G} from '@/schema/tool'

export const schemaCareer = {
  icon,
  name: 'career',
  title: 'Career',
  type: 'document',
  groups: [...G.fieldGroupDefaults(), G.define('seo', {title: 'SEO'})],
  fields: [
    ...F.fieldDefaultsCustom(),
    ...G.group('content', [F.hero(), F.field('components', {})]),
    ...G.group('seo', [F.seo()]),
  ],
  preview: P.titleImage(),
}
