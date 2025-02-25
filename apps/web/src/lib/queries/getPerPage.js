import runQuery from './runQuery'

const getPerPage = async ({ type, filter, key = 'docsPerPage' }) =>
  runQuery(
    `*[0]{
    "perPage": *[archiveOf == "${type}"][0].${key},
    "found": count(*[_type == "${type}" && !(_id in path('drafts.**'))${
      filter ? ` && ${filter}` : ''
    }]),
  }`,
    { preview: false }
  )

export default getPerPage
