import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { StoryHeader, StoryRow } from '../../../story-helpers';

import UrlEdit from './UrlEdit';

const UrlEditStores = () => (
  <div>
    <StoryHeader> Url Edit </StoryHeader>
    <StoryRow>
      <UrlEdit
        url="www.google.com/flights/#search;f=MSP;t=MCO,SFB;d=2017-10-08;r=2017-10-12"
        onChange={url => console.log('NEW URL: ', url)}
      />
    </StoryRow>
    <StoryRow>
      <UrlEdit
        url="https://apple.com"
        onChange={url => console.log('NEW URL: ', url)}
      />
    </StoryRow>
  </div>
);

const stories = storiesOf('Pages/UrlEdit', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => (
    <UrlEditStores />
  ))
);
