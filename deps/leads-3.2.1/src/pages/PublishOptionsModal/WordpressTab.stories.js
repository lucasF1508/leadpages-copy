import React from 'react';
import { StoryHeader, StoryRow } from '../../../story-helpers';

// tab views That are already build
import Wordpress from './WordpressTab';

const DEFAULT_PROPS = {
  className: 'class-name',
  assetName: 'Asset Name',
  assetUrl: 'http://url/slug',
  pluginUrl: 'http://wp-url/',
  pluginVersion: '2.1.6.100',
  dynamicPageUrl: 'http://lp/js/',
  staticPageUrl: 'http://lp/html/'
};

export default () => (
  <div>
    <StoryHeader>WordpressTab</StoryHeader>
    <h2>Default</h2>
    <StoryRow>
      <Wordpress {...DEFAULT_PROPS} />
    </StoryRow>
  </div>
);
