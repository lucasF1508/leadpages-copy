import React from 'react';
import { css } from 'emotion';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';

import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

import FormPrepend from './FormPrepend';

import { StoryHeader, StorySubHeader, StoryRow } from '../../../story-helpers';

const InputPrendendStory = () => (
  <div>
    <StoryHeader>FormPrepend</StoryHeader>
    <StorySubHeader>Basic Usage</StorySubHeader>
    <StoryRow>
      <FormPrepend prepend="http(s)://">
        <Input inputSelfClass={inputClassName} />
      </FormPrepend>
    </StoryRow>
    <StoryRow>
      <FormPrepend prepend="http(s)://">
        <Button inputSelfClass={inputClassName}>Hi</Button>
      </FormPrepend>
    </StoryRow>

    <StorySubHeader>As an input Wrapper</StorySubHeader>
    <StoryRow>
      <Input
        hasError
        subContent="Oh boy... you've done it now."
        inputWrapper={FormPrepend}
        inputWrapperProps={{ prepend: 'http(s)://' }}
        labelContent="Url"
        inputSelfClass={inputClassName}
      />
    </StoryRow>
    <StoryRow>
      <Input
        inputWrapper={FormPrepend}
        inputWrapperProps={{
          prepend: `https://www.leadpages.net`,
          width: '150px'
        }}
        labelContent="Url"
        inputSelfClass={inputClassName}
      />
    </StoryRow>
  </div>
);

const stories = storiesOf('Molecules/FormPrepend', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Provided a way to prepend some info in the front of an input element.
  `)(() => <InputPrendendStory />)
);

const inputClassName = css`
  border-radius: 0 3px 3px 0;
`;
