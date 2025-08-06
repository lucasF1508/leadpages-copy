import { styled } from '@design'
import { FiExternalLink as Icon } from '@react-icons/all-files/fi/FiExternalLink'
import {getFreeTrialCheckoutUrl} from '@/lib/utils/getFreeTrialCheckoutUrl'
import { getTemplatePreviewUrl } from '@utils/templates'
import { getKindQueryParam } from '@lib/utils/templates'
import useMediaQuery from '@hooks/useMediaQuery'
import Link from '@components/Link'
import TemplateHeroBreadcrumbs from '@components/Template/TemplateHero/TemplateHeroBreadcrumbs'

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
  const url = [getFreeTrialCheckoutUrl('standardMonthly'), `lp_template_data=${getKindQueryParam(
      kind
    )}-${_id}`].join('?')
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
          condition="internal"
          linkStyle="ghost"
          url={getTemplatePreviewUrl(kind, slug, _id)}
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
