export type Keys = 'initial' | 'lg' | 'md' | 'sm'

export type SizeValues = { initial: string } & Partial<Record<Keys, string>>

export type MagicNumbersType = {
  [key: string]: SizeValues
}
