import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import ColorPicker from '../ColorPicker';

const stories = storiesOf('Organisms/ColorPicker', module);
stories.addDecorator(withKnobs);

class ColorPickerStory extends React.Component {
  render() {
    return <ColorPicker />;
  }
}

stories.add(
  'Overview',
  withInfo(`
    Description or documentation about ColorPicker (supports markdown).

    [DOCS](http://casesandberg.github.io/react-color/)

  `)(() => <ColorPickerStory />)
);
