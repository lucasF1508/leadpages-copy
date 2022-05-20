import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import colors from './colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  ({ typography }) => ({
    button: {
      color: colors.linkColor,
      '&:hover': {
        color: colors.linkHoverColor,
      },
      fontSize: 15,
      fontWeight: typography.fontWeightBold,
    },
    label: {
      color: colors.labelColor,
      whiteSpace: 'nowrap',
      userSelect: 'none',
      fontSize: 17,
      fontWeight: typography.fontWeightRegular,
    },
  }),
  { classNamePrefix: 'ColorPickerLabel' },
);

const ColorPickerLabel = ({
  text,
  labelAction,
  labelActionQaSelector,
  labelActionText,
  variant,
  className,
  ...props
}) => {
  const classes = useStyles();
  return (
    <>
      <Typography
        align="left"
        variant={variant}
        className={`${className} ${classes.label}`}
        {...props}
      >
        {text}
      </Typography>
      {labelAction && labelActionText && (
        <Link
          component="button"
          onClick={labelAction}
          className={classes.button}
          underline="none"
          data-qa-selector={labelActionQaSelector}
        >
          {labelActionText}
        </Link>
      )}
    </>
  );
};

ColorPickerLabel.propTypes = {
  text: PropTypes.string.isRequired,
  labelAction: PropTypes.func,
  labelActionQaSelector: PropTypes.string,
  labelActionText: PropTypes.string,
  variant: PropTypes.string,
};

ColorPickerLabel.defaultProps = {
  labelAction: null,
  labelActionQaSelector: null,
  labelActionText: null,
  variant: 'h4',
};

export default ColorPickerLabel;
