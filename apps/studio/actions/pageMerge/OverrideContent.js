import React, { useRef, useEffect, useState } from 'react'
import { useDocumentOperation } from '@sanity/react-hooks'
import { useToast, Stack, Inline, Button, Text, Card } from '@sanity/ui'
import isEqual from 'lodash/isEqual'
import sanityClient from 'part:@sanity/base/client'
import Select from 'react-select'

const client = sanityClient.withConfig({
  apiVersion: process.env.SANITY_STUDIO_API_VERSION,
})

const excludedKeys = [
  '_createdAt',
  '_id',
  '_rev',
  '_type',
  '_updatedAt',
  'slug',
  'path',
]

const OverrideContent = ({ id, type, onComplete } = {}) => {
  const toast = useToast()

  const { patch } = useDocumentOperation(id, type)
  const ref = useRef()
  const [selected, setSelected] = useState(undefined)
  const [currentDocument, setCurrentDocument] = useState([])
  const [allDocuments, setAllDocuments] = useState([])
  const [options, setOptions] = useState([])

  const formatOptions = (docs) =>
    docs.map(({ title, _id }) => ({ label: title, value: _id }))

  const getOptions = async () => {
    const documents = await client.fetch(
      `*[_type == $type] | order(_updatedAt desc)`,
      {
        type,
        id,
      }
    )

    const [currentDoc, pulledDocuments] = documents.reduce(
      (array, doc) => {
        if (doc._id === id) {
          return [doc, array[1]]
        }

        return [array[0], [...array[1], doc]]
      },
      [{}, []]
    )

    setCurrentDocument(currentDoc)
    setAllDocuments(pulledDocuments)
    setOptions(formatOptions(pulledDocuments))
  }

  const updateCurrentDoc = async (patches) => {
    const response = await patch.execute(patches)
    return response
  }

  const handleUpdate = async () => {
    const currentKeys = Object.keys(currentDocument)
    const pulledKeys = Object.keys(selected)
    const filteredKeys = pulledKeys.filter((key) => !excludedKeys.includes(key))
    const unset = isEqual(currentKeys, pulledKeys)
      ? undefined
      : currentKeys.filter((key) => !pulledKeys.includes(key))

    const set = filteredKeys.reduce(
      (obj, key) => ({ ...obj, [key]: selected[key] }),
      {}
    )

    await updateCurrentDoc([{ set, ...(unset ? { unset } : {}) }])
    toast.push({
      status: 'success',
      title: 'Success: Content Pulled & Draft created',
      description: 'Publish your changes or discard the changes',
    })
    onComplete()
  }

  const handleChange = ({ value }) => {
    setSelected(allDocuments.find((doc) => doc._id === value))
  }

  useEffect(() => {
    getOptions()

    // Targeting this specific dialog to change the styles on.
    if (ref.current) {
      const DialogCard = ref.current.closest('[data-ui="DialogCard"]')
      DialogCard.style.overflow = 'visible'
      DialogCard.children[0].style.overflow = 'visible'
      ref.current.parentNode.parentNode.style.overflow = 'visible'
    }
  }, [])

  return (
    <Card
      ref={ref}
      style={{
        minHeight: '8.75rem',
        display: 'flex',
        alignItems: 'flex-start',
        maxWidth: '22.5rem',
        margin: '1.5rem auto 0',
      }}
    >
      <Stack style={{ width: '100%' }} space={[3]}>
        <Stack space={[3]}>
          <Text size={2} weight="semibold">
            Choose the document to pull content from.
          </Text>

          <Select
            id={`overrideSelect`}
            name={`overrideSelect`}
            disabled={!options}
            isLoading={!options}
            closeMenuOnSelect={false}
            options={options}
            openMenuOnClick={false}
            onChange={handleChange}
            noOptionsMessage={() => 'No References found.'}
            blurInputOnSelect
          />
        </Stack>
        <Card style={{ textAlign: 'center' }}>
          <Inline space={[3, 3, 4]}>
            <Button
              fontSize={2}
              mode="ghost"
              text="Cancel"
              onClick={onComplete}
            />
            <Button
              fontSize={2}
              text="Replace Content"
              disabled={!selected}
              tone={'critical'}
              onClick={handleUpdate}
            />
          </Inline>
        </Card>
      </Stack>
    </Card>
  )
}

export default OverrideContent
