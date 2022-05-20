import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import InputLabelWithTooltip from '../../components/InputLabelWithTooltip';
import { getThemeDecorator } from '../../utils/storybook';

const TextAreaStory = () => {
  return (
    <Box m={4} maxWidth="450px">
      <Typography variant="h3" style={{ marginBottom: 20 }}>
        Text Area
      </Typography>
      <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={6}>
        <Grid item xs={12}>
          <TextField
            label="Default (Auto Resize)"
            placeholder="Placeholder Text"
            helperText="Helper text"
            multiline
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Max Height"
            placeholder="Max 4 Rows"
            helperText="Helper text"
            rowsMax={4}
            multiline
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Min Height"
            placeholder="Min 4 Rows"
            helperText="Helper text"
            rows={4}
            multiline
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Default Value"
            defaultValue="Lorem ipsum dolor sit amet consectetur."
            helperText="Helper text"
            rows={2}
            multiline
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Disabled With Placeholder"
            placeholder="Placeholder Text"
            helperText="Helper text"
            rows={2}
            multiline
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Disabled With Value"
            defaultValue="Lorem ipsum dolor sit amet consectetur."
            helperText="Helper text"
            rows={2}
            multiline
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Error"
            placeholder="Placeholder Text"
            helperText="Helper text"
            rows={2}
            multiline
            fullWidth
            required
            error
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label={<InputLabelWithTooltip label="With tooltip" tooltip="Tooltip" />}
            rows={2}
            multiline
            fullWidth
          />
        </Grid>
      </Grid>
    </Box>
  );
};

storiesOf('Themes/Product/Inputs', module)
  .addDecorator(getThemeDecorator('product'))
  .add('Text Area', () => <TextAreaStory />);

storiesOf('Themes/Marketing/Inputs', module)
  .addDecorator(getThemeDecorator('marketing'))
  .add('Text Area', () => <TextAreaStory />);

storiesOf('Themes/Leads/Inputs', module)
  .addDecorator(getThemeDecorator('leads'))
  .add('Text Area', () => <TextAreaStory />);
