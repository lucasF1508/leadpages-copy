import React, { useState } from 'react'
import { FiGitMerge as icon } from 'react-icons/fi'
import OverrideContent from './OverrideContent'

export const pageMergeAction = ({ onComplete, type, id }) => {
  const label = 'Replace Content'
  const [isDialogOpen, setDialogOpen] = useState(false)

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
      content: <OverrideContent onComplete={onComplete} type={type} id={id} />,
    },
  }
}
