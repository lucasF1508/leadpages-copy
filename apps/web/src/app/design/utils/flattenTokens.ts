import type { MagicNumbersType, SizeValues } from '@types'

const isMagicNumbersType = (value: any): value is MagicNumbersType => {
  if (typeof value === 'object' && value !== null) return true
  return false
}

const flattenTokens = (
  obj: MagicNumbersType,
  parentKey = '',
  result: Record<string, SizeValues> = {}
) => {
  for (const [_key, value] of Object.entries(obj)) {
    const key = parentKey ? `${parentKey}.${_key}` : _key
    const newKey = _key === 'initial' ? parentKey : key

    if (isMagicNumbersType(value)) {
      flattenTokens(value, newKey, result)
    } else {
      result[newKey] = value
    }
  }

  return result
}

export default flattenTokens
