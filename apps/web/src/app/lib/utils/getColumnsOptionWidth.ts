export type ColumnOptionWidthKeysType =
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

// TODO This exists due to tailwind JIY compiler. For now we only need 2 screen sizes but this could be expanded if needed

const getColumnsOptionWidth = (
  key: ColumnOptionWidthKeysType,
  screen: 'md' | 'none' = 'none'
): string =>
  ({
    md: {
      cols1: 'md:max-w-cols1',
      cols2: 'md:max-w-cols2',
      cols3: 'md:max-w-cols3',
      cols4: 'md:max-w-cols4',
      cols5: 'md:max-w-cols5',
      cols6: 'md:max-w-cols6',
      cols7: 'md:max-w-cols7',
      cols8: 'md:max-w-cols8',
      cols9: 'md:max-w-cols9',
      cols10: 'md:max-w-cols10',
      cols11: 'md:max-w-cols11',
      cols12: 'md:max-w-cols12',
    },
    none: {
      cols1: 'max-w-cols1',
      cols2: 'max-w-cols2',
      cols3: 'max-w-cols3',
      cols4: 'max-w-cols4',
      cols5: 'max-w-cols5',
      cols6: 'max-w-cols6',
      cols7: 'max-w-cols7',
      cols8: 'max-w-cols8',
      cols9: 'max-w-cols9',
      cols10: 'max-w-cols10',
      cols11: 'max-w-cols11',
      cols12: 'max-w-cols12',
    },
  }[screen][key])

export default getColumnsOptionWidth
