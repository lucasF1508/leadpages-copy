import React, {useEffect, useState} from 'react'
import {BsNewspaper as icon} from 'react-icons/bs'
import {Card, Text, Stack, Heading, Box} from '@sanity/ui'

import {F, FS, P, G} from '@/legacy/schema/tool'

const shapePreviewData = (content) => {
  const sideBarData = content?.reduce((acc, {markDefs, children}) => {
    const isCustomSidebarLink = markDefs?.find(({_type}) => _type === 'sidebarLink')
    if (isCustomSidebarLink) {
      const child = children?.find(({marks}) => marks.includes(isCustomSidebarLink._key))
      const selectedText = child?.text

      return selectedText && selectedText.length > 0
        ? [...acc, {...isCustomSidebarLink, selectedText}]
        : acc
    }
    return acc
  }, [])

  return sideBarData
}

// eslint-disable-next-line react/display-name
const CustomSidebarLinksReference = React.forwardRef(({parent: doc}) => {
  const [sourceFieldPreview, setSourceFieldPreview] = useState([])

  useEffect(() => {
    const sourceValue = shapePreviewData(doc?.content)
    setSourceFieldPreview(sourceValue)
  }, [doc?.content])

  return (
    <Card shadow={1} padding={4}>
      <Stack space={[3, 3, 3, 3]}>
        <Box paddingBottom={3}>
          <Heading as="h4" size={2}>
            Current Custom Sidebar Links
          </Heading>
        </Box>
        {sourceFieldPreview?.map(({style, selectedText, text}, index) => (
          <div key={index}>
            <Text size={2}>
              {style !== 'h2' ? <span style={{whiteSpace: 'pre'}}>{`    • `}</span> : <>{`• `}</>}
              {selectedText}
              {text && <strong style={{fontWeight: 500}}>{` [${text}]`}</strong>}
            </Text>
          </div>
        ))}
      </Stack>
    </Card>
  )
})

export const schemaPost = {
  icon,
  name: 'post',
  title: 'Posts',
  type: 'document',
  orderings: [
    {
      title: 'Published',
      name: 'publishedDesc',
      by: [{field: 'publishedDate', direction: 'desc'}],
    },
  ],
  groups: [
    ...G.fieldGroupDefaults(),
    G.define('excerpt'),
    G.define('seo', {title: 'SEO'}),
    G.define('options'),
  ],
  fields: [
    ...F.fieldDefaultsCustom({
      parent: {hidden: true},
    }),
    ...G.group('content', [
      F.image(),
      F.blockContent(),
      F.boolean({
        name: 'useCustomSidebarLinks',
        initialValue: false,
      }),
      {
        name: 'customSidebarItems',
        title: 'Custom Sidebar Links',
        description: 'Listing sidebar links, added using inline marks in the content section.',
        type: 'boolean',
        inputComponent: CustomSidebarLinksReference,
        hidden: ({parent}) => !parent?.useCustomSidebarLinks,
      },
    ]),
    ...G.group('excerpt', [F.excerpt()]),
    ...G.group('meta', [
      F.field('structuredData'),
      F.datetime({
        name: 'modified',
        readOnly: true,
        hidden: ({parent}) => !parent?.modified,
        description: 'Temporary field for Studio V3 Migration, value removed in publish hook.',
      }),
      F.publishedDate(),
      F.category('publisher', {name: 'publisher', required: true}),
      F.category('categoryPost', {name: 'primaryCategory', required: true}),
      F.multiReference('post', {
        name: 'relatedArticles',
        validation: (Rule) => Rule.max(4),
      }),
      F.multiReference('categoryPost', {name: 'secondaryCategories'}),
      F.field('tags', {
        name: 'tags',
        options: {
          includeFromRelated: 'tags',
        },
      }),
    ]),
    ...G.group('seo', [F.seo()]),
    ...G.group('options', [
      F.boolean({
        name: 'blogSectionMainHero',
        title: 'Blog section main hero',
        description:
          'If enabled, this post drives the main title, image, and intro in the Blog Section. Prefer editing posts in the v3 studio to auto-clear other posts when enabling.',
        initialValue: false,
      }),
      F.boolean({
        name: 'redirectToLegacy',
        title: 'Proxy to legacy post',
        description: 'Enable to proxy to the legacy Leadpages post, if it exists.',
        initialValue: false,
      }),
    ]),
  ],
  preview: P.titleImage(),
}
