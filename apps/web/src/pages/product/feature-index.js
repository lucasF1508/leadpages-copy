import React from 'react'
import { styled } from '@design'
import { query, runQueries } from '@lib/queries'
import { PageSidebar } from '@layouts/Page'
import FeatureGrid from '@components/FeatureGrid'
import Heading from '@components/Heading'
import { getSidebarSlug } from '@components/Sidebar/SidebarProvider'

const $FeaturesGrid = styled(FeatureGrid, {
  px: 0,
  mx: '-2%',
})

const FatureIndex = ({ _id, hero, title, categories, docs }) => {
  if (!_id) return null

  const sidebarLinks = [
    {
      title: 'Feature Index',
      links: categories?.map(({ title: heading }) => ({ heading })),
    },
  ]

  return (
    <PageSidebar hero={hero} sidebarLinks={sidebarLinks} title={title}>
      {categories?.map(({ _id: key, title: categoryTitle }) => {
        const slug = getSidebarSlug(categoryTitle)
        const items = docs?.filter(({ category }) => category?._id === key)

        return (
          <>
            <Heading id={slug} tag="h3">
              {categoryTitle}
            </Heading>
            <$FeaturesGrid
              items={items}
              itemsPerRow="3"
              backgroundColor="none"
              align="start"
            />
          </>
        )
      })}
    </PageSidebar>
  )
}

export const shapeData = ([data, categories, docs]) => [
  {
    ...data,
    categories,
    docs,
  },
]

export const exporter = (props) => shapeData(props)

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/feature-index'
    const docType = 'feature'

  const { data, global, queries } = await runQueries([
    query(
      `*[_type == "pageArchive" && archiveOf == "${docType}"][0]`,
      {
        preview,
      }
    ),
    query(
      `*[_type == "categoryFeature"] | order(lower(title) asc)`,
      {
        preview,
      }
    ),
    query(
      `*[_type == "${docType}"] | order(lower(title) asc) {
        ...,
        category->,
        status-> 
      }`,
      {
        preview,
      }
    ),
  ])

  return {
    props: {
      data: shapeData(data),
      global,
      queries,
      slug,
      preview,
      options: { hideBar: true, underlaidMenu: true },
    },
  }
}

export default FatureIndex
