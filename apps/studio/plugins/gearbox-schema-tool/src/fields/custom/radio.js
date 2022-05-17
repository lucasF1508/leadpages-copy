import * as F from '../../fields'
import startCase from 'lodash/startCase'
import isString from 'lodash/isString'

export const radio = (optionList, { options, ...props } = {}) => {
  const list = optionList.map((value) => {
    if (!isString(value)) return value
    return { title: startCase(value), value }
  })

  return F.string({
    options: {
      direction: 'horizontal',
      ...options,
      list,
      layout: 'radio',
    },
    ...props,
    as: null,
  })
}

export default radio
