const isJSON = (str: string) => {
  try {
    const obj = JSON.parse(str)
    if (obj && typeof obj === 'object' && obj !== null) {
      return true
    }
  } catch (err) {
    console.error('Text provided is not valid JSON:', err)
  }
  return false
}

export default isJSON
