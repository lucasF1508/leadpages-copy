import React, {useRef, useEffect, useState} from 'react'
import {useToast, Stack, Inline, Button, Text, Card} from '@sanity/ui'
import isEqual from 'lodash/isEqual'
import {useClient} from 'sanity'
import {IoWarning} from 'react-icons/io5'
import batchCommit, {
  buildDeletePatches,
  buildDraftPatches,
  buildPatches,
  mergePatches,
} from '@/utils/batchCommit'

const excludedKeys = ['_createdAt', '_id', '_rev', '_type', '_updatedAt', 'slug', 'path', 'title']

const SANITY_STUDIO_API_VERSION = import.meta.env.SANITY_STUDIO_API_VERSION

const generateOptionsQuery = (control, _variants) => {
  const variantsArr = Array.isArray(_variants) ? _variants : [_variants]

  let query = variantsArr
    .map((variant) => `_id == "${variant?.page?._ref}"`)
    .filter(Boolean)
    .join(' || ')

  const ref = control?._ref
  if (query && ref) query += ` || _id == "${ref}"`

  return query
}

const SelectWinner = ({onComplete, control = {}, variants = [], id} = {}) => {
  const [selected, setSelected] = useState(undefined)
  const [allDocuments, setAllDocuments] = useState([])
  const [options, setOptions] = useState([])

  const client = useClient({apiVersion: SANITY_STUDIO_API_VERSION})
  const toast = useToast()
  const ref = useRef()

  const formatOptions = (docs) => docs.map(({title, _id, path}) => ({label: title, _id, path}))

  const getOptions = async () => {
    const queryString = generateOptionsQuery(control, variants)
    const pulledDocuments = await client.fetch(`*[${queryString}]`)
    setAllDocuments(pulledDocuments)

    setOptions(formatOptions(pulledDocuments))
  }

  const completeExperimentAction = async (toReplace, replacement) => {
    const unpublishVariants = async () => {
      let controlPatches
      const documentsToReplace = allDocuments.reduce((acc, doc) => {
        if (!doc) return acc

        const isVariant = variants.some((variant) => variant?.page?._ref === doc?._id)

        if (!doc || !isVariant) return acc

        return [...acc, doc]
      }, [])

      if (selected !== control._ref) {
        const currentKeys = Object.keys(toReplace)
        const replacementKeys = Object.keys(replacement)
        const filteredKeys = replacementKeys.filter((key) => !excludedKeys.includes(key))
        const unset = isEqual(currentKeys, replacementKeys)
          ? undefined
          : currentKeys.filter((key) => !replacementKeys.includes(key))
        const set = filteredKeys.reduce((obj, key) => ({...obj, [key]: replacement[key]}), {})
        controlPatches = mergePatches([
          {
            id: control._ref,
            patch: {set, ...(unset ? {unset} : {})},
          },
        ])
      }

      const experiment = await client.fetch(`*[_id == '${id}' && !(_id in path("drafts.**"))][0]`)

      const deletePatches = buildDeletePatches(documentsToReplace)
      const newDocPatches = buildDraftPatches(documentsToReplace)
      const experimentPatches = buildPatches([{...experiment, completed: true}])

      await batchCommit({
        patches: [
          ...(controlPatches || []),
          ...newDocPatches,
          ...experimentPatches,
          ...deletePatches,
        ],
        client,
        toast,
      })
    }

    await unpublishVariants()

    toast.push({
      status: 'success',
      title: 'Success: Experiment Completed',
      description: "The variant pages are now unpublished. Don't forget to deploy the site.",
    })
  }

  const handleUpdate = async () => {
    if (!allDocuments?.length) return

    const toReplace = allDocuments.find((option) => option._id === control._ref)
    const replacement = allDocuments.find((option) => option._id === selected)
    await completeExperimentAction(toReplace, replacement)
    onComplete()
  }

  useEffect(() => {
    getOptions()
  }, [])

  return (
    <Card
      ref={ref}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
      }}
    >
      <Stack style={{width: '100%'}} space={[3]}>
        <Stack space={[3]} style={{marginBottom: '1rem'}}>
          <Text size={2} weight="semibold" style={{marginBottom: '0.25rem'}}>
            Choose the winning page.
          </Text>
          <Text size={2} style={{marginBottom: '0.5rem'}}>
            The content from the page that is selected page will be migrated to the control path. If
            the control page is selected you'll see no change. The variant pages will be unpublished
            and all traffic will see the new content.
          </Text>
          <Text size={1} style={{display: 'flex', alignItems: 'center'}}>
            <IoWarning size={18} /> - A deploy is required for these changes to take effect
          </Text>
        </Stack>
        <Stack space={[2]}>
          {options?.map(({label, _id, path}) => (
            <Card
              key={_id}
              padding={[2, 2, 3]}
              radius={2}
              shadow={1}
              tone={selected === _id && 'primary'}
              onClick={() => setSelected(_id)}
            >
              <Text size={[2]} weight="semibold" style={{marginBottom: '0.5rem'}}>
                {label}
              </Text>
              <Text size={[1]}>Original Path: {path}</Text>
            </Card>
          ))}
        </Stack>
        <Stack space={[2]}>
          <Inline space={[2]}>
            <Button fontSize={2} mode="ghost" text="Cancel" onClick={onComplete} />
            <Button
              fontSize={2}
              text="Replace Content"
              disabled={!selected}
              tone={'critical'}
              onClick={handleUpdate}
            />
          </Inline>
        </Stack>
      </Stack>
    </Card>
  )
}

export default SelectWinner
