import isEmpty from 'lodash/isEmpty'

export const truncateWords = (string, length = 25, omission = '…') => {
  const truncated = string?.split(/\s/).splice(0, length).join(' ')
  return truncated.length < string.length && !isEmpty(omission)
    ? truncated.replace(/[\s|.,!?]+$/i, '') + omission
    : string
}

export default truncateWords
