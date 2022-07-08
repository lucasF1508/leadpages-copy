import React from 'react';
import { storiesOf } from '@storybook/react';
import { getThemeDecorator } from '../../utils/storybook';
import Box from '@material-ui/core/Box';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';

const SwitchStory = () => {
  const [state, setState] = React.useState({
    checkedBasic1: false,
    checkedBasic2: true,
    checkedWithLabel1: false,
    checkedWithLabel2: true,
  });

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Box m={4}>
      <Box mb={6}>
        <Typography variant="h3" style={{ marginBottom: 20 }}>
          Basic Switches
        </Typography>
        <Switch
          checked={state.checkedBasic1}
          name="checkedBasic1"
          inputProps={{ 'aria-label': 'off switch' }}
          onChange={handleChange}
        />
        <Switch
          checked={state.checkedBasic2}
          name="checkedBasic2"
          inputProps={{ 'aria-label': 'on switch' }}
          onChange={handleChange}
        />
        <Switch inputProps={{ 'aria-label': 'disabled off switch' }} disabled />
        <Switch inputProps={{ 'aria-label': 'disabled on switch' }} checked disabled />
      </Box>
      <Box mb={6}>
        <Typography variant="h3" style={{ marginBottom: 20 }}>
          Switches with Labels
        </Typography>
        <FormGroup row>
          <FormControlLabel
            label="Off Switch"
            control={
              <Switch
                checked={state.checkedWithLabel1}
                name="checkedWithLabel1"
                onChange={handleChange}
              />
            }
          />
          <FormControlLabel
            label="On Switch"
            control={
              <Switch
                checked={state.checkedWithLabel2}
                name="checkedWithLabel2"
                onChange={handleChange}
              />
            }
          />
          <FormControlLabel label="Off Disabled" control={<Switch disabled />} />
          <FormControlLabel label="On Disabled" control={<Switch checked disabled />} />
        </FormGroup>
      </Box>
      <Box mb={6}>
        <Typography variant="h3" style={{ marginBottom: 20 }}>
          Label Placement
        </Typography>
        <FormGroup row>
          <FormControlLabel label="Top" labelPlacement="top" control={<Switch />} />
          <FormControlLabel label="End" labelPlacement="end" control={<Switch />} />
          <FormControlLabel label="Bottom" labelPlacement="bottom" control={<Switch />} />
          <FormControlLabel label="Start" labelPlacement="start" control={<Switch />} />
        </FormGroup>
      </Box>
    </Box>
  );
};

storiesOf('Themes/Product/Inputs', module)
  .addDecorator(getThemeDecorator('product'))
  .add('Switches', () => <SwitchStory />);

storiesOf('Themes/Marketing/Inputs', module)
  .addDecorator(getThemeDecorator('marketing'))
  .add('Switches', () => <SwitchStory />);

storiesOf('Themes/Leads/Inputs', module)
  .addDecorator(getThemeDecorator('leads'))
  .add('Switches', () => <SwitchStory />);
