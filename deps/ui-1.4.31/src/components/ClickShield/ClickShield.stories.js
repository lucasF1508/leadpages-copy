import React from 'react';
import { storiesOf } from '@storybook/react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { getThemeDecorator } from '../../utils/storybook';
import ClickShield from './ClickShield';

const ClickShieldDefaultStory = () => {
  return (
    <Box m={4}>
      <Typography variant="h3" style={{ marginBottom: 20 }}>
        ClickShield 
      </Typography>
      <Grid container spacing={1}>
        <Grid item>
          <Button onClick={() => alert('clicked!')}>Can, click</Button>
        </Grid>
        <ClickShield isActive>
        <Grid item>
          <Button onClick={() => alert('cant open')}>Cant click me</Button>
        </Grid>
        </ClickShield>
      </Grid>
    </Box>
  );
};

const ClickShieldWhiteWashStory = () => {
  return (
    <Box m={4}>
      <Typography variant="h3" style={{ marginBottom: 20 }}>
        ClickShield 
      </Typography>
      <Grid container spacing={1}>
        <Grid item>
          <Button onClick={() => alert('clicked!')}>Can, click</Button>
        </Grid>
        <ClickShield isActive whiteWash intensity={30}>
        <Grid item>
          <Button onClick={() => alert('cant open')}>Cant click me</Button>
        </Grid>
        </ClickShield>
      </Grid>
    </Box>
  );
};

storiesOf('Components/ClickShield', module)
  .addDecorator(getThemeDecorator('product'))
  .add('Default', () => <ClickShieldDefaultStory />)
  .add('White Wash', () => <ClickShieldWhiteWashStory />);
