import React from 'react';
import PropTypes from 'prop-types';
// Components
import IntegrationBenefits from './IntegrationBenefits';
import IntegrationsPromoSection from './IntegrationsPromoSection';
import IntegrationsSubpageHeader from '../headers/IntegrationsSubpageHeader';
import ReadyToGrow from '../product/ReadyToGrow';
import SingleTestimonialQuoteRow from '../testimonials/SingleTestimonialQuoteRow';
import TwoColumnIntegrationInfo from './TwoColumnIntegrationInfo';

import { GATSBY_IMAGE } from '../../constants/types';

const IntegrationsSubpage = ({
  heroData,
  buttonText,
  twoColumnInfo,
  testimonial,
  integrationInfo,
  promoInfo,
}) => {
  return (
    <>
      <IntegrationsSubpageHeader data={heroData} />
      {promoInfo && (
        <IntegrationsPromoSection
          image={promoInfo.image}
          imageAlt={promoInfo.imageAlt}
          headline={promoInfo.headline}
          description={promoInfo.description}
          checklist={promoInfo.checklist}
          buttonText={promoInfo.buttonText}
          link={promoInfo.link}
          linkAlt={promoInfo.linkAlt}
        />
      )}
      <TwoColumnIntegrationInfo
        headline={twoColumnInfo.headline}
        description={twoColumnInfo.description}
        image={twoColumnInfo.image}
        imageAlt={twoColumnInfo.imageAlt}
        checkboxInfo={twoColumnInfo.checkboxInfo}
      />
      <IntegrationBenefits integrationInfo={integrationInfo} />
      <SingleTestimonialQuoteRow
        image={testimonial.image}
        quote={testimonial.quote}
        clientName={testimonial.clientName}
        clientTitle={testimonial.clientTitle}
      />
      <ReadyToGrow
        headline="Ready to connect your tools and convert?"
        caption="Streamline your marketing and get started with a free 14-day trial of Leadpages."
        showDemoVideo
        buttonText={buttonText}
        paddingScale={0.5}
      />
    </>
  );
};

IntegrationsSubpage.defaultProps = {};

IntegrationsSubpage.propTypes = {
  heroData: PropTypes.shape({
    headlineText: PropTypes.string.isRequired,
    tooltipText: PropTypes.string.isRequired,
    tooltipTitle: PropTypes.string.isRequired,
    descriptionText: PropTypes.string.isRequired,
    heroImage: GATSBY_IMAGE.isRequired,
  }).isRequired,
  twoColumnInfo: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: GATSBY_IMAGE.isRequired,
    checkboxInfo: PropTypes.string,
  }).isRequired,
  testimonial: PropTypes.shape({
    image: GATSBY_IMAGE.isRequired,
    quote: PropTypes.string.isRequired,
    clientName: PropTypes.string.isRequired,
    clientTitle: PropTypes.string.isRequired,
  }).isRequired,
  integrationInfo: PropTypes.arrayOf(
    PropTypes.shape({
      image: GATSBY_IMAGE,
      headline: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      additionalStyle: PropTypes.shape({ maxWidth: PropTypes.string }),
    }),
  ).isRequired,
  promoInfo: PropTypes.shape({
    image: GATSBY_IMAGE,
    imageAlt: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    checklist: PropTypes.arrayOf(PropTypes.string),
    buttonText: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    linkAlt: PropTypes.string.isRequired,
  }).isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default IntegrationsSubpage;
