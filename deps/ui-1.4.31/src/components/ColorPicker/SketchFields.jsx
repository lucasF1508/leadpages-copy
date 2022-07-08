import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import tinycolor from 'tinycolor2';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import colors from './colors';
import ColorPickerLabel from './ColorPickerLabel';

const useStyles = makeStyles(
  {
    input: {
      backgroundColor: colors.inputBackgroundColor,
      borderRadius: 4,
      height: 48,
      color: colors.white,
      '& input': {
        padding: '10px 12px 7px',
        '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
          WebkitAppearance: 'none',
          margin: '0',
        },
      },
      '& fieldset': {
        transition: 'none',
      },
    },
    fieldLabel: {
      fontSize: 15,
      color: colors.labelColor,
    },
  },
  { classNamePrefix: 'ColorPickerSketchFields' },
);

const BLUR_EVENT_TYPE = 'blur';
const INPUT_TAG = 'input';

const checkIsBlurEvent = e =>
  e.type === BLUR_EVENT_TYPE &&
  !(e.relatedTarget && e.relatedTarget.tagName.toLowerCase() === INPUT_TAG);

const SketchFields = ({
  inputBehavior = INPUT_BEHAVIOR.CHANGE,
  selectedColor,
  opacity,
  onChange,
}) => {
  const [currentColor, setCurrentColor] = useState(selectedColor);
  const [isColorFocused, setIsColorFocused] = useState(false);
  const [currentOpacity, setCurrentOpacity] = useState(opacity);
  const setColorFocused = useCallback(() => {
    setIsColorFocused(true);
  }, []);

  useEffect(() => {
    if (!isColorFocused) {
      setCurrentColor(selectedColor);
    }
    setCurrentOpacity(opacity);
  }, [selectedColor, opacity, isColorFocused]);

  const isBlurOnly = inputBehavior === INPUT_BEHAVIOR.BLUR_ONLY;
  const isChange = inputBehavior === INPUT_BEHAVIOR.CHANGE;

  const handleColorChange = e => {
    if (e && e.preventDefault) e.preventDefault();
    const { value } = e.target;

    setCurrentColor(value);
    if (isBlurOnly && !checkIsBlurEvent(e)) {
      return;
    } else if (isChange && e.type === BLUR_EVENT_TYPE) {
      // branch exists to preserve behavior that the color picker canvas
      // gets updated when valid colors are entered, without clobbering input field.
      setIsColorFocused(false);
    }

    const color = tinycolor(value);

    if (color.isValid()) {
      // special reformatting for typing in things like "red" or "fff"
      const hex = color.toHex().toUpperCase();
      if ((isBlurOnly && hex !== value) || (isChange && e.type === BLUR_EVENT_TYPE)) {
        setCurrentColor(hex);
      }

      color.setAlpha(currentOpacity / 100);
      return onChange({ ...color.toRgb(), source: 'rgb' });
    }
  };

  const handleOpacityChange = e => {
    const { value } = e.target;
    const newOpacity = Math.min(parseInt(value, 10), 100);
    setCurrentOpacity(newOpacity);

    if (inputBehavior === INPUT_BEHAVIOR.BLUR_ONLY && !checkIsBlurEvent(e)) {
      return;
    }

    const color = tinycolor(currentColor);
    if (color.isValid() && newOpacity !== '') {
      color.setAlpha(newOpacity / 100);
      return onChange({ ...color.toRgb(), source: 'rgb' });
    }
  };

  const classes = useStyles();

  return (
    <>
      <Box mt={2}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={5}>
            <ColorPickerLabel
              className={classes.fieldLabel}
              variant="body1"
              text="Color Code"
              id="custom-color-text-field-label"
            />
          </Grid>
          <Grid item xs={7}>
            <TextField
              margin="none"
              variant="outlined"
              inputProps={{ 'aria-labelledby': 'custom-color-text-field-label' }}
              // eslint-disable-next-line react/jsx-no-duplicate-props
              InputProps={{ className: classes.input }}
              value={currentColor && currentColor.replace('#', '')}
              onChange={handleColorChange}
              onBlur={handleColorChange}
              onFocus={setColorFocused}
            />
          </Grid>
        </Grid>
      </Box>
      <Box mt={0.5}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={5}>
            <ColorPickerLabel
              className={classes.fieldLabel}
              variant="body1"
              text="Opacity"
              id="custom-opacity-text-field-label"
            />
          </Grid>
          <Grid item xs={7}>
            <TextField
              fullWidth
              margin="none"
              variant="outlined"
              type="number"
              inputProps={{
                'aria-labelledby': 'custom-opacity-text-field-label',
                min: 0,
                max: 100,
              }}
              // eslint-disable-next-line react/jsx-no-duplicate-props
              InputProps={{ className: classes.input }}
              value={currentOpacity}
              onChange={handleOpacityChange}
              onBlur={handleOpacityChange}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

// Needed in builder because ProseMirror refocuses its highlighted content on change,
// messing up the input fields.
export const INPUT_BEHAVIOR = {
  CHANGE: 'CHANGE',
  BLUR_ONLY: 'BLUR_ONLY',
};

SketchFields.propTypes = {
  selectedColor: PropTypes.string.isRequired,
  opacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  inputBehavior: PropTypes.oneOf([INPUT_BEHAVIOR.CHANGE, INPUT_BEHAVIOR.BLUR_ONLY]),
};

SketchFields.defaultProps = {
  inputBehavior: INPUT_BEHAVIOR.CHANGE,
};

export default SketchFields;
