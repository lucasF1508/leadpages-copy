import React, { useState, useEffect } from 'react';
import { storiesOf } from '@storybook/react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useTheme } from '@material-ui/core/styles';

import { getThemeDecorator } from '../../utils/storybook';

const CircularProgressStory = () => {
  const theme = useTheme();
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    function tick() {
      // reset when reaching 100%
      setProgress(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + 1));
    }

    const timer = setInterval(tick, 20);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    function tick() {
      setCompleted(prevCompleted => (prevCompleted >= 100 ? 0 : prevCompleted + 10));
    }

    const timer = setInterval(tick, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box m={4}>
      <Typography variant="h2" style={{ marginBottom: 10 }}>
        Circular Progress
      </Typography>
      <Box mt={6} mb={6}>
        <Typography variant="h3" style={{ marginBottom: 20 }}>
          Circular Indeterminate
        </Typography>
        <Grid container spacing={2}>
          <Grid item>
            <CircularProgress />
          </Grid>
          <Grid item style={{ backgroundColor: theme.palette.primary.main, height: 60 }}>
            <CircularProgress color="secondary" />
          </Grid>
        </Grid>
      </Box>
      <Box mb={6}>
        <Typography variant="h3" style={{ marginBottom: 20 }}>
          Circular Determinate
        </Typography>
        <Grid container spacing={2}>
          <Grid item>
            <CircularProgress variant="determinate" value={progress} />
          </Grid>
          <Grid item style={{ backgroundColor: theme.palette.primary.main, height: 60 }}>
            <CircularProgress variant="determinate" color="secondary" value={progress} />
          </Grid>
        </Grid>
      </Box>
      <Box mb={6}>
        <Typography variant="h3" style={{ marginBottom: 20 }}>
          Circular Static
        </Typography>
        <Grid container spacing={2}>
          <Grid item>
            <CircularProgress variant="static" value={completed} />
          </Grid>
          <Grid item style={{ backgroundColor: theme.palette.primary.main, height: 60 }}>
            <CircularProgress variant="static" color="secondary" value={completed} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const LinearProgressStory = () => {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    function progress() {
      setCompleted(oldCompleted => {
        if (oldCompleted === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldCompleted + diff, 100);
      });
    }

    const timer = setInterval(progress, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box m={4}>
      <Typography variant="h2" style={{ marginBottom: 10 }}>
        Linear Progress
      </Typography>
      <Typography variant="body2">
        NOTE: Secondary variant styles have not yet been defined for the linear progress indicator.
        A use case has not yet been identified.
      </Typography>
      <Box mt={6} mb={6}>
        <Typography variant="h3" style={{ marginBottom: 20 }}>
          Linear Indeterminate
        </Typography>
        <Grid container spacing={2}>
          <Grid item style={{ width: '100%' }}>
            <LinearProgress />
          </Grid>
        </Grid>
      </Box>
      <Box mb={6}>
        <Typography variant="h3" style={{ marginBottom: 20 }}>
          Linear Determinate
        </Typography>
        <Grid container spacing={2}>
          <Grid item style={{ width: '100%' }}>
            <LinearProgress variant="determinate" value={completed} />
          </Grid>
        </Grid>
      </Box>
      <Box mb={6}>
        <Typography variant="h3" style={{ marginBottom: 20 }}>
          Linear Query
        </Typography>
        <Grid container spacing={2}>
          <Grid item style={{ width: '100%' }}>
            <LinearProgress variant="query" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

storiesOf('Themes/Product/Progress', module)
  .addDecorator(getThemeDecorator('product'))
  .add('Circular Progress', () => <CircularProgressStory />)
  .add('Linear Progress', () => <LinearProgressStory />);

storiesOf('Themes/Marketing/Progress', module)
  .addDecorator(getThemeDecorator('marketing'))
  .add('Circular Progress', () => <CircularProgressStory />)
  .add('Linear Progress', () => <LinearProgressStory />);
