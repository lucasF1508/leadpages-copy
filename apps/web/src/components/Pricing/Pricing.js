import React, { useState, useEffect, useContext } from 'react'
import { styled } from '@design'
// Components
import {
  FLOWS,
  PLAN_PERIODS,
  checkPlanBundleEligibility,
  PlanCompareTable,
} from '@lp/lib-upgrade-modal'
import LoadingState from '@legacy/components/LoadingState'
import { HEADER_HEIGHT, PRICING_LOAD_TIMEOUT } from '@legacy/constants'
// Utils
import { getLocalCoupon } from '@legacy/utils/coupons'
import { getLocalBundle } from '@legacy/utils/bundles'
import { getLocalPreviousPlan } from '@legacy/utils/previous-plan'
import { getUrlParam } from '@legacy/utils/common'
import { planRouter } from '@legacy/utils/plan-router'
import { getTrialId } from '@legacy/utils/trials'
import { AppContext } from '@app'

const PlanCompareWrapper = styled('div', {
  bc: '$background',
  pt: '16px',
})

const Pricing = ({ selectPlanButtonText, planOrder, contactUsPlan }) => {
  const { hasLoaded, planData } = useContext(AppContext)
  const { trialPlans, generalPlans } = planData || {}

  if (!trialPlans || !generalPlans) return null

  const CONTACT_US_PLAN = {
    contactLink: 'https://lp.leadpages.com/agency/',
    headline: 'Need even more?',
    subheadline:
      'The Leadpages Advanced Plan helps you stay organized with a master account and 5 client accounts, each loaded with Pro Plan features, advanced integrations, and a 1-on-1 onboarding call.',
    ...contactUsPlan,
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

  useEffect(() => {
    if (hasLoaded) handlePromotionsLoaded()
  }, [hasLoaded])

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
      {isLoading ? (
        <LoadingState />
      ) : (
        <>
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
              selectPlanButtonText={selectPlanButtonText || 'Start For Free'}
              planOrder={planOrder}
            />
          </PlanCompareWrapper>{' '}
        </>
      )}
    </>
  )
}

export default Pricing
