import React from 'react'
import PropTypes from 'prop-types'
// Components
import Image from '@components/Image'
import IntegrationsSubpageHeader from '@legacy/components/headers/IntegrationsSubpageHeader'
import ReadyToGrow from '@legacy/components/product/ReadyToGrow'
import SingleTestimonialQuoteRow from '@legacy/components/testimonials/SingleTestimonialQuoteRow'
import TwoColumnIntegrationInfo from './TwoColumnIntegrationInfo'
import IntegrationsPromoSection from './IntegrationsPromoSection'
import IntegrationBenefits from './IntegrationBenefits'

const IntegrationsSubpage = ({
  heroData,
  buttonText,
  twoColumnInfo,
  testimonial,
  integrationInfo,
  promoInfo,
}) => (
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
)

IntegrationsSubpage.defaultProps = {}

IntegrationsSubpage.propTypes = {
  heroData: PropTypes.shape({
    headlineText: PropTypes.string.isRequired,
    tooltipText: PropTypes.string.isRequired,
    tooltipTitle: PropTypes.string.isRequired,
    descriptionText: PropTypes.string.isRequired,
    heroImage: Image.isRequired,
  }).isRequired,
  twoColumnInfo: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: Image.isRequired,
    checkboxInfo: PropTypes.string,
  }).isRequired,
  testimonial: PropTypes.shape({
    image: Image.isRequired,
    quote: PropTypes.string.isRequired,
    clientName: PropTypes.string.isRequired,
    clientTitle: PropTypes.string.isRequired,
  }).isRequired,
  integrationInfo: PropTypes.arrayOf(
    PropTypes.shape({
      image: Image,
      headline: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      additionalStyle: PropTypes.shape({ maxWidth: PropTypes.string }),
    })
  ).isRequired,
  promoInfo: PropTypes.shape({
    image: Image.isRequired,
    imageAlt: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    checklist: PropTypes.arrayOf(PropTypes.string),
    buttonText: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    linkAlt: PropTypes.string.isRequired,
  }).isRequired,
  buttonText: PropTypes.string.isRequired,
}

export default IntegrationsSubpage
