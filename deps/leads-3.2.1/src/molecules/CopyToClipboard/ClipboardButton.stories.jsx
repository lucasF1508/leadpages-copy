import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import Button from '../../atoms/Button';
import withCopyToClipboard from '../CopyToClipboard/withCopyToClipboard';
import {
  StoryHeader,
  StoryRow,
} from '../../../story-helpers';

const CopyTextButton = withCopyToClipboard(Button);
const ClipboardButtonStory = () => {
  const tagProps = [
    {
      textToCopy: text('textToCopy', 'I coppied this text.'),
    },
  ];

  return (
    <div>
      <StoryHeader>Clipboard Buttons</StoryHeader>
      <StoryRow>
        <textarea id="clipboard-story-test" rows="1" cols="50">
          This text area is provided so you can paste into it.
        </textarea>
        <CopyTextButton
          textToCopy={tagProps[0].textToCopy}
          onCopySuccess={event => alert('copied', event)}
          onCopyError={error => alert('not copied', error)}
        >
          Click to copy
        </CopyTextButton>
      </StoryRow>
    </div>
  );
};

const stories = storiesOf('Molecules/CopyTextButton', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => (
    <ClipboardButtonStory />
  ))
);
