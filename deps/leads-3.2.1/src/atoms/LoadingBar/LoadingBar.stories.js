import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { StoryHeader, StoryRow, StoryColumn } from '../../../story-helpers';
import LoadingBar from './LoadingBar';

const LoadingBarStory = () => (
  <div>
    <StoryHeader>Loading Bar (Look Up)</StoryHeader>
    <StoryRow>
      <StoryColumn>
        <LoadingBar />
      </StoryColumn>
    </StoryRow>
  </div>
);

const stories = storiesOf('Atoms/LoadingBar', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => (
    <LoadingBarStory />
  ))
);
