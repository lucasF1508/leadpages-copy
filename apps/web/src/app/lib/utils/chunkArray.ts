export const chunkArray = (array: any[] = [], chunk = 10) => {
  let temporary = []
  const chuckArray = []

  for (let i = 0; i < array.length; i += chunk) {
    temporary = array.slice(i, i + chunk)
    chuckArray[i / chunk] = temporary
  }

  return chuckArray
}

export default chunkArray
