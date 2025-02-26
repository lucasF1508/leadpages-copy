import * as formInputsSchema from './formFields'
import {F} from '@/schema/tool'

export const schemaFormFields = F.array({
  name: 'formFields',
  title: 'Fields',
  of: Object.values(formInputsSchema).map((formInputSchema) => formInputSchema),
})
