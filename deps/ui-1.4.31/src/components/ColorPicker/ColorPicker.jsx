import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import tinycolor from 'tinycolor2';
import ColorWrap from 'react-color/lib/Custom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import colorHelpers from 'react-color/lib/helpers/color';
import colors from './colors';
import { INPUT_BEHAVIOR } from './SketchFields';
import SketchPresetColors from './SketchPresetColors';
import CustomColorPicker from './CustomColorPicker';

const useStyles = makeStyles(
  {
    picker: {
      padding: '5px 18px 0',
      background: 'transparent',
      height: 365,
      margin: '0 auto',
      overflowX: 'hidden',
      overflowY: 'auto',
      position: 'relative',
      scrollbarWidth: 'thin',

      '-ms-overflow-style': '-ms-autohiding-scrollbar',

      ' &::-webkit-scrollbar': {
        opacity: '0',
        width: 6,
      },

      '&:hover::-webkit-scrollbar': {
        opacity: 1,
      },
      '&:hover::-webkit-scrollbar-track ': {
        backgroundColor: colors.shadowLight,
        opacity: 0.9,
      },
      '&:hover::-webkit-scrollbar-thumb': {
        background: colors.scrollBarColor,
      },
    },
  },
  { classNamePrefix: 'ColorPicker' },
);

const getRgbString = color =>
  color.toRgbString ? color.toRgbString() : tinycolor(color).toRgbString();

const getRgbStrings = (presets, newColor) => {
  const colors = newColor ? [newColor, ...presets] : presets;
  return [...new Set(colors.map(getRgbString))];
};

const Sketch = ({
  brandColors,
  brandColorsAction,
  className,
  color,
  inputBehavior,
  onChange,
  onCustomColorChoice,
  onOpenCustomColorPicker,
  onSwatchHover,
  presetColors,
  style,
  renderCustomTitle,
}) => {
  const [isCustomColorPickerOpen, setIsCustomColorPickerOpen] = useState(false);
  const [customColorTouched, setCustomColorTouched] = useState(false);
  const [customColor, setCustomColor] = useState(
    colorHelpers.toState(
      {
        hex: tinycolor(color)
          .toHex()
          .toUpperCase(),
      },
      0,
    ),
  );
  const classes = useStyles();
  const [recentColors, setRecentColors] = useState(getRgbStrings(presetColors));

  const handleClose = useCallback(() => {
    if (customColorTouched && onCustomColorChoice) {
      onCustomColorChoice(getRgbString(customColor.rgb));
    }
    setIsCustomColorPickerOpen(false);
    setRecentColors(getRgbStrings(recentColors, customColor.rgb));
  }, [customColor, recentColors, customColorTouched, onCustomColorChoice]);

  const handleOnCustomChange = useCallback(
    (data, evt) => {
      if (evt) {
        evt.preventDefault();
      }
      const newColor = colorHelpers.toState(data, data.h || customColor.oldHue);
      if (!customColorTouched) {
        setCustomColorTouched(true);
      }
      setCustomColor(newColor);
      onChange(newColor.rgb);
    },
    [customColor, customColorTouched, onChange],
  );

  const handleOpenCustomColorPicker = useCallback(() => {
    setCustomColor(
      colorHelpers.toState(
        {
          hex: tinycolor(color)
            .toHex()
            .toUpperCase(),
        },
        0,
      ),
    );
    onOpenCustomColorPicker();
    setIsCustomColorPickerOpen(true);
  }, [color, onOpenCustomColorPicker]);

  return (
    <Paper
      elevation={0}
      className={`${'sketch-picker'} ${classes.picker} ${className}`}
      data-qa-selector="color-picker"
      style={style}
    >
      {!isCustomColorPickerOpen && (
        <>
          <SketchPresetColors
            colors={brandColors}
            onClick={onChange}
            onSwatchHover={onSwatchHover}
            label="Brand Colors"
            labelAction={brandColorsAction}
            labelActionQaSelector={
              brandColors.length > 0 ? 'brand-colors-edit' : 'brand-colors-add'
            }
            labelActionText={brandColors.length > 0 ? 'EDIT' : 'ADD'}
            selectedColor={color}
          />
          <SketchPresetColors
            colors={recentColors}
            onClick={onChange}
            onSwatchHover={onSwatchHover}
            label="Recent Colors"
            labelAction={handleOpenCustomColorPicker}
            labelActionQaSelector="recent-colors-add"
            labelActionText="ADD"
            selectedColor={color}
          />
        </>
      )}
      {isCustomColorPickerOpen && (
        <CustomColorPicker
          inputBehavior={inputBehavior}
          onClose={handleClose}
          selectedColor={customColor}
          onChange={handleOnCustomChange}
          renderTitle={renderCustomTitle}
        />
      )}
    </Paper>
  );
};

Sketch.propTypes = {
  brandColors: PropTypes.arrayOf(PropTypes.string),
  presetColors: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
  onSwatchHover: PropTypes.func,
  className: PropTypes.string,
  brandColorsAction: PropTypes.func,
  color: PropTypes.string,
  onCustomColorChoice: PropTypes.func,
  onOpenCustomColorPicker: PropTypes.func,
  style: PropTypes.shape({}),
  inputBehavior: PropTypes.oneOf([INPUT_BEHAVIOR.CHANGE, INPUT_BEHAVIOR.BLUR_ONLY]),
  renderCustomTitle: PropTypes.func,
};

Sketch.defaultProps = {
  brandColors: [],
  color: 'rgba(0,0,0,0)',
  presetColors: [
    '#D0021B',
    '#F5A623',
    '#F8E71C',
    '#8B572A',
    '#7ED321',
    '#417505',
    '#BD10E0',
    '#9013FE',
    '#4A90E2',
    '#50E3C2',
    '#B8E986',
    '#000000',
    '#4A4A4A',
    '#9B9B9B',
    '#FFFFFF',
  ],
  onSwatchHover: null,
  className: null,
  brandColorsAction: null,
  onCustomColorChoice: null,
  onOpenCustomColorPicker: () => {},
  style: null,
  inputBehavior: INPUT_BEHAVIOR.CHANGE,
  renderCustomTitle: null,
};

export default ColorWrap(Sketch);
