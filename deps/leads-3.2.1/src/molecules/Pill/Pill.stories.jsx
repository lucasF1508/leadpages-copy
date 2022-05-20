import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';

import { StoryHeader, StoryRow, StoryColumn } from '../../../story-helpers';
import { Pill, withSplitTest, withConversion } from '../Pill';

import mockData from './mockData';

const PillWithSplitTest = withSplitTest(Pill);
const PillWithConversion = withConversion(Pill);

const PillStory = () => (
  <div>
    <StoryHeader>Pills</StoryHeader>
    <StoryRow>
      <StoryColumn>
        <StoryHeader>Empty Pill</StoryHeader>
        <Pill />
      </StoryColumn>
      <StoryColumn>
        <StoryHeader>Conversion Pill</StoryHeader>
        <PillWithConversion data={mockData.populatedPill} />
      </StoryColumn>
      <StoryColumn>
        <StoryHeader>Conversion Pill No Analytics</StoryHeader>
        <PillWithConversion data={[{ text: 'Thingy', conversion: null }]} />
      </StoryColumn>
      <StoryColumn>
        <StoryHeader>Conversion Pill With Multiple Conversions</StoryHeader>
        <PillWithConversion data={mockData.populatedPillWithMultipleConversions} />
      </StoryColumn>
    </StoryRow>
    <StoryRow>
      <StoryColumn>
        <StoryHeader>Pill With Split Test Single Variation</StoryHeader>
        <PillWithSplitTest data={mockData.withSplitTestOneVariation.data} />
      </StoryColumn>
      <StoryColumn>
        <StoryHeader>Pill With Split Test Two Variations</StoryHeader>
        <PillWithSplitTest data={mockData.withSplitTest.data} />
      </StoryColumn>
      <StoryColumn>
        <StoryHeader>Pill With Multiple Variations</StoryHeader>
        <PillWithSplitTest data={mockData.withMultipleSplitTests.data} />
      </StoryColumn>
    </StoryRow>
  </div>
);

const stories = storiesOf('Molecules/Pill', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => (
    <PillStory />
  ))
);
