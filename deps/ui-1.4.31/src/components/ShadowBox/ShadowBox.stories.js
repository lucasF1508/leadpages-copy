import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { getThemeDecorator } from '../../utils/storybook';

import ShadowBox from './ShadowBox';

storiesOf('Components/ShadowBox', module)
  .addDecorator(getThemeDecorator('product'))
  .add('Default', () => (
    <Box m={4}>
      <Typography variant="h3" style={{ marginBottom: 20 }}>
        Default
      </Typography>
      <ShadowBox width={500}>
        <Typography variant="h4" component="h4" gutterBottom>
          Create your first sub-account
        </Typography>
        <Typography gutterBottom>
          You haven’t created any sub-accounts yet. Sub-accounts are a great way to:
        </Typography>
        <Typography component="ol" gutterBottom>
          <li> Use Leadpages with your clients</li>
          <li>Add additional businesses to your account</li>
          <li>
            Setup multiple integrations of the same type (i.e., if you have multiple MailChimp
            accounts, this is the way to go.)
          </li>
        </Typography>
      </ShadowBox>

      <Typography variant="h3" style={{ marginTop: 50, marginBottom: 20 }}>
        Raised
      </Typography>
      <ShadowBox width={500} raised="always">
        <Typography variant="h4" component="h4" gutterBottom>
          Create your first sub-account
        </Typography>
        <Typography gutterBottom>
          You haven’t created any sub-accounts yet. Sub-accounts are a great way to:
        </Typography>
        <Typography component="ol" gutterBottom>
          <li> Use Leadpages with your clients</li>
          <li>Add additional businesses to your account</li>
          <li>
            Setup multiple integrations of the same type (i.e., if you have multiple MailChimp
            accounts, this is the way to go.)
          </li>
        </Typography>
      </ShadowBox>

      <Typography variant="h3" style={{ marginTop: 50, marginBottom: 20 }}>
        Raised on hover
      </Typography>
      <ShadowBox width={500} raised="hover" tabIndex={1}>
        <Typography variant="h4" component="h4" gutterBottom>
          Create your first sub-account
        </Typography>
        <Typography gutterBottom>
          You haven’t created any sub-accounts yet. Sub-accounts are a great way to:
        </Typography>
        <Typography component="ol" gutterBottom>
          <li> Use Leadpages with your clients</li>
          <li>Add additional businesses to your account</li>
          <li>
            Setup multiple integrations of the same type (i.e., if you have multiple MailChimp
            accounts, this is the way to go.)
          </li>
        </Typography>
      </ShadowBox>
    </Box>
  ))
  .add('As Button', () => (
    <Box m={4}>
      <ShadowBox
        component="button"
        width={150}
        height={150}
        display="block"
        onClick={action('ShadowBox button clicked')}
      >
        <Typography>Hover Me</Typography>
        <Typography>Focus Me</Typography>
        <Typography>Click Me</Typography>
      </ShadowBox>
    </Box>
  ));
