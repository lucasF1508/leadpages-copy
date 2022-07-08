import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import React from 'react';
import Option from './Option';

import { StoryHeader } from '../../../story-helpers';

const OptionStory = () => (
  <div>
    <StoryHeader>Option</StoryHeader>
    <Option onClick={action('clicked option')} primaryText="Option 1" value="foo" />
    <Option onClick={action('clicked option')} primaryText="Option 2" selected value="bar" />
    <Option
      onClick={action('clicked option')}
      primaryText="Option 3"
      secondaryText="with details"
      value="baz"
    />
    <Option
      onClick={action('clicked option')}
      primaryText="Option 4 (disabled)"
      disabled
      secondaryText="with details"
      value="four"
    />
  </div>
);

const stories = storiesOf('Atoms/Option', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => <OptionStory />),
);
