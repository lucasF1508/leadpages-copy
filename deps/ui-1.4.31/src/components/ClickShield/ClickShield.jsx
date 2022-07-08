import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  shield: ({intensity, whiteWash}) => ({
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: whiteWash ? theme.palette.common.white : theme.palette.grey[100],
      opacity: intensity / 100,
      cursor: 'not-allowed'
  }),
}));

function ClickShield({ isActive, intensity, whiteWash, children, ...rest }) {
  const classes = useStyles({intensity, whiteWash});
  const child = React.Children.only(children);
  const { children: childChildren, className: childClassName, ...childProps } = child.props;
  const newChildClassName = clsx(classes.root, childClassName);

  const shield = isActive ? <div className={classes.shield} data-qa-selector="click-shield" /> : null;

  const newProps = childProps ? childProps : [];
  const newGrandChildren = childChildren ? React.Children.toArray(childChildren) : [];
  const Child = child.type;
  
  return (
    <Child {...newProps} className={newChildClassName}>
      {shield}
      {newGrandChildren}
    </Child>
  );
}

ClickShield.propTypes = {
  isActive: PropTypes.bool.isRequired,
  whiteWash: PropTypes.bool,
  intensity: PropTypes.number,
  children: PropTypes.node.isRequired,
};

ClickShield.defaultProps = {
  whiteWash: false,
  intensity: 10,
};

export default ClickShield;
