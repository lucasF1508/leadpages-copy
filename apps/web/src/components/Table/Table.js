import React from 'react'
import { styled } from '@design'

const $Cell = styled('td', {
  lh: '1.25em',
  p: '$1 $2',
  bb: '1px solid $colors$border',
  boxSizing: 'border-box',
  type: 'baseTypeAlt',
  ta: 'left',

  '@<s': {
    d: 'flex',
    ff: 'row nowrap',
    jc: 'space-between',
    ai: 'center',
    w: '100%',
    ta: 'left',

    '& span': {
      f: '1 1 auto',
    },

    '&::before': {
      f: '0 0 6rem',
      content: 'attr(data-heading)',
      d: 'block',
      fontWeight: '$bold',
      ta: 'left',
      mr: '$3',
    },

    '&:first-child': {
      bt: '1px solid $colors$border',
    },
  },

  variants: {
    isEmpty: {
      true: {
        '@<s': {
          d: 'none',
        },
      },
    },
  },
})

const $Row = styled('tr', {
  '&:nth-child(even)': {
    bc: '$backgroundAlt',
  },

  '@>s': {
    h: '3.75rem',
  },

  '@<s': {
    d: 'block',
  },

  variants: {
    headerRow: {
      true: {
        [`& ${$Cell}`]: {
          fontWeight: '$bold',
          bt: '1px solid $colors$border',
        },
        '@<s': {
          d: 'none',
        },
      },
    },
  },
})

const $Table = styled('table', {
  w: '100%',
  ml: 'auto',
  mr: 'auto',
  tableLayout: 'fixed',
})

const Table = ({ rows, ...props }) => {
  if (!rows) return null

  return (
    <$Table {...props}>
      <tbody>
        {rows &&
          rows.map(({ _key, cells }, rowIndex) => (
            <$Row key={_key} headerRow={rowIndex === 0}>
              {cells &&
                cells.map((cell, cellIndex) => (
                  <$Cell
                    key={`${_key}-${cell}-${cellIndex}`}
                    data-heading={rows[0].cells[cellIndex]}
                    isEmpty={!cell}
                  >
                    <span>{cell && cell}</span>
                  </$Cell>
                ))}
            </$Row>
          ))}
      </tbody>
    </$Table>
  )
}

export default Table
