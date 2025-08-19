export const remToPixels = (
  _value?: number | string,
  remValue: number = 16
) => {
  if (!_value) return null

  const value =
    typeof _value === 'string' ? parseFloat(_value.replace('rem', '')) : _value

  if (Number.isNaN(value)) return null

  return value * remValue
}

export default remToPixels