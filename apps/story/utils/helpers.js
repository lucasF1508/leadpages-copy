import startCase from 'lodash/startCase'
import lowerCase from 'lodash/lowerCase'

/**
 * @summary Creates an object that works for 'argTypes' in Storybook.
 * This function maps over each object and creates a default template for that arg.
 * Any custom fields provided in the arguments will overwrite the corresponding default values.
 * @see {@link https://storybook.js.org/docs/react/api/argtypes}
 * Example input:
 * argTypesTemplate([{ arg: "Heading", description: "Test description", ...other options}, { arg: "content }, { arg: 'meta' }])
 * @param {array} args=[] - Accepts an array of objects.
 */

export const argTypesTemplate = (args = []) => {
  return args
    .map(({ arg, ...props }) => ({
      [arg]: {
        name: startCase(arg),
        description: `Change the ${lowerCase(
          arg
        )} text in the box on the right.`,
        control: {
          type: 'text',
        },
        table: {
          defaultValue: { disable: true },
        },
        ...props,
      },
    }))
    .reduce((finalTemplate, arg) => Object.assign(finalTemplate, arg), {})
}
