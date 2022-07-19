export const getSizes = (sizeArray) => {
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
