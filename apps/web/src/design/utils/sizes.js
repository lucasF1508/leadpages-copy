export const getSizes = (sizeArray) => {
  if (sizeArray?.length !== 4) {
    console.warn(
      'LP Warn: You are attempting to use the <SpacerRow> component without passing in a valid sizeArray in the form of an array with one rem value per standard repo breakpoint (>992, >576, >340, <340) (e.g. sizeArray={[6, 4, 2, 1]}.'
    )
    return
  }

  const [bp1, bp2, bp3, bp4] = sizeArray.map((value) => `${value}rem`)

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
