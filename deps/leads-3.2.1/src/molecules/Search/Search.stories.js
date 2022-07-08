import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import Search from './Search';
import {
  StoryHeader,
  StoryRow,
  StoryColumn,
} from '../../../story-helpers';

export default class SearchStory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search1: '',
      search2: '',
    };
  }
  render() {
    return (
      <div>
        <StoryHeader>Search</StoryHeader>
        <StoryRow>
          <StoryColumn>
            <Search
              id="search1"
              placeholder="Search Pages"
              onChange={({ target }) => this.setState(() => ({ search1: target.value }))}
              onSubmit={() => console.log('submit search')}
              value={this.state.search1}
            />
          </StoryColumn>
          <StoryColumn>
            <Search
              id="search2"
              placeholder="Search The Whole Page"
              onChange={({ target }) => this.setState(() => ({ search2: target.value }))}
              onSubmit={() => console.log('submit search')}
              value={this.state.search2}
            />
          </StoryColumn>
        </StoryRow>

      </div>
    );
  }
}

const stories = storiesOf('Molecules/Search', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => (
    <SearchStory />
  ))
);
