import { React, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
// Components
import CircularProgress from '@material-ui/core/CircularProgress'
import { VSTypography } from '@lp/ui'

import { HEADER_HEIGHT } from '../constants'

const WAIT_TIME = 500

const useStyles = makeStyles(
  (theme) => ({
    root: {
      minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
      backgroundColor: '#f9f9f9',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
    spinner: {
      marginTop: 42,
    },
    message: {
      [theme.breakpoints.down('xs')]: {
        fontSize: theme.typography.pxToRem(24),
      },
    },
  }),
  { classNamePrefix: 'LoadingState' }
)

const LoadingState = () => {
  const classes = useStyles()
  const [showLoading, setShowLoading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(true)
    }, WAIT_TIME)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  // this is non-standard, but apparently necessary to prevent some TypeErorrs
  return [
    showLoading ? (
      <div key="loading-div" className={classes.root}>
        <VSTypography className={classes.message} variant="h4">
          Hang tight, your special offer is loading…
        </VSTypography>
        <CircularProgress className={classes.spinner} />
      </div>
    ) : (
      <div key="non-loading-div" className={classes.root} />
    ),
  ]
}

export default LoadingState
