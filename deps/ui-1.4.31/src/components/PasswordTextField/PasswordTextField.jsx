import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

function PasswordTextField({ label, ...props }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label={`${showPassword ? 'Hide' : 'Show'} ${label}`}
              onClick={() => setShowPassword(!showPassword)}
              tabIndex="-1"
            >
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      // eslint-disable-next-line react/jsx-no-duplicate-props
      inputProps={{ 'aria-label': label }}
      label={label}
      {...props}
    />
  );
}

// See Material UI Link component API for all possible props
// https://material-ui.com/api/text-field/
PasswordTextField.propTypes = {
  label: PropTypes.string,
};

PasswordTextField.defaultProps = {
  label: 'Password',
};

export default PasswordTextField;
