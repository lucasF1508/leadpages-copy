import React from 'react'
import { styled } from '@design'
import Label from '@components/Label'
import Heading from '@components/Heading'
import Text from '@components/Text'
import Link from '@components/Link'

const $ContentGroup = styled('div', {
  position: 'relative',
  d: 'flex',
  ff: 'column nowrap',
  w: '100%',
  gap: '$3',
  mw: '$cols8',

  variants: {
    align: {
      center: {
        jc: 'center',
        ai: 'center',
        ta: 'center',
        mx: 'auto',
      },
      left: {
        jc: 'flex-start',
        ai: 'flex-start',
        ta: 'left',
      },
    },
  },
  defaultVariants: { align: 'center' },
})

const ContentGroup = ({
  label,
  heading,
  content,
  link,
  linkStyle = 'button',
  align,
  css: cssOrg = {},
  props: propsOrg = {},
}) => {
  const {
    label: labelCss,
    heading: headingCss,
    content: contentCss,
    link: linkCss,
    ...css
  } = cssOrg
  const {
    label: labelProps = {},
    heading: headingProps = {},
    content: contentProps = {},
    link: linkProps = {},
    ...props
  } = propsOrg

  return (
    <$ContentGroup css={css} align={align} {...props}>
      {label && (
        <Label
          content={label}
          css={{ c: '$brand', ...labelCss }}
          {...labelProps}
        />
      )}
      {heading && (
        <Heading
          heading={heading}
          css={{
            mb: 0,
            ...headingCss,
          }}
          {...headingProps}
        />
      )}
      {content && (
        <Text as="div" content={content} css={contentCss} {...contentProps} />
      )}
      {link && (
        <Link linkStyle={linkStyle} css={linkCss} {...link} {...linkProps} />
      )}
    </$ContentGroup>
  )
}

export default ContentGroup
