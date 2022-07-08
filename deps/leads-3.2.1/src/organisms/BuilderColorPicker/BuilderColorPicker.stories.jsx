import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import BuilderColorPicker from '../BuilderColorPicker';

const stories = storiesOf('Organisms/BuilderColorPicker', module);
stories.addDecorator(withKnobs);

class BuilderColorPickerStory extends React.Component {
  render() {
    return <BuilderColorPicker />;
  }
}

stories.add(
  'Overview',
  withInfo(`
    Description or documentation about ColorPicker (supports markdown).

    [DOCS](http://casesandberg.github.io/react-color/)

  `)(() => <BuilderColorPickerStory />)
);
