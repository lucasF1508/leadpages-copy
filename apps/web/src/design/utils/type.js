import merge from 'lodash/merge'
import { type } from '../tokens/type'

const { fontSizes, fontStyles } = type

const typeFont = merge(fontSizes, fontStyles)

export const getTypeSizes = (variant) => fontSizes[variant]
export const getTypeStyles = (variant) => fontStyles[variant]
export const getType = (variant) =>
  merge(getTypeSizes(variant), getTypeStyles(variant))

export const getTypeUtil = Object.assign(
  {},
  ...Object.keys(typeFont).map((key) => ({
    [key]: typeFont[key],
  }))
)
