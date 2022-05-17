export const getSpace = ({ max = 30, step = 8, halfValueLimit = 6 }) => {
  const values = {}

  for (let index = 0; index <= max; index++) {
    const remValue = (step * index) / 16

    if (index <= halfValueLimit) {
      values[`${index}_5`] = `${(step * index) / 16 + 0.25}rem`
    }

    values[index] = `${remValue}rem`
  }

  return values
}
