import React from 'react';
import { storiesOf } from '@storybook/react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import { getThemeDecorator } from '../../utils/storybook';

const ChipStory = ({ theme }) => (
  <Box m={4}>
    <Typography variant="h2" style={{ marginBottom: 10 }}>
      Chip
    </Typography>
    <Typography variant="body1" style={{ marginBottom: 20 }}>
      NOTE: Large size styles and other variations have not yet been styled for the theme.
    </Typography>
    <Box mb={6}>
      <Typography variant="h3" style={{ marginBottom: 20 }}>
        Small
      </Typography>
      <Grid container spacing={1}>
        <Grid item>
          <Chip label="small" size="small"></Chip>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item>
          <Chip label="small deletable" size="small" onDelete={() => {}}></Chip>
        </Grid>
      </Grid>
    </Box>
    <Box mb={6}>
      <Typography variant="h3" style={{ marginBottom: 20 }}>
        Medium
      </Typography>
      <Grid container spacing={1}>
        <Grid item>
          <Chip label="medium" size="medium"></Chip>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item>
          <Chip label="medium deletable" size="medium" onDelete={() => {}}></Chip>
        </Grid>
      </Grid>
    </Box>
    <Box mb={6}>
      <Typography variant="h3" style={{ marginBottom: 20 }}>
        Color
      </Typography>
      <Grid container spacing={1}>
        <Grid item>
          <Chip label="default" size="medium"></Chip>
        </Grid>
        <Grid item>
          <Chip label="primary" size="medium" color="primary"></Chip>
        </Grid>
        <Grid item>
          <Chip label="secondary" size="medium" color="secondary"></Chip>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item>
          <Chip label="default deletable" size="medium" onDelete={() => {}}></Chip>
        </Grid>
        <Grid item>
          <Chip label="primary deleteable" size="medium" color="primary" onDelete={() => {}}></Chip>
        </Grid>
        <Grid item>
          <Chip
            label="secondary deleteable"
            size="medium"
            color="secondary"
            onDelete={() => {}}
          ></Chip>
        </Grid>
      </Grid>
    </Box>
  </Box>
);

storiesOf('Themes/Product', module)
  .addDecorator(getThemeDecorator('product'))
  .add('Chip', () => <ChipStory theme="product" />);

storiesOf('Themes/Marketing', module)
  .addDecorator(getThemeDecorator('marketing'))
  .add('Chip', () => <ChipStory theme="marketing" />);
