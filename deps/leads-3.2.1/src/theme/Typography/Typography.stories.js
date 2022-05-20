/* eslint max-len: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import styles from './Typography.stories.css';
import typography from './typographyDefinitions';
import withTypography, { types } from './Typography';

const TypographyHeader = ({ children }) =>
  <div className={styles.typographyHeader}>{children}</div>;
const TypographyContainer = ({ children }) =>
  <div className={styles.typographyContainer}>{children}</div>;
const TypographyColumn = ({ children }) =>
  <div className={styles.typographyColumn}>{children}</div>;
const Display = ({ children, className }) =>
  <div className={`${styles.typographyDisplay} ${className}`}>{children}</div>;
const TypographyDisplay = withTypography(Display);

TypographyHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

TypographyContainer.propTypes = TypographyHeader.propTypes;
TypographyColumn.propTypes = TypographyHeader.propTypes;
Display.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  className: PropTypes.string.isRequired,
};

const toSpaces = string => string.replace(/([A-Z])/g, ' $1')
.replace(/^./, str => str.toUpperCase());

const numberToStartNextCol = 2;
const TypographyStory = () => (
  <TypographyContainer>
    <TypographyHeader> Typography </TypographyHeader>
    <TypographyColumn>
      <TypographyDisplay type={types.bodyDefault}>
        Display Headings - Use Sparingly
      </TypographyDisplay>
      {Object.keys(typography).map((type, i) => (
        i > numberToStartNextCol ? null : (
          <TypographyDisplay key={type} type={type}>
            {toSpaces(type)}
            <br />
            {`${typography[type].fontWeight} ${typography[type].fontSize}/${typography[type].lineHeight} ${typography[type].fontFamily}`}
          </TypographyDisplay>)
      ))}
    </TypographyColumn>
    <TypographyColumn>
      <TypographyDisplay type={types.bodyDefault}> Main In-App Typescale </TypographyDisplay>
      {Object.keys(typography).map((type, i) => (
        i <= numberToStartNextCol ? null : (
          <TypographyDisplay key={type} type={type}>
            {toSpaces(type)}
            <br />
            {`${typography[type].fontWeight} ${typography[type].fontSize}/${typography[type].lineHeight} ${typography[type].fontFamily}`}
          </TypographyDisplay>
      )))}
    </TypographyColumn>

  </TypographyContainer>
);


const stories = storiesOf('Theme/Typography', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => (
    <TypographyStory />
  ))
);
