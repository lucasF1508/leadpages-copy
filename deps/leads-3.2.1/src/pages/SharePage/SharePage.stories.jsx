import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';
import Button from '../../atoms/Button';
import { StoryHeader } from '../../../story-helpers';
import SharePage from '../SharePage';

const SharePageStories = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <StoryHeader>Share Page Modal</StoryHeader>
      <Button onClick={() => setIsOpen(true)}>Share Page Modal</Button>
      <SharePage
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        shareUrl="https://lp-share-url.com/12345"
        serviceTermsUrl="https://lp.net/terms"
      />
    </div>
  );
};

const stories = storiesOf('Pages/SharePage', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => <SharePageStories />)
);
