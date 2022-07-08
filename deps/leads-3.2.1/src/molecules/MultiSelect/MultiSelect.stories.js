import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import MultiSelect from './MultiSelect';
import { StoryHeader, StorySubHeader } from '../../../story-helpers';

const MultiSelectStory = () => {
  const fewOptions = [
    { value: 'action', label: 'Action' },
    { value: 'adventure', label: 'Adventure' },
    { value: 'dramas', label: 'Dramas' },
  ];

  const manyOptions = [
    { value: 'action', label: 'Action' },
    { value: 'adventure', label: 'Adventure' },
    { value: 'classics', label: 'Classics' },
    { value: 'comedies', label: 'Comedies' },
    { value: 'crime', label: 'Crime' },
    { value: 'cult', label: 'Cult' },
    { value: 'documentaries', label: 'Documentaries' },
    { value: 'dramas', label: 'Dramas' },
    { value: 'faith-spirituality', label: 'Faith & Spirituality' },
    { value: 'horror', label: 'Horror' },
    { value: 'Independent', label: 'Independent' },
  ];

  const defaultProps = {
    classNamePrefix: text('classNamePrefix', ''),
    placeholder: text('placeholder', 'Select...'),
    label: text('label', ''),
    minInputHeight: number('minInputHeight', null),
    maxInputHeight: number('maxInputHeight', null),
    maxMenuHeight: number('maxMenuHeight', 306),
    maxSelectedOptions: number('maxSelectedOptions', null),
    maxSelectedOptionsMessage: text('maxSelectedOptionsMessage', ''),
    hasDropdownIndicator: boolean('hasDropdownIndicator', true),
    hasIndicatorSeparator: boolean('hasIndicatorSeparator', true),
    openMenuOnFocus: boolean('openMenuOnFocus', false),
    verticallyCentered: boolean('verticallyCentered', true),
    isClearable: boolean('isClearable', true),
    isCreatable: boolean('isCreatable', false),
    isSearchable: boolean('isSearchable', true),
    isDisabled: boolean('isDisabled', false),
  };

  return (
    <div>
      <StoryHeader>MultiSelect Examples</StoryHeader>
      <StorySubHeader>Few Options</StorySubHeader>
      <MultiSelect options={fewOptions} {...defaultProps} />
      <StorySubHeader>Many Options</StorySubHeader>
      <MultiSelect options={manyOptions} {...defaultProps} />
      <StorySubHeader>Preselected Options</StorySubHeader>
      <MultiSelect
        options={manyOptions}
        defaultValue={[manyOptions[0], manyOptions[1]]}
        {...defaultProps}
      />
      <StorySubHeader>No Options</StorySubHeader>
      <MultiSelect {...defaultProps} />
    </div>
  );
};

const stories = storiesOf('Molecules/MultiSelect', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    This component is customized wrapper of [React Select](https://react-select.com/)
  `)(() => <MultiSelectStory />),
);
