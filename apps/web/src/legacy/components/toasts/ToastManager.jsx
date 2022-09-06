import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Collapse from '@material-ui/core/Collapse'
import { Toast } from '@lp/ui'

const useStyles = makeStyles(
  (theme) => ({
    root: {
      position: 'absolute',
      top: 0,
      right: 0,
      zIndex: theme.zIndex.snackbar,
    },
    toast: {
      position: 'relative',
      marginBottom: theme.spacing(3),
    },
  }),
  { classNamePrefix: 'ToastManager' }
)

export const ADD_TOAST_MESSAGE = 'ADD_TOAST_MESSAGE'

export function addToastMessage(props) {
  if (typeof window !== 'undefined') {
    window.postMessage({ type: ADD_TOAST_MESSAGE, payload: props }, '*')
  }
}

const ToastManager = () => {
  const classes = useStyles()
  const [messages, setMessages] = useState([])

  const handleClose = (idx) => {
    const newMessages = [...messages]
    newMessages.splice(idx, 1)
    setMessages(newMessages)
  }

  useEffect(() => {
    function handleAddMessage(evt) {
      const type = evt?.data?.type
      if (type === ADD_TOAST_MESSAGE) {
        const { ...props } = evt.data.payload
        setMessages([...messages, props])
      }
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('message', handleAddMessage)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('message', handleAddMessage)
      }
    }
  }, [messages])

  return (
    <div className={classes.root}>
      {messages.map(({ className, targetUrl, onClose, ...toastProps }) => (
        <Collapse key={toastProps.message} in>
          <Toast
            className={clsx(classes.toast, className)}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            variant="light"
            severity="success"
            layout="alert"
            hasIconCloseButton
            autoHideDuration={8000}
            ClickAwayListenerProps={{ mouseEvent: false, touchEvent: false }}
            {...toastProps}
            open
            onClose={(idx) => {
              if (onClose) {
                onClose()
              }
              handleClose(idx)
            }}
          />
        </Collapse>
      ))}
    </div>
  )
}

export default ToastManager
