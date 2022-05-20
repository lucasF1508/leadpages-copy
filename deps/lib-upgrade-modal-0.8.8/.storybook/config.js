import { configure, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const req = require.context('../src', true, /.stories.js.*$/);

addParameters({
  options: {
    showPanel: false,
    pureSFC: true,
  },
  viewport: {
    viewports: {
      laptop: {
        name: '1200x900',
        styles: {
          width: '1200px',
          height: '900px',
        },
        type: 'desktop',
      },
      ...INITIAL_VIEWPORTS,
    },
  },
});

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
