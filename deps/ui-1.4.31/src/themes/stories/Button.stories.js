import React from 'react';
import { storiesOf } from '@storybook/react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import { getThemeDecorator } from '../../utils/storybook';

const ButtonStory = ({ theme }) => (
  <Box m={4}>
    <Box mb={6}>
      <Typography variant="h3" style={{ marginBottom: 10 }}>
        Contained Buttons
      </Typography>
      <Typography variant="body1" style={{ marginBottom: 20 }}>
        NOTE: Medium is the default size
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <Button size="large">Large</Button>
        </Grid>
        <Grid item>
          <Button size="large" disabled>
            Disabled
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item>
          <Button>Medium</Button>
        </Grid>
        <Grid item>
          <Button disabled>Disabled</Button>
        </Grid>
      </Grid>
      {theme === 'marketing' && (
        <Grid container spacing={2}>
          <Grid item>
            <Button size="small">Small</Button>
          </Grid>
          <Grid item>
            <Button size="small" disabled>
              Disabled
            </Button>
          </Grid>
        </Grid>
      )}
    </Box>

    <Box mb={6}>
      <Typography variant="h3" style={{ marginBottom: 20 }}>
        Text Buttons
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <Button size="large" variant="text">
            Large
          </Button>
        </Grid>
        <Grid item>
          <Button size="large" variant="text" disabled>
            Disabled
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item>
          <Button variant="text">Medium</Button>
        </Grid>
        <Grid item>
          <Button variant="text" disabled>
            Disabled
          </Button>
        </Grid>
      </Grid>
      {theme === 'marketing' && (
        <Grid container spacing={2}>
          <Grid item>
            <Button size="small" variant="text">
              Small
            </Button>
          </Grid>
          <Grid item>
            <Button size="small" variant="text" disabled>
              Disabled
            </Button>
          </Grid>
        </Grid>
      )}
    </Box>

    <Box mb={6}>
      <Typography variant="h3" style={{ marginBottom: 20 }}>
        Outlined Buttons
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <Button variant="outlined" size="large">
            Large
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" size="large" disabled>
            Disabled
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item>
          <Button variant="outlined">Medium</Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" disabled>
            Disabled
          </Button>
        </Grid>
      </Grid>
      {theme === 'marketing' && (
        <Grid container spacing={2}>
          <Grid item>
            <Button variant="outlined" size="small">
              Small
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" size="small" disabled>
              Disabled
            </Button>
          </Grid>
        </Grid>
      )}
    </Box>
    <Box mb={6}>
      <Typography variant="h3" style={{ marginBottom: 20 }}>
        Icon Buttons
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <IconButton>
            <EditIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton disabled>
            <EditIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  </Box>
);

storiesOf('Themes/Product', module)
  .addDecorator(getThemeDecorator('product'))
  .add('Buttons', () => <ButtonStory theme="product" />);

storiesOf('Themes/Marketing', module)
  .addDecorator(getThemeDecorator('marketing'))
  .add('Buttons', () => <ButtonStory theme="marketing" />);

storiesOf('Themes/Leads', module)
  .addDecorator(getThemeDecorator('leads'))
  .add('Buttons', () => <ButtonStory theme="leads" />);
