import type {ObjectInputProps, SanityDocument} from 'sanity'
import {forwardRef, useState} from 'react'
import {Button, Card, Flex, Spinner, Stack, Text, useToast} from '@sanity/ui'
import {GrClone} from 'react-icons/gr'
import {useClient, useFormValue} from 'sanity'
import {deepUpdateKeys} from '@/utils/deepUpdateKeys' // TODO: Move to bolts
import {findPath} from '@gearbox-built/bolts'

interface DocumentReference {
  _ref: string
  _type: 'reference'
}
interface DocumentValue {
  [key: string]: DocumentReference | string
  _key: string
  _type: string
}

const SharedComponentInput = forwardRef<HTMLDivElement, ObjectInputProps>((props, ref) => {
  const {schemaType, id, path} = props
  const client = useClient({apiVersion: import.meta.env.SANITY_STUDIO_API_VERSION})
  const [isExtracting, setIsExtracting] = useState<boolean>(false)
  const toast = useToast()
  const parentDoc = useFormValue([]) as SanityDocument
  const docRef = useFormValue([...path, schemaType.name]) as DocumentReference
  const {_key: indexKey} = useFormValue(path) as DocumentValue

  const toastWarning = (message: string) => toast.push({status: 'warning', title: message})
  const toastSuccess = (message: string) => toast.push({status: 'success', title: message})

  const abortExtracting = () => setIsExtracting(false)

  const onExtract = async () => {
    setIsExtracting(true)

    if (!docRef || !parentDoc) return abortExtracting()
    const referenceId = docRef._ref

    const position = findPath(
      parentDoc,
      (k, v) => typeof v === 'object' && '_key' in v && v._key === indexKey
    )[0]
    if (!position) return abortExtracting()

    const refDoc = await client.getDocument(referenceId)
    if (!refDoc) return abortExtracting()
    deepUpdateKeys(refDoc)

    if (!Array.isArray(refDoc.components) || refDoc.components.length < 1) {
      toastWarning('No components to extract!')
      return abortExtracting()
    }

    await client
      .patch(parentDoc._id)
      .insert('after', position, refDoc.components)
      .commit({autoGenerateArrayKeys: true})
    await client.patch(parentDoc._id).unset([id]).commit()
    toastSuccess('Successfully Extracted!')
    abortExtracting()
  }

  return (
    <Stack ref={ref}>
      <Card padding={2}>
        <Stack space={4}>
          {props.renderDefault(props)}
          <Button
            aria-label="Extract"
            disabled={!docRef || isExtracting}
            onClick={onExtract}
            tone="primary"
          >
            <Flex align="center" direction="row" gap={3} justify="center" padding={1}>
              <Text muted>{isExtracting ? <Spinner /> : <GrClone />}</Text>
              <Text size={2} weight="bold">
                {isExtracting ? 'Extracting...' : 'Extract'}
              </Text>
            </Flex>
          </Button>
        </Stack>
      </Card>
    </Stack>
  )
})

export default SharedComponentInput
