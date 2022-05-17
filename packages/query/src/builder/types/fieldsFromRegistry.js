import parser, { fieldsToGroq } from '../../parser'

export const fieldsFromRegistry = (registry) => {
  if (!registry?.fields) return undefined

  return '...,' + fieldsToGroq(parser(registry.fields))
}
