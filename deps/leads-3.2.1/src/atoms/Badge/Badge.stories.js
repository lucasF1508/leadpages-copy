import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import Badge from './Badge';
import {
  StoryHeader,
  StoryRow,
} from '../../../story-helpers';

const BadgeStory = () => (
  <div>
    <StoryHeader>Badges</StoryHeader>
    <StoryRow>
      <Badge icon="star">advanced feature</Badge>
    </StoryRow>
  </div>
);

const stories = storiesOf('Atoms/Badges', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => (
    <BadgeStory />
  ))
);
