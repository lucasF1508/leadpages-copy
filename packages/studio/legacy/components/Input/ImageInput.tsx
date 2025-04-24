import type {
  FormPatch,
  ImageValue,
  ObjectInputProps,
  ObjectSchemaType,
  PatchEvent,
  SanityClient,
} from 'sanity'
import React from 'react'
import {ImageInput as SanityImageInput, set, unset, useClient, useTranslation} from 'sanity'

const SANITY_STUDIO_API_VERSION = import.meta.env.SANITY_STUDIO_API_VERSION

const getImage = async (assetPatch: FormPatch, client: SanityClient) => {
  if (
    !assetPatch ||
    !('value' in assetPatch) ||
    typeof assetPatch.value !== 'object' ||
    !('_ref' in assetPatch.value)
  ) {
    return undefined
  }

  const {_ref} = assetPatch.value

  const lqip = await client.fetch(`*[_id == "${_ref}"][0].metadata.lqip`)

  return lqip
}

const ImageInput = (props: ObjectInputProps<ImageValue, ObjectSchemaType>) => {
  const client = useClient({apiVersion: SANITY_STUDIO_API_VERSION})
  const {onChange: _onChange} = props
  const {t} = useTranslation()

  const onChange = (onChangeProps: FormPatch | FormPatch[] | PatchEvent) => {
    if (!Array.isArray(onChangeProps)) {
      return _onChange(onChangeProps)
    }

    const assetPatch = onChangeProps.find(({path}) => path.includes('asset'))

    if (assetPatch && assetPatch.type === 'unset') {
      return _onChange([unset(['lqip']), ...onChangeProps])
    }

    if (
      !assetPatch ||
      !('value' in assetPatch) ||
      typeof assetPatch.value !== 'object' ||
      !('_ref' in assetPatch.value) ||
      typeof assetPatch.value._ref !== 'string'
    ) {
      return _onChange(onChangeProps)
    }

    getImage(assetPatch, client).then((lqip) => {
      _onChange(set(lqip, ['lqip']))
    })

    return _onChange(onChangeProps)
  }

  return <SanityImageInput t={t} {...props} onChange={onChange} />
}

export default ImageInput
