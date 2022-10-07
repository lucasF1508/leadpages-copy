export const hexToRgb = (hex) => {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  const expandedHex = hex.replace(
    shorthandRegex,
    (m, r, g, b) => r + r + g + g + b + b
  )
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(expandedHex)
  return result
    ? {
        red: parseInt(result[1], 16),
        green: parseInt(result[2], 16),
        blue: parseInt(result[3], 16),
      }
    : null
}

export const convertToRGB = (colors) => {
  const colorObj = {}
  Object.keys(colors).forEach((color) => {
    const rgb = {}
    Object.keys(colors[color]).forEach((key) => {
      const { red, green, blue } = hexToRgb(colors[color][key])
      rgb[key] = `${red}, ${green}, ${blue}`
    })
    colorObj[color] = rgb
  })
  return colorObj
}

export const setDarkColorKeys = (darkColor) => {
  const colorKeys = Object.keys(darkColor)
  const [testColor] = colorKeys
  const baseColor = testColor.includes('A')
    ? testColor.slice(0, testColor.indexOf('A'))
    : testColor.slice(0, testColor.indexOf('D'))
  return colorKeys
    .map((key) => ({
      [key.replace(baseColor, `${baseColor}Dark`)]: darkColor[key],
    }))
    .reduce((obj, field) => ({ ...obj, ...field }), {})
}
