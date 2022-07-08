/* eslint react/prop-types: 0 */

import React from 'react';
import classNames from 'classnames';
import styles from './Color.css';

export const hexCodes = {
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
  greyLighter: '#f2f4f7'
};

export const colors = {
  blueDarkerAccent: 'blueDarkerAccent',
  blueDarker: 'blueDarker',
  blueDark: 'blueDark',
  blue: 'blue',
  blueLight: 'blueLight',
  blueLighter: 'blueLighter',

  greenDarker: 'greenDarker',
  greenDark: 'greenDark',
  green: 'green',
  greenLight: 'greenLight',
  greenLighter: 'greenLighter',

  redDarker: 'redDarker',
  redDark: 'redDark',
  red: 'red',
  redLight: 'redLight',
  redLighter: 'redLighter',

  yellowDarker: 'yellowDarker',
  yellowDark: 'yellowDark',
  yellow: 'yellow',
  yellowLight: 'yellowLight',
  yellowLighter: 'yellowLighter',

  purpleDarker: 'purpleDarker',
  purpleDark: 'purpleDark',
  purple: 'purple',
  purpleLight: 'purpleLight',
  purpleLighter: 'purpleLighter',

  greyDarker: 'greyDarker',
  greyDark: 'greyDark',
  grey: 'grey',
  greyLight: 'greyLight',
  greyLighter: 'greyLighter'
};

const withColor = WrappedComponent => ({
  backgroundColor = '',
  color = '',
  strokeColor = '',
  hoverBackgroundColor = '',
  hoverColor = '',
  hoverStrokeColor = '',
  className,
  children,
  ...props
}) => (
  <WrappedComponent
    className={classNames(className, {
      [`${styles[`${backgroundColor}BackgroundColor`]}`]: backgroundColor,
      [`${styles[`${color}Color`]}`]: color,
      [`${styles[`${strokeColor}Stroke`]}`]: strokeColor,

      [`${
        styles[`${hoverBackgroundColor}BackgroundColorHover`]
      }`]: hoverBackgroundColor,
      [`${styles[`${hoverColor}ColorHover`]}`]: hoverColor,
      [`${styles[`${hoverStrokeColor}StrokeHover`]}`]: hoverStrokeColor
    })}
    {...props}
  >
    {children}
  </WrappedComponent>
);

export default withColor;
