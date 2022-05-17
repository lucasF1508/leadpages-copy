export const objectToStitchesVariable = (obj) =>
  Object.assign(
    {},
    ...Object.keys(obj)
      .map((parentKey) =>
        Object.keys(obj[parentKey]).map((childKey) => {
          const varName = `${parentKey}${childKey !== 'base' ? childKey : ''}`
          return {
            [varName]: obj[parentKey][childKey],
          }
        })
      )
      .flat()
  )
