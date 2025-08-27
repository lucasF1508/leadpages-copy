import type { RackComponentList } from '@/components/Rack'

export type BackgroundColor = 'primary' | 'secondary'
export type Align = 'center' | 'left' | 'right'

export interface RackInnerComponent {
  _key: string
  _type: keyof typeof RackComponentList
  alignment?: Align
  backgroundColor?: BackgroundColor
  columnsWidth?: ColumnsWidth
}

export type ColumnsWidth =
  | 'cols1'
  | 'cols2'
  | 'cols3'
  | 'cols4'
  | 'cols5'
  | 'cols6'
  | 'cols7'
  | 'cols8'
  | 'cols9'
  | 'cols10'
  | 'cols11'
  | 'cols12'
