export const removeProps = (props: Record<string, any>, keys: string[]) =>
  Object.keys(props).reduce((acc, key) => {
    if (!keys.includes(key)) acc[key] = props[key]
    return acc
  }, {} as Record<string, any>)
