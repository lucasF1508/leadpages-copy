import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import LoadingButton from './LoadingButton';
import { LOADING_STATES } from '../../molecules/LoadingState';
import { StoryHeader } from '../../../story-helpers';

class LoadingButtonStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      successButtonState: LOADING_STATES.success,
      errorButtonState: LOADING_STATES.success
    };

    this.interval = setInterval(() => {
      const successButtonState =
        this.state.successButtonState === LOADING_STATES.success
          ? LOADING_STATES.loading
          : LOADING_STATES.success;

      const errorButtonState =
        this.state.errorButtonState === LOADING_STATES.error
          ? LOADING_STATES.loading
          : LOADING_STATES.error;

      this.setState(() => ({
        successButtonState,
        errorButtonState
      }));
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <StoryHeader>Loading Buttons</StoryHeader>
        <LoadingButton loadingState={this.state.successButtonState}>
          Primary
        </LoadingButton>
        <LoadingButton loadingState={this.state.errorButtonState}>
          Error
        </LoadingButton>
        <LoadingButton isSecondary loadingState={this.state.successButtonState}>
          Secondary
        </LoadingButton>
        <LoadingButton
          className={{ width: 250 }}
          successMessage="Published!"
          loadingState={this.state.successButtonState}
        >
          Hi!
        </LoadingButton>
      </div>
    );
  }
}

const stories = storiesOf('Organisms/LoadingButton', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => <LoadingButtonStory />)
);
