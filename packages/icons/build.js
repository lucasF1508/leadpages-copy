/* eslint-disable no-console */
const fs = require('fs')
const { JSDOM } = require('jsdom')
const { toWords } = require('number-to-words')
const path = require('path')

// Configuration
const OUTPUT_DIRECTORY = './all'
const SVG_DIRECTORY = './svgs'

const outputIconsDirectory = path.join(OUTPUT_DIRECTORY)
const indexFilePath = path.join(OUTPUT_DIRECTORY, 'index.js')
const declarationFilePath = path.join(OUTPUT_DIRECTORY, 'index.d.ts')

// Helper function to convert dashed names to camelCase
const toCamelCase = (_str) => {
  const str = ['delete', 'export', 'new', 'package', 'switch'].includes(_str)
    ? `_${_str}`
    : _str

  return str
    .replace(/-([a-z])/g, (match, letter) => letter.toUpperCase()) // Convert dashes to camelCase
    .replace(/[^a-zA-Z0-9_]/g, '') // Remove invalid characters (e.g., special chars)
}

// Helper function to ensure variable names are valid
const makeValidVariableName = (name) => {
  const camelCased = toCamelCase(name)
  // If the name starts with a number, convert the number to words and capitalize the next character
  if (/^[0-9]/.test(camelCased)) {
    const numberPart = camelCased.match(/^\d+/)[0] // Extract numeric prefix
    const wordPart = toCamelCase(toWords(parseInt(numberPart, 10))) // Convert number to words
    const restOfName = camelCased.replace(/^\d+/, '') // Remove numeric prefix from name
    return `${wordPart}${restOfName.charAt(0).toUpperCase()}${restOfName.slice(
      1
    )}` // Capitalize the first letter of the rest
  }
  return camelCased
}

const generateIcons = async () => {
  // Ensure the output directory exists
  if (!fs.existsSync(outputIconsDirectory)) {
    fs.mkdirSync(outputIconsDirectory, { recursive: true })
    console.log(`Created output directory: ${OUTPUT_DIRECTORY}`)
  }

  const svgFiles = fs
    .readdirSync(SVG_DIRECTORY)
    .filter((file) => file.endsWith('.svg'))
  const exports = []

  console.log(`Creating icon index from ${svgFiles.length} SVG files...`)
  for (const file of svgFiles) {
    const filePath = path.join(SVG_DIRECTORY, file)
    const svgContent = fs.readFileSync(filePath, 'utf-8')

    const dom = new JSDOM(svgContent)
    const svgElement = dom.window.document.querySelector('svg')

    if (!svgElement) continue

    const width = svgElement.getAttribute('width')
    const height = svgElement.getAttribute('height')
    const pathElements = svgElement.querySelectorAll('path')
    const pathData = pathElements
      ? Array.from(pathElements).map((pathElement) =>
          pathElement.getAttribute('d')
        )
      : null

    const strokeData = pathElements
      ? Array.from(pathElements).map((pathElement) => ({
          clipRule: pathElement.getAttribute('clip-rule'),
          fill: pathElement.getAttribute('fill'),
          fillRule: pathElement.getAttribute('fill-rule'),
          stroke: pathElement.getAttribute('stroke'),
          strokeLinecap: pathElement.getAttribute('stroke-linecap'),
          strokeLinejoin: pathElement.getAttribute('stroke-linejoin'),
          strokeWidth: parseFloat(pathElement.getAttribute('stroke-width')),
        }))
      : null

    if (!pathData) continue

    const originalName = path.basename(file, '.svg') // Original file name
    const variableName = makeValidVariableName(originalName) // Convert to valid JS variable name

    const iconData = {
      height: parseFloat(height) || null,
      originalName,
      path: pathData,
      stroke: strokeData,
      width: parseFloat(width) || null,
    }

    // Write the individual icon file
    const iconFileContent = `export const ${variableName} = ${JSON.stringify(
      iconData
    )};`
    const iconFilePath = path.join(outputIconsDirectory, `${originalName}.js`)
    fs.writeFileSync(iconFilePath, iconFileContent)

    // Add export to the main index.js file
    exports.push(`import {${variableName}} from './${originalName}.js';`)
  }

  // Write the main index.js file with all exports collected
  const indexFileContent = `
    ${exports.join(' ')}
  export const all = {${svgFiles
    .map((file) => {
      const originalName = path.basename(file, '.svg')
      const variableName = makeValidVariableName(originalName)
      return `${variableName}`
    })
    .join(',')}};
  export {${svgFiles
    .map((file) => {
      const originalName = path.basename(file, '.svg')
      const variableName = makeValidVariableName(originalName)
      return `${variableName}`
    })
    .join(',')}};
  export default all;  
    `
  fs.writeFileSync(indexFilePath, indexFileContent.trim())

  console.log(`Index file generated at ${indexFilePath}`)

  // Create individual *.d.ts file for each icon
  console.log(`Generating individual *.d.ts file for each icon...`)
  for (const file of svgFiles) {
    const originalName = path.basename(file, '.svg') // Original file name
    const variableName = makeValidVariableName(originalName) // Convert to valid JS variable

    const iconDeclarationPath = path.join(
      outputIconsDirectory,
      `${originalName}.d.ts`
    )
    const iconDeclarationContent = `import type { IconData } from '../Icon';\nexport const ${variableName}: IconData;\n`
    fs.writeFileSync(iconDeclarationPath, iconDeclarationContent)
  }

  // Create a declaration file all/index.d.ts for all icons
  const declarationFileContent = `
  import type { IconData } from '../Icon';
  declare module "icons/all" {
${svgFiles
  .map((file) => {
    const originalName = path.basename(file, '.svg') // Original file name
    const variableName = makeValidVariableName(originalName) // Convert to valid JS variable
    return `export const ${variableName}: IconData;`
  })
  .join(' ')}
};`

  fs.writeFileSync(declarationFilePath, declarationFileContent.trim(), 'utf-8')
  console.log(`Declaration file generated at ${declarationFilePath}`)
}

generateIcons().catch((err) => {
  console.error('Error generating icons:', err)
})
