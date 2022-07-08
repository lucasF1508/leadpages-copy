import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import Input from './Input';
import { StoryHeader } from '../../../story-helpers';

class InputStory extends Component {
  constructor(props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleErrorHelpText = this.handleErrorHelpText.bind(this);

    this.state = {
      input1: '',
      input2: '',
      input3: 'Wrong Input Text',
      input4: '',
      input5: '',
    };
  }

  handleOnChange({ target }) {
    this.setState(() => ({
      [target.id]: target.value,
    }));
  }

  handleError() {
    return this.state.input3 === 'Wrong Input Text';
  }

  handleErrorHelpText() {
    return this.handleError()
      ? 'I am helper text that tells you what is wrong'
      : 'I am helper text';
  }

  render() {
    return (
      <div>
        <StoryHeader>Inputs</StoryHeader>
        <Input
          id="input1"
          subContent="I am helper text"
          placeholder="Placeholder text"
          value={this.state.input1}
          onChange={this.handleOnChange}
          labelContent="single input field"
        />
        <Input
          id="input2"
          isActive
          subContent="I am helper text"
          placeholder="Placeholder text"
          value={this.state.input2}
          onChange={this.handleOnChange}
          labelContent="single input field"
        />
        <Input
          id="input3"
          hasError={this.handleError()}
          subContent={this.handleErrorHelpText()}
          placeholder="Placeholder text"
          value={this.state.input3}
          onChange={this.handleOnChange}
          labelContent="single input field"
        />
        <Input
          id="input4"
          disabled
          subContent="I am helper text"
          placeholder="Placeholder text"
          value={this.state.input4}
          onChange={this.handleOnChange}
          labelContent="full disabled"
        />
        <br />
        <br />
        <Input
          id="input5"
          subContent="I am a text area"
          placeholder="Placeholder textarea"
          value={this.state.input5}
          onChange={this.handleOnChange}
          labelContent="testing a textarea"
          inputComponent="textarea"
        />
      </div>
    );
  }
}

const stories = storiesOf('Atoms/Input', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => <InputStory />),
);
