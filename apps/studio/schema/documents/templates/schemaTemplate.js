import { AiOutlineFileText as icon } from 'react-icons/ai'
import { F, FS, G, P } from 'part:gearbox-schema-tool/schema-builder'
import {
  schemaTemplateGroups,
  templateContentGroup,
  templateDetailsGroup,
  templateIncludedGroup,
  templateReviewsGroup,
} from '../../groups/template'
import { IdField } from '../../../parts/inputComponents/IdField'
import { TitleField } from '../../../parts/inputComponents/TitleField'

export const schemaTemplate = {
  icon,
  name: 'template',
  type: 'document',
  groups: schemaTemplateGroups,
  fieldsets: [FS.seo(), FS.fieldset('meta', { collapsed: false })],
  fields: [
    ...F.fieldDefaults({
      slug: {
        validation: (Rule) => Rule.required(),
        readOnly: true,
      },
      title: {
        title: 'Template Name',
        validation: (Rule) => Rule.required(),
        readOnly: true,
      },
      parent: { hidden: true },
      path: { hidden: true },
      htmlFooter: { hidden: true },
    }),
    ...G.group('content', [
      F.field('string', {
        name: 'id',
        inputComponent: IdField,
      }),
      F.string({
        name: 'heading',
        inputComponent: TitleField,
      }),
    ]),
    ...templateContentGroup,
    ...G.group('content', [
      F.reference('cta', {
        name: 'cta',
        title: 'Call to Action',
        description: 'Leave blank to omit page call to action.',
      }),
    ]),
    ...templateDetailsGroup,
    ...templateIncludedGroup,
    ...templateReviewsGroup,
    ...G.group('meta', [
      F.string({ name: 'kind', readOnly: true }),
      F.datetime({ name: 'lastMandrelUpdate', readOnly: true }),
      F.datetime({ name: 'originalCreatedAt', readOnly: true }),
      F.datetime({ name: 'releaseDate', readOnly: true }),
      F.boolean({ name: 'enabled', readOnly: true }),
      F.number({ name: 'thumbnailAspect', readOnly: true }),
      F.string({ name: 'thumbnailUrlWebp', readOnly: true }),
      F.string({ name: 'thumbnailUrl', readOnly: true }),
      F.string({ name: 'previewUrl', readOnly: true }),
      F.string({
        name: 'fullPageScreenshotUrlWebp',
        readOnly: true,
      }),
      F.number({
        name: 'fullPageScreenshotUrlWebpAspectRatio',
        readOnly: true,
      }),
      F.field('tags', {
        name: 'tags',
        readOnly: true,
        options: {
          includeFromRelated: 'tags',
        },
      }),
      F.field('tags', {
        name: 'categories',
        readOnly: true,
        options: {
          includeFromRelated: 'categories',
        },
      }),
    ]),
    ...G.group('seo', [F.seo()]),
  ],
  preview: P.titleImage({
    subtitle: 'parent.title',
    prepare: ({ title, subtitle, media }) => ({
      title,
      subtitle,
      media: media || icon,
    }),
  }),
}
