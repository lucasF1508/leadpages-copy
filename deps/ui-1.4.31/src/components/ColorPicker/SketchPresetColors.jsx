import React from 'react';
import PropTypes from 'prop-types';
import tinycolor from 'tinycolor2';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ColorPickerLabel from './ColorPickerLabel';
import ColorPickerSwatch from './ColorPickerSwatch';

const useStyles = makeStyles(
  {
    label: {
      padding: '0 3px',
    },
  },
  { classNamePrefix: 'ColorPickerSketchPresetColors' },
);

export const SketchPresetColors = ({
  colors,
  label,
  onClick,
  labelAction,
  labelActionQaSelector,
  labelActionText,
  onSwatchHover,
  selectedColor,
}) => {
  const classes = useStyles();
  return (
    <>
      <Box mb={0.25} mt={2}>
        <Grid container justify="space-between" alignItems="baseline" className={classes.label}>
          {label && (
            <ColorPickerLabel
              component="h6"
              text={label}
              labelAction={labelAction}
              labelActionText={labelActionText}
              labelActionQaSelector={labelActionQaSelector}
            />
          )}
        </Grid>
      </Box>
      <Grid container>
        {colors.map(c => {
          const isSelected = tinycolor.equals(tinycolor(c), selectedColor);
          return (
            <ColorPickerSwatch
              color={c}
              key={c}
              onClick={onClick}
              onHover={onSwatchHover}
              isSelected={isSelected}
            />
          );
        })}
      </Grid>
    </>
  );
};

SketchPresetColors.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        color: PropTypes.string,
        title: PropTypes.string,
      }),
    ]),
  ).isRequired,
  label: PropTypes.string,
  labelActionText: PropTypes.string,
  onClick: PropTypes.func,
  onSwatchHover: PropTypes.func,
  selectedColor: PropTypes.string,
};

SketchPresetColors.defaultProps = {
  label: null,
  labelActionText: null,
  onClick: null,
  onSwatchHover: null,
  selectedColor: null,
};

export default SketchPresetColors;
