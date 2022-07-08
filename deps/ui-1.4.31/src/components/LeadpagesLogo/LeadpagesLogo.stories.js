import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '@material-ui/core/Box';

import { getThemeDecorator } from '../../utils/storybook';
import LeadpagesLogo from './LeadpagesLogo';

const stories = storiesOf('Components/Leadpages Logo', module);

stories.addDecorator(getThemeDecorator('marketing'));

stories.add('Leadpages Logo Full', () => (
  <Box m={4}>
    <LeadpagesLogo variant="full" color="primary" width="180" />
  </Box>
));

stories.add('Leadpages Logo Icon', () => (
  <Box m={4}>
    <LeadpagesLogo variant="icon" color="primary" width="40" />
  </Box>
));
