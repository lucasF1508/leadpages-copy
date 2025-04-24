import type {BlockStyleProps} from 'sanity'
import React from 'react'

type StyleProps = {
  style?: React.CSSProperties
  tag?: keyof JSX.IntrinsicElements
  title: string
  value: string
}

const createStyle = ({tag, style, title, value}: StyleProps) => {
  const component = (props: BlockStyleProps) => {
    const Tag = tag || 'span'
    const [child] = Array.isArray(props.children) ? props.children : [props.children]
    const isCentered = child.props?.text?.marks?.includes('align')

    return (
      <Tag style={{...style, ...(isCentered ? {textAlign: 'center'} : {})}}>{props.children}</Tag>
    )
  }

  return {
    title,
    value,
    ...(tag || style ? {component} : {}),
  }
}

const createStyles = (styles: Record<string, StyleProps>) =>
  Object.entries(styles).reduce((acc, [key, props]) => {
    acc[key] = createStyle(props)
    return acc
  }, {} as Record<string, StyleProps>)

export const styles = createStyles({
  smallest: {
    title: 'Body - Extra Small',
    value: 'xsmall',
    style: {fontSize: '0.875em'},
  },
  smaller: {
    title: 'Body - Small',
    value: 'small',
    style: {fontSize: '1em'},
  },
  normal: {
    title: 'Body - Medium (Default)',
    value: 'normal',
    style: {fontSize: '1.125em'},
  },
  larger: {
    title: 'Body - Large',
    value: 'large',
    style: {fontSize: '1.25em'},
  },
  h1: {
    title: 'H1',
    value: 'h1',
    tag: 'h1',
    style: {fontSize: '40px', margin: 0},
  },
  h2: {
    title: 'H2',
    value: 'h2',
    tag: 'h2',
    style: {fontSize: '32px', margin: 0},
  },
  h3: {title: 'H3', value: 'h3', style: {fontSize: '24px', margin: 0}},
  h4: {title: 'H4', value: 'h4', style: {fontSize: '20px', margin: 0}},
  h5: {title: 'H5', value: 'h5'},
  h6: {title: 'H6', value: 'h6'},
  overline: {
    title: 'Overline',
    value: 'overline',
    style: {fontSize: '0.875em', fontWeight: 600, textTransform: 'uppercase'},
  },
  blockquote: {title: 'Quote', value: 'blockquote'},
})

export default Object.values(styles)
