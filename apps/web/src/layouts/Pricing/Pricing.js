import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
// Components
import {
  FLOWS,
  PLAN_PERIODS,
  checkPlanBundleEligibility,
  PlanCompareTable,
} from '@lp/lib-upgrade-modal'
import Accordion from '../../legacy/components/accordions/Accordion'
import Link from '@components/Link'
import FeatureIconsGrid from '../../legacy/components/grids/FeatureIconsGrid'
import SpacerRow from '../../legacy/components/SpacerRow'
import QuoteTestimonialsRotator from '../../legacy/components/rotators/QuoteTestimonialsRotator'
import HeadlineSection from '../../legacy/components/layout/HeadlineSection'
import SingleTestimonialWavesRow from '../../legacy/components/testimonials/SingleTestimonialWavesRow'
import ReadyToGrow from '../../legacy/components/product/ReadyToGrow'
// Data
import { pricingFaqData } from '../../legacy/data/faq_data'
import {
  testimonialsData,
  planFeaturesData,
} from '../../legacy/data/pricing_data'
import { HEADER_HEIGHT, PRICING_LOAD_TIMEOUT } from '../../legacy/constants'
// Images
import backgroundImageSVG from '../../legacy/assets/images/shapes/wavy-line-gray_pricing.svg'
import testimonialImageRonCollins from '../../legacy/assets/images/testimonials/ron-collins_far.png'
// Utils
import { getLocalCoupon } from '../../legacy/utils/coupons'

const Rack = dynamic(() => import('@components/Rack'))

const HeadlineContainer = styled.div`
  position: relative;
  background: #fff;
  margin-top: -60px;
  padding-top: 60px;
  overflow: hidden;
  z-index: -1;
`

const HeadlineCaption = styled(HeadlineSection)`
  padding-top: 3rem;
  & [class*='HeadlineSection__Caption'] {
    padding-bottom: 50px;
  }
`

const SectionLink = styled.div`
  font-family: Apercu Pro;
  font-size: 18px;
  line-height: 32px;
  text-align: center;
  color: #575452;
  margin-bottom: 4rem;
  padding-top: 3rem;
`

const SVGContainer = styled.img`
  position: absolute;
  top: -60vh;
  bottom: 0;
  left: 0;
  right: 5%;
  height: 120vh;
  margin-left: auto;
  z-index: -2;
  @media (min-width: 768px) {
    right: -15%;
  }
  @media (min-width: 992px) {
    right: 5%;
  }
  @media (min-width: 1300px) {
    right: 10%;
  }
  @media (max-width: 767px) {
    display: none;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #603eff;
  padding-bottom: 3px;
  border-bottom: 2px solid rgb(209, 198, 249);
  &:hover {
    border-bottom: 2px solid #603eff;
  }
`

const PlanCompareWrapper = styled.div`
  background-color: #f9f9f9;
  padding-top: 16px;
`

const AccordionSection = styled.div`
  margin-bottom: 6rem;
  @media (max-width: 576px) {
    padding-right: 3rem;
    padding-left: 3rem;
  }
`

const handleSelectPlan = (planId, planLevel, period) => {
  const routerBundleData = checkPlanBundleEligibility(
    { planLevel, period },
    bundleData
  )
    ? bundleData
    : null
  planRouter(planId, getTrialId(), couponData, routerBundleData, flow, window)
}

const CONTACT_US_PLAN = {
  contactLink: 'https://lp.leadpages.com/agency/',
  headline: 'Need even more?',
  subheadline:
    'The Leadpages Advanced Plan helps you stay organized with a master account and 5 client accounts, each loaded with Pro Plan features, advanced integrations, and a 1-on-1 onboarding call.',
}

const Pricing = (props) => {
  const { planData: { trialPlans, generalPlans } = {} } = props || {}

  const [bundleData, setBundleData] = useState(null)
  const [couponData, setCouponData] = useState(null)
  const [previousPlan, setPreviousPlan] = useState(null)
  const [flow, setFlow] = useState(FLOWS.SIGNUP)
  const [defaultBillingFrequency, setDefaultBillingFrequency] = useState(
    PLAN_PERIODS.ANNUAL
  )
  const images = {
    testimonialImageRonCollins,
  }

  return (
    <>
      <HeadlineContainer>
        <SVGContainer src={backgroundImageSVG} alt="background image" />
        {couponData?.canRedeemCoupon ? (
          <HeadlineCaption
            title={couponData?.headerText || null}
            caption={couponData?.subHeaderText || null}
            supertitle="Leadpages Pricing"
          />
        ) : (
          <HeadlineCaption
            title="Try Leadpages Risk-Free Today"
            caption="Discover why more than 40,000 small business owners choose Leadpages.<br/>Select a plan to get started with your free 14-day trial."
            supertitle="Leadpages Pricing"
          />
        )}
      </HeadlineContainer>
      <PlanCompareWrapper>
        <PlanCompareTable
          plans={flow === FLOWS.REACTIVATION ? generalPlans : trialPlans}
          onSelectPlan={handleSelectPlan}
          coupon={couponData}
          bundle={bundleData}
          headerOffset={HEADER_HEIGHT}
          flow={flow}
          defaultBillingFrequency={defaultBillingFrequency}
          previousPlan={previousPlan}
          contactUsPlan={flow === FLOWS.REACTIVATION ? null : CONTACT_US_PLAN}
          selectPlanButtonText="Start For Free"
        />
      </PlanCompareWrapper>
      <SpacerRow backgroundColor="#f9f9f9" size="small" />
      <QuoteTestimonialsRotator
        testimonialsArray={testimonialsData}
        variant="gray"
      />
      <SpacerRow size="small" />
      <HeadlineSection
        title="Outfit your business for today’s needs & tomorrow’s dreams"
        caption="All Leadpages plans include the following:"
      />
      <FeatureIconsGrid
        features={planFeaturesData}
        itemsPerRow={4}
        showSectionLink
      />
      <SingleTestimonialWavesRow
        headline="So much easier than Wix and Squarespace."
        imageAlt="Ron Collins"
        image={images.testimonialImageRonCollins}
        quote="“Leadpages just makes my life so much easier. I used to set all this up on Wix and Squarespace and it was always such a pain. I am building incredible quality landing pages in a matter of minutes, even on a tight budget!”"
        name="Ron Collins • Marketing Consultant"
        title="Ron Collins Marketing"
      />
      <AccordionSection>
        <Accordion
          sectionHeadline="You have questions.<br/>We have answers."
          data={pricingFaqData}
        />
        <SectionLink>
          Have more questions? See our{' '}
          <StyledLink to="/faq">full FAQ page</StyledLink> or{' '}
          <StyledLink to="/contact">contact us</StyledLink>.
        </SectionLink>
      </AccordionSection>
      <ReadyToGrow headline="Ready to grow?" />
    </>
  )
}
export default Pricing
