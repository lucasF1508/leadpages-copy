import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import RadioButton from './RadioButton';
import { StoryHeader, StoryRow } from '../../../story-helpers';

class RadioButtonStory extends Component {
  constructor(props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);

    this.state = {
      radioButtonGroup: '3'
    };
  }

  handleOnChange({ target }) {
    this.setState(() => ({ [target.name]: target.value }));
  }

  render() {
    return (
      <div>
        <StoryHeader>RadioButtons</StoryHeader>
        <StoryRow>
          <RadioButton
            name="radioButtonGroup"
            id="1"
            value="1"
            checked={this.state.radioButtonGroup === '1'}
            onChange={this.handleOnChange}
            labelContent="Radio Button Radio Button Radio Button Radio Button Radio Button Radio Button Radio Button Radio Button Radio Button"
          />
          <RadioButton
            name="radioButtonGroup"
            id="2"
            value="2"
            checked={this.state.radioButtonGroup === '2'}
            isActive
            onChange={this.handleOnChange}
            labelContent="Radio Hover"
          />
          <RadioButton
            name="radioButtonGroup"
            id="3"
            value="3"
            checked={this.state.radioButtonGroup === '3'}
            onChange={this.handleOnChange}
            labelContent="Radio Select"
          />
          <RadioButton
            name="radioButtonGroup"
            id="4"
            value="4"
            checked={this.state.radioButtonGroup === '4'}
            disabled
            onChange={this.handleOnChange}
            labelContent="Disabled"
          />
        </StoryRow>
      </div>
    );
  }
}

const stories = storiesOf('Atoms/RadioButton', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => <RadioButtonStory />)
);
