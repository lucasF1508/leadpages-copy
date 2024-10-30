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
import { makeStyles } from '@material-ui/styles'
import useStickyHeader from '@hooks/useStickyHeader'

const PlanCompareWrapper = styled('div', {
  bc: '$background',
  pt: '16px',
})

const useStyles = makeStyles({
  planCompareWrapper: {
    top: 0,
    paddingTop: ({ paddingTop }) => paddingTop,
    transition: 'padding-top 0.2s linear',
  },
})

const Pricing = ({ selectPlanButtonText, planOrder }) => {
  const { hasLoaded, planData } = useContext(AppContext)
  const { trialPlans, generalPlans } = planData || {}
  const { showHeader } = useStickyHeader({
    offsetTop: 10,
  })

  const props = {
    paddingTop: showHeader ? '5.625rem' : 0,
  }
  const classes = useStyles(props)

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

  if (!trialPlans || !generalPlans) return null

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
              selectPlanButtonText={
                flow === FLOWS.REACTIVATION
                  ? 'Select Plan'
                  : selectPlanButtonText || 'Start Free Trial'
              }
              planOrder={planOrder}
              PlanCompareStickyNavProps={{
                className: classes.planCompareWrapper,
              }}
            />
          </PlanCompareWrapper>
        </>
      )}
    </>
  )
}

export default Pricing
