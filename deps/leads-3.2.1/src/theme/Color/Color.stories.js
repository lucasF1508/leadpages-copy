import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withColor, { colors } from './Color';
import styles from './Color.stories.css';

// const  = styles;
const ColorTitle = ({ children }) => <h1 className={styles.colorTitle}>{children}</h1>;
const ColorPallet = ({ children }) => <div>{children}</div>;
const Swatch = ({ children, className, isAccent }) => (
  <div
    className={classNames(className, styles.colorSwatch, {
      [`${styles.accent}`]: isAccent,
    })}
  >
    {children}
  </div>
);
const ColorSwatch = withColor(Swatch);

ColorTitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};
ColorPallet.propTypes = ColorTitle.propTypes;
Swatch.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  className: PropTypes.string.isRequired,
  isAccent: PropTypes.bool,
};
const baseColors = [
  'blue',
  'green',
  'red',
  'yellow',
  'purple',
  'grey',
];

// TODO: Is there a better way to get the Hex values?
const hexCodes = {
  blueDarkerAccent: '#202365',
  blueDarker: '#00044c',
  blueDark: '#00419f',
  blue: '#0069ff',
  blueLight: '#4692ff',
  blueLighter: '#deecfd',

  greenDarker: '#003135',
  greenDark: '#00848e',
  green: '#47c1bf',
  greenLight: '#b7ecec',
  greenLighter: '#e0f5f5',

  redDarker: '#330101',
  redDark: '#bf0711',
  red: '#ed6347',
  redLight: '#feaf9a',
  redLighter: '#fbeae5',

  yellowDarker: '#573b00',
  yellowDark: '#9c6f19',
  yellow: '#eec200',
  yellowLight: '#ffea8a',
  yellowLighter: '#fcf1cd',

  purpleDarker: '#24235b',
  purpleDark: '#43418c',
  purple: '#5e5cc4',
  purpleLight: '#a09ee8',
  purpleLighter: '#dad9ff',

  greyDarker: '#4c515d',
  greyDark: '#797f89',
  grey: '#b1bacc',
  greyLight: '#e4e7ed',
  greyLighter: '#f2f4f7',
};

function isAccentColor(colorName) {
  return colorName.includes('Accent');
}

const ColorStory = () => (
  <ColorPallet>
    <ColorTitle> Colors </ColorTitle>
    <div style={{ display: 'flex' }}>
      {baseColors.map(baseColor => (
        <div key={baseColor}>
          {Object.keys(colors).filter(c => c.includes(baseColor)).sort(c => isAccentColor(c)).map((color, i) => (
            <ColorSwatch
              backgroundColor={color}
              color={i <= 2 || isAccentColor(color) ? `${baseColor}Lighter` : `${baseColor}Darker`}
              key={color}
              isAccent={isAccentColor(color)}
            >
              <span>{ i !== 2 ? color.replace(baseColor, '') : color.charAt(0).toUpperCase() + color.slice(1) }</span>
              <span>{ hexCodes[color].toUpperCase() }</span>
            </ColorSwatch>
          ))}
        </div>
      ))}
    </div>
  </ColorPallet>
);

const stories = storiesOf('Theme/Color', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => (
    <ColorStory />
  ))
);
