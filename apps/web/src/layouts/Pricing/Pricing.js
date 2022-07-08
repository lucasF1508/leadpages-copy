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
import SpacerRow from '../../legacy/components/SpacerRow'
import QuoteTestimonialsRotator from '../../legacy/components/rotators/QuoteTestimonialsRotator'
import HeadlineSection from '../../legacy/components/layout/HeadlineSection'
// Data
import {
  testimonialsData,
  planFeaturesData,
} from '../../legacy/data/pricing_data'
import { HEADER_HEIGHT, PRICING_LOAD_TIMEOUT } from '../../legacy/constants'
// Images
import backgroundImageSVG from '../../legacy/assets/images/shapes/wavy-line-gray_pricing.svg'

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

const PlanCompareWrapper = styled.div`
  background-color: #f9f9f9;
  padding-top: 16px;
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
  const { data = {} } = props
  console.log('Pricing', props)
  const { planData: { trialPlans, generalPlans } = {} } = data || {}

  const [bundleData, setBundleData] = useState(null)
  const [previousPlan, setPreviousPlan] = useState(null)
  const [flow, setFlow] = useState(FLOWS.SIGNUP)
  const [defaultBillingFrequency, setDefaultBillingFrequency] = useState(
    PLAN_PERIODS.ANNUAL
  )
  const couponData = false

  return (
    <>
      {/* {hero && <Hero {...hero} />}
    {components && <Rack components={components} />} */}

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
        {trialPlans}
        {generalPlans}
      </PlanCompareWrapper>
      <SpacerRow backgroundColor="#f9f9f9" size="small" />
      <QuoteTestimonialsRotator
        testimonialsArray={testimonialsData(data)}
        variant="gray"
      />
    </>
  )
}
export default Pricing
