import * as formInputsSchema from './formFields'
import { F } from 'part:gearbox-schema-tool/schema-builder'

export const schemaFormFields = F.array({
  name: 'formFields',
  title: 'Fields',
  of: Object.values(formInputsSchema).map((formInputSchema) => formInputSchema),
})
