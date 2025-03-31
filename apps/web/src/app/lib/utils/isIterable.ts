export const isIterable = (obj: any) =>
  typeof obj[Symbol.iterator] === 'function'
export default isIterable
