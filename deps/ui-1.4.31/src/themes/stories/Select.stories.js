import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import InputLabelWithTooltip from '../../components/InputLabelWithTooltip';
import { getThemeDecorator } from '../../utils/storybook';

const SelectStory = ({ theme }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box m={4} maxWidth="550px">
      <Typography variant="h3" style={{ marginBottom: 10 }}>
        TextField As Select <em>(Preferred Usage)</em>
      </Typography>
      <Typography variant="body2" style={{ marginBottom: 20 }}>
        NOTE: All of the examples below can also be created using a TextField component as a select
        (for simplicity).{' '}
        <a
          href="https://material-ui.com/components/selects/#text-fields"
          target="_blank"
          rel="noopener noreferrer"
        >
          See documentation
        </a>
        .
      </Typography>
      <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={6}>
        <Grid item xs={6}>
          <TextField
            id="textfield-select"
            label="Label"
            InputLabelProps={{ id: 'textfield-select-label' }}
            value={selectedValue}
            onChange={handleChange}
            helperText="Helper text"
            select
            fullWidth
          >
            <MenuItem value={1}>Item 1</MenuItem>
            <MenuItem value={2}>Item 2</MenuItem>
            <MenuItem value={3}>Item 3</MenuItem>
            <MenuItem value={4}>Item 4</MenuItem>
          </TextField>
        </Grid>
      </Grid>
      <Typography variant="h3" style={{ marginTop: 50, marginBottom: 20 }}>
        Default Select
      </Typography>
      <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={6}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="default-select-label">Default</InputLabel>
            <Select
              id="default-select"
              labelId="default-select-label"
              value={selectedValue}
              onChange={handleChange}
            >
              <MenuItem value={1}>Item 1</MenuItem>
              <MenuItem value={2}>Item 2</MenuItem>
              <MenuItem value={3}>Item 3</MenuItem>
              <MenuItem value={4}>Item 4</MenuItem>
            </Select>
            <FormHelperText>Helper text</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="selected-value-label">Initial Selected Value</InputLabel>
            <Select id="selected-value" labelId="selected-value-label" value={2}>
              <MenuItem value={1}>Item 1</MenuItem>
              <MenuItem value={2}>Item 2</MenuItem>
              <MenuItem value={3}>Item 3</MenuItem>
              <MenuItem value={4}>Item 4</MenuItem>
            </Select>
            <FormHelperText>Helper text</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl disabled fullWidth>
            <InputLabel id="disabled-select-label">Disabled</InputLabel>
            <Select id="disabled-select" labelId="disabled-select-label" value="">
              <MenuItem value={1}>Item 1</MenuItem>
              <MenuItem value={2}>Item 2</MenuItem>
              <MenuItem value={3}>Item 3</MenuItem>
              <MenuItem value={4}>Item 4</MenuItem>
            </Select>
            <FormHelperText>Helper text</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl disabled fullWidth>
            <InputLabel id="disabled-selected-value-label">Disabled With Selected Value</InputLabel>
            <Select id="disabled-selected-value" labelId="disabled-selected-value-label" value={1}>
              <MenuItem value={1}>Item 1</MenuItem>
              <MenuItem value={2}>Item 2</MenuItem>
              <MenuItem value={3}>Item 3</MenuItem>
              <MenuItem value={4}>Item 4</MenuItem>
            </Select>
            <FormHelperText>Helper text</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl required fullWidth>
            <InputLabel id="required-select-label">Required</InputLabel>
            <Select
              id="required-select"
              labelId="required-select-label"
              value={selectedValue}
              onChange={handleChange}
            >
              <MenuItem value={1}>Item 1</MenuItem>
              <MenuItem value={2}>Item 2</MenuItem>
              <MenuItem value={3}>Item 3</MenuItem>
              <MenuItem value={4}>Item 4</MenuItem>
            </Select>
            <FormHelperText>Helper text</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl error fullWidth>
            <InputLabel id="error-select-label">Error</InputLabel>
            <Select
              id="error-select"
              labelId="error-select-label"
              value={selectedValue}
              onChange={handleChange}
            >
              <MenuItem value={1}>Item 1</MenuItem>
              <MenuItem value={2}>Item 2</MenuItem>
              <MenuItem value={3}>Item 3</MenuItem>
              <MenuItem value={4}>Item 4</MenuItem>
            </Select>
            <FormHelperText>Helper text</FormHelperText>
          </FormControl>
        </Grid>
        {theme !== 'leads' && (
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabelWithTooltip
                id="tooltip-select-label"
                label="With Tooltip"
                tooltip="Tooltip"
                renderInputLabelEl
              />
              <Select
                id="tooltip-select"
                labelId="tooltip-select-label"
                value={selectedValue}
                onChange={handleChange}
              >
                <MenuItem value={1}>Item 1</MenuItem>
                <MenuItem value={2}>Item 2</MenuItem>
                <MenuItem value={3}>Item 3</MenuItem>
                <MenuItem value={4}>Item 4</MenuItem>
              </Select>
              <FormHelperText>Helper text</FormHelperText>
            </FormControl>
          </Grid>
        )}
        <Grid item xs={6}>
          <FormControl fullWidth>
            <TextField
              id="placeholder-select"
              label="Textfield Select With Placeholder"
              value={selectedValue}
              onChange={handleChange}
              SelectProps={{
                displayEmpty: true,
                style: { color: !selectedValue && 'grey' },
              }}
              select
              fullWidth
            >
              <MenuItem value="" disabled>
                Placeholder text!
              </MenuItem>
              <MenuItem value={1}>Item 1</MenuItem>
              <MenuItem value={2}>Item 2</MenuItem>
              <MenuItem value={3}>Item 3</MenuItem>
              <MenuItem value={4}>Item 4</MenuItem>
              ))}
            </TextField>
          </FormControl>
        </Grid>
      </Grid>
      <Typography variant="h3" style={{ marginTop: 50, marginBottom: 10 }}>
        Input Adornments
      </Typography>
      <Typography variant="body2" style={{ marginBottom: 20 }}>
        NOTE: End position adornments have not yet been accounted for in styles.
      </Typography>
      <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={6}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="start-text-adornment-select-label">Start Position Text</InputLabel>
            <Select
              id="start-text-adornment-select"
              labelId="start-text-adornment-select-label"
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
              value={selectedValue}
              onChange={handleChange}
            >
              <MenuItem value={1}>100</MenuItem>
              <MenuItem value={2}>200</MenuItem>
              <MenuItem value={3}>300</MenuItem>
              <MenuItem value={4}>400</MenuItem>
            </Select>
            <FormHelperText>Helper text</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="start-icon-adornment-select-label">Start Position Icon</InputLabel>
            <Select
              id="start-icon-adornment-select"
              labelId="start-icon-adornment-select-label"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircleIcon />
                </InputAdornment>
              }
              value={selectedValue}
              onChange={handleChange}
            >
              <MenuItem value={1}>Person 1</MenuItem>
              <MenuItem value={2}>Person 2</MenuItem>
              <MenuItem value={3}>Person 3</MenuItem>
              <MenuItem value={4}>Person 4</MenuItem>
            </Select>
            <FormHelperText>Helper text</FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
      <Typography variant="h3" style={{ marginTop: 50, marginBottom: 20 }}>
        Grouping
      </Typography>
      <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={6}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="grouped-select-label">Grouped</InputLabel>
            <Select
              id="grouped-select"
              labelId="grouped-select-label"
              value={selectedValue}
              onChange={handleChange}
            >
              <ListSubheader>Group 1</ListSubheader>
              <MenuItem value={1}>Item 1</MenuItem>
              <MenuItem value={2}>Item 2</MenuItem>
              <ListSubheader>Group 2</ListSubheader>
              <MenuItem value={3}>Item 1</MenuItem>
              <MenuItem value={4}>Item 2</MenuItem>
            </Select>
            <FormHelperText>Helper text</FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
      <Typography variant="h3" style={{ marginTop: 50, marginBottom: 20 }}>
        Divider
      </Typography>
      <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={6}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="divider-select-label">With Divider</InputLabel>
            <Select
              id="divider-select"
              labelId="divider-select-label"
              value={selectedValue}
              onChange={handleChange}
            >
              <MenuItem value={1}>Item 1</MenuItem>
              <MenuItem value={2}>Item 2</MenuItem>
              <MenuItem value={3} divider>
                Item 3
              </MenuItem>
              <MenuItem value={4}>Item 4</MenuItem>
            </Select>
            <FormHelperText>Helper text</FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

storiesOf('Themes/Product/Inputs', module)
  .addDecorator(getThemeDecorator('product'))
  .add('Select', () => <SelectStory theme="product" />);

storiesOf('Themes/Marketing/Inputs', module)
  .addDecorator(getThemeDecorator('marketing'))
  .add('Select', () => <SelectStory theme="marketing" />);

storiesOf('Themes/Leads/Inputs', module)
  .addDecorator(getThemeDecorator('leads'))
  .add('Select', () => <SelectStory theme="leads" />);
