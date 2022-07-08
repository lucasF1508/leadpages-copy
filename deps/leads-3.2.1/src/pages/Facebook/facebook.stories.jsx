import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { StoryHeader, StoryRow } from '../../../story-helpers';

import FacebookTrafficSource from './FacebookTrafficSource/facebook-traffic-source.stories';

const FacebookStories = () => (
  <div>
    <StoryHeader> Facebook </StoryHeader>
    <FacebookTrafficSource />
  </div>
);

const stories = storiesOf('Pages/FacebookTrafficSource', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => (
    <FacebookStories />
  ))
);
