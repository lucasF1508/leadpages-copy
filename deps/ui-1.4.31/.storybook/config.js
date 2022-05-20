import React from 'react';
import { addDecorator, addParameters, configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.js$/);

function loadStories() {
  addParameters({
    options: {
      showPanel: false,
      panelPosition: 'right',
    },
  });

  addDecorator(storyFn => <>{storyFn()}</>);

  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
