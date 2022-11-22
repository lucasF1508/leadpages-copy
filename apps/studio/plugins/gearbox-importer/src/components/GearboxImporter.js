import React, { useState, useRef, useEffect } from 'react'
// import PropTypes from 'prop-types'
import { useId } from '@reach/auto-id' // hook to generate unique IDs

import { Stack, Label, Card, TextInput, useToast } from '@sanity/ui'
import FormField from 'part:@sanity/components/formfields/default'
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event'
import styles from '../styles/index.css'

const createPatchFrom = (value) =>
  PatchEvent.from(value === '' ? unset() : set(value))

export const GearboxImporter = React.forwardRef((props, ref) => {
  const {
    type, // Schema information
    value, // Current field value
    readOnly, // Boolean if field is not editable
    placeholder, // Placeholder text from the schema
    markers, // Markers including validation rules
    presence, // Presence information for collaborative avatars
    compareValue, // Value to check for "edited" functionality
    onFocus, // Method to handle focus state
    onBlur, // Method to handle blur state
    onChange, // Method to handle patch events
  } = props
  const inputId = 'akjsfhhfucv81y3bcka'
  // const { type, value, onChange, focusPath, onFocus, onBlur } = props
  // return null
  //const [value, setValue] = useState('')
  // const { onChange, type, value = {} } = props
  // const {
  //   options: { apiKey, ...options },
  // } = type
  // const { title, description } = type
  // const toast = useToast()
  console.log(inputId)
  return (
    <>
      <Stack space={2}>
        <FormField
          description={type.description} // Creates description from schema
          title={type.title} // Creates label from schema title
          // __unstable_markers={markers} // Handles all markers including validation
          // __unstable_presence={presence} // Handles presence avatars
          // compareValue={compareValue} // Handles "edited" status
          inputId={inputId} // Allows the label to connect to the input field
        >
          <TextInput
            ref={ref}
            className={styles.input}
            fontSize={[2, 2, 3, 4]}
            padding={[3, 3, 4]}
            // onChange={(event) => setValue(event.currentTarget.value)}
            // type="file"

            id={inputId} // A unique ID for this input
            value={value || ''} // Current field value
            readOnly={readOnly} // If "readOnly" is defined make this field read only
            placeholder={placeholder} // If placeholder is defined, display placeholder text
            onFocus={onFocus} // Handles focus events
            onBlur={onBlur} // Handles blur events
          />
        </FormField>
      </Stack>
      {/* <FormField label={title} description={description}>
        <Card padding={4}>
          <TextInput
            ref={ref}
            className={styles.input}
            fontSize={[2, 2, 3, 4]}
            // onChange={(event) => setValue(event.currentTarget.value)}
            type="file"
            padding={[3, 3, 4]}
            placeholder="TextInput"
            focusPath={focusPath}
            // value={value}
          />
        </Card>
      </FormField> */}
    </>
  )
})

GearboxImporter.displayName = 'GearboxImporter'
// GearboxImporter.propTypes = {
//   type: PropTypes.shape({
//     title: PropTypes.string,
//     name: PropTypes.string,
//     options: {
//       apiKey: PropTypes.string.isRequired,
//     },
//   }).isRequired,
//   value: PropTypes.shape({
//     _type: PropTypes.string,
//   }),
//   focusPath: PropTypes.array,
//   onFocus: PropTypes.func.isRequired,
//   onChange: PropTypes.func.isRequired,
//   onBlur: PropTypes.func.isRequired,
// }

export default GearboxImporter
