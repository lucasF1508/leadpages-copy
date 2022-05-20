import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { StoryHeader, StorySubHeader, StoryRow, StoryColumn } from '../../../story-helpers';

import ActionMenu from './ActionMenu';

const ActionMenuStories = () => (
  <div>
    <StoryHeader> ActionMenu </StoryHeader>
    <StoryRow>
      <StoryColumn>
        <StorySubHeader>Default</StorySubHeader>
        <ActionMenu />
      </StoryColumn>
      <StoryColumn>
        <StorySubHeader>Force Opened</StorySubHeader>
        <ActionMenu isActive />
      </StoryColumn>
    </StoryRow>
    <StoryRow>
      <StoryColumn>
        <StorySubHeader>With Disabled Buttons</StorySubHeader>
        <ActionMenu
          icons={[
            { icon: 'remove_circle', tooltip: 'Remove from Funnel', enabled: false },
            { icon: 'view', tooltip: 'View Page', enabled: false },
          ]}
          actions={{
            remove_circle: () => {},
            view: () => {},
          }}
        />
      </StoryColumn>
      <StoryColumn>
        <StorySubHeader>With Danger Buttons</StorySubHeader>
        <ActionMenu
          icons={[
            { icon: 'remove_circle', tooltip: 'Remove from Funnel', isDanger: true },
            { icon: 'view', tooltip: 'View Page', isDanger: true },
          ]}
        />
      </StoryColumn>
    </StoryRow>
  </div>
);

const stories = storiesOf('Organisms/ActionMenu', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => (
    <ActionMenuStories />
  ))
);
