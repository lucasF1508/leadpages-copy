import { styled } from '@design'
import { useRouter } from 'next/router'
import Link from '@components/Link'
import capitalize from 'lodash/capitalize'
import { getKindSlug } from '@lib/utils/templates'

const $TemplateBreadcrumbs = styled('nav', {})

const $TemplateBreadcrumbsInner = styled('ul', {
  d: 'flex',
  listStyle: 'none',
  rowGap: '$0_5',
  columnGap: '$1',
  color: '$textAlt',
  textTransform: 'uppercase',
  fontSize: '$space$1_5',
  letterSpacing: '$xl',
  lineHeight: '1.4',
  flexWrap: 'wrap',
})

const $TemplateBreadcrumb = styled('li', {})

const TemplateBreadcrumbs = ({ categories, kind }) => {
  const { route } = useRouter()
  const base = route.split('/')[1]
  const leading = route.includes('/website-templates')
    ? 'Website Templates'
    : 'Landing Page Templates'

  const breadcrumbsCategory = categories?.[0]?.label

  return (
    <$TemplateBreadcrumbs>
      <$TemplateBreadcrumbsInner>
        <$TemplateBreadcrumb>
          <Link url={`/${base}`} linkStyle="none" condition="internal">
            {leading} /
          </Link>
        </$TemplateBreadcrumb>
        {breadcrumbsCategory && (
          <Link
            url={`/${getKindSlug(kind)}/category/${breadcrumbsCategory}`}
            linkStyle="none"
            condition="internal"
          >
            <$TemplateBreadcrumb>
              {capitalize(breadcrumbsCategory)} /
            </$TemplateBreadcrumb>
          </Link>
        )}
      </$TemplateBreadcrumbsInner>
    </$TemplateBreadcrumbs>
  )
}

export default TemplateBreadcrumbs
