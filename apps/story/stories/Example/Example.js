import React from 'react'
import { styled } from '@design'
import LogoUrl from '../../static/logo.svg'

export const $Example = styled('div', {
  w: '100%',
  d: 'flex',
  ff: 'row wrap',
  jc: 'center',
  ai: 'center',
})

export const $ExampleImage = styled('img', {
  mw: '12rem',
  ml: 'auto',
  mr: 'auto',
  mb: '1.5rem',
})

export const $ExampleContent = styled('div', {
  f: '1 1 100%',
  ta: 'center',

  '& h3': {
    mb: '0.5rem',
  },
})

export default function Example({ className, heading, content }) {
  return (
    <$Example className={className}>
      <$ExampleImage src={LogoUrl} />
      <$ExampleContent>
        <h3>{heading}</h3>
        <p>{content}</p>
      </$ExampleContent>
    </$Example>
  )
}
