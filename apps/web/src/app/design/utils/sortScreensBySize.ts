import { screens } from '../tokens/screens'

interface Screens {
  [key: string]: string
}

export const sortScreensBySize = (prevKey: string, currKey: string) => {
  if (prevKey === 'base') return -1
  if (currKey === 'base') return 1

  const prev = (screens as Screens)[prevKey] as string
  const curr = (screens as Screens)[currKey] as string

  return (
    parseFloat(prev.replace(/px|rem|em/, '')) -
    parseFloat(curr.replace(/px|rem|em/, ''))
  )
}
