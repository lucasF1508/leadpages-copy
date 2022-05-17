import React from 'react'
import { styled, keyframes } from '@design'
import * as Primitives from '@radix-ui/react-accordion'
import { FiChevronDown } from '@react-icons/all-files/fi/FiChevronDown'
import Text from '@components/Text'

const open = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
})

const close = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
})

export const $Accordion = styled(Primitives.Root, {})

export const $AccordionHeader = styled(Primitives.Header, {
  d: 'flex',
  py: '$2',
  mb: 0,
  box: [{ property: 'px' }, { property: 'mx', multiplier: -1 }],

  svg: {
    transition: 'transform 300ms',
  },

  '&[data-state=open]': {
    svg: {
      transform: 'scaleY(-1)',
    },
  },

  '&[data-state=closed] svg': {
    transform: 'scaleY(1)',
  },

  variants: {
    isNav: {
      true: {
        '&[data-state=open]': {
          bc: '$hover',
        },
      },
    },
  },
})

export const $AccordionItem = styled(Primitives.Item, {
  d: 'block',
  bt: '1px solid $colors$border',

  '&:last-child': {
    bb: '1px solid $colors$border',
  },

  variants: {
    isNav: {
      true: {
        box: { property: 'px' },
      },
    },
  },
})

export const $AccordionTrigger = styled(Primitives.Trigger, {
  position: 'relative',
  pr: '$4',
  w: '100%',
  cursor: 'pointer',
  ta: 'left',
  type: 'button',
  fontWeight: '$medium',
  fontFamily: '$base',

  variants: {
    isNav: {
      true: {
        c: '$text',
      },
    },
  },
})

export const $AccordionContent = styled(Primitives.Content, {
  overflow: 'hidden',
  box: { property: 'px' },

  '&[data-state="open"]': {
    animation: `${open} 300ms ease-out`,
  },

  '&[data-state="closed"]': {
    animation: `${close} 300ms ease-out`,
  },

  variants: {
    isNav: {
      true: {
        c: '$text',
        p: 0,
      },
    },
  },
})

export const $AccordionIcon = styled(FiChevronDown, {
  position: 'absolute',
  top: '50%',
  right: 0,
  z: '$base',
  h: '$space$2',
  w: '$space$2',
  mt: '-0.5rem',
  d: 'flex',
  ff: 'row nowrap',
  jc: 'center',
  ai: 'center',
  stroke: '$text',
})

const Accordion = ({ accordionItems }) => (
  <$Accordion type="single" collapsible="true">
    {accordionItems &&
      accordionItems.map(({ _key, title, content }) => (
        <$AccordionItem key={_key} value={_key}>
          <$AccordionHeader>
            <$AccordionTrigger>
              {title}
              <$AccordionIcon />
            </$AccordionTrigger>
          </$AccordionHeader>
          <$AccordionContent>
            <Text
              as="div"
              tagStyle="baseTypeAlt"
              css={{ p: '$2 0 $4' }}
              content={content}
            />
          </$AccordionContent>
        </$AccordionItem>
      ))}
  </$Accordion>
)

export default Accordion
