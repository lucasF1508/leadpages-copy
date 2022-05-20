import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import {
  StoryHeader,
  StoryRow,
} from '../../../story-helpers';

import Indicator from './Indicator';

const stories = storiesOf('Atoms/Indicator', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => (
    <div>
      <StoryHeader>Labels</StoryHeader>
      <StoryRow>
        <Indicator status="success" />
        <Indicator status="info" />
        <Indicator status="warning" />
        <Indicator status="error" className="jim" />
      </StoryRow>
    </div>
  ))
);
