import startCase from 'lodash/startCase'

const defaultOptions = { collapsible: true, collapsed: true }

export const fieldset = (name, { title, ...options } = {}) => {
  const fieldsetTitle = title || startCase(name)

  return {
    name,
    title: fieldsetTitle,
    options: {
      ...defaultOptions,
      ...options,
    },
  }
}

export default fieldset
