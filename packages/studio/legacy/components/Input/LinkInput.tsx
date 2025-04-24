import type {FieldProps, FormPatch, InputProps, ObjectInputProps, PatchEvent} from 'sanity'
import React from 'react'
import {useToast} from '@sanity/ui'
import {ObjectInput, setIfMissing, unset, useClient} from 'sanity'

type OnChangePropsType = FormPatch | FormPatch[] | PatchEvent
type FieldPropsType<T> = Omit<T, 'renderDefault'>

const SANITY_STUDIO_API_PROJECT_ID = import.meta.env.SANITY_STUDIO_API_PROJECT_ID
const SANITY_STUDIO_API_DATASET_LEGACY = import.meta.env.SANITY_STUDIO_API_DATASET_LEGACY
const SANITY_STUDIO_API_VERSION = import.meta.env.SANITY_STUDIO_API_VERSION

const LinkInput = (props: ObjectInputProps) => {
  const {renderInput: _renderInput, renderField: _renderField, onChange, members} = props
  const toast = useToast()
  const client = useClient({apiVersion: SANITY_STUDIO_API_VERSION})

  const onPageChange = (onChangeProps: OnChangePropsType) => {
    if (!Array.isArray(onChangeProps)) {
      return undefined
    }

    const operation = onChangeProps.find(({path}) => path.includes('_ref'))

    if (!operation || !('value' in operation) || !operation?.value) {
      return undefined
    }

    const {value: pageRef} = operation

    return client.fetch(`*[_id == "${pageRef}"][0]{ title, path }`).then(({title, path} = {}) => {
      if (!path) {
        console.error('Error did not find a path for document', {
          documentID: pageRef,
          title,
          path,
        })
        toast.push({
          title: 'Error: did not find a path.',
          description:
            'There was an error getting the url to that document. Check your console for more information.',
          status: 'error',
        })
        return undefined
      }

      if (members.some(({key}) => key === 'field-label')) {
        onChange([setIfMissing(title, ['label'])])
      }

      return onChange([unset(['url']), setIfMissing(path, ['url'])])
    })
  }

  const onFileChange = (onChangeProps: OnChangePropsType) => {
    if (!Array.isArray(onChangeProps) && 'patches' in onChangeProps && !onChangeProps?.patches) {
      return undefined
    }

    const _patches = 'patches' in onChangeProps ? onChangeProps.patches : onChangeProps
    const patches = Array.isArray(_patches) ? _patches : [_patches]

    if (patches?.length && patches.some(({type, path}) => type === 'unset' && !path.length)) {
      return onChange([unset(['url'])])
    }

    const assetPatch = patches.find(({path}) => path.includes('asset'))

    if (
      !assetPatch ||
      !('value' in assetPatch) ||
      typeof assetPatch.value !== 'object' ||
      !('_ref' in assetPatch.value) ||
      typeof assetPatch.value._ref !== 'string'
    ) {
      return undefined
    }

    const [type, hash, extension] = assetPatch.value._ref.split('-')
    const url = `https://cdn.sanity.io/${type}s/${SANITY_STUDIO_API_PROJECT_ID}/${SANITY_STUDIO_API_DATASET_LEGACY}/${hash}.${extension}`

    return onChange([unset(['url']), setIfMissing(url, ['url'])])
  }

  const clearUrlOnField = (fieldProps: FieldPropsType<FieldProps>) =>
    _renderField({
      ...fieldProps,
      inputProps: {
        ...fieldProps.inputProps,
        onChange: (onChangeProps) => {
          onChange([unset(['url'])])
          return fieldProps.inputProps.onChange(onChangeProps)
        },
      },
    })

  const renderField = (fieldProps: FieldPropsType<FieldProps>) => {
    const fieldKey = fieldProps.inputId.split('.').at(-1)

    switch (fieldKey) {
      case 'page':
      case 'file':
        return clearUrlOnField(fieldProps)
      default:
        return _renderField(fieldProps)
    }
  }

  const renderInput = (inputProps: FieldPropsType<InputProps>) => {
    const inputKey = inputProps.id.split('.').at(-1)

    switch (inputKey) {
      case 'condition':
        return _renderInput({
          ...inputProps,
          onChange: (props) => {
            onChange([unset(['file']), unset(['page']), unset(['url'])])
            return inputProps.onChange(props)
          },
        })
      case 'page':
        return _renderInput({
          ...inputProps,
          onChange: (onChangeProps) => {
            onPageChange(onChangeProps)
            return inputProps.onChange(onChangeProps)
          },
        })
      case 'file':
        return _renderInput({
          ...inputProps,
          onChange: (onChangeProps) => {
            onFileChange(onChangeProps)
            return inputProps.onChange(onChangeProps)
          },
        })

      default:
        return _renderInput(inputProps)
    }
  }

  return <ObjectInput {...props} renderField={renderField} renderInput={renderInput} />
}

export default LinkInput
