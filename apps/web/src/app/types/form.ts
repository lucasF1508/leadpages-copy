// import type { FormProps } from '@/components/Form'
// import type { FormFieldProps } from '@/components/Form/FormField'
import type { InputsListProps } from '@/components/Form/Inputs'
import type { InputProps } from '@/components/Form/Inputs/Input'
import type {
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  UseFormReturn,
  UseFormProps as UseReactHookFormProps,
} from 'react-hook-form'

export interface InputOption {
  label: string
  value: string
}

export interface FormType {
  confirmation?: string
  fields?: InputsListProps[]
  name?: string
  notificationEmail?: string
  submitText?: string
}

export interface UseFormProps {
  config?: UseReactHookFormProps
  form: FormType
}

export interface useFormContextProps
  extends UseFormReturn{
  formError: null | string
  isLoading: boolean
  parseChoices: (text: string) => InputOption[]
}

export type {
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  // FormFieldProps,
  // FormProps,
  InputProps,
  UseFormReturn,
}
