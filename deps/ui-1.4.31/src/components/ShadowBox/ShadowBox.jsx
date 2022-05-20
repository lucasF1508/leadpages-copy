import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import ShadowBoxButton from './ShadowBoxButton';
import { hexToRgb } from '../../utils/color';

export const useStyles = makeStyles(
  theme => {
    const { palette, transitions } = theme;
    const rgb = hexToRgb(palette.grey[100]).join(',');
    const shadowDefault = `0 10px 20px -5px ${palette.greyTransparent[10]}`;
    const shadowRaised = `0 10px 20px -5px rgba(${rgb}, 0.25)`;

    return {
      root: ({ raised }) => ({
        overflow: 'hidden',
        backgroundColor: palette.common.white,
        boxShadow: raised === 'always' || raised === true ? shadowRaised : shadowDefault,
        padding: 24,
        transition: transitions.create('box-shadow', {
          duration: transitions.duration.shortest,
        }),
      }),
      hover: {
        '&:hover, &:focus': {
          boxShadow: shadowRaised,
          outline: 0,
        },
      },
      buttonStates: {
        '&:hover, &.Mui-focusVisible': {
          boxShadow: shadowRaised,
        },
      },
    };
  },
  { classNamePrefix: 'ShadowBox' },
);

const ShadowBox = props => {
  const { component, className, raised, ...other } = props;
  const classes = useStyles({ raised });

  if (component === 'button') {
    return (
      <ShadowBoxButton className={clsx(classes.root, classes.buttonStates, className)} {...other} />
    );
  }

  return (
    <Box
      className={clsx(classes.root, raised === 'hover' && classes.hover, className)}
      {...other}
    />
  );
};

ShadowBox.propTypes = {
  className: PropTypes.string,
  component: PropTypes.elementType,
  raised: PropTypes.oneOf(['none', 'hover', 'always', true]),
};

ShadowBox.defaultProps = {
  raised: 'none',
};

export default ShadowBox;
