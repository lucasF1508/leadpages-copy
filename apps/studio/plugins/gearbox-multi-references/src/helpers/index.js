import MultiReferences from '../components/MultiReferences'

export const multiReferenceSchema = ({ name, title, types: orgTypes }) => {
  const types = Array.isArray(orgTypes) ? orgTypes : [orgTypes]

  return {
    name,
    title,
    type: 'array',
    inputComponent: MultiReferences,
    options: {
      referenceTypes: types,
    },
    of: [
      {
        type: 'reference',
        to: types.map((type) => {
          return { type }
        }),
      },
    ],
  }
}
