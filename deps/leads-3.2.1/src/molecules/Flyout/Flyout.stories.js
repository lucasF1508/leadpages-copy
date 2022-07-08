import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import Flyout from '../Flyout';
import Button from '../../atoms/Button';
import {
  StoryHeader,
  StoryRow,
} from '../../../story-helpers';

class FlyoutStory extends Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);

    this.state = {
      flyout1Open: false,
    };
  }

  handleOnClick({ id, value }) {
    this.setState(() => ({
      [id]: value,
    }));
  }

  render() {
    return (
      <div>
        <StoryHeader>Flyout</StoryHeader>
        <StoryRow>
          <div style={{ position: 'relative' }}>
            <Button
              onClick={() => this.handleOnClick({ id: 'flyout1Open', value: !this.state.flyout1Open })}
            >Click Me to see the flyout</Button>
            <Flyout open={this.state.flyout1Open}>Flyout</Flyout>
          </div>
        </StoryRow>
      </div>
    );
  }
}

const stories = storiesOf('Molecules/Flyout', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => (
    <FlyoutStory />
  ))
);
