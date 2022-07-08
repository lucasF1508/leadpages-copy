import React from 'react';
import Component from 'react-component-component';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';
import Robie from '../Robie';

const stories = storiesOf('Atoms/Robie', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about Robie (supports markdown).
  
    ~~~js
    <Robie>Render this</Robie>
    ~~~
  
  `)(() => (
    <Component
      initialState={{
        hasFailed: false,
        colors: [],
        onComplete: null
      }}
      didMount={({ setState }) => {
        setTimeout(() => {
          setState(() => ({
            colors: [[1, 1, 1], [1, 200, 1], [1, 200, 200], [200, 200, 1]]
          }));
        }, 8000);
        setTimeout(() => {
          setState(() => ({
            onComplete: () => console.log('navigating...')
          }));
        }, 10000);
        setTimeout(() => {
          setState(() => ({
            hasFailed: true
          }));
        }, 12000);
      }}
    >
      {({ state, setState }) => (
        <Robie
          hasFailed={state.hasFailed}
          colors={state.colors}
          onComplete={state.onComplete}
        />
      )}
    </Component>
  ))
);
stories.add('Another example', () => <Robie>Children</Robie>);
stories.add('Pass a className', () => <Robie className="myClassName" />);
stories.add('How to force a style', () => <Robie style={{ color: 'red' }} />);
