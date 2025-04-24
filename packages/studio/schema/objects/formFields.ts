import {F} from '@/schema/tool'
import * as inputs from './inputs'

export const formFields = F.array({
  name: 'formFields',
  title: 'Fields',
  of: Object.values(inputs).map((formInputSchema) => formInputSchema),
})
