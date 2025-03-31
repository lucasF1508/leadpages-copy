import runQuery from './runQuery'

export interface GetPerPageProps {
  filter?: string
  key?: string
  type: string
}

const getPerPage = async ({
  filter,
  key = 'docsPerPage',
  type,
}: GetPerPageProps) =>
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
