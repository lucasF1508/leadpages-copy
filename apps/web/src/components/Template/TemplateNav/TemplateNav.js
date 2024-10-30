import { styled } from '@design'
import TemplateHeroBreadcrumbs from '@components/Template/TemplateHero/TemplateHeroBreadcrumbs'
import useMediaQuery from '@hooks/useMediaQuery'
import Link from '@components/Link'
import { FiExternalLink as Icon } from '@react-icons/all-files/fi/FiExternalLink'
import { getTemplatePreviewUrl } from '@utils/templates'
import { getKindQueryParam } from '@lib/utils/templates'

const { LEADPAGES_REACTIVATION_HOST } = process.env

const $TemplateNav = styled('div', {
  px: '$2_5',
  d: 'flex',
  justifyContent: 'space-between',
})

const $TemplateNavInner = styled('div', {
  gap: '$1_5',
  d: 'flex',
  flexDirection: 'column',
  jc: 'center',
})

const $TemplateTitle = styled('h3', {
  fontSize: '1.125rem',
  fontFamily: '$base',
  lineHeight: '1.3',
})

const $TemplateHeroBreadcrumbs = styled('div', {
  display: 'none',

  '@>769': {
    display: 'block',
  },
})

const $TemplateNavLinks = styled('div', {
  display: 'flex',
  gap: '$1_5',
  ai: 'center',

  '> a': {
    minWidth: 'unset',
    px: '1.125rem',

    '@>1025': {
      px: '$3',
    },
  },
})

const TemplateNav = ({ title, kind, _id, slug }) => {
  const url = `${LEADPAGES_REACTIVATION_HOST}/order-leadpages/fvnp9stiiu14/t/d3yy2ARDnfEVTPU7/?lp_template_data=${getKindQueryParam(
    kind
  )}-${_id}`
  const isDesktopNav = useMediaQuery('(min-width: 960px)')

  return (
    <$TemplateNav>
      <$TemplateNavInner>
        <$TemplateHeroBreadcrumbs>
          <TemplateHeroBreadcrumbs />
        </$TemplateHeroBreadcrumbs>
        <$TemplateTitle>{title}</$TemplateTitle>
      </$TemplateNavInner>
      <$TemplateNavLinks>
        <Link
          url={getTemplatePreviewUrl(kind, slug, _id)}
          condition="internal"
          linkStyle="ghost"
        >
          {isDesktopNav && `Live `}Demo {isDesktopNav && <Icon />}
        </Link>
        <Link condition="internal" hasIcon={false} linkStyle="button" url={url}>
          Use{isDesktopNav && ` this Template`}
        </Link>
      </$TemplateNavLinks>
    </$TemplateNav>
  )
}

export default TemplateNav
