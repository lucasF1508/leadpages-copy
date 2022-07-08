import React, { Component } from 'react';
import { SketchPicker } from 'react-color';

/*
This is done to ensure that we use the same color picker everywhere.
Hopefully, if we want to update the color picker we can do it here and it propagates.
*/

export default class ColorPicker extends Component {
  displayName = 'ColorPicker';
  render() {
    return <SketchPicker {...this.props} />;
  }
}
