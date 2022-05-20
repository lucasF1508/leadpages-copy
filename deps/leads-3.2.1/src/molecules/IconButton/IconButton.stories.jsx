import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import IconButton from '../IconButton';
import { StoryHeader, StoryRow } from '../../../story-helpers';

const stories = storiesOf('Molecules/IconButton', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about IconButton (supports markdown).

    ~~~js
    <IconButton>Render this</IconButton>
    ~~~

  `)(() => (
    <div>
      <StoryHeader>Icon Buttons</StoryHeader>
      <StoryRow>
        <IconButton icon="ellipsis" />
        <IconButton icon="ellipsis" isActive />
        <IconButton icon="ellipsis" disabled />
      </StoryRow>
      <StoryRow>
        <IconButton icon="analytics" noBackground />
        <IconButton icon="analytics" noBackground isActive />
        <IconButton icon="analytics" noBackground disabled />
      </StoryRow>
      <StoryRow>
        <IconButton icon="view" noHoverBackground />
        <IconButton icon="view" noHoverBackground isActive />
        <IconButton icon="view" noHoverBackground disabled />
      </StoryRow>
      <StoryRow>
        <IconButton icon="view" isDanger noHoverBackground />
        <IconButton icon="view" isDanger noHoverBackground isActive />
        <IconButton icon="view" isDanger noHoverBackground disabled />
      </StoryRow>
      <StoryRow>
        <IconButton icon="facebook" noBackground isHighlighted />
        <IconButton icon="facebook" isHighlighted isActive />
        <IconButton icon="facebook" isHighlighted disabled />
      </StoryRow>
    </div>
  ))
);

stories.add('SVG Icon Child', () => (
  <IconButton>
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 7c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0 0 12 2.06V0h-2v2.06A8.994 8.994 0 0 0 2.06 10H0v2h2.06A8.994 8.994 0 0 0 10 19.94V22h2v-2.06A8.994 8.994 0 0 0 19.94 12H22v-2h-2.06zM11 18c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"
        fill="#4c515d"
        fillRule="nonzero"
      />
    </svg>
  </IconButton>
));

stories.add('Pass a className', () => <IconButton className="myClassName" />);
stories.add('How to force a style', () => (
  <IconButton style={{ color: 'red' }} />
));
