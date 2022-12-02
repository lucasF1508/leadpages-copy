import React, { useId } from 'react'
import { styled, keyframes } from '@design'
import * as Primitives from '@radix-ui/react-accordion'
import { CgChevronDown as Icon } from '@react-icons/all-files/cg/CgChevronDown'
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
  pr: '$6',
  py: '$3',
  w: '100%',
  cursor: 'pointer',
  ta: 'left',
  typeSizes: 'lg',
  fontWeight: '$medium',
  fontFamily: '$base',
  transition: 'color 0.3s ease',
  lh: '1.2',

  '&:hover': {
    color: '$primary',
    svg: {
      stroke: '$primary',
    },
  },

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

export const $AccordionIcon = styled(Icon, {
  position: 'absolute',
  top: '50%',
  right: 0,
  z: '$base',
  h: '$space$4',
  w: '$space$4',
  mt: '-1rem',
  d: 'flex',
  ff: 'row nowrap',
  jc: 'center',
  ai: 'center',
  stroke: '$text',
  transition: 'stroke 0.3s ease',
})

const Accordion = ({ accordionItems }) => (
  <$Accordion type="single" collapsible="true">
    {accordionItems &&
      accordionItems.map(({ _key = useId(), title, content }) => (
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
              tagStyle="base"
              css={{
                p: '0 0 $2',
                '& *': {
                  mb: '$2',
                  '&:last-child': {
                    mb: 0,
                  },
                },
                '& p': {
                  c: '$text',
                },
                '& a': {
                  d: 'inline',
                  color: 'inherit',
                  textDecoration: 'none',
                  borderBottom: `2px solid $colors$secondary`,
                  paddingBottom: 2,
                  transition: 'all 0.3s ease',

                  '&:hover': {
                    color: '$primary',
                    borderBottom: `2px solid $colors$primary`,
                  },
                },
              }}
              content={content}
            />
          </$AccordionContent>
        </$AccordionItem>
      ))}
  </$Accordion>
)

export default Accordion
