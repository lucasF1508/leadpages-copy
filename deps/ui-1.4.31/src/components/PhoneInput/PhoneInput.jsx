import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import MuiPhoneInput from 'mui-phone-input-ssr';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  ({ palette, spacing, shape }) => ({
    root: {
      '& .MuiInputBase-formControl': {
        paddingLeft: 0,
      },
      '& .MuiPhoneNumber-flagButton': {
        height: 48,
        borderRadius: 0,
        backgroundColor: 'transparent',
        '&:after': {
          content: '""',
          width: 0,
          height: 0,
          marginRight: 16,
          borderLeft: '5px solid transparent',
          borderRight: '5px solid transparent',
          borderTop: `5px solid ${palette.greyTransparent[70]}`,
        },
        '&:hover, &:focus': {
          backgroundColor: palette.greyTransparent[4],
        },
        '& .MuiButton-label': {
          marginLeft: 20,
          marginRight: 16,
        },
        '& .flag': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transform: 'scale(1.5)',
        },
      },
      '& .MuiInputBase-input': {
        paddingLeft: 8,
      },
      '& .MuiPhoneNumber-positionStart': {
        '&:after': {
          position: 'absolute',
          display: 'block',
          content: '""',
          width: 0,
          right: 0,
          height: 24,
          borderRight: `1px solid ${palette.greyTransparent[30]}`,
        },
      },
    },
    dropdown: {
      '& .MuiPaper-root': {
        width: '71.5%',
        maxWidth: 350,
        '@media(max-width: 375px)': {
          width: '90%',
        },
        '& .flag': {
          minWidth: 16,
          marginLeft: 4,
          marginRight: 16,
          transform: 'scale(1.4)',
        },
        '& .dial-code': {
          paddingLeft: 8,
          color: palette.grey[50],
        },
      },
    },
  }),
  { classNamePrefix: 'PhoneInput' },
);

const PhoneInput = props => {
  const {
    className,
    defaultCountry,
    disableAreaCodes,
    dropdownClass,
    excludeCountries,
    ...other
  } = props;
  const classes = useStyles();

  return (
    <MuiPhoneInput
      className={clsx(classes.root, className)}
      dropdownClass={clsx(classes.dropdown, dropdownClass)}
      defaultCountry={defaultCountry}
      excludeCountries={excludeCountries}
      disableAreaCodes={disableAreaCodes}
      variant="filled"
      {...other}
    />
  );
};

// See material-ui-phone-number and Material UI Textfield docs for all available props
// https://github.com/alexplumb/material-ui-phone-number#options
// https://material-ui.com/api/text-field/
PhoneInput.propTypes = {
  className: PropTypes.string,
  defaultCountry: PropTypes.string,
  disableAreaCodes: PropTypes.bool,
  dropdownClass: PropTypes.string,
  excludeCountries: PropTypes.array,
  label: PropTypes.string,
};

PhoneInput.defaultProps = {
  className: '',
  defaultCountry: 'us',
  disableAreaCodes: true,
  dropdownClass: '',
  excludeCountries: ['kp'],
  label: 'Phone Number',
};

export default PhoneInput;
