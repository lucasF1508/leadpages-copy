import React from 'react';
import PropTypes from 'prop-types';
import tinycolor from 'tinycolor2';
import { makeStyles } from '@material-ui/core/styles';
import { Swatch } from 'react-color/lib/components/common';
import { get as getCheckboard } from 'react-color/lib/helpers/checkboard';
import colors from './colors';

export function getColorSwatchTitle(colorObj) {
  let colorSwatchTitle = colorObj.toHexString().toUpperCase();
  if (colorObj.getAlpha() < 1) {
    colorSwatchTitle = `${colorSwatchTitle} | ${parseFloat(colorObj.getAlpha()) * 100}% opacity`;
  }
  return colorSwatchTitle;
}

const useStyles = makeStyles(
  {
    swatchWrap: props => ({
      background: `url(${getCheckboard(colors.white, colors.checkboardGray, 8)}) center left`,
      border: `3px solid ${props.isSelected ? colors.swatchSelectedColor : colors.backgroundColor}`,
      borderRadius: 6,
      boxSizing: 'content-box',
      height: 36,
      overflow: 'hidden',
      position: 'relative',
      width: 36,
      '&::after': {
        border: `1px solid ${colors.borderColor}`,
        borderRadius: 3,
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        pointerEvents: 'none',
      },
    }),
  },
  { classNamePrefix: 'ColorPickerSwatch' },
);

const ColorPickerSwatch = ({ color, onClick, onSwatchHover, isSelected, className }) => {
  const colorObj = tinycolor(color);
  const classes = useStyles({ isSelected });

  return (
    <div className={`${classes.swatchWrap} ${className}`}>
      <Swatch
        color={color}
        title={getColorSwatchTitle(colorObj)}
        onClick={onClick}
        onHover={onSwatchHover}
        focusStyle={{
          boxShadow: `inset 0 0 0 1px ${colors.shadow}, 0 0 4px ${color}`,
        }}
      />
    </div>
  );
};

export default ColorPickerSwatch;

ColorPickerSwatch.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onSwatchHover: PropTypes.func,
  isSelected: PropTypes.bool,
};

ColorPickerSwatch.defaultProps = {
  className: null,
  isSelected: false,
  onClick: () => {},
  onSwatchHover: null,
};
