import React from 'react'
import { styled } from '@design'
import * as Primitives from '@radix-ui/react-progress'

const $Progress = styled(Primitives.Root, {
  p: 'relative',
  o: 'hidden',
  bc: '$progressBackground',
  br: '$pill',
  h: '$space$3',
  w: '100%',
  mw: '$cols3',
})
const $Indicator = styled(Primitives.Indicator, {
  bc: '$white',
  h: '100%',
  transition: '$fancy',
})

const Progress = ({ progress, css: orgCss, ...props }) => {
  const { indicator: indicatorCss, ...css } = orgCss

  return (
    <$Progress value={progress} css={css} {...props}>
      <$Indicator css={{ w: `${progress}%`, ...indicatorCss }} />
    </$Progress>
  )
}

export default Progress
