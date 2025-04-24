// TODO Clean up Types
import type {SanityDocument} from 'sanity'
import React from 'react'
import {Box, Button, Card, Stack, Text, useToast} from '@sanity/ui'
import {generateSlug} from '@gearbox-built/bolts'
import config from 'config'
import {HiOutlineArrowPathRoundedSquare as icon} from 'react-icons/hi2'
import {defineField, useClient} from 'sanity'
import {buildLinkPatches} from '@/actions/publish/updateReferencedPaths'
import {batchCommit, mergePatches} from '@gearbox-built/bolts'
import generatePath from '@/utils/paths/generatePath' // TODO: Move to bolts

const pageTemplates = config?.studio?.docTypes

type FetchedDocument = SanityDocument & {
  archiveOf?: string
  path?: string
  references?: SanityDocument[]
  title?: string
}

const FlushPaths = () => {
  const toast = useToast()
  const client = useClient({apiVersion: import.meta.env.SANITY_STUDIO_API_VERSION})

  const fetchDocuments = async () =>
    client.fetch(
      `*[_type in $types] {
        _id,
        _rev,
        _type,
        slug,
        path,
        title,
        category,
        archiveOf,
        "references": *[references(^._id)]
      }`,
      {types: pageTemplates}
    )

  const buildPatches = (updatedPaths: SanityDocument[]) =>
    updatedPaths
      .map((doc) => [
        {
          id: doc._id,
          patch: {
            id: doc._id,
            ifRevisionID: doc._rev,
            set: {
              path: doc.path,
              slug: doc.slug,
            },
          },
        },
        ...buildLinkPatches({
          docs: doc.references as SanityDocument[],
          path: doc.path,
          id: doc._id,
        }),
      ])
      .flat()

  const checkPaths = async (docs: SanityDocument[]): Promise<[] | SanityDocument[]> => {
    const paths = await Promise.all(
      docs.map(async (doc) => {
        const slug = generateSlug((doc?.slug?.current || doc.title) as string)
        return generatePath({
          slug,
          type: doc._type,
          document: doc,
          client,
        })
      })
    )

    return paths.reduce<any>((acc, path, index) => {
      const doc = docs[index]
      if (!doc) return acc

      const slug = generateSlug((doc?.slug?.current || doc.title) as string)
      const updatePath = path !== doc.path || doc?.slug?.current !== slug

      if (!updatePath) return acc

      if (!doc?.slug?.current) {
        // eslint-disable-next-line no-console
        console.log(`No slug found for ${doc.title}. Generating slug from title`, doc)
      }

      if (updatePath) {
        // eslint-disable-next-line no-console
        console.log(`Updating path for ${doc.title} from ${doc.path} to ${path}`)
      }
      return [
        ...acc,
        {
          ...doc,
          path,
          slug: {
            current: slug,
          },
        },
      ]
    }, [])
  }

  const handleClick = async () => {
    toast.push({
      title: `Checking all documents with paths and links...`,
      status: 'warning',
    })
    const docs = await fetchDocuments()
    toast.push({
      title: `Auditing ${docs.length} documents...`,
      status: 'warning',
    })
    // eslint-disable-next-line no-console
    console.log({documents: docs})
    const updatedPaths = await checkPaths(docs)
    const patches = mergePatches(buildPatches(updatedPaths))

    if (!patches.length) {
      toast.push({
        title: `Paths are synced no edits needed. Check your console for more information`,
        status: 'success',
      })
      return
    }

    try {
      await batchCommit({patches, client, toast})
      toast.push({
        title: `Updates successful! ${patches.length} executed. Check your console for more information`,
        status: 'success',
      })
      // eslint-disable-next-line no-console
      console.log(patches)
    } catch (error) {
      console.error(error)
      toast.push({
        title: `Error with Batch commit. Check your console for more information`,
        status: 'error',
      })
    }
    return
  }

  return (
    <Card padding={4} style={{maxWidth: '40rem', marginLeft: 'auto', marginRight: 'auto'}}>
      <Box padding={[3, 3, 4, 5]}>
        <Stack space={[3, 3, 4, 5]}>
          <Text align="center" muted size={[1, 1, 2]}>
            Warning this will iterate through all configured Page Templates and build patches to
            update their path and all referenced documents that are linking to that document
          </Text>
          <Card padding={4} style={{marginLeft: 'auto', marginRight: 'auto'}}>
            <Button
              fontSize={[2, 2, 3]}
              icon={icon}
              justify="center"
              onClick={handleClick}
              padding={[3, 3, 4]}
              text="Flush Paths"
              tone="critical"
            />
          </Card>
        </Stack>
      </Box>
    </Card>
  )
}

export const flushPaths = {
  icon,
  name: 'flushPaths',
  title: 'Flush Redirects',
  type: 'document',
  fields: [
    defineField({
      name: 'flushPaths',
      title: 'Flush Paths',
      type: 'string',
      components: {
        field: FlushPaths,
      },
    }),
  ],
}
