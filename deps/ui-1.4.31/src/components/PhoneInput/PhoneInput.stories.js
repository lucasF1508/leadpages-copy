import React from 'react';
import { storiesOf } from '@storybook/react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import PhoneInput from './PhoneInput';

import { getThemeDecorator } from '../../utils/storybook';

const PhoneInputStory = () => (
  <Box m={4}>
    <Typography variant="h3" style={{ marginBottom: 20 }}>
      Phone Input
    </Typography>
    <Grid container spacing={1}>
      <Grid item>
        <PhoneInput />
      </Grid>
    </Grid>
  </Box>
);

storiesOf('Components/Phone Input', module)
  .addDecorator(getThemeDecorator('product'))
  .add('Default', () => <PhoneInputStory />);
