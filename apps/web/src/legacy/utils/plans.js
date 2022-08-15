const BILLING_FREQUENCY = {
  month: 'monthly',
  year: 'annually',
}

const getDescription = (level) => {
  let result

  switch (level) {
    case 'standard':
      result = 'Unlock conversion tools to generate leads.'
      break
    case 'pro':
      result = 'Get all the tools to make sales, test, and optimize.'
      break
    case 'advanced':
      result = 'Access advanced features to better serve your clients.'
      break
    default:
      break
  }

  return result
}

const getMonthlyPrice = (price, period) => {
  const CYCLES = {
    default: 1,
    month: 1,
    year: 12,
  }

  if (!(period in CYCLES)) {
    // eslint-disable-next-line no-console
    console.error(`Billing cycle [${period}] not found`)
    throw new Error(`Billing cycle [${period}] not found`)
  }

  const monthlyPrice = price / (CYCLES[period] || CYCLES.default)
  const remainder = monthlyPrice % 1

  if (remainder >= 0.3) {
    return Math.ceil(monthlyPrice)
  }

  return Math.floor(monthlyPrice)
}

const formatPlanData = (plans) => {
  const formattedPlans = {}

  plans.forEach((data) => {
    const { period, planLevel, price } = data
    const level = planLevel.toLowerCase()
    const plan = {
      ...data,
      buttonText: 'Start For Free',
      description: getDescription(level),
      billingFrequency: BILLING_FREQUENCY[period],
      monthlyPrice: getMonthlyPrice(price, period),
    }

    formattedPlans[period] = {
      ...formattedPlans[period],
      [level]: plan,
    }
  })

  return formattedPlans
}

const getGroupedPlanData = (plans) => {
  const generalPlans = formatPlanData(plans.filter((plan) => !plan.isTrial))
  const trialPlans = formatPlanData(plans.filter((plan) => plan.isTrial))

  return { generalPlans, trialPlans }
}

// This function is used in gatsby-node.js so CommonJS export is needed
exports.getGroupedPlanData = getGroupedPlanData
