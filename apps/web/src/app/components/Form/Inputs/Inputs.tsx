import type { InputProps } from '@types'

export interface InputsListProps extends Omit<InputProps, 'type'> {
  _key: string
  _type: string
}
