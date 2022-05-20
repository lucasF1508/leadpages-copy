import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';
import Tag from './Tag';
import { hexCodes } from '../../theme/Color';
import { StoryHeader, StoryRow } from '../../../story-helpers';

export default class TagStory extends Component {
  constructor(props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);

    this.state = {
      value1: 'Old Campaign',
    };
  }

  handleOnChange(e) {
    const value = e.target.value;
    const stateValue = e.target.dataset.stateValue;
    this.setState(() => ({
      [stateValue]: value,
    }));
  }

  render() {
    const tagProps = [
      {
        isEditable: boolean('[First] isEditable', true),
        value: text('[First] value', 'Edit Me'),
        backgroundColor: select(
          '[First] backgroundColor',
          Object.keys(hexCodes),
          'blueLight',
        ),
        borderColor: select(
          '[First] borderColor',
          Object.keys(hexCodes),
          'blueDarker',
        ),
        color: select('[First] color', Object.keys(hexCodes), 'blueDarker'),
      },
      {
        isEditable: boolean('[Second] isEditable', false),
        value: text('[Second] value', 'Not Editable'),
        backgroundColor: select(
          '[Second] backgroundColor',
          Object.keys(hexCodes),
          'blueLight',
        ),
        borderColor: select(
          '[Second] borderColor',
          Object.keys(hexCodes),
          'blueDarker',
        ),
        color: select('[Second] color', Object.keys(hexCodes), 'blueDarker'),
      },
    ];
    return (
      <div>
        <StoryHeader>Tags</StoryHeader>
        <StoryRow>
          <Tag {...tagProps[0]} />
        </StoryRow>
        <StoryRow>
          <Tag {...tagProps[1]} />
        </StoryRow>
      </div>
    );
  }
}

const stories = storiesOf('Molecules/Tag', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => (
    <TagStory />
  ))
);
