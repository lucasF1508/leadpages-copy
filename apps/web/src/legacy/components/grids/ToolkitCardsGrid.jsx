import React from 'react'
import { styled } from '@design'
import PropTypes from 'prop-types'
// components
import ToolkitCard from '@legacy/components/cards/ToolkitCard'
// icon images
import AlertBarsIconSVG from '@legacy/assets/images/icons/toolkiticons/AlertBars.svg'
import CheckoutsIconSVG from '@legacy/assets/images/icons/toolkiticons/Checkouts.svg'
import FeatureIndexIconSVG from '@legacy/assets/images/icons/toolkiticons/FeatureIndex.svg'
import LandingPagesIconSVG from '@legacy/assets/images/icons/toolkiticons/LandingPages.svg'
import LeadmeterIconSVG from '@legacy/assets/images/icons/toolkiticons/Leadmeter.svg'
import PopupsIconSVG from '@legacy/assets/images/icons/toolkiticons/Popup.svg'
import WebsitesIconSVG from '@legacy/assets/images/icons/toolkiticons/Website.svg'

const SectionContainer = styled('div', {
  backgroundColor: '$grayAlt',
  position: 'relative',
  padding: '0rem 3rem',
  paddingBottom: '3rem',

  '@media (min-width: 577px)': {
    paddingRight: '3rem',
    paddingLeft: '3rem',
  },
})

const GridContainer = styled('div', {
  display: 'flex',
  marginBottom: '1rem',
  flexWrap: 'wrap',
  justifyContent: 'center',
})

const toolkitProductsArray = [
  {
    productId: 'websites',
    title: 'Websites',
    iconSVG: WebsitesIconSVG,
    alt: 'Leadpages websites',
    linkRoute: '/product/website-builder',
  },
  {
    productId: 'landingpages',
    title: 'Landing Pages',
    iconSVG: LandingPagesIconSVG,
    alt: 'Leadpages landing pages',
    linkRoute: '/product/landing-page-builder',
  },
  {
    productId: 'popups',
    title: 'Pop-ups',
    iconSVG: PopupsIconSVG,
    alt: 'Leadpages pop-ups',
    linkRoute: '/product/pop-up-builder',
  },
  {
    productId: 'alertbars',
    title: 'Alert Bars',
    iconSVG: AlertBarsIconSVG,
    alt: 'Leadpages alert bars',
    linkRoute: '/product/alert-bars',
  },
  {
    productId: 'checkouts',
    title: 'Checkouts',
    iconSVG: CheckoutsIconSVG,
    alt: 'Leadpages checkouts',
    linkRoute: '/product/checkouts',
  },
  {
    productId: 'leadmeter',
    title: 'Leadmeter',
    iconSVG: LeadmeterIconSVG,
    alt: 'Leadpages leadmeter',
    linkRoute: '/product/leadmeter',
  },
  {
    productId: 'featureindex',
    title: 'Feature Index',
    iconSVG: FeatureIndexIconSVG,
    alt: 'Leadpages feature index',
    linkRoute: '/product/feature-index',
  },
]

const ToolkitCardsGrid = ({ hide }) => (
  <SectionContainer>
    <GridContainer>
      {toolkitProductsArray.map((item, index) => (
        <ToolkitCard key={index} hide={hide} {...item} />
      ))}
    </GridContainer>
  </SectionContainer>
)

ToolkitCardsGrid.defaultProps = {
  hide: '',
}

ToolkitCardsGrid.propTypes = {
  hide: PropTypes.string,
}

export default ToolkitCardsGrid
