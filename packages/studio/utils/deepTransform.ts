import isObject from 'lodash/isObject'
import toPairs from 'lodash/toPairs'
import transform from 'lodash/transform'

type TransformFunc = (key: string, value: any) => Record<string, any>

export const deepTransform = (obj: Record<string, any>, func: TransformFunc) =>
  transform(obj, (acc: Record<string, any>, val: any, key: string) => {
    const [pair] = toPairs(func(key, val)) // use the func and get a pair of key and value
    if (!pair) return // if pair is undefined, continue to next iteration
    const [k, v] = pair // get the update key and value from the pair

    // set the updated key and value, and if the value is an object iterate it as well
    acc[k] = isObject(v) ? deepTransform(v, func) : v
  })

export default deepTransform
