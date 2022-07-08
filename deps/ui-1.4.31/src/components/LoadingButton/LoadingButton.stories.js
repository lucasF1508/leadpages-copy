import React, { useState, useEffect } from 'react';
import { storiesOf } from '@storybook/react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SaveIcon from '@material-ui/icons/Save';
import { getThemeDecorator } from '../../utils/storybook';

import LoadingButton from './LoadingButton';

const DEFAULT_LOADING_STATE = {
  contained: false,
  containedSuccess: false,
  text: false,
  textSuccess: false,
  outlined: false,
  outlinedSuccess: false,
  icon: false,
  iconSuccess: false,
};

const DEFAULT_SUCCESS_STATE = {
  containedSuccess: false,
  textSuccess: false,
  outlinedSuccess: false,
  iconSuccess: false,
};

const LoadingButtonStory = () => {
  const [loading, setLoading] = useState(DEFAULT_LOADING_STATE);
  const [success, setSuccess] = useState(DEFAULT_SUCCESS_STATE);
  const [clickedType, setClickedType] = useState(null);

  const handleClick = type => () => {
    setSuccess(DEFAULT_SUCCESS_STATE);
    setLoading({
      ...DEFAULT_LOADING_STATE,
      [type]: true,
    });
    setClickedType(type);
  };

  useEffect(() => {
    let timer;
    if (loading !== DEFAULT_LOADING_STATE) {
      timer = setTimeout(() => {
        setSuccess({ ...DEFAULT_LOADING_STATE, [clickedType]: true });
        setLoading(DEFAULT_LOADING_STATE);
      }, 2500);
    }
    return () => clearTimeout(timer);
  }, [loading, success, clickedType]);

  return (
    <Box m={4}>
      <Box mb={6}>
        <Typography variant="h3" style={{ marginBottom: 20 }}>
          Contained Loading Button
        </Typography>
        <Grid container spacing={2}>
          <Grid item>
            <LoadingButton onClick={handleClick('contained')} isLoading={loading.contained}>
              Publish
            </LoadingButton>
          </Grid>
          <Grid item>
            <LoadingButton
              onClick={handleClick('containedSuccess')}
              isLoading={loading.containedSuccess}
              isSuccess={success.containedSuccess}
              successText="Sent"
            >
              With Success
            </LoadingButton>
          </Grid>
          <Grid item>
            <LoadingButton disabled>Disabled</LoadingButton>
          </Grid>
        </Grid>
      </Box>
      <Box mb={6}>
        <Typography variant="h3" style={{ marginBottom: 20 }}>
          Text Loading Button
        </Typography>
        <Grid container spacing={2}>
          <Grid item>
            <LoadingButton variant="text" onClick={handleClick('text')} isLoading={loading.text}>
              Publish
            </LoadingButton>
          </Grid>
          <Grid item>
            <LoadingButton
              variant="text"
              onClick={handleClick('textSuccess')}
              isLoading={loading.textSuccess}
              isSuccess={success.textSuccess}
              successText="Sent"
            >
              With Success
            </LoadingButton>
          </Grid>
          <Grid item>
            <LoadingButton variant="text" disabled>
              Disabled
            </LoadingButton>
          </Grid>
        </Grid>
      </Box>
      <Box mb={6}>
        <Typography variant="h3" style={{ marginBottom: 20 }}>
          Outlined Loading Button
        </Typography>
        <Grid container spacing={2}>
          <Grid item>
            <LoadingButton
              variant="outlined"
              onClick={handleClick('outlined')}
              isLoading={loading.outlined}
            >
              Publish
            </LoadingButton>
          </Grid>
          <Grid item>
            <LoadingButton
              variant="outlined"
              onClick={handleClick('outlinedSuccess')}
              isLoading={loading.outlinedSuccess}
              isSuccess={success.outlinedSuccess}
              successText="Sent"
            >
              With Success
            </LoadingButton>
          </Grid>
          <Grid item>
            <LoadingButton variant="outlined" disabled>
              Disabled
            </LoadingButton>
          </Grid>
        </Grid>
      </Box>
      <Box mb={6}>
        <Typography variant="h3" style={{ marginBottom: 20 }}>
          Icon Loading Button
        </Typography>
        <Grid container spacing={2}>
          <Grid item>
            <LoadingButton variant="icon" onClick={handleClick('icon')} isLoading={loading.icon}>
              <SaveIcon />
            </LoadingButton>
          </Grid>
          <Grid item>
            <LoadingButton
              variant="icon"
              onClick={handleClick('iconSuccess')}
              isLoading={loading.iconSuccess}
              isSuccess={success.iconSuccess}
            >
              <SaveIcon />
            </LoadingButton>
          </Grid>
          <Grid item>
            <LoadingButton variant="icon" disabled>
              <SaveIcon />
            </LoadingButton>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

storiesOf('Components/Loading Button', module)
  .addDecorator(getThemeDecorator('product'))
  .add('Default', () => <LoadingButtonStory />);
