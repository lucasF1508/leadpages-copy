import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import Link from '../Link';
import { StoryHeader, StoryRow } from '../../../story-helpers';

const stories = storiesOf('Atoms/Link', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about Link (supports markdown).
  
    ~~~js
    <Link>Render this</Link>
    ~~~
  
  `)(() => (
    <div>
      <StoryHeader>Links</StoryHeader>
      <StoryRow>
        <Link>Primary</Link>
        <Link isActive>Primary</Link>
        <Link disabled>Primary</Link>
      </StoryRow>
      <StoryRow>
        <Link isSecondary>Secondary</Link>
        <Link isSecondary isActive>
          Secondary
        </Link>
        <Link isSecondary disabled>
          Secondary
        </Link>
      </StoryRow>
      <StoryRow>
        <Link isDanger>Danger</Link>
        <Link isDanger isActive>
          Danger
        </Link>
        <Link isDanger disabled>
          Danger
        </Link>
      </StoryRow>
      <StoryRow>
        <Link isDanger isSecondary>
          danger
        </Link>
        <Link isDanger isSecondary isActive>
          danger
        </Link>
        <Link isDanger isSecondary disabled>
          danger
        </Link>
      </StoryRow>
    </div>
  ))
);
stories.add(
  'Default',
  withInfo(`
  Description or documentation about Link (supports markdown).

  ~~~js
  <Link>Primary</Link>
  ~~~

`)(() => <Link>Primary</Link>)
);
stories.add(
  'Secondary',
  withInfo(`
  Description or documentation about Link (supports markdown).

  ~~~js
  <Link isSecondary>
    Secondary
  </Link>
  ~~~

`)(() => <Link isSecondary>Secondary</Link>)
);
stories.add(
  'Danger',
  withInfo(`
  Description or documentation about Link (supports markdown).

  ~~~js
  <Link isDanger>
    Danger
  </Link>
  ~~~

`)(() => <Link isDanger>Danger</Link>)
);
stories.add(
  'Secondary Danger',
  withInfo(`
  Description or documentation about Link (supports markdown).

  ~~~js
  <Link isDanger isSecondary>
    danger
  </Link>
  ~~~

`)(() => (
    <Link isDanger isSecondary>
      danger
    </Link>
  ))
);
