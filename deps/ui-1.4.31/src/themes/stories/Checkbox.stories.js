import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

import { getThemeDecorator } from '../../utils/storybook';

const CheckboxStory = () => {
  const [value, setValue] = useState({
    fries: true,
    tots: true,
    cheeseCurds: false,
  });

  const handleChange = name => event => {
    setValue({ ...value, [name]: event.target.checked });
  };

  const { fries, tots, cheeseCurds } = value;
  const hasError = [fries, tots, cheeseCurds].filter(v => v).length > 1;

  return (
    <Box m={4} maxWidth="550px">
      <Typography variant="h3" style={{ marginBottom: 20 }}>
        Checkboxes
      </Typography>
      <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={2}>
        <Grid item xs={12}>
          <FormControlLabel label="Checked" control={<Checkbox checked />} />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel label="Default" control={<Checkbox />} />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel label="Disabled Unchecked" control={<Checkbox disabled />} />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel label="Disabled Checked" control={<Checkbox checked disabled />} />
        </Grid>
      </Grid>
      <Typography variant="h3" style={{ marginTop: 50, marginBottom: 20 }}>
        Checkbox Group
      </Typography>
      <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={2}>
        <Grid item xs={12} style={{ marginBottom: 30 }}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Pick Sides</FormLabel>
            <FormGroup>
              <FormControlLabel control={<Checkbox value="fries" />} label="Fries" />
              <FormControlLabel control={<Checkbox value="tots" />} label="Tots" />
              <FormControlLabel control={<Checkbox value="cheeseCurds" />} label="Cheese Curds" />
            </FormGroup>
            <FormHelperText>Go ahead. You can have all three.</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset" required error={hasError}>
            <FormLabel component="legend">Pick A Side</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox checked={fries} onChange={handleChange('fries')} value="fries" />
                }
                label="Fries"
              />
              <FormControlLabel
                control={<Checkbox checked={tots} onChange={handleChange('tots')} value="tots" />}
                label="Tots"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={cheeseCurds}
                    onChange={handleChange('cheeseCurds')}
                    value="cheeseCurds"
                  />
                }
                label="Cheese Curds"
              />
            </FormGroup>
            <FormHelperText>
              {hasError
                ? 'Sorry. Only one side per order.'
                : 'Pick multiple sides to see error message.'}
            </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

storiesOf('Themes/Product/Inputs', module)
  .addDecorator(getThemeDecorator('product'))
  .add('Checkboxes', () => <CheckboxStory />);

storiesOf('Themes/Marketing/Inputs', module)
  .addDecorator(getThemeDecorator('marketing'))
  .add('Checkboxes', () => <CheckboxStory />);

storiesOf('Themes/Leads/Inputs', module)
  .addDecorator(getThemeDecorator('leads'))
  .add('Checkboxes', () => <CheckboxStory />);
