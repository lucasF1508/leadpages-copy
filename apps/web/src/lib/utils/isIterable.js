export const isIterable = (obj) => typeof obj[Symbol.iterator] === 'function'
export default isIterable
