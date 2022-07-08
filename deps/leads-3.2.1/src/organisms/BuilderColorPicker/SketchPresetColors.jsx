import React from 'react';
import PropTypes from 'prop-types';
import tinycolor from 'tinycolor2';
import { cx } from 'emotion';
import { Swatch } from 'react-color/lib/components/common';

import Link from '../../atoms/Link';
import { typographyDefs } from '../../theme/Theme';

import * as styles from './SketchPresetColors.css';

const { bodyDefault } = typographyDefs;

export const SketchPresetColors = ({
  colors,
  label,
  onClick = () => {},
  labelAction,
  labelActionText,
  qaSelector,
  onSwatchHover
}) => {
  const handleClick = (hex, e) => {
    onClick(
      {
        hex,
        source: 'hex'
      },
      e
    );
  };

  return (
    <React.Fragment>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {label && (
          <label style={{ ...bodyDefault, color: '#b1bacc' }}>{label}</label>
        )}
        {labelAction && labelActionText && (
          <Link
            component="button"
            onClick={labelAction}
            style={{ color: '#a4c8fd', fontSize: '14px', fontWeight: '700' }}
            data-heap={`${label.replace(' ', '-').toLowerCase()}-add`}
            data-qa-selector={qaSelector}
          >
            {labelActionText}
          </Link>
        )}
      </div>
      <div
        className={cx(
          styles.colors,
          (!colors || !colors.length) && 'no-presets'
        )}
      >
        {colors.map(colorObjOrString => {
          const c =
            typeof colorObjOrString === 'string'
              ? { color: colorObjOrString }
              : colorObjOrString;

          const colorObj = tinycolor(c.color);
          let colorSwatchTitle = colorObj.toHexString();
          if (colorObj.getAlpha() < 1) {
            colorSwatchTitle = `${colorSwatchTitle} | ${parseFloat(
              colorObj.getAlpha()
            ) * 100}% opacity`;
          }

          return (
            <div
              key={c.color}
              className={styles.swatchWrap}
              data-heap={`${label.replace(' ', '-').toLowerCase()}-color`}
            >
              <Swatch
                {...c}
                title={colorSwatchTitle}
                onClick={handleClick}
                onHover={onSwatchHover}
                focusStyle={{
                  boxShadow: `inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px ${
                    c.color
                  }`
                }}
              />
              <div className={styles.swatchBorder} />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};
SketchPresetColors.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        color: PropTypes.string,
        title: PropTypes.string
      })
    ])
  )
};

export default SketchPresetColors;
