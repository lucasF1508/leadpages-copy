import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import Banner from './index.jsx';
import { getThemeDecorator } from '../../utils/storybook';

const stories = storiesOf('Components/Banner', module);

stories.addDecorator(getThemeDecorator('marketing'));

stories.add('Basic banner', () => {
  return <Banner bannerText="100% off forever" onShown={action('Banner shown')} />;
});

stories.add('Basic banner with portal', () => {
  return (
    <>
      <div id="banner" />
      <Banner bannerText="100% off forever" selector="#banner" onShown={action('Banner shown')} />
    </>
  );
});

stories.add('Basic banner, no transition', () => {
  return <Banner bannerText="100% off forever" isShown={true} />;
});

stories.add('Banner with CTA button', () => {
  return (
    <Banner
      bannerText="100% off forever"
      CTA={<Button onClick={action('CTA Clicked')}>Get This Deal</Button>}
      onShown={action('Banner shown')}
    />
  );
});

const useStyles = makeStyles(() => ({
  ctaButton: {
    backgroundColor: 'orange',
    color: '#32A5B1',
    '&:hover, &:focus': {
      backgroundColor: 'black',
      color: 'orange',
    },
  },
}));

stories.add('Custom colors', () => {
  const classes = useStyles();

  return (
    <Banner
      bannerText="100% off forever"
      backgroundColor="#32A5B1"
      color="orange"
      CTA={
        <Button className={classes.ctaButton} onClick={action('CTA Clicked')}>
          Get This Deal
        </Button>
      }
      onShown={action('Banner shown')}
    />
  );
});

const productStories = storiesOf('Components/Banner/Product Theme', module);

productStories.addDecorator(getThemeDecorator('product'));

productStories.add('Basic banner', () => {
  return <Banner bannerText="100% off forever" onShown={action('Banner shown')} />;
});
