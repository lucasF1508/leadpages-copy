import { getParserConfig } from '../config'
import fieldsToGroq from '../utils/fieldsToGroq'
import mapConditions from '../utils/mapConditions'
import defaultFields from '../primitives/cards'
import { reference } from './reference'

const { fields = defaultFields, conditions } = getParserConfig('cards')

export const cards = (name, type) => {
  const object = {
    ...fields,
    //TODO Figure a way to do nested queries that is more intuitive.
    ...mapConditions({
      condition: {
        selection: {
          docs: `selectionDocs[]->{${fieldsToGroq(reference())}}`,
        },
        mostRecent: {
          docs: `*[_type == ^.contentType && (^.filter == 'none' || ^.filter != 'none' && category._ref == ^.category._ref)] | order(order asc, publishedDate desc, _createdAt desc) {${fieldsToGroq(
            reference()
          )}}`,
        },
      },
    }),
    ...mapConditions(conditions),
  }

  return name ? { [name]: object } : object
}
