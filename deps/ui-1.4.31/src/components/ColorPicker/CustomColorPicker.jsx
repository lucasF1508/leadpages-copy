import React from 'react';
import PropTypes from 'prop-types';
import { Saturation, Hue, Checkboard, Alpha } from 'react-color/lib/components/common';
import ArrowBack from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import colors from './colors';
import ColorPickerLabel from './ColorPickerLabel';
import SketchFields, { INPUT_BEHAVIOR } from './SketchFields';
import ColorPickerSwatch from './ColorPickerSwatch';

const useStyles = makeStyles(
  ({ typography }) => ({
    saturation: {
      paddingBottom: '56%',
      position: 'relative',
      overflow: 'hidden',
      marginBottom: 6,
      border: `1px solid ${colors.borderColor}`,
      borderRadius: 3,
    },
    slider: {
      border: `1px solid ${colors.borderColor}`,
      borderRadius: 3,
      maxWidth: 'calc(100% - 2px)',
      position: 'relative',
      overflow: 'hidden',
      height: 16,
    },
    customColorPickerTitle: {
      flex: 1,
      textAlign: 'center',
      marginLeft: -32,
      fontSize: 17,
      fontWeight: typography.fontWeightRegular,
    },
    iconButton: {
      color: colors.iconButtonColor,
      paddingLeft: 0,
      '& svg': {
        fontSize: 20,
      },
      '&:hover': {
        color: colors.white,
      },
    },
    selectedColor: {
      border: `1px solid ${colors.borderColor}`,
      borderRadius: 3,
      '&::after': {
        border: 'none',
      },
      '& span div': {
        cursor: 'default !important',
      },
    },
  }),
  { classNamePrefix: 'CustomColorPicker' },
);

const usePointerStyles = makeStyles({
  pointer: {
    width: '8px',
    height: '8px',
    borderRadius: '2px',
    border: '3px solid white',
    boxSizing: 'content-box',
    transform: 'translate(-7px, 0px)',
    backgroundColor: 'transparent',
    boxShadow: `0 1px 4px 0 ${colors.shadowDark}`,
  },
});

const Pointer = () => {
  const classes = usePointerStyles();
  return <div className={classes.pointer} />;
};

const CustomColorPicker = ({ inputBehavior, selectedColor, onChange, onClose, renderTitle }) => {
  const classes = useStyles(selectedColor);
  const { rgb, hsl, hsv, hex } = selectedColor;
  const rgbString = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`;

  return (
    <>
      {renderTitle ? (
        renderTitle({ onClose })
      ) : (
        <Grid container alignItems="center">
          <IconButton
            data-qa-selector="custom-color-picker-back"
            aria-label="Back"
            onClick={onClose}
            className={classes.iconButton}
          >
            <ArrowBack />
          </IconButton>
          <ColorPickerLabel
            component="h6"
            text="Custom Color"
            className={classes.customColorPickerTitle}
          />
        </Grid>
      )}
      <div className={classes.saturation}>
        <Saturation hsl={hsl} hsv={hsv} onChange={onChange} />
      </div>
      <Grid container wrap="nowrap" justify="space-between">
        <Grid container item xs={10}>
          <Grid item xs={12} className={classes.slider} style={{ marginBottom: '4px' }}>
            <Hue hsl={hsl} onChange={onChange} pointer={Pointer} />
          </Grid>
          <Grid item xs={12} className={classes.slider}>
            <Checkboard white={colors.white} />
            <Alpha rgb={rgb} hsl={hsl} onChange={onChange} pointer={Pointer} />
          </Grid>
        </Grid>
        <Grid item>
          <ColorPickerSwatch color={rgbString} className={classes.selectedColor} />
        </Grid>
      </Grid>
      <SketchFields
        rgb={rgb}
        hsl={hsl}
        hex={hex}
        opacity={Math.round(rgb.a * 100)}
        selectedColor={hex.toUpperCase()}
        onChange={onChange}
        inputBehavior={inputBehavior}
      />
    </>
  );
};

CustomColorPicker.propTypes = {
  selectedColor: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  inputBehavior: PropTypes.oneOf([INPUT_BEHAVIOR.CHANGE, INPUT_BEHAVIOR.BLUR_ONLY]),
  renderTitle: PropTypes.func,
};

SketchFields.defaultProps = {
  inputBehavior: INPUT_BEHAVIOR.CHANGE,
  renderTitle: null,
};

export default CustomColorPicker;
