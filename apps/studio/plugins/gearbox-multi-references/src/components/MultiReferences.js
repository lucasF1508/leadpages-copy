import React, { useRef, useState, useEffect } from 'react'
import sanityClient from 'part:@sanity/base/client'
import FormField from 'part:@sanity/components/formfields/default'
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event'
import Select from 'react-select'
import {
  SortableContainer,
  SortableMultiValue,
  SortableMultiValueLabel,
  arrayMove,
} from './SortableHOC'

const client = sanityClient.withConfig({ apiVersion: '2021-06-15' })

const createPatchFrom = (value) =>
  PatchEvent.from(value === '' ? unset() : set(value))

const SortSelect = SortableContainer(Select)

export const convertOptions = (items = [], to = 'option') => {
  if (!items) return []

  switch (to) {
    case 'option':
      return items.map(({ title, _id }) => {
        return { label: title, value: _id }
      })
    case 'reference':
      return items.map(({ value }) => {
        return {
          _type: 'reference',
          _ref: value,
        }
      })
    default:
      return items
  }
}

export const MultiReferences = React.forwardRef((props, ref) => {
  const { onChange, type } = props
  const {
    options: { referenceTypes },
  } = type

  const [options, setOptions] = useState([])
  const [selected, setSelected] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const handleFieldChange = (inputData = [], action) => {
    switch (action) {
      case 'select-option':
      case 'remove-value':
      case 'clear':
        setSelected(inputData)
        onChange(createPatchFrom(convertOptions(inputData, 'reference')))
        break
      default:
        break
    }
  }

  const onSortEnd = ({ oldIndex, newIndex }) =>
    handleFieldChange(arrayMove(selected, oldIndex, newIndex), 'select-option')

  const setReferenceOptions = async () => {
    const referenceArray = Array.isArray(referenceTypes)
      ? referenceTypes
      : [referenceTypes]
    const query = referenceArray
      .map((refType) => `_type == "${refType}"`)
      .join(' || ')

    const items = await client.fetch(`
      *[(${query}) && !(_id in path('drafts.**'))] {
        title,
        _type,
        _id
      }
    `)

    setIsLoading(false)
    setOptions(
      convertOptions(
        items.filter(({ _id }) => !_id.includes('draft')),
        'option'
      )
    )

    if (props.value) {
      setSelected(
        convertOptions(
          props.value.map(({ _ref }) => {
            const { title } = items.find(({ _id }) => _id === _ref)
            return { title, _id: _ref }
          }),
          'option'
        )
      )
    }
  }

  useEffect(() => {
    setReferenceOptions()
  }, [])

  return (
    <FormField label={type.title} description={type.description}>
      <SortSelect
        id={type.name}
        name={type.name}
        instanceId={type.name}
        ref={ref}
        useDragHandle
        axis="xy"
        onSortEnd={onSortEnd}
        distance={4}
        getHelperDimensions={({ node }) => node.getBoundingClientRect()}
        components={{
          MultiValue: SortableMultiValue,
          MultiValueLabel: SortableMultiValueLabel,
        }}
        disabled={isLoading}
        isLoading={isLoading}
        closeMenuOnSelect={false}
        isMulti
        options={options}
        openMenuOnClick={false}
        onChange={(patchEvent, { action }) =>
          handleFieldChange(patchEvent, action)
        }
        noOptionsMessage={() => 'No References found. Check your schema config'}
        value={selected}
        styles={{
          multiValue: (provided) => {
            return {
              ...provided,
              zIndex: 1000,
            }
          },
          menu: (provided) => {
            return {
              ...provided,
              zIndex: 1000,
            }
          },
        }}
        blurInputOnSelect
      />
    </FormField>
  )
})

export default MultiReferences
