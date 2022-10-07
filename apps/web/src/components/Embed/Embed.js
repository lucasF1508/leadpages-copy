import React from 'react'
import { styled } from '@design'
import useScriptEmbed from '@hooks/useScriptEmbed'

const $Embed = styled('div', {
  '> *': {
    maxWidth: '100%',
  },
  variants: {
    isResponsive: {
      true: {
        position: 'relative',
        '> *': {
          position: 'absolute',
          inset: '0',
          height: '100%',
          width: '100%',
        },
      },
    },
  },
})

const Embed = ({
  css: cssOrg = {},
  code,
  isResponsive,
  ratio = '16:9',
  ...props
}) => {
  const css = isResponsive
    ? {
        ratio,
        ...cssOrg,
      }
    : cssOrg

  const { components } = useScriptEmbed({
    htmlString: code,
  })

  return (
    <>
      <$Embed isResponsive={isResponsive} css={css} {...props}>
        {components && components}
      </$Embed>
    </>
  )
}

export default Embed
