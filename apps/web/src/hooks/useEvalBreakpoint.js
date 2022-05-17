import React, { useEffect, useState } from 'react'
import useEventListener from '@hooks/useEventListener'
import evalBreakpoint from '@utils/evalBreakpoint'

const useEvalBreakpoint = (condition) => {
  const [conditionIsTrue, setConditionIsTrue] = useState(false)

  const checkBreakpoint = () => {
    const resolveTrue = evalBreakpoint(condition)
    if (resolveTrue && !conditionIsTrue) {
      setConditionIsTrue(true)
    } else if (!resolveTrue && conditionIsTrue) {
      setConditionIsTrue(false)
    }
  }

  useEventListener('resizeEnd', (event) => checkBreakpoint())

  useEffect(() => {
    checkBreakpoint()
  }, [])

  return conditionIsTrue
}

export default useEvalBreakpoint
