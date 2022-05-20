import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import LinkTo from '@storybook/addon-links/react';

import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import { getThemeDecorator } from '../../utils/storybook';

const LinkStory = ({ theme }) => (
  <Box m={4}>
    <Box mb={6}>
      <Typography variant="h3" style={{ marginBottom: 10 }}>
        Link Adjacent to Text
      </Typography>
      <Typography variant="body2" style={{ marginBottom: 30 }}>
        This is the default behavior without adjusting any props.
      </Typography>
      <Typography>
        Wanna see something cool?{' '}
        <Link
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here
        </Link>
      </Typography>
    </Box>
    <Box mb={6}>
      <Typography variant="h3" style={{ marginBottom: 30 }}>
        Standalone Link
      </Typography>
      <Link
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        underline="hover"
        target="_blank"
        rel="noopener noreferrer"
      >
        Click here
      </Link>
    </Box>
    <Box mb={6}>
      <Typography variant="h3" style={{ marginBottom: 10 }}>
        Button Link
      </Typography>
      <Typography variant="body2" style={{ marginBottom: 30 }}>
        NOTE: You may be looking for the <LinkTo story="buttons">Text Button variant</LinkTo>.
      </Typography>
      <Link
        component="button"
        variant="button"
        underline="none"
        onClick={action('Button link clicked')}
      >
        Click here
      </Link>
    </Box>
  </Box>
);

storiesOf('Themes/Product', module)
  .addDecorator(getThemeDecorator('product'))
  .add('Links', () => <LinkStory theme="product" />);

storiesOf('Themes/Marketing', module)
  .addDecorator(getThemeDecorator('marketing'))
  .add('Links', () => <LinkStory theme="marketing" />);
