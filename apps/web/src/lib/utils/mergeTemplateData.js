const isObject = (obj) => obj && typeof obj === 'object' && !Array.isArray(obj)

const mergeTemplateData = (templateData, templateSettingsData) => {
  const result = {}

  const keys = new Set([
    ...Object.keys(templateSettingsData || {}),
    ...Object.keys(templateData || {}),
  ])

  keys.forEach((key) => {
    const valueFromTemplate = templateData ? templateData[key] : undefined
    const valueFromSettings = templateSettingsData
      ? templateSettingsData[key]
      : undefined

    if (isObject(valueFromTemplate) && isObject(valueFromSettings)) {
      result[key] = mergeTemplateData(valueFromTemplate, valueFromSettings)
    } else if (
      Array.isArray(valueFromTemplate) ||
      Array.isArray(valueFromSettings)
    ) {
      if (valueFromTemplate?.length > 0) {
        result[key] = valueFromTemplate
      } else {
        result[key] = valueFromSettings
      }
    } else {
      result[key] =
        valueFromTemplate !== null && valueFromTemplate !== undefined
          ? valueFromTemplate
          : valueFromSettings
    }
  })

  return result
}

export { mergeTemplateData }
