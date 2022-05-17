import React, { useState } from 'react'
import mockData from './mock-data.json'
import isPlainObject from 'lodash/isPlainObject'
import shuffle from 'lodash/shuffle'
import random from 'lodash/random'

const randomWordCount = ({ randomize, data, index }) => {
  if (index === 0) return data
  const randomData = Object.assign(
    {},
    ...Object.keys(randomize)
      .map((key) => {
        const item = data[key]
        if (!item) return false

        const words = item.split(' ')
        let randomWords = words

        const [min, max] = randomize[key]

        while (max > randomWords.length) {
          randomWords = [...randomWords, ...words]
        }
        return {
          [key]: shuffle(randomWords).slice(0, random(min, max)).join(' '),
        }
      })
      .filter(Boolean)
  )

  return {
    ...data,
    ...randomData,
  }
}

export const mockArray = ({ data, count, randomize = false }) => {
  if (!isPlainObject(data)) {
    console.error(
      `Your data wasn't a plain object. eg: { heading: 'This is a heading' }`,
      data
    )
  }
  const array = []

  for (let index = 0; index < count; index++) {
    const itemData = randomize
      ? randomWordCount({ randomize, data, index })
      : data

    array[index] = {
      ...itemData,
      _key: `key-${index}`,
    }
  }

  return array
}

export const getMockComponentData = (type) => {
  const { components = [] } = mockData || {}
  const component = components.find(({ _type }) => _type === type)

  if (!component) {
    console.error('No Mock Component Data Found For:', type)
  }

  return component
}

export const mockGallery = ({ data: orgData, count }) => {
  const data = Array.isArray(orgData) ? orgData : [orgData]
  const array = []

  for (let index = 0; index < count; index++) {
    array.push(...data)
  }

  return array.map((item, index) => {
    return {
      ...item,
      _key: `key-${index}`,
    }
  })
}
