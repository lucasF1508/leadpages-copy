import {SanityDocument} from 'sanity'
import {buildPatches, BuildPatchesDocs} from '@/utils/batchCommit'

const buildChildrenPathPatches = ({
  docs,
  path,
  prevPath,
}: {
  docs: SanityDocument[]
  path: string
  prevPath: string
}) =>
  buildPatches(
    docs.reduce<BuildPatchesDocs[]>((acc, doc, index) => {
      return [
        ...acc,
        ...(doc?.path
          ? [{_id: doc._id, _rev: doc._rev, path: doc.path.replace(prevPath, path)}]
          : []),
      ]
    }, [])
  )

export default buildChildrenPathPatches
