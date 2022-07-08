import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import { getThemeDecorator } from '../../utils/storybook';

const SliderStory = () => {
  const [value, setValue] = useState(10);

  const handleChange = (evt, newValue) => {
    setValue(newValue);
  };

  return (
    <Box m={4} maxWidth="550px">
      <Typography variant="h3" style={{ marginBottom: 20 }}>
        Slider
      </Typography>
      <Typography style={{ marginBottom: 20 }}>
        Note: These styles have only been implemented using the Leads theme. Disabled styles have
        not been defined for the Slider.
      </Typography>
      <Grid container direction="row" justify="flex-start" alignItems="center" spacing={2}>
        <Grid item xs={2}>
          <Typography id="slider">Volume</Typography>
        </Grid>
        <Grid item xs={10} container alignItems="center">
          <Slider value={value} onChange={handleChange} aria-labelledby="slider" />
        </Grid>
      </Grid>
    </Box>
  );
};

storiesOf('Themes/Product/Inputs', module)
  .addDecorator(getThemeDecorator('product'))
  .add('Slider', () => <SliderStory />);

storiesOf('Themes/Marketing/Inputs', module)
  .addDecorator(getThemeDecorator('marketing'))
  .add('Slider', () => <SliderStory />);

storiesOf('Themes/Leads/Inputs', module)
  .addDecorator(getThemeDecorator('leads'))
  .add('Slider', () => <SliderStory />);
