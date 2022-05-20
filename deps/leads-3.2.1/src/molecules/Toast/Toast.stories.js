import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { StoryHeader } from '../../../story-helpers';
import Toast, {} from '../Toast';

const ToastStory = () => (
  <div>
    <StoryHeader>Toast</StoryHeader>
    <Toast
      message="Hello Toast"
      href="/button"
      linkText="Hello Toast Link"
    />
    <Toast
      message="Hello Toast Warning"
      href="http://duckduckgo.com"
      linkText="Hello Toast warning"
      severity={Toast.severity.WARNING}
    />
    <Toast
      message="Hello Toast II"
      href="http://duckduckgo.com"
      linkText="Hello Toast Link"
      severity={Toast.severity.ERROR}
    />
    <Toast
      message="Hello Toast III"
      linkText="Hello Toast Link"
    />
    <Toast
      message="Hello Toast IV"
    />
    <Toast
      message="Hello Toast"
      href="Hello Toast"
      linkText="Hello Toast Link"
    />
  </div>
);

const stories = storiesOf('Molecules/Toast', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => (
    <ToastStory />
  ))
);
