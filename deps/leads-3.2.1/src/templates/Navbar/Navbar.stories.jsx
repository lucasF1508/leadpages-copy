import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import Navbar from '../Navbar';

const stories = storiesOf('Templates/Navbar', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about Navbar (supports markdown).
  
    ~~~js
    <Navbar>Render this</Navbar>
    ~~~
  
  `)(() => (
    <Navbar>{text('children', 'Click top-right to view the info.')}</Navbar>
  ))
);
stories.add('Another example', () => <Navbar>Children</Navbar>);
stories.add('Pass a className', () => <Navbar className="myClassName" />);
stories.add('How to force a style', () => <Navbar style={{ color: 'red' }} />);
