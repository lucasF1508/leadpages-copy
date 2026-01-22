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

export const getGroupedPlanData = (plans) => {
  const generalPlans = formatPlanData(plans.filter(({ isTrial }) => !isTrial))
  const trialPlans = formatPlanData(plans.filter(({ isTrial }) => isTrial))

  return {
    generalPlans,
    trialPlans,
    compareTrialPlans: trialPlans,
  }
}

// Fetch trial plans from the trials endpoint
const getTrialPlansData = async () => {
  const endpoint = 'https://my.leadpages.com/api/v1/billing/plans/trials'
  // Log for debugging - can be removed in production
  console.log('[getTrialPlansData] Fetching from trials endpoint:', endpoint);
  const result = await fetch(endpoint, {
    headers: { 'Accept': 'application/json' },
  })

  if (!result.ok) {
    console.error(`[getTrialPlansData] Failed to fetch trial plans: ${result.status} ${result.statusText}`)
    return null
  }

  const data = await result.json()
  console.log('[getTrialPlansData] Received trial plans:', { itemCount: data.items?.length || 0, currencies: data.items?.map(item => item.currency) || [] });

  // Transform trial plans data to match the expected format
  if (data.items && Array.isArray(data.items)) {
    return data.items.map((item) => ({
      isTrial: item.isTrial,
      price: item.price,
      period: item.billingCycle, // Map billingCycle to period
      planLevel: item.level.charAt(0).toUpperCase() + item.level.slice(1), // Map level to planLevel (capitalize)
      monthlyCost: item.monthlyCost,
      annualSavings: item.annualSavings,
      currency: item.currency,
      checkout_url: item.checkout_url,
      productCode: item.productCode,
    }))
  }

  return null
}

export const getPlanData = async (variant) => {
  // Use trials endpoint for trial plans
  const trialPlans = await getTrialPlansData()

  // Still fetch general plans from the original endpoint
  const result = await fetch(
    `${process.env.LEADPAGES_API_HOST}/billing/plans${
      variant ? '?variants=1' : ''
    }`,
    {
      headers: { 'Content-Type': 'application/json' },
    }
  )
  const resultData = await result.json()
  const generalPlans = resultData._items || []
  console.log('[getPlanData] Combined plans:', { trialPlansCount: trialPlans?.length || 0, generalPlansCount: generalPlans.length });

  // Combine trial plans with general plans
  return [...(trialPlans || []), ...generalPlans]
}
