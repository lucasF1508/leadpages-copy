import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import _isEqual from 'lodash/isEqual';
import tinycolor from 'tinycolor2';
import { CustomPicker } from 'react-color';

import SketchPresetColors from './SketchPresetColors';
import CustomColorPicker from './CustomColorPicker';

import * as styles from './BuilderColorPicker.css';

export class Sketch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCustomColorPickerOpen: false,
      customColor: null,
      presetColors: this.sanitizePresetColors(props.presetColors)
    };
  }

  sanitizePresetColors(presets, customColor) {
    const colors = customColor ? [customColor, ...presets] : [...presets];

    return [...new Set(colors.map(color => tinycolor(color).toRgbString()))];
  }

  componentDidUpdate(prevProps) {
    if (!_isEqual(prevProps.presetColors, this.props.presetColors)) {
      this.setState(() => ({
        presetColors: this.sanitizePresetColors(this.props.presetColors)
      }));
    }
  }

  componentWillUnmount() {
    if (this.state.isCustomColorPickerOpen) {
      this.handleOnCustomColorChoice(this.state.customColor);
    }
  }

  handleClose = () => {
    this.handleOnCustomColorChoice(this.state.customColor);
    this.setState(({ customColor, presetColors }) => ({
      isCustomColorPickerOpen: false,
      customColor: null,
      presetColors: this.sanitizePresetColors(presetColors, customColor)
    }));
  };

  handleOpen = () => {
    this.setState(() => ({ isCustomColorPickerOpen: true }));
  };

  handleOnCustomChange = color => {
    this.setState(() => ({
      customColor: tinycolor(color).toRgbString()
    }));
    this.props.onChange(color);
  };

  handleOnCustomColorChoice = color => {
    if (color && this.props.onCustomColorChoice) {
      this.props.onCustomColorChoice(color);
    }
  };

  render() {
    const {
      onChange,
      onSwatchHover,
      brandColors,
      className,
      brandColorsAction
    } = this.props;
    const { presetColors } = this.state;

    return (
      <div className={cx('sketch-picker', styles.picker, className)}>
        {!this.state.isCustomColorPickerOpen && (
          <React.Fragment>
            <SketchPresetColors
              colors={brandColors}
              onClick={onChange}
              onSwatchHover={onSwatchHover}
              label="Brand Colors"
              labelAction={brandColorsAction}
              labelActionText={brandColors.length > 0 ? 'EDIT' : 'ADD'}
              qaSelector="brand-colors-view"
            />
            <SketchPresetColors
              colors={presetColors}
              onClick={onChange}
              onSwatchHover={onSwatchHover}
              label="Recent Colors"
              labelAction={this.handleOpen}
              labelActionText="ADD"
              qaSelector="recent-colors-add"
            />
          </React.Fragment>
        )}
        <CustomColorPicker
          onClose={this.handleClose}
          isOpen={this.state.isCustomColorPickerOpen}
          color={this.props.color}
          onChange={this.handleOnCustomChange}
        />
      </div>
    );
  }
}

Sketch.propTypes = {
  brandColors: PropTypes.arrayOf(PropTypes.string),
  presetColors: PropTypes.arrayOf(PropTypes.string)
};

Sketch.defaultProps = {
  brandColors: [],
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
    '#FFFFFF'
  ]
};

export default CustomPicker(Sketch);
