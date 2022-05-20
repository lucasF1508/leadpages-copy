import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { StoryHeader } from '../../../story-helpers';
import Icon, { icons } from '../Icon';
import withTypography, { types } from '../Typography';
import styles from './Icon.stories.css';

const Name = withTypography(props => <span {...props} />);
const IconStory = () => (
  <div>
    <StoryHeader>Icons</StoryHeader>
    <div className={styles.rows}>
      {Object.keys(icons).map(icon => (
        <div className={styles.info}>
          <Icon
            icon={icons[icon]}
          /> <Name className={styles.name} type={types.bodyDefault}>{icon}</Name>
        </div>
      ))}
    </div>
  </div>
);

const stories = storiesOf('Theme/Icon', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => (
    <IconStory />
  ))
);
