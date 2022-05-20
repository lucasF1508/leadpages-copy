import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import ToolkitCard from '../cards/ToolkitCard';
// icon images
import AlertBarsIconSVG from '../../assets/images/icons/toolkiticons/AlertBars.svg';
import CheckoutsIconSVG from '../../assets/images/icons/toolkiticons/Checkouts.svg';
import FeatureIndexIconSVG from '../../assets/images/icons/toolkiticons/FeatureIndex.svg';
import LandingPagesIconSVG from '../../assets/images/icons/toolkiticons/LandingPages.svg';
import LeadmeterIconSVG from '../../assets/images/icons/toolkiticons/Leadmeter.svg';
import PopupsIconSVG from '../../assets/images/icons/toolkiticons/Popup.svg';
import WebsitesIconSVG from '../../assets/images/icons/toolkiticons/Website.svg';

const SectionContainer = styled.div`
  background-color: #f7f7f7;
  position: relative;
  padding: 0rem 3rem;
  padding-bottom: 3rem;
  @media (min-width: 577px) {
    padding-right: 3rem;
    padding-left: 3rem;
  }
`;

const GridContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

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
];

const ToolkitCardsGrid = props => {
  const { hide } = props;
  return (
    <SectionContainer>
      <GridContainer>
        {toolkitProductsArray.map((item, index) => (
          <ToolkitCard key={index} hide={hide} {...item} />
        ))}
      </GridContainer>
    </SectionContainer>
  );
};

ToolkitCardsGrid.defaultProps = {
  hide: '',
};

ToolkitCardsGrid.propTypes = {
  hide: PropTypes.string,
};

export default ToolkitCardsGrid;
