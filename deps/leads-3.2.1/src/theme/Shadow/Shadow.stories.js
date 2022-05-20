import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import styles from './Shadow.stories.css';
import withShadow, { levels } from './Shadow';

const ShadowContainer = ({ children }) =>
  <div className={styles.shadowContainer}>{children}</div>;
const ShadowHeader = ({ children }) =>
  <div className={styles.shadowHeader}>{children}</div>;
const Tile = ({ children, className }) =>
  <div className={`${className} ${styles.shadowTile}`}>{children}</div>;
const ShadowTile = withShadow(Tile);
ShadowContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

ShadowHeader.propTypes = ShadowContainer.propTypes;
Tile.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  className: PropTypes.string.isRequired,
};
const ShadowStory = () => (
  <ShadowContainer>
    <ShadowHeader> Shadows </ShadowHeader>
    <ShadowTile />
    {Object.keys(levels).sort().map(level => (
      <ShadowTile key={level} level={levels[level]} />
      ))}
  </ShadowContainer>
);

const stories = storiesOf('Theme/Shadow', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => (
    <ShadowStory />
  ))
);
