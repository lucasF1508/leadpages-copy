import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { getThemeDecorator } from '../../utils/storybook';

import BundleInfoSheet from './BundleInfoSheet';
import exampleImg from './examplephoto.png';

const stories = storiesOf('Views/Bundle Info Sheet', module);

stories.addDecorator(getThemeDecorator('marketing')).add('Default settings', () => {
  return (
    <Box m={4}>
      <Typography variant="h3">Default settings: Right side, starts closed</Typography>
      <BundleInfoSheet
        title="Right Sheet"
        contentHeader="Oh boy, oh boy, oh boy!  You're going to like this"
        contentBody="FREE JUnk for LifE."
      />
    </Box>
  );
});

stories.addDecorator(getThemeDecorator('marketing')).add('On the Left', () => {
  return (
    <Box m={4}>
      <Typography variant="h3">BundleInfo on the left side and starts open</Typography>
      <BundleInfoSheet
        title="Limited Time Offer!"
        contentHeader="Unlock this Exclusive Template Bundle!"
        contentBody="When you start a trial of the PRO plan, you'll get exclusive access to 10 templates."
        isDefaultOpen
        position="left"
        imageSrc={exampleImg}
        linkURL="#"
        linkLabel="Check them out"
      />
    </Box>
  );
});
