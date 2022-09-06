import React from 'react'
import PropTypes from 'prop-types'
import MuiTooltip from '@material-ui/core/Tooltip'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ palette, shadows }) => ({
  tooltip: {
    width: 220,
    backgroundColor: palette.common.white,
    boxShadow: shadows[4],
    margin: (props) => props.marginOverride ?? 'default',
    padding: '1.5rem',
    fontSize: 12,
    lineHeight: '18px',
    color: palette.grey[70],
  },
}))

const Tooltip = (props) => {
  const classes = useStyles(props)
  const { children, placement, ...other } = props
  return (
    <MuiTooltip
      classes={{ tooltip: classes.tooltip }}
      placement={placement}
      {...other}
      style={{ cursor: 'help' }}
    >
      {children}
    </MuiTooltip>
  )
}

Tooltip.defaultProps = {
  placement: 'bottom-start',
}

Tooltip.propTypes = {
  placement: PropTypes.string,
}

export default Tooltip
