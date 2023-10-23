export const findValuesForKey = (obj, keyToFind) => {
  const results = []

  function recurse(currentObject) {
    if (Array.isArray(currentObject)) {
      currentObject.forEach((item) => {
        recurse(item)
      })
    } else if (currentObject !== null && typeof currentObject === 'object') {
      if (keyToFind in currentObject) {
        results.push(currentObject[keyToFind])
      }
      Object.keys(currentObject).forEach((key) => {
        recurse(currentObject[key])
      })
    }
  }

  recurse(obj)
  return results
}

export default findValuesForKey
