import React from 'react';
import { storiesOf } from '@storybook/react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import UnderlineLink from './UnderlineLink';

import { getThemeDecorator } from '../../utils/storybook';

const UnderlineLinkStory = () => (
  <Box m={4}>
    <Typography variant="h1">Underline Link</Typography>
    <Typography gutterBottom>
      Note: These styles have only been implemented using the marketing theme
    </Typography>
    <Box marginTop="30px" mb={6}>
      <Typography variant="h4" component="h2" gutterBottom>
        Primary (default)
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <UnderlineLink href="https://leadpages.com">Default</UnderlineLink>
        </Grid>
        <Grid item>
          <UnderlineLink href="https://leadpages.com" typographyVariant="caption">
            With caption typography
          </UnderlineLink>
        </Grid>
      </Grid>
    </Box>
    <Box mb={6}>
      <Typography variant="h4" component="h2" gutterBottom>
        Secondary
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <UnderlineLink href="https://leadpages.com" variant="secondary">
            Default
          </UnderlineLink>
        </Grid>
        <Grid item>
          <UnderlineLink
            href="https://leadpages.com"
            variant="secondary"
            typographyVariant="caption"
          >
            With caption typography
          </UnderlineLink>
        </Grid>
      </Grid>
    </Box>
  </Box>
);

storiesOf('Components/UnderlineLink', module)
  .addDecorator(getThemeDecorator('marketing'))
  .add('Default', () => <UnderlineLinkStory />);
