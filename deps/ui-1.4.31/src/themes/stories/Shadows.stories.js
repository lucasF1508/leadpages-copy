import React from 'react';
import { storiesOf } from '@storybook/react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { getThemeDecorator } from '../../utils/storybook';

const ShadowBox = ({ shadow }) => (
  <Box
    boxShadow={shadow}
    bgcolor="background.paper"
    m={4}
    p={1}
    style={{ width: 150, height: 150 }}
  >
    <Typography variant="body1">boxShadow={shadow}</Typography>
  </Box>
);

const ShadowStory = () => (
  <Box m={4}>
    <Grid container>
      <ShadowBox shadow="0" />
      <ShadowBox shadow="1" />
      <ShadowBox shadow="2" />
      <ShadowBox shadow="3" />
      <ShadowBox shadow="4" />
      <ShadowBox shadow="5" />
      <ShadowBox shadow="6" />
      <ShadowBox shadow="7" />
      <ShadowBox shadow="8" />
      <ShadowBox shadow="9" />
      <ShadowBox shadow="10" />
      <ShadowBox shadow="11" />
      <ShadowBox shadow="12" />
      <ShadowBox shadow="13" />
      <ShadowBox shadow="14" />
      <ShadowBox shadow="15" />
      <ShadowBox shadow="16" />
      <ShadowBox shadow="17" />
      <ShadowBox shadow="18" />
      <ShadowBox shadow="19" />
      <ShadowBox shadow="20" />
      <ShadowBox shadow="21" />
      <ShadowBox shadow="22" />
      <ShadowBox shadow="23" />
      <ShadowBox shadow="24" />
    </Grid>
  </Box>
);

storiesOf('Themes/Product', module)
  .addDecorator(getThemeDecorator('product'))
  .add('Shadows', () => <ShadowStory />);

storiesOf('Themes/Marketing', module)
  .addDecorator(getThemeDecorator('marketing'))
  .add('Shadows', () => <ShadowStory />);
