import React, { useState } from 'react'
import { FiGitMerge as icon } from 'react-icons/fi'
import SelectWinner from './SelectWinner'

export const selectWinnerAction = ({ onComplete, type, id, published }) => {
  const label = 'Select Winner'
  const [isDialogOpen, setDialogOpen] = useState(false)
  const { control, variants } = published || {}

  if (!published) return null

  return {
    icon,
    label,
    color: 'warning',
    onHandle: () => {
      setDialogOpen(true)
    },
    onComplete: () => {
      setDialogOpen(false)
    },
    dialog: isDialogOpen && {
      type: 'modal',
      onClose: () => {
        onComplete()
      },
      header: label,
      content: (
        <SelectWinner
          onComplete={onComplete}
          type={type}
          id={id}
          control={control}
          variants={variants}
        />
      ),
    },
  }
}
