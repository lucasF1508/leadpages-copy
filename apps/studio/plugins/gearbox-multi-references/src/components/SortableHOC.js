import React from 'react'
import {
  SortableContainer,
  SortableElement,
  sortableHandle,
} from 'react-sortable-hoc'
import { components } from 'react-select'

const arrayMove = (array, from, to) => {
  array = array.slice()
  array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0])
  return array
}

const SortableMultiValue = SortableElement((props) => {
  const onMouseDown = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }
  const innerProps = { ...props.innerProps, onMouseDown }

  return <components.MultiValue {...props} innerProps={innerProps} />
})

const SortableMultiValueLabel = sortableHandle((props) => (
  <components.MultiValueLabel {...props} />
))

export {
  SortableContainer,
  SortableMultiValue,
  SortableMultiValueLabel,
  arrayMove,
}
