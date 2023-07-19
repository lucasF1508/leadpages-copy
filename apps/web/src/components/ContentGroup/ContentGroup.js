import React from 'react'
import { styled } from '@design'
import Label from '@components/Label'
import Heading from '@components/Heading'
import Text from '@components/Text'
import Link from '@components/Link'
import { m as motion } from 'framer-motion'
import { group, viewport, item, transition } from '@design/tokens/framerTokens'

const $ContentGroup = styled(motion.div, {
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

const $Label = styled(motion.div, {})
const $Heading = styled(motion.div, {})
const $Text = styled(motion.div, {})
const $Link = styled(motion.div, {})

const ContentGroup = ({
  label,
  heading,
  content,
  link,
  linkStyle = 'button',
  align,
  css: cssOrg = {},
  props: propsOrg = {},
  animate = false,
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
    <$ContentGroup
      css={css}
      align={align}
      variants={animate && group}
      initial={animate && 'hidden'}
      whileInView={animate && 'visible'}
      viewport={animate && viewport}
      {...props}
    >
      {label && (
        <$Label variants={item} transition={transition}>
          <Label
            content={label}
            css={{ c: '$brand', ...labelCss }}
            {...labelProps}
          />
        </$Label>
      )}
      {heading && (
        <$Heading variants={item} transition={transition}>
          <Heading
            heading={heading}
            css={{
              mb: 0,
              ...headingCss,
            }}
            {...headingProps}
          />
        </$Heading>
      )}
      {content && (
        <$Text variants={item} transition={transition}>
          <Text as="div" content={content} css={contentCss} {...contentProps} />
        </$Text>
      )}
      {link && (
        <$Link variants={item} transition={transition}>
          <Link linkStyle={linkStyle} css={linkCss} {...link} {...linkProps} />
        </$Link>
      )}
    </$ContentGroup>
  )
}

export default ContentGroup
