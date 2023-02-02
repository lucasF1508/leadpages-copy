import React, { useState, useEffect, useContext } from 'react'
import { styled } from '@design'
// Components
import {
  FLOWS,
  PLAN_PERIODS,
  checkPlanBundleEligibility,
  LegacyPlanCompareTable,
  PlanCompareTable,
} from '@lp/lib-upgrade-modal'
import Accordion from '@legacy/components/accordions/Accordion'
import ComparePlansHeader from '@legacy/components/headers/ComparePlansHeader'
import HeadlineSection from '@legacy/components/layout/HeadlineSection'
import LoadingState from '@legacy/components/LoadingState'
import ReadyToGrow from '@legacy/components/product/ReadyToGrow'
import SEO from '@legacy/components/SEO'
import SpacerRow from '@legacy/components/SpacerRow'
import Link from 'next/link'
// Data
import { pricingFaqData } from '@legacy/data/faq_data'
import { planFeaturesData } from '@legacy/data/compare-plans_data'
import { HEADER_HEIGHT, PRICING_LOAD_TIMEOUT } from '@legacy/constants'
// Utils
import { getLocalCoupon } from '@legacy/utils/coupons'
import { getLocalBundle } from '@legacy/utils/bundles'
import { getUrlParam } from '@legacy/utils/common'
import { planRouter } from '@legacy/utils/plan-router'
import { getTrialId } from '@legacy/utils/trials'
import { AppContext } from '@app'

const Mobile = styled('div', {
  display: 'none',

  '@media (max-width: 840px)': {
    display: 'block',
  },
})

const Desktop = styled('div', {
  display: 'block',
  backgroundColor: '$gray',
  padding: '68px 12px',
  margin: '0 auto',

  '@media (max-width: 840px)': {
    display: 'none',
  },

  [`& .compare-table-container,
    & .compare-table-footer`]: {
    display: 'none',
  },

  '[data-qa-selector~="plan-price"]': {
    fontFamily: 'Value Serif',
  },
})

const HeadlineContainer = styled('div', {
  position: 'relative',
  background: '$white',
  marginTop: '-60px',
  paddingTop: '60px',
  overflow: 'hidden',
  zIndex: -1,
})

const HeadlineCaption = styled(HeadlineSection, {
  paddingTop: '3rem',

  '& [class*="HeadlineSection__Caption"]': {
    paddingTop: '1.5rem',
    paddingBottom: '50px',
  },
})

const PlanCompareWrapper = styled('div', {
  backgroundColor: '$gray',
  paddingTop: '16px',
})

const AccordionSection = styled('div', {
  marginBottom: '6rem',

  '@<s': {
    px: '3rem',
  },
})

const StyledLink = styled('a', {
  color: '$primary',
  paddingBottom: '3px',
  borderBottom: '2px solid rgb(209, 198, 249)',

  '&:hover': {
    borderBottom: '2px solid $colors$primary',
  },
})

const SectionLink = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '18px',
  lineHeight: '32px',
  textAlign: 'center',
  color: '$textAlt',
  marginBottom: '4rem',
  paddingTop: '3rem',
})

const ComparePlans = () => {
  const { planData, hasLoaded } = useContext(AppContext)
  const { compareTrialPlans: trialPlans } = planData || {}

  const [bundleData, setBundleData] = useState(null)
  const [couponData, setCouponData] = useState(null)
  const [defaultBillingFrequency, setDefaultBillingFrequency] = useState(
    PLAN_PERIODS.ANNUAL
  )
  const [isLoading, setIsLoading] = useState(true)

  // this check necessary because of a bug in lib-upgrade-modal
  const [deviceSize, setDeviceSize] = useState(null)
  const planComparisonTableShouldRender =
    typeof window !== 'undefined' && window.innerWidth > 840

  const checkDeviceSize = (screenWidth) => {
    if (screenWidth <= 768) {
      setDeviceSize('mobile')
    }
  }

  const handlePromotionsLoaded = () => {
    const bundle = getLocalBundle()
    const coupon = getLocalCoupon()

    if (bundle) setBundleData(bundle)
    if (coupon?.canRedeemCoupon) setCouponData(coupon)
    setIsLoading(false)
  }

  useEffect(() => {
    if (hasLoaded) handlePromotionsLoaded()
  }, [hasLoaded])

  useEffect(() => {
    // Render plan picker if loading takes longer than expected.
    const loadingTimeout = setTimeout(
      () => setIsLoading(false),
      PRICING_LOAD_TIMEOUT
    )
    const frequencyParamValue = getUrlParam('view')

    if (frequencyParamValue === PLAN_PERIODS.MONTHLY) {
      setDefaultBillingFrequency(PLAN_PERIODS.MONTHLY)
    }

    checkDeviceSize(typeof window !== 'undefined' ? window.innerWidth : null)

    return () => {
      clearTimeout(loadingTimeout)
    }
  }, [])

  const handleSelectPlan = (planId, planLevel, period) => {
    const routerBundleData = checkPlanBundleEligibility(
      { planLevel, period },
      bundleData
    )
      ? bundleData
      : null

    planRouter(
      planId,
      getTrialId(),
      couponData,
      routerBundleData,
      FLOWS.SIGNUP,
      window
    )
  }

  return (
    <>
      <SEO
        pathname="/compare-plans"
        title="Leadpages Pricing: Monthly and Annual Subscription Plans"
        description="Leadpages offers the best pricing plans for your growing small business. Start with a risk-free 14-day free trial and unlock more features as you grow."
        image=""
      />
      <ComparePlansHeader deviceSize={deviceSize} scrollTarget="destination" />
      <div name="destination"></div>
      <SpacerRow size="small" backgroundColor="$gray" />
      {isLoading || !planData ? (
        <LoadingState />
      ) : (
        <>
          <HeadlineContainer>
            {couponData?.canRedeemCoupon ? (
              <HeadlineCaption
                title={couponData?.headerText}
                caption={couponData?.subHeaderText}
                supertitle="Leadpages Pricing"
                backgroundColor="$gray"
                alternateSupertitle
                noPadding
              />
            ) : (
              <HeadlineCaption
                title="Select a plan to get started with your free 14-day trial."
                supertitle="Build Before You Buy"
                backgroundColor="$gray"
                alternateSupertitle
                noPadding
              />
            )}
          </HeadlineContainer>
          <Mobile>
            <PlanCompareWrapper>
              <PlanCompareTable
                plans={trialPlans}
                onSelectPlan={handleSelectPlan}
                coupon={couponData}
                bundle={bundleData}
                headerOffset={HEADER_HEIGHT}
                defaultBillingFrequency={defaultBillingFrequency}
                selectPlanButtonText="Start For Free"
              />
            </PlanCompareWrapper>
            <SpacerRow backgroundColor="$gray" size="small" />
          </Mobile>
          <Desktop>
            {planComparisonTableShouldRender && (
              <LegacyPlanCompareTable
                plans={trialPlans}
                onSelectPlan={handleSelectPlan}
                features={planFeaturesData}
                bundleData={bundleData}
                couponData={couponData}
                defaultBillingFrequency={defaultBillingFrequency}
              />
            )}
          </Desktop>
        </>
      )}
      <AccordionSection>
        <Accordion
          sectionHeadline="You have questions.<br/>We have answers."
          data={pricingFaqData}
        />
        <SectionLink>
          Have more questions? See our{' '}
          <Link href="/faq" passHref>
            <StyledLink>full FAQ page</StyledLink>
          </Link>{' '}
          or{' '}
          <Link href="/contact" passHref>
            <StyledLink>contact us</StyledLink>
          </Link>
          .
        </SectionLink>
      </AccordionSection>
      <ReadyToGrow
        caption="Take Leadpages for a test drive when you start your free 14-day trial."
        subText="No obligation. Cancel anytime."
        paddingScale={0.35}
        scrollTarget="destination"
      />
    </>
  )
}

export default ComparePlans
