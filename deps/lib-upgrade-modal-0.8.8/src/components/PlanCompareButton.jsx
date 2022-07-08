import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { BREAKPOINTS } from '../constants';

const useStyles = makeStyles(
  theme => ({
    planButton: ({ isActive, useButton }) => ({
      display: 'block',
      padding: '12px 0 8px',
      textAlign: 'center',
      textDecoration: 'none',
      width: '100%',

      opacity: !isActive && useButton ? 0.5 : 1,
      transition: theme.transitions.create('opacity', {
        duration: theme.transitions.duration.shortest,
      }),

      '&:hover, &:focus': {
        opacity: 1,
      },

      [theme.breakpoints.up(BREAKPOINTS.SMALL)]: {
        '&:hover': {
          color: theme.palette.text.primary,
        },
      },
    }),
    planItem: ({ isActive, useButton }) => ({
      borderBottom: '3px solid',
      borderBottomColor: isActive ? theme.palette.primary.main : 'transparent',

      [theme.breakpoints.up(BREAKPOINTS.SMALL)]: {
        borderBottomColor: 'transparent',
      },
    }),
    planName: {
      fontWeight: 600,
      textTransform: 'uppercase',
      color: theme.palette.greyTransparent[100],
    },
    monthlyPrice: {
      fontSize: theme.typography.pxToRem(12),
      lineHeight: theme.typography.pxToRem(18),
      color: theme.palette.greyTransparent[70],
    },
  }),
  { classNamePrefix: 'PlanCompareButton' },
);

const PlanCompareButton = ({
  isActive,
  handleClick,
  monthlyPrice,
  planLevel,
  useButton,
  width,
}) => {
  const classes = useStyles({ isActive, useButton });

  return (
    <Grid className={classes.planItem} item xs={width}>
      <Link
        role="tab"
        aria-selected={isActive}
        className={classes.planButton}
        component={useButton ? 'button' : 'span'}
        onClick={handleClick}
      >
        <Typography className={classes.planName} variant="body2">
          {planLevel}
        </Typography>
        <Typography className={classes.monthlyPrice}>
          ${monthlyPrice}/month
        </Typography>
      </Link>
    </Grid>
  );
};

PlanCompareButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  monthlyPrice: PropTypes.number.isRequired,
  planLevel: PropTypes.string.isRequired,
  useButton: PropTypes.bool.isRequired,
  width: PropTypes.number.isRequired,
};

export default PlanCompareButton;
