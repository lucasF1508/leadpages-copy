import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import Toggle from './Toggle';
import {
  StoryHeader,
  StoryRow,
} from '../../../story-helpers';

class ToggleStory extends Component {
  constructor(props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);

    this.state = {
      toggle1: false,
      toggle2: false,
      toggle3: true,
    };
  }

  handleOnChange({ target }) {
    this.setState(() => ({ [target.id]: target.checked }));
  }

  render() {
    return (
      <div>
        <StoryHeader>Toggles</StoryHeader>
        <StoryRow>
          <Toggle checked={this.state.toggle1} onChange={this.handleOnChange} id="toggle1" />
          <Toggle isActive checked={this.state.toggle2} onChange={this.handleOnChange} id="toggle2" />
          <Toggle checked={this.state.toggle3} onChange={this.handleOnChange} id="toggle3" />
        </StoryRow>
      </div>
    );
  }
}

const stories = storiesOf('Atoms/Toggle', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => (
    <ToggleStory />
  ))
);
