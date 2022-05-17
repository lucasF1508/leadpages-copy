import startCase from 'lodash/startCase'

const defaultOptions = { default: false }

export const fieldGroup = (name, { title, ...options } = {}) => {
  const groupTitle = title || startCase(name)

  return {
    name,
    title: groupTitle,
    ...defaultOptions,
    ...options,
  }
}

export default fieldGroup
