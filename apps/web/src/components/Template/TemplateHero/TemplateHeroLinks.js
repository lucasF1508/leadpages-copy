import { styled } from '@design'
import { FiExternalLink as Icon } from '@react-icons/all-files/fi/FiExternalLink'
import Link from '@components/Link'
import { getTemplatePreviewUrl, getKindQueryParam } from '@lib/utils/templates'

const { LEADPAGES_REACTIVATION_HOST } = process.env

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
  const url = `${LEADPAGES_REACTIVATION_HOST}/order-leadpages/fvnp9stiiu14/t/d3yy2ARDnfEVTPU7/?lp_template_data=${getKindQueryParam(
    kind
  )}-${id}`

  return (
    <$TemplateHeroLinks>
      <Link
        url={getTemplatePreviewUrl(kind, slug, id)}
        condition="internal"
        linkStyle="ghost"
      >
        Live Demo <Icon />
      </Link>
      <Link url={url} condition="external" linkStyle="button">
        Use this Template
      </Link>
    </$TemplateHeroLinks>
  )
}

export default TemplateHeroLinks
