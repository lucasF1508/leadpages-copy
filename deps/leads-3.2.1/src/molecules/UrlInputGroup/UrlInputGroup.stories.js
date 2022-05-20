import React, { useState } from 'react';
import { css } from 'emotion';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';
import { StoryHeader, StoryRow } from '../../../story-helpers';
import Checkbox from '../../atoms/Checkbox';
import { typographyDefs } from '../../theme/Theme';

import UrlInputGroup from './UrlInputGroup';

const urlInputGroupClassName = css`
  width: 500px;
`;

const options = [
  {
    name: 'https://mylpdomain.com/',
    id: 'mylpdomain.com'
  },
  {
    name: 'https://mycustomdomain.com/',
    id: 'mycustomdomain.com'
  }
];

const UrlInputGroupStory = () => {
  const [showLabels, setShowLabels] = useState(true);
  const [showErrors, setShowErrors] = useState(true);
  const [showCopyLink, setShowCopyLink] = useState(true);

  const [selectValue, setSelectValue] = useState('mylpdomain.com');
  const [inputValue, setInputValue] = useState('my-slug');

  const props = {
    options,
    getOptionDisplay: opt => opt.name,
    getOptionValue: opt => opt.id,
    onUpdateSelect: setSelectValue,
    selectValue,
    allowInputSelection: false,
    className: urlInputGroupClassName
  };

  const singleInputProps = {
    options: [options[0]]
  };

  const withInputProps = {
    allowInputSelection: true,
    inputValue,
    onUpdateInput: setInputValue,
    inputPlaceholder: 'my-input-here'
  };

  const extraProps = {
    selectLabel: showLabels && 'Select Label',
    inputLabel: showLabels && 'Input Label',
    selectError: showErrors && 'Select Error',
    inputError: showErrors && 'Input Error',
    allowCopyLink: showCopyLink
  };

  return (
    <div>
      <StoryHeader>URL Input Group</StoryHeader>
      <StoryRow>
        <div>
          <Checkbox
            id="1"
            checked={showCopyLink}
            labelContent="Show Copy Link"
            onChange={() => setShowCopyLink(!showCopyLink)}
          />
          <Checkbox
            id="2"
            checked={showLabels}
            labelContent="Show Labels"
            onChange={() => setShowLabels(!showLabels)}
          />
          <Checkbox
            id="3"
            checked={showErrors}
            labelContent="Show Errors"
            onChange={() => setShowErrors(!showErrors)}
          />
        </div>
      </StoryRow>
      <StoryRow>
        <section>
          <h3 className={css(typographyDefs.bodyHeading)}>
            With multiple select options and input selection
          </h3>
          <UrlInputGroup {...props} {...withInputProps} {...extraProps} />
        </section>
      </StoryRow>
      <StoryRow>
        <section>
          <h3 className={css(typographyDefs.bodyHeading)}>
            With 1 select option and input selection
          </h3>
          <UrlInputGroup
            {...props}
            {...withInputProps}
            {...singleInputProps}
            {...extraProps}
          />
        </section>
      </StoryRow>
      <StoryRow>
        <section>
          <h3 className={css(typographyDefs.bodyHeading)}>
            With multiple select options and no input selection
          </h3>
          <UrlInputGroup {...props} {...extraProps} />
        </section>
      </StoryRow>
      <StoryRow>
        <section>
          <h3 className={css(typographyDefs.bodyHeading)}>
            With 1 select option and no input selection
          </h3>
          <UrlInputGroup {...props} {...singleInputProps} {...extraProps} />
        </section>
      </StoryRow>
    </div>
  );
};

const stories = storiesOf('Molecules/UrlInputGroup', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => <UrlInputGroupStory />)
);
