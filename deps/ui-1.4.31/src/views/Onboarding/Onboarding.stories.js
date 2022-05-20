import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Button, Grid, CircularProgress, TextField, Typography } from '@material-ui/core';
import VSTypography from '../../components/VSTypography';

import Onboarding from '../Onboarding';
import { getThemeDecorator } from '../../utils/storybook';

storiesOf('Views/Onboarding', module)
  .addDecorator(getThemeDecorator('marketing'))
  .add('Builder Loading Screen Example', () => (
    <Onboarding>
      <Grid container direction="column" alignItems="center" style={{ minHeight: 436 }}>
        <Grid item component={Box} md={7} xs={10} style={{ marginTop: 60, marginBottom: 96 }}>
          <VSTypography variant="h5" align="center">
            Hang on a moment while we load your experience…
          </VSTypography>
        </Grid>
        <Grid item>
          <CircularProgress />
        </Grid>
      </Grid>
    </Onboarding>
  ))
  .add('Builder Naming Screen Example', () => (
    <Onboarding>
      <Grid container direction="column" alignItems="center" style={{ minHeight: 436 }}>
        <Grid item md={7} xs={10} style={{ marginTop: 60 }}>
          <VSTypography variant="h5" align="center">
            Give your site a name
          </VSTypography>
        </Grid>
        <Grid item md={7} xs={10} style={{ marginTop: 18, marginBottom: 32 }}>
          <Typography variant="body1" align="center">
            This is only to help you identify your site in the app.
          </Typography>
        </Grid>
        <Grid item xs={10} style={{ marginBottom: 48, width: 500 }}>
          <TextField
            id="filled-helperText"
            label="Site Name"
            helperText="This is only to help you identify your page/site in the app."
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item md={7} xs={10} style={{ marginBottom: 60 }}>
          <Button>Continue</Button>
        </Grid>
      </Grid>
    </Onboarding>
  ));
