import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import Checkbox from '../Checkbox';
import { StoryHeader, StoryRow } from '../../../story-helpers';

class CheckboxStory extends Component {
  constructor(props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);

    this.state = {
      checkbox1: false,
      checkbox2: false,
      checkbox3: true,
      checkbox4: false,
      checkbox5: false,
      checkbox6: false
    };
  }

  handleOnChange({ target }) {
    this.setState(() => ({
      [target.id]: target.checked
    }));
  }

  hi = () => {
    console.log('hi');
  };

  render() {
    return (
      <div>
        <StoryHeader>Checkboxs</StoryHeader>
        <StoryRow>
          <Checkbox
            id="checkbox1"
            checked={this.state.checkbox1}
            labelContent="Checkbox"
            onChange={this.handleOnChange}
          />
          <Checkbox
            id="checkbox2"
            checked={this.state.checkbox2}
            isActive
            labelContent="Checkbox Hover"
            onChange={this.handleOnChange}
          />
          <Checkbox
            id="checkbox3"
            checked={this.state.checkbox3}
            labelContent="Checkbox Active"
            onChange={this.handleOnChange}
          />
          <Checkbox
            id="checkbox4"
            checked={this.state.checkbox4}
            disabled
            labelContent="Disabled"
            onChange={this.handleOnChange}
          />
          <Checkbox
            id="checkbox5"
            checked={this.state.checkbox5}
            isActive
            labelContent="Checkbox With Subtext"
            subContent={
              <div role="button" tabIndex="0" onClick={this.hi}>
                Hi
              </div>
            }
            onChange={this.handleOnChange}
          />
        </StoryRow>
        <StoryRow>
          <Checkbox
            id="checkbox6"
            checked={this.state.checkbox6}
            isActive
            alignTop
            labelContent="Checkbox With Subtext"
            subContent={
              <div role="button" tabIndex="0" onClick={this.hi}>
                Checkbox aligned to top
              </div>
            }
            onChange={this.handleOnChange}
          />
        </StoryRow>
      </div>
    );
  }
}

const stories = storiesOf('Atoms/Checkboxes', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => <CheckboxStory />)
);
