import startCase from 'lodash/startCase'
import isString from 'lodash/isString'
import * as F from '../../fields'

export const dropdown = (optionList, { options, ...props } = {}) => {
  const list = optionList.map((value) => {
    if (!isString(value)) return value
    return { title: startCase(value), value }
  })

  return F.string({
    options: {
      ...options,
      list,
      layout: 'dropdown',
    },
    ...props,
    as: null,
  })
}

export default dropdown
