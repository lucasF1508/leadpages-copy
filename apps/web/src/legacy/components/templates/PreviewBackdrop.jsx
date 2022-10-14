import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(
  ({ breakpoints }) => ({
    root: {
      background: 'rgb(247, 247, 247)',
      display: 'flex',
      flexFlow: 'column',
      zIndex: 1604,
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      overflow: 'hidden',

      [breakpoints.up('sm')]: {
        overflow: 'auto',
      },
    },
  }),
  { classNamePrefix: 'PreviewBackdrop' }
)

const PreviewBackdrop = ({ children }) => {
  const classes = useStyles()

  return <div className={classes.root}>{children && children}</div>
}

PreviewBackdrop.propTypes = {
  children: PropTypes.node,
}

PreviewBackdrop.defaultProps = {
  children: null,
}

export default PreviewBackdrop
