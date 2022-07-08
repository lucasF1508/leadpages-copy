import React from 'react';
import { storiesOf } from '@storybook/react';
import { getThemeDecorator } from '../../utils/storybook';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';

const AlertStory = () => (
  <Box m={4} maxWidth={600}>
    <Typography variant="h2" style={{ marginBottom: 30 }}>
      Alert
    </Typography>
    <Box mb={6}>
      <Typography variant="h3" style={{ marginBottom: 10 }}>
        Standard
      </Typography>
      <Typography variant="body1" style={{ marginBottom: 20 }}>
        NOTE: Standard is the default variant.
      </Typography>
      <Typography variant="body1"></Typography>
      <Alert severity="error" style={{ marginBottom: 24 }}>
        This is an error alert — check it out!
      </Alert>
      <Alert severity="warning" style={{ marginBottom: 24 }}>
        This is a warning alert — check it out!
      </Alert>
      <Alert severity="info" style={{ marginBottom: 24 }}>
        This is an info alert — check it out!
      </Alert>
      <Alert severity="success" style={{ marginBottom: 24 }}>
        This is a success alert — check it out!
      </Alert>
      <Alert severity="error" style={{ marginBottom: 24 }}>
        This is an error alert with multiple lines of text! This is a loLorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
        in culpa qui officia deserunt mollit anim id est laborumng
      </Alert>
    </Box>
    <Box mb={6}>
      <Typography variant="h3" style={{ marginBottom: 10 }}>
        Filled
      </Typography>
      <Typography variant="body1"></Typography>
      <Alert severity="error" variant="filled" style={{ marginBottom: 24 }}>
        This is an error alert — check it out!
      </Alert>
      <Alert severity="warning" variant="filled" style={{ marginBottom: 24 }}>
        This is a warning alert — check it out!
      </Alert>
      <Alert severity="info" variant="filled" style={{ marginBottom: 24 }}>
        This is an info alert — check it out!
      </Alert>
      <Alert severity="success" variant="filled" style={{ marginBottom: 24 }}>
        This is a success alert — check it out!
      </Alert>
    </Box>
  </Box>
);

storiesOf('Themes/Product', module)
  .addDecorator(getThemeDecorator('product'))
  .add('Alert', () => <AlertStory />);

storiesOf('Themes/Marketing', module)
  .addDecorator(getThemeDecorator('marketing'))
  .add('Alert', () => <AlertStory />);
