import { getGroupedPlanData } from '@legacy/utils/plans'

export const getPlanData = async (variant) => {
  const result = await fetch(
    `${process.env.LEADPAGES_API_HOST}/billing/plans${
      variant ? '?variants=1' : ''
    }`,
    {
      headers: { 'Content-Type': 'application/json' },
    }
  )
  const resultData = await result.json()
  return resultData._items
}

export { getGroupedPlanData }
