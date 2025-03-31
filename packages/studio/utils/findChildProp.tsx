import React from 'react'

export const flattenChildren = (children: React.ReactNode): React.ReactElement[] => {
  return React.Children.toArray(children).reduce<React.ReactElement[]>((flat, child) => {
    if (React.isValidElement(child)) {
      return flat.concat(child, flattenChildren(child.props.children))
    }
    return flat
  }, [])
}

export const findChildProp = (children: React.ReactNode, propValue: string): boolean => {
  const flatChildren = flattenChildren(children)
  return flatChildren.some((child) => {
    if (React.isValidElement(child)) {
      const element = child as React.ReactElement
      return element.props.value === propValue
    }
    return false
  })
}

export default findChildProp
