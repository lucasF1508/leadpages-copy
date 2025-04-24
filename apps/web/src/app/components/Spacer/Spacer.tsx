import React from 'react'
import clsx from 'clsx'

const Spacer = ({ className = '', multiplier = 1 }) => (
  <div
    className={clsx(
      'z-under relative',
      {
        [-0.5]: 'box-[my*-0.5]',
        [-1.0]: 'box-[my*-1]',
        [-1.5]: 'box-[my*-1.5]',
        [-2]: 'box-[my*-2]',
        [-3]: 'box-[my*-3]',
        [0.5]: 'box-[my*0.5]',
        [1]: 'box-my',
        [1.5]: 'box-[my*1.5]',
        [2]: 'box-[my*2]',
        [3]: 'box-[my*3]',
      }[multiplier],
      className
    )}
  />
)

export default Spacer
