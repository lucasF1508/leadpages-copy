import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

import { getThemeDecorator } from '../../utils/storybook';

const RadioStory = () => {
  const [value, setValue] = useState('fries');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <Box m={4} maxWidth="550px">
      <Typography variant="h3" style={{ marginBottom: 20 }}>
        Radio Buttons
      </Typography>
      <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={2}>
        <Grid item xs={12}>
          <FormControlLabel label="Checked" control={<Radio checked />} />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel label="Default" control={<Radio />} />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel label="Disabled Unchecked" control={<Radio disabled />} />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel label="Disabled Checked" control={<Radio checked disabled />} />
        </Grid>
      </Grid>
      <Typography variant="h3" style={{ marginTop: 50, marginBottom: 20 }}>
        Radio Button Group
      </Typography>
      <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={2}>
        <Grid item xs={12} style={{ marginBottom: 30 }}>
          <FormControl component="fieldset" required>
            <FormLabel component="legend">Pick A Side</FormLabel>
            <RadioGroup aria-label="side" name="side" value={value} onChange={handleChange}>
              <FormControlLabel control={<Radio value="fries" />} label="Fries" />
              <FormControlLabel control={<Radio value="tots" />} label="Tots" />
              <FormControlLabel control={<Radio value="cheeseCurds" />} label="Cheese Curds" />
              <FormControlLabel
                control={<Radio value="onionRings" disabled />}
                label="Onion Rings"
              />
            </RadioGroup>
            <FormHelperText>Sorry. Onion rings are not available at this time.</FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

storiesOf('Themes/Product/Inputs', module)
  .addDecorator(getThemeDecorator('product'))
  .add('Radio Buttons', () => <RadioStory />);

storiesOf('Themes/Marketing/Inputs', module)
  .addDecorator(getThemeDecorator('marketing'))
  .add('Radio Buttons', () => <RadioStory />);

storiesOf('Themes/Leads/Inputs', module)
  .addDecorator(getThemeDecorator('leads'))
  .add('Radio Buttons', () => <RadioStory />);
