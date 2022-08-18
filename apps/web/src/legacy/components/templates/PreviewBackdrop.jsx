import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(
  ({ breakpoints }) => ({
    root: {
      background: 'rgb(247, 247, 247)',
      display: 'flex',
      flexFlow: 'column',

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
