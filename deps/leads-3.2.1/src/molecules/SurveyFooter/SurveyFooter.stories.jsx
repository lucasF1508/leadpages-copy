import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import SurveyFooter from '../SurveyFooter';

const stories = storiesOf('Molecules/SurveyFooter', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about SurveyFooter (supports markdown).
  
    ~~~js
    <SurveyFooter>Render this</SurveyFooter>
    ~~~
  
  `)(() => (
    <SurveyFooter>
      {text('children', 'Click top-right to view the info.')}
    </SurveyFooter>
  ))
);
stories.add('Another example', () => <SurveyFooter>Children</SurveyFooter>);
stories.add('Pass a className', () => <SurveyFooter className="myClassName" />);
stories.add('How to force a style', () => (
  <SurveyFooter style={{ color: 'red' }} />
));
