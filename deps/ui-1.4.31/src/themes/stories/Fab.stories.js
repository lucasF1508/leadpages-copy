import React from 'react';
import { storiesOf } from '@storybook/react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import EditIcon from '@material-ui/icons/Edit';
import { getThemeDecorator } from '../../utils/storybook';

const FabStory = ({ theme }) => (
  <Box m={4}>
    <Typography variant="h2" style={{ marginBottom: 10 }}>
      Floating Action Button
    </Typography>
    <Typography variant="body1" style={{ marginBottom: 30 }}>
      A floating action button (FAB) performs the primary, or most common, action on a screen.
    </Typography>
    <Box mb={6}>
      <Typography variant="h3" style={{ marginBottom: 10 }}>
        Rounded
      </Typography>
      <Typography variant="body1" style={{ marginBottom: 20 }}>
        Rounded variant, Large size and Primary color are the component defaults.
      </Typography>
      <>
        <Grid container spacing={2}>
          <Grid item>
            <Fab aria-label="Scroll To Top">
              <ArrowUpwardIcon />
            </Fab>
          </Grid>
          <Grid item>
            <Fab aria-label="Scroll To Top" disabled>
              <ArrowUpwardIcon />
            </Fab>
          </Grid>
        </Grid>
      </>
      <Grid container spacing={2}>
        <Grid item>
          <Fab size="medium" aria-label="Scroll To Top">
            <ArrowUpwardIcon />
          </Fab>
        </Grid>
        <Grid item>
          <Fab size="medium" aria-label="Scroll To Top" disabled>
            <ArrowUpwardIcon />
          </Fab>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item>
          <Fab size="small" aria-label="Scroll To Top">
            <ArrowUpwardIcon />
          </Fab>
        </Grid>
        <Grid item>
          <Fab size="small" aria-label="Scroll To Top" disabled>
            <ArrowUpwardIcon />
          </Fab>
        </Grid>
      </Grid>
    </Box>
    <Box mb={6}>
      <Typography variant="h3" style={{ marginBottom: 20 }}>
        Extended
      </Typography>
      <>
        <Grid container spacing={2}>
          <Grid item>
            <Fab variant="extended" aria-label="Edit">
              <EditIcon />
              Edit
            </Fab>
          </Grid>
          <Grid item>
            <Fab variant="extended" aria-label="Edit" disabled>
              <EditIcon />
              Edit
            </Fab>
          </Grid>
        </Grid>
      </>
      <Grid container spacing={2}>
        <Grid item>
          <Fab variant="extended" size="medium" aria-label="Edit">
            <EditIcon />
            Edit
          </Fab>
        </Grid>
        <Grid item>
          <Fab variant="extended" size="medium" aria-label="Edit" disabled>
            <EditIcon />
            Edit
          </Fab>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item>
          <Fab variant="extended" size="small" aria-label="Edit">
            <EditIcon />
            Edit
          </Fab>
        </Grid>
        <Grid item>
          <Fab variant="extended" size="small" aria-label="Edit" disabled>
            <EditIcon />
            Edit
          </Fab>
        </Grid>
      </Grid>
    </Box>
  </Box>
);

storiesOf('Themes/Product', module)
  .addDecorator(getThemeDecorator('product'))
  .add('Floating Action Buttons', () => <FabStory theme="product" />);

storiesOf('Themes/Marketing', module)
  .addDecorator(getThemeDecorator('marketing'))
  .add('Floating Action Buttons', () => <FabStory theme="marketing" />);
