import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import Button from './Button';
import {
  StoryHeader,
  StoryRow,
} from '../../../story-helpers';

const ButtonStory = () => (
  <div>
    <StoryHeader>Buttons</StoryHeader>
    <StoryRow>
      <Button noBackground >Primary</Button>
      <Button noBackground isActive>Primary</Button>
      <Button noBackground disabled>Primary</Button>
    </StoryRow>
    <StoryRow>
      <Button noBackground isSecondary>Secondary</Button>
      <Button noBackground isSecondary isActive>Secondary</Button>
      <Button noBackground isSecondary disabled>Secondary</Button>
    </StoryRow>
    <StoryRow>
      <Button noBackground isDanger>Danger</Button>
      <Button noBackground isDanger isActive>Danger</Button>
      <Button noBackground isDanger disabled>Danger</Button>
    </StoryRow>
    <StoryRow>
      <Button noBackground isDanger isSecondary>danger</Button>
      <Button noBackground isDanger isSecondary isActive>danger</Button>
      <Button noBackground isDanger isSecondary disabled>danger</Button>
    </StoryRow>
    <StoryRow>
      <Button>Primary</Button>
      <Button isActive>Primary</Button>
      <Button disabled>Primary</Button>
    </StoryRow>
    <StoryRow>
      <Button isDanger>Danger</Button>
      <Button isDanger isActive>Danger</Button>
      <Button isDanger disabled>Danger</Button>
    </StoryRow>
    <StoryRow>
      <Button>Upload</Button>
      <Button>Fake</Button>
      <Button>Complete</Button>
    </StoryRow>
    <StoryRow>
      <Button isSecondary>Secondary</Button>
      <Button isSecondary isActive>Secondary</Button>
      <Button isSecondary disabled>Secondary</Button>
    </StoryRow>
    <StoryRow>
      <Button icon="ellipsis" />
      <Button href="www.google.com" icon="ellipsis" isActive />
      <Button icon="ellipsis" disabled />
    </StoryRow>
    <StoryRow>
      <Button icon="analytics" noBackground />
      <Button href="www.google.com" icon="analytics" isActive noBackground />
      <Button icon="analytics" disabled noBackground />
    </StoryRow>
    <StoryRow>
      <Button icon="view" noHoverBackground />
      <Button href="www.google.com" icon="view" isActive noHoverBackground />
      <Button icon="view" disabled noHoverBackground />
    </StoryRow>
    <StoryRow>
      <Button isDanger icon="view" noHoverBackground />
      <Button isDanger href="www.google.com" icon="view" isActive noHoverBackground />
      <Button isDanger icon="view" disabled noHoverBackground />
    </StoryRow>
    <StoryRow>
      <Button icon="facebook" noBackground isHighlighted />
      <Button href="www.google.com" icon="facebook" isActive isHighlighted />
      <Button icon="facebook" disabled isHighlighted />
    </StoryRow>
  </div>
);

const stories = storiesOf('Atoms/Buttons', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => (
    <ButtonStory />
  ))
);
