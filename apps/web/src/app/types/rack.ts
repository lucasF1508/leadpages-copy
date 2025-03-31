import type { RackComponentList } from '@/components/Rack'

export type BackgroundColor = 'primary' | 'secondary'
export type Align = 'center' | 'left' | 'right'

export interface RackInnerComponent {
  _key: string
  _type: keyof typeof RackComponentList
  align?: Align
  backgroundColor?: BackgroundColor
}
