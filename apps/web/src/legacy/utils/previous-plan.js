/* eslint-disable import/prefer-default-export */
import {
  getUrlParam,
  getJSONKey,
  setJSONKey,
  getExpiredAndInvalidate,
  makeExpiryDate,
} from './common'

export const PREV_PLAN_KEY = 'prev_plan'
// Util functions for grabbing and storing previous plan id

function setLocalPreviousPlan() {
  const prevPlanParam = getUrlParam(PREV_PLAN_KEY)

  if (prevPlanParam) {
    const prevPlan = {
      id: prevPlanParam,
      expiration: makeExpiryDate(6),
    }

    setJSONKey(PREV_PLAN_KEY, prevPlan)
    return prevPlan
  }

  return null
}

export function getLocalPreviousPlan() {
  const localPrevPlan = setLocalPreviousPlan() || getJSONKey(PREV_PLAN_KEY)
  return !getExpiredAndInvalidate(PREV_PLAN_KEY, localPrevPlan?.expiration)
    ? localPrevPlan
    : null
}
