import findPaths from '@/utils/findPaths'
import {SanityDocument} from 'sanity'
import {buildPatches, BuildPatchesDocs} from '@/utils/batchCommit'

const buildLinkPatches = ({
  docs,
  path,
  id,
}: {
  docs: SanityDocument[] | undefined
  path: string
  id: string
}) => {
  if (!docs?.length) return []

  const paths = findPaths(
    docs,
    (key: string, value: any) => value?.page?._ref === id && value?.condition === 'internal'
  )

  return buildPatches(
    paths.reduce<BuildPatchesDocs[]>((acc, links, index) => {
      if (!links.some((link) => link.length)) return acc
      if (!docs[index]) return acc

      return [
        ...acc,
        {
          _id: docs[index]._id,
          _rev: docs[index]._rev,
          ...links.reduce((obj, link) => ({...obj, [`${link}.url`]: path}), {}),
        },
      ]
    }, [])
  )
}

export default buildLinkPatches
