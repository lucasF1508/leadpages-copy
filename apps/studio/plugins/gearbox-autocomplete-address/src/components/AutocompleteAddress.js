import React from 'react'
import PropTypes from 'prop-types'
import FormField from 'part:@sanity/components/formfields/default'
import Autocomplete from 'react-google-autocomplete'
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event'
import { useToast } from '@sanity/ui'
import styles from '../styles/index.css'

const createPatchFrom = (value) =>
  PatchEvent.from(value === '' ? unset() : set(value))

const resolveAddress = (data) => {
  if (!data.geometry) {
    return {
      error:
        'No Lat/Lng Found. Please select an address option in the drop down.',
    }
  }

  const {
    geometry: { location },
    address_components,
    place_id: placeId,
  } = data

  const street = address_components
    .map((value) => {
      const [type] = value.types
      return ['street_number', 'route'].includes(type) ? value.long_name : false
    })
    .filter(Boolean)
    .join(' ')

  const region = address_components
    .map((value) => {
      const [type] = value.types
      return ['locality', 'administrative_area_level_1', 'country'].includes(
        type
      )
        ? type === 'administrative_area_level_1'
          ? value.short_name
          : value.long_name
        : false
    })
    .filter(Boolean)
    .join(', ')

  return {
    region,
    street,
    placeId,
    data: address_components,
    cords: {
      lat: location.lat(),
      lng: location.lng(),
    },
  }
}

/**
 * @see {@link https://developers.google.com/maps/documentation/javascript/reference/places-widget#AutocompleteOptions AutocompleteOptions interface options}
 */
export const SanityAddress = React.forwardRef((props, ref) => {
  const { onChange, type, value = {} } = props
  const {
    options: { apiKey, ...options },
  } = type
  const { title, description } = type
  const toast = useToast()

  if (!apiKey) {
    toast.push({
      title: 'Google Maps API Key Undefined. Please check your .env files',
      status: 'error',
      duration: 5000,
      isClosable: true,
    })
    return null
  }

  const onPlaceSelected = (inputData, { value }) => {
    const resolvedAddress = resolveAddress(inputData)
    const { street, region } = resolvedAddress

    const data = {
      ...resolvedAddress,
      label: value || `${street ? street + ', ' : ''}${region}`,
    }

    if (resolvedAddress.error) {
      toast.push({
        title: resolvedAddress.error,
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    } else {
      onChange(createPatchFrom(data))
    }
  }

  return (
    <FormField label={title} description={description}>
      <Autocomplete
        className={styles.input}
        apiKey={apiKey}
        ref={ref}
        onPlaceSelected={onPlaceSelected}
        options={options}
        defaultValue={value?.label}
      />
    </FormField>
  )
})

SanityAddress.propTypes = {
  type: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    options: {
      apiKey: PropTypes.string.isRequired,
    },
  }).isRequired,
  value: PropTypes.shape({
    _type: PropTypes.string,
  }),
  focusPath: PropTypes.array,
  onFocus: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
}

export default SanityAddress
