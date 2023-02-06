/* eslint-disable no-nested-ternary */
import { BsDownload as icon } from 'react-icons/bs'
import { F, FS, G } from 'part:gearbox-schema-tool/schema-builder'
import isEmpty from 'lodash/isEmpty'
import startCase from 'lodash/startCase'
import upperCase from 'lodash/upperCase'
import { getTemplateSchemas } from 'part:gearbox-utils/utils'
import SchemaFields from 'part:gearbox-input-components/schema-fields'

const feedDocTypeList = [
  ...getTemplateSchemas().map(({ name, title }) => ({
    title: `${title} (${name})`,
    value: name,
  })),
  {
    title: `Site Redirects (siteRedirects)`,
    value: 'siteRedirects',
  },
  {
    title: `Promo Codes (promoCodes)`,
    value: 'promoCodes',
  },
]

export const schemaFeed = {
  name: 'feed',
  title: 'Feeds',
  type: 'document',
  icon,
  fieldsets: [FS.fieldset('feed', { collapsible: false, collapsed: false })],
  fields: [
    F.string({ name: 'title' }),
    F.object({
      title: ' ',
      name: 'feedOptions',
      fields: [
        F.string({
          name: 'condition',
          title: 'Feed Type',
          options: {
            list: [
              {
                title: 'CSV',
                value: 'csv',
              },
              {
                title: 'JSON',
                value: 'json',
              },
              {
                title: 'RSS/MRSS',
                value: 'rss',
              },
            ],
            layout: 'radio',
            direction: 'horizontal',
          },
        }),
        F.string({
          name: 'feedDocType',
          options: {
            list: feedDocTypeList,
          },
          description: 'Defaults to `post`.',
        }),
        F.string({
          title: 'Method',
          name: 'jsonMethod',
          hidden: ({ parent }) => parent.condition !== 'json',
          options: {
            list: [
              {
                title: 'GET',
                value: 'get',
              },
              {
                title: 'POST',
                value: 'post',
              },
            ],
            initialValue: 'get',
            layout: 'radio',
            direction: 'horizontal',
          },
        }),
        F.field('file', {
          title: 'File',
          name: 'csvFile',
          options: {
            accept: '.csv',
          },
          hidden: ({ parent }) => parent.condition !== 'csv',
        }),
        F.array({
          title: 'Headers',
          name: 'jsonHeaders',
          hidden: ({ parent }) => parent.condition !== 'json',
          of: [
            F.object({
              options: {
                columns: 2,
              },
              fields: [
                F.string({
                  name: 'header',
                }),
                F.string({
                  name: 'value',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    F.url({
      name: 'url',
      title: 'Feed URL',
      hidden: ({ parent }) => parent.feedOptions.condition === 'csv',
    }),
    F.array({
      name: 'mapping',
      title: 'Field Mapping',
      description:
        'NOTE: `_id` MUST be mapped to a field to "unique" field operate.',
      of: [
        F.object({
          name: 'mappingConfig',
          title: 'Mapping',
          fields: [
            F.object({
              name: 'mapping',
              title: 'Mapping',
              options: {
                columns: 2,
              },
              fields: [
                F.string({
                  name: 'from',
                  title: 'Feed Field',
                }),
                F.string({
                  name: 'to',
                  title: 'Doc Field',
                  inputComponent: SchemaFields,
                }),
              ],
            }),
            F.object({
              title: ' ',
              name: 'processingOptions',
              fields: [
                F.string({
                  name: 'condition',
                  title: 'Processing Options',
                  initialValue: 'none',
                  options: {
                    list: [
                      {
                        title: 'None',
                        value: 'none',
                      },
                      {
                        title: 'CSV',
                        value: 'csv',
                      },
                      {
                        title: 'Date',
                        value: 'date',
                      },
                      {
                        title: 'Slugify',
                        value: 'slugify',
                      },
                      {
                        title: 'URL',
                        value: 'url',
                      },
                      {
                        title: 'Image',
                        value: 'image',
                      },
                      {
                        title: 'String Value',
                        value: 'stringValue',
                      },
                      {
                        title: 'Category',
                        value: 'category',
                      },
                      {
                        title: 'Tags',
                        value: 'tags',
                      },
                      {
                        title: 'Excerpt',
                        value: 'excerpt',
                      },
                      {
                        title: 'Author',
                        value: 'author',
                      },
                      {
                        title: 'SEO',
                        value: 'seo',
                      },
                    ],
                    layout: 'radio',
                    // direction: 'horizontal',
                  },
                }),
                F.string({
                  title: 'Image Type',
                  name: 'imageType',
                  hidden: ({ parent }) => parent.condition !== 'image',
                  options: {
                    list: [
                      {
                        title: 'media:content',
                        value: 'media:content',
                      },
                      {
                        title: 'HTML',
                        value: 'html',
                      },
                      {
                        title: 'Object',
                        value: 'object',
                      },
                    ],
                  },
                  initialValue: 'media:content',
                }),
                F.string({
                  title: 'Prepend',
                  name: 'slugifyPrepend',
                  hidden: ({ parent }) => parent.condition !== 'slugify',
                  description:
                    'Optional: string to prepend to the slugified value.',
                }),
              ],
            }),
            F.string({
              name: 'processingRegex',
              title: 'Processing Regex',
              description: 'eg. [^/]+$',
            }),
          ],
          preview: {
            select: {
              from: 'mapping.from',
              to: 'mapping.to',
              processing: 'processingOptions.condition',
              categoryMapping: 'processingOptions.categoryMapping',
              slugifyPrepend: 'processingOptions.slugifyPrepend',
              regex: 'processingRegex',
            },
            prepare: ({
              from,
              to = '',
              processing,
              regex,
              categoryMapping,
              slugifyPrepend,
            }) => {
              const [toStripped] = to.split('::')
              const prepend = slugifyPrepend ? `"${slugifyPrepend}" + ` : ''
              const processingString = categoryMapping
                ? ` (${startCase(categoryMapping)})`
                : processing && processing !== 'none'
                ? processing.length <= 3
                  ? ` (${upperCase(processing)})`
                  : ` (${startCase(processing)})`
                : ''
              const feedFieldString =
                processing == 'stringValue' ? `"${from}"` : from
              return {
                title: `${feedFieldString} → ${prepend}${toStripped}${processingString}${
                  regex ? `, RegExp: ${regex}` : ''
                }`,
              }
            },
          },
        }),
      ],
    }),
  ],
}

export default schemaFeed
