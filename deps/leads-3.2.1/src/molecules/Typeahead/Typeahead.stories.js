import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';
import Typeahead from '../Typeahead';

const stories = storiesOf('Molecules/Typeahead', module);
stories.addDecorator(withKnobs);

const animals = [
  'Cat',
  'Dog',
  'Mouse',
  'Aligator',
  'Lion',
  'Rabbit',
  'Squirrel',
  'Chipmunk',
  'Dolphin',
  'Turtle',
  'T-Rex'
];

const opts = animals.map((animal, id) => ({ name: animal, id: id.toString() }));
const matchName = (query, option) =>
  option.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;

class TypeaheadStory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [...opts]
    };
  }
  onSearch = (query, value) => {
    const options = query
      ? opts.filter(matchName.bind(null, query))
      : [...opts];
    this.setState(() => ({ query, value, options }));
  };

  onSelect = (value, item) => {
    this.onSearch(item.name, value);
  };

  onReset = () => {
    this.onSearch('');
  };

  render() {
    const { query, value, options } = this.state;
    const header =
      !query && options.length ? <span>Animals are great</span> : '';

    const footer = options.length ? <span>More animals exist!!</span> : '';

    return (
      <Typeahead
        query={query}
        value={value}
        options={options}
        handleOnSelect={this.onSelect}
        handleOnSearch={this.onSearch}
        handleOnReset={this.onReset}
        getOptionValue={item => item.id}
        getOptionLabel={item => item.name}
        inputProps={{ placeholder: 'Select an Animal...' }}
        listHeader={header}
        listFooter={footer}
      />
    );
  }
}

stories.add(
  'Overview',
  withInfo(`
    Description or documentation about Typeahead (supports markdown).

    [DOCS](http://casesandberg.github.io/react-color/)

  `)(() => <TypeaheadStory />)
);
