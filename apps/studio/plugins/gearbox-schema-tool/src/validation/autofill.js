import validation from './validation'
import kebabCase from 'lodash/kebabCase'

export const autofill = ({ name, source }) => {
  return validation((value, context) => {
    const { parent } = context
    const fillSource = parent[source]

    if (value) {
      return true
    } else if (!fillSource) {
      return 'Required'
    }

    context.document[name] = context.parent[name] = {
      _type: name,
      current: kebabCase(fillSource),
    }

    return true
  })
}

export default autofill
