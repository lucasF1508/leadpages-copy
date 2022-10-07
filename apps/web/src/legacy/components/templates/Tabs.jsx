import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

const useTabLinkStyles = makeStyles(() => ({
  link: {
    fontSize: '15px',
    fontWeight: 400,
    letterSpacing: 0,
    color: '#4c515d',
    lineHeight: 2,
    position: 'relative',
    display: 'flex',
    flex: '1 0 auto',
    margin: '0 6px',
    transition: 'color 0.5s ease',
    textAlign: 'center',
    '&:hover': {
      color: '#00044c',
    },
    '&::after': {
      position: 'absolute',
      right: 0,
      bottom: '-1px',
      left: 0,
      width: '100%',
      height: '0',
      margin: 'auto',
      content: '""',
      transition: 'height 0.2s linear',
      backgroundColor: '#603eff',
    },
    '&.linkActive': {
      color: '#00044c',
    },
    '&.linkActive::after': {
      height: '3px',
    },
    '& button': {
      fontFamily: 'Apercu Pro !important',
      fontSize: 'inherit',
      boxSizing: 'inherit',
      padding: '0 18px',
      cursor: 'pointer',
      textAlign: 'center',
      color: 'inherit',
      border: 'none',
      borderWidth: 0,
      borderStyle: 'none',
      borderColor: 'inherit',
      borderImage: 'initial',
      outline: '0',
      backgroundColor: 'inherit',
      '-webkit-appearance': 'none',
    },
  },
}))

export const TabLink = ({ children, active, onClick }) => {
  const classes = useTabLinkStyles()
  return (
    <li className={active ? `${classes.link} linkActive` : classes.link}>
      <button type="button" onClick={onClick}>
        {children}
      </button>
    </li>
  )
}

TabLink.displayName = 'TabLink'

TabLink.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}

const useTabGroupStyles = makeStyles(() => ({
  tabGroup: {
    fontSize: '15px',
    display: 'flex',
    margin: '0 auto',
    padding: 0,
    listStyleType: 'none',
    cursor: 'pointer',
    color: '#797f89',
  },
}))

export const TabGroup = ({ children }) => {
  const classes = useTabGroupStyles()
  return <ul className={classes.tabGroup}>{children}</ul>
}

TabGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
}
