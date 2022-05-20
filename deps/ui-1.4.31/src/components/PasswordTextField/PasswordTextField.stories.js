import React from 'react';
import { storiesOf } from '@storybook/react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { getThemeDecorator } from '../../utils/storybook';
import PasswordTextField from './PasswordTextField';

const PasswordTextFieldStory = () => (
  <Box m={4}>
    <Typography variant="h3">Password Text Field</Typography>
    <Box marginTop="30px" mb={6}>
      <Grid container spacing={2}>
        <Grid item>
          <PasswordTextField fullWidth />
        </Grid>
        <Grid item>
          <PasswordTextField label="With Custom Label" />
        </Grid>
      </Grid>
    </Box>
  </Box>
);

storiesOf('Components/PasswordTextField', module)
  .addDecorator(getThemeDecorator('marketing'))
  .add('Default', () => <PasswordTextFieldStory />);
