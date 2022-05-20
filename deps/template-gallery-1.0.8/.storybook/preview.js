import React from 'react';
import { addDecorator } from '@storybook/react';
import { ProductThemeProvider, MarketingThemeProvider } from '@lp/ui';
import Config from '@lp/config';
import CssBaseline from '@material-ui/core/CssBaseline';

import DockerConfig from '../config/storybook/docker.json';
import TestConfig from '../config/storybook/development.json';
import ProdConfig from '../config/storybook/production.json';

let ENV_CONFIG;

switch (process.env.NODE_ENV) {
  case 'docker':
    ENV_CONFIG = DockerConfig;
    break;
  case 'test':
    ENV_CONFIG = TestConfig;
    break;
  default:
    ENV_CONFIG = ProdConfig;
}

const config = Config.getInstance();
config.loadConfig(ENV_CONFIG);

addDecorator((storyFn, opts) => {
  const ThemeProvider = opts.kind.toLowerCase().includes('marketing')
    ? MarketingThemeProvider
    : ProductThemeProvider;
  return (
    <CssBaseline>
      <ThemeProvider>{storyFn()}</ThemeProvider>
    </CssBaseline>
  );
});
