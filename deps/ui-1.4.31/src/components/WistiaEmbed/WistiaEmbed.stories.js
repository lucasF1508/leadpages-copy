import React from 'react';
import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import Grid from '@material-ui/core/Grid';

import { getThemeDecorator } from '../../utils/storybook';
import WistiaEmbed from './WistiaEmbed';

const eventProps = actions({
  onVideoPlay: `Video played`,
  onVideoEnd: `Video ended`,
});

storiesOf('Components/WistiaEmbed', module)
  .addDecorator(getThemeDecorator('marketing'))
  .add('Default', () => (
    <Grid container justify="center">
      <Grid item xs={6}>
        <WistiaEmbed videoId="v4d08hc7f8" {...eventProps} />
      </Grid>
    </Grid>
  ))
  .add('Multiple videos', () => (
    <Grid container>
      <Grid item xs={4}>
        <WistiaEmbed videoId="v4d08hc7f8" {...eventProps} />
      </Grid>
      <Grid item xs={4}>
        <WistiaEmbed videoId="75z9pnyl78" {...eventProps} />
      </Grid>
      <Grid item xs={4}>
        <WistiaEmbed videoId="vam7bqdia5" {...eventProps} />
      </Grid>
    </Grid>
  ));
