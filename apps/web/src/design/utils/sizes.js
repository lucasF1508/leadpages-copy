export const getSizes = (sizeArray) => {
  // if (!Array.isArray(sizeArray) || sizeArray?.length !== 4) {
  //   console.warn(
  //     'LP Warn: You are attempting to use the <SpacerRow> component without passing in a valid sizeArray in the form of an array with one rem value per standard repo breakpoint (>992, >576, >340, <340) (e.g. sizeArray={[6, 4, 2, 1]}.'
  //   )
  //   return undefined
  // }

  const [bp1, bp2, bp3, bp4] = sizeArray.map((value) => `${value}rem`)
  console.log(bp1)

  return {
    h: bp1,

    '@media (max-width: 992px)': {
      h: bp2,
    },

    '@media (max-width: 576px)': {
      h: bp3,
    },

    '@media (max-width: 340px)': {
      h: bp4,
    },
  }
}
