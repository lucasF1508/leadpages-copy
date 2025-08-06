import { styled } from '@design'
import { FiExternalLink as Icon } from '@react-icons/all-files/fi/FiExternalLink'
import {getFreeTrialCheckoutUrl} from '@/lib/utils/getFreeTrialCheckoutUrl'
import { getKindQueryParam, getTemplatePreviewUrl } from '@lib/utils/templates'
import Link from '@components/Link'

const $TemplateHeroLinks = styled('div', {
  display: 'flex',
  gap: '$1_5',
  flexDirection: 'column',

  '> a': {
    minWidth: 'unset',
    px: '$3',
    whiteSpace: 'nowrap',
  },

  '@>420': {
    flexDirection: 'row',
    ai: 'center',
  },
})

const TemplateHeroLinks = ({ kind, id, slug }) => {
  const url = [getFreeTrialCheckoutUrl('standardMonthly'), `lp_template_data=${getKindQueryParam(
    kind
  )}-${id}`].join('?')

  return (
    <$TemplateHeroLinks>
      <Link
        condition="internal"
        linkStyle="ghost"
        url={getTemplatePreviewUrl(kind, slug, id)}
      >
        Live Demo <Icon />
      </Link>
      <Link condition="external" linkStyle="button" url={url}>
        Use this Template
      </Link>
    </$TemplateHeroLinks>
  )
}

export default TemplateHeroLinks
