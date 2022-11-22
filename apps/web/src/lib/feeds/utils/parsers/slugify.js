import { applyRegexFromMap } from '../utils'
import _slugify from '../slugify'

export const slugify = (valueOrg, map) => {
  const { prepend } = map
  const valueReg = applyRegexFromMap(valueOrg, map)
  const value = _slugify(valueReg)
  // console.log(valueOrg)
  // console.log(map)
  // console.log(prepend ? `${prepend}${value}` : value)
  return prepend ? `${prepend}${value}` : value
}
