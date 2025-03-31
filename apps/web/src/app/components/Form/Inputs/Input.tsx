import type { ClassValue } from 'clsx'

export interface InputProps
  extends Omit<React.ComponentProps<'input'>, 'className' | 'name' | 'type'> {
  choices?: string
  className?: ClassValue
  classNames?: Record<string, ClassValue>
  defaultValue?: string | string[]
  errorMessage?: string
  hasLabel?: boolean
  label?: string
  name: string
  type: React.HTMLInputTypeAttribute
}
