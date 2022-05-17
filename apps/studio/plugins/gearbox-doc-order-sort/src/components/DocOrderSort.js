import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import FormField from 'part:@sanity/components/formfields/default'
import PatchEvent, { set, unset } from '@sanity/form-builder/PatchEvent'
import update from 'immutability-helper'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import sanityClient from 'part:@sanity/base/client'
import { withDocument } from 'part:@sanity/form-builder'
import { setOrder, setListOrder } from '../functions'
import DocOrderSortDraggableSection from './DocOrderSortDraggableSection'
import {
  getDocTypeFromArrayOfReferences,
  getOrderDocumentGroqQueries,
  getOrderDocumentGroqQueriesRange,
  validateFields,
} from '../functions'

const client = sanityClient.withConfig({ apiVersion: '2021-06-15' })

const createPatchFrom = (value) =>
  PatchEvent.from(value === '' ? unset() : set(value))

export const OrderDocuments = React.forwardRef((props, ref) => {
  const {
    type: {
      title,
      description,
      options: {
        field: docField,
        appendQuery,
        excludeDrafts = true,
        referenceDocumentId = false,
      } = {},
      ...type
    },
    document: { _id, people },
    onChange,
  } = props
  const hasUpdated = useRef(false)
  const docId = _id.replace(/drafts./g, '')
  const docType = getDocTypeFromArrayOfReferences(type)
  const error = validateFields({ docType, docField })

  if (error) {
    console.error(error)
    return null
  }

  const [count, setCount] = useState(0)
  const [documents, setDocuments] = useState([])
  const { docQuery, countQuery } = getOrderDocumentGroqQueries({
    docField,
    docType,
    appendQuery,
    excludeDrafts,
    referenceDocumentId,
  })

  const params = referenceDocumentId ? { ref: docId } : {}

  const getCount = async () => {
    const count = await client.fetch(`${countQuery}`, params)
    setCount(count)
  }

  const getDocuments = async ({ length = documents.length } = {}) => {
    const range = getOrderDocumentGroqQueriesRange({ length })
    const newDocuments = await client.fetch(`${docQuery}${range}`, params)
    return newDocuments
  }

  const getAllDocuments = async ({ length = documents.length } = {}) => {
    let newDocuments = await getDocuments({ length })

    if (count > length + newDocuments.length) {
      const moreDocuments = await getAllDocuments({
        length: newDocuments.length,
      })
      newDocuments = [...newDocuments, ...moreDocuments]
    }

    return newDocuments
  }

  const loadAllDocuments = async () => {
    const allDocuments = await getAllDocuments()
    const peopleOrder = people ? people.map(({ _ref }) => _ref) : []

    const setDocs = [...documents, ...allDocuments].sort((x, y) => {
      const xPos = peopleOrder.includes(x._id)
        ? peopleOrder.indexOf(x._id)
        : allDocuments.length + 1
      const yPos = peopleOrder.includes(y._id)
        ? peopleOrder.indexOf(y._id)
        : allDocuments.length + 1
      return xPos - yPos
    })

    setDocuments(setDocs)
  }

  const moveCard = async (beforeIndex, afterIndex) => {
    const card1 = documents[beforeIndex]
    const card2 = documents[afterIndex]

    hasUpdated.current = true

    setDocuments(
      update(documents, {
        $splice: [
          [beforeIndex, 1],
          [afterIndex, 0, card1],
        ],
      })
    )

    if (!referenceDocumentId) {
      await Promise.all([
        setOrder(card1._id, afterIndex, docField),
        setOrder(card2._id, beforeIndex, docField),
      ]).then(() => {
        hasUpdated.current = false
      })
    }
  }

  const convertToReferences = (docs) => {
    return docs.map(({ _id: _ref }) => ({ _ref, _type: 'reference' }))
  }

  useEffect(() => {
    getCount()
  }, [])

  useEffect(() => {
    if (count === 0) return
    loadAllDocuments()
  }, [count])

  useEffect(() => {
    if (hasUpdated.current && referenceDocumentId && documents.length > 0) {
      onChange(createPatchFrom(convertToReferences(documents)))
      hasUpdated.current = false
    }
  }, [documents])

  if (!documents.length) {
    return null
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <FormField label={title} description={description}>
        <DocOrderSortDraggableSection
          documents={documents}
          count={count}
          type={type}
          moveCard={moveCard}
          getDocuments={getDocuments}
        />
      </FormField>
    </DndProvider>
  )
})

OrderDocuments.propTypes = {
  type: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    of: PropTypes.array.isRequired,
    options: PropTypes.shape({
      field: PropTypes.string.isRequired,
      appendQuery: PropTypes.string,
      excludeDrafts: PropTypes.boolean,
    }).isRequired,
  }).isRequired,
}

export default withDocument(OrderDocuments)
