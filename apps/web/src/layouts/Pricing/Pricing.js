import React, { useState, useEffect } from 'react'
import { styled } from '@design'
// Components
import {
  FLOWS,
  PLAN_PERIODS,
  checkPlanBundleEligibility,
  PlanCompareTable,
} from '@lp/lib-upgrade-modal'
import Link from 'next/link'
import Accordion from '../../legacy/components/accordions/Accordion'
import FeatureIconsGrid from '../../legacy/components/grids/FeatureIconsGrid'
import HeadlineSection, {
  Caption,
} from '../../legacy/components/layout/HeadlineSection'
import Layout from '../../legacy/components/Layout'
import LoadingState from '../../legacy/components/LoadingState'
import QuoteTestimonialsRotator from '../../legacy/components/rotators/QuoteTestimonialsRotator'
import ReadyToGrow from '../../legacy/components/product/ReadyToGrow'
import SpacerRow from '../../legacy/components/SpacerRow'
import SingleTestimonialWavesRow from '../../legacy/components/testimonials/SingleTestimonialWavesRow'
// Data
import { pricingFaqData } from '../../legacy/data/faq_data'
import {
  testimonialsData,
  planFeaturesData,
} from '../../legacy/data/pricing_data'
import { HEADER_HEIGHT, PRICING_LOAD_TIMEOUT } from '../../legacy/constants'
// Utils
import { getLocalCoupon } from '../../legacy/utils/coupons'
import { getLocalBundle } from '../../legacy/utils/bundles'
import { getLocalPreviousPlan } from '../../legacy/utils/previous-plan'
import { getUrlParam } from '../../legacy/utils/common'
import { planRouter } from '../../legacy/utils/plan-router'
import { getTrialId } from '../../legacy/utils/trials'
// Images
import backgroundImageSVG from '../../legacy/assets/images/shapes/wavy-line-gray_pricing.svg'
import testimonialImageRonCollins from '../../legacy/assets/images/testimonials/ron-collins_far.png'

const HeadlineContainer = styled('div', {
  position: 'relative',
  background: '$white',
  mt: '-60px',
  pt: '60px',
  o: 'hidden',
  z: -1,
})

const StyledLink = styled('a', {
  c: '$primary',
  pb: '3px',
  bb: '2px solid $colors$purpleLight',

  '&:hover': {
    bb: '2px solid $colors$primary',
  },
})

const SectionLink = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '18px',
  lineHeight: '32px',
  ta: 'center',
  c: '$textAlt',
  mb: '4rem',
  pt: '3rem',
})

const SVGContainer = styled('img', {
  position: 'absolute',
  top: '-60vh',
  bottom: 0,
  left: 0,
  right: '5%',
  h: '120vh',
  ml: 'auto',
  z: -2,

  '@media (min-width: 768px)': {
    right: '-15%',
  },

  '@media (min-width: 992px)': {
    right: '5%',
  },

  '@media (min-width: 1300px)': {
    right: '10%',
  },

  '@media (max-width: 767px)': {
    d: 'none',
  },
})

const HeadlineCaption = styled(HeadlineSection, {
  pt: '3rem',

  [`& ${Caption}`]: {
    pb: '50px',
  },
})

const PlanCompareWrapper = styled('div', {
  bc: '$background',
  pt: '16px',
})

const AccordionSection = styled('div', {
  mb: '6rem',

  '@media (max-width: 576px)': {
    pr: '3rem',
    pl: '3rem',
  },
})

const Pricing = (props) => {
  const { planData: { trialPlans, generalPlans } = {} } = props || {}
  const CONTACT_US_PLAN = {
    contactLink: 'https://lp.leadpages.com/agency/',
    headline: 'Need even more?',
    subheadline:
      'The Leadpages Advanced Plan helps you stay organized with a master account and 5 client accounts, each loaded with Pro Plan features, advanced integrations, and a 1-on-1 onboarding call.',
  }
  const images = {
    testimonialImageRonCollins,
  }

  const [bundleData, setBundleData] = useState(null)
  const [couponData, setCouponData] = useState(null)
  const [previousPlan, setPreviousPlan] = useState(null)
  const [flow, setFlow] = useState(FLOWS.SIGNUP)
  const [defaultBillingFrequency, setDefaultBillingFrequency] = useState(
    PLAN_PERIODS.ANNUAL
  )
  const [isLoading, setIsLoading] = useState(true)

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

    return () => {
      clearTimeout(loadingTimeout)
    }
  }, [])

  const handlePromotionsLoaded = () => {
    const bundle = getLocalBundle()
    const coupon = getLocalCoupon()
    const prevPlan = getLocalPreviousPlan()

    if (prevPlan) {
      setPreviousPlan(prevPlan.id)
      setFlow(FLOWS.REACTIVATION)
    }
    if (bundle) setBundleData(bundle)
    if (coupon?.canRedeemCoupon) setCouponData(coupon)
    setIsLoading(false)
  }

  const handleSelectPlan = (planId, planLevel, period) => {
    const routerBundleData = checkPlanBundleEligibility(
      { planLevel, period },
      bundleData
    )
      ? bundleData
      : null
    planRouter(planId, getTrialId(), couponData, routerBundleData, flow, window)
  }

  return (
    <>
      <Layout
        hideBar
        hideSignUpFreeButton
        underlaidMenu
        onPromotionsLoaded={handlePromotionsLoaded}
      >
        {isLoading ? (
          <LoadingState />
        ) : (
          <>
            <HeadlineContainer>
              <SVGContainer
                src={backgroundImageSVG.src}
                alt="background image"
              />
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
                contactUsPlan={
                  flow === FLOWS.REACTIVATION ? null : CONTACT_US_PLAN
                }
                selectPlanButtonText="Start For Free"
              />
            </PlanCompareWrapper>{' '}
            <SpacerRow backgroundColor="$background" size="small" />
            <QuoteTestimonialsRotator
              testimonialsArray={testimonialsData}
              variant="gray"
            />
          </>
        )}
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
        <ReadyToGrow headline="Ready to grow?" />
      </Layout>
    </>
  )
}
export default Pricing
