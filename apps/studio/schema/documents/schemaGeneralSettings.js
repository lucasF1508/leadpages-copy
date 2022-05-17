import { MdSettings as icon } from 'react-icons/md'
import { getTemplateTypes } from 'part:@gearbox-built/studio/config'
import { F } from 'part:gearbox-schema-tool/schema-builder'
import startCase from 'lodash/startCase'

const pageTemplates = getTemplateTypes().map((type) => ({
  title: startCase(type),
  value: type,
}))

export const schemaGeneralSettings = {
  icon,
  name: 'generalSettings',
  title: 'General Settings',
  type: 'document',
  fields: [
    F.array({
      name: 'pagination',
      of: [
        F.object({
          fields: [
            F.string({
              name: 'type',
              options: {
                list: pageTemplates,
                layout: 'dropdown',
              },
            }),
            F.number({ name: 'num' }),
          ],
        }),
      ],
      options: { layout: 'tags' },
    }),
    F.array({
      name: 'baseUrls',
      of: [
        F.object({
          fields: [
            F.string({
              name: 'type',
              options: {
                list: pageTemplates.map((type) => ({
                  title: startCase(type),
                  value: type,
                })),
                layout: 'dropdown',
              },
            }),
            F.string({ name: 'url' }),
          ],
        }),
      ],
      options: { layout: 'tags' },
    }),
  ],
}
