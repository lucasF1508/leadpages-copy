import uid from '@sanity/uuid'

const plainTextToPortable = (inputText: string, style = 'normal') => {
  if (!inputText || typeof inputText !== 'string') {
    return []
  }

  return inputText
    .split(/\r?\n/) // split by newlines
    .filter((line: string) => line.trim() !== '') // ignore empty lines
    .map((line: string) => ({
      _key: uid,
      _type: 'block',
      children: [
        {
          _key: uid,
          _type: 'span',
          marks: [],
          text: line
        }
      ],
      markDefs: [],
      style
    }))
  }

    export default plainTextToPortable;