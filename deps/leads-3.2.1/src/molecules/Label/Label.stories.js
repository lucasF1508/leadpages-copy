import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import Label from './Label';
import {
  StoryHeader,
  StoryRow,
} from '../../../story-helpers';

const LabelStory = () => (
  <div>
    <StoryHeader>Labels</StoryHeader>
    <StoryRow>
      <Label iconText="C">Control</Label>
      <Label iconText="v8">Variation 1</Label>
      <Label>Product Name</Label>
      <Label icon="visits_circle">Visits</Label>
    </StoryRow>
  </div>
);

const stories = storiesOf('Molecules/Label', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => (
    <LabelStory />
  ))
);
