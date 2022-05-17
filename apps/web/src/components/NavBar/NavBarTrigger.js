import React from 'react'
import { styled } from '@design'
import { link as linkTokens } from '@design/tokens/link'
import { FiChevronDown as DownIcon } from '@react-icons/all-files/fi/FiChevronDown'
import { Trigger as NavBarPrimitiveTrigger } from '@radix-ui/react-navigation-menu'
import Text from '@components/Text'

const $NavBarTrigger = styled(NavBarPrimitiveTrigger, {
  position: 'relative',
  d: 'flex',
  ff: 'row nowrap',
  ai: 'center',
})

const $NavBarTriggerIcon = styled(DownIcon, {
  position: 'relative',
  transformOrigin: 'center center',
  w: '$space$2',
  h: '$space$2',
  ml: '0.25rem',
  z: '$under',
  pointerEvents: 'none',

  '[data-state=open] &': {
    transform: 'scaleY(-1)',
  },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'transform $base',
  },
})

const NavBarTrigger = ({ label, columns }, ref) => (
  <$NavBarTrigger ref={ref} data-columns={columns}>
    <Text
      as="span"
      tagStyle="textSm"
      content={label}
      css={{
        ...linkTokens,
        d: 'block',
        py: '$2',
        transition: 'color $base',

        '[data-state="open"] &': {
          c: '$hover',
        },
      }}
    />
    <$NavBarTriggerIcon aria-hidden />
  </$NavBarTrigger>
)

export default React.forwardRef(NavBarTrigger)
