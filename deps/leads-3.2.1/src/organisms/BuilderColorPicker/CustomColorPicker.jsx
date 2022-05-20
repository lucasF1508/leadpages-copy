import React from 'react';
import color from 'react-color/lib/helpers/color';
import {
  Saturation,
  Hue,
  Alpha,
  Checkboard
} from 'react-color/lib/components/common';
import { cx } from 'emotion';

import Link from '../../atoms/Link';

import SketchFields from './SketchFields';

import * as styles from './CustomColorPicker.css.js';

const Pointer = () => <div className={styles.picker} />;

class CustomColorPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...color.toState(props.color, 0)
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.color !== this.props.color) {
      this.setState(() => ({ ...color.toState(this.props.color, 0) }));
    }
  }

  handleOnChange = data => {
    const colors = color.toState(data, data.h || this.state.oldHue);
    this.setState(() => ({ ...colors }), this.handleApplyColor);
  };
  handleApplyColor = () => {
    this.props.onChange(this.state.rgb);
  };
  render() {
    const { rgb, hex, hsv, hsl, renderers } = this.state;

    const { isOpen, onClose } = this.props;

    return (
      <div
        data-heap="add-custom-color"
        className={cx(styles.customColorPicker, isOpen && 'show')}
      >
        <Link
          data-heap="add-custom-color__back"
          className={styles.backButton}
          component="button"
          onClick={onClose}
        >
          <i className="lp-icon">left_arrow</i> Back
        </Link>
        <div
          data-heap="add-custom-color__saturation"
          className={styles.saturation}
        >
          <Saturation
            className={styles.Saturation}
            hsl={hsl}
            hsv={hsv}
            onChange={this.handleOnChange}
          />
        </div>
        <div className={styles.controls}>
          <div className={styles.sliders}>
            <div data-heap="add-custom-color__hue" className={styles.hue}>
              <Hue
                className={styles.Hue}
                hsl={hsl}
                onChange={this.handleOnChange}
                pointer={Pointer}
              />
            </div>
            <div className={styles.alpha}>
              <Checkboard white="#fff" />
              <Alpha
                data-heap="add-custom-color__alpha"
                className={styles.Alpha}
                rgb={rgb}
                hsl={hsl}
                renderers={renderers}
                onChange={this.handleOnChange}
                pointer={Pointer}
              />
            </div>
          </div>
          <div className={styles.color}>
            <Checkboard white="#fff" />
            <div className={styles.activeColor(rgb)} />
          </div>
        </div>
        <SketchFields
          rgb={rgb}
          hsl={hsl}
          hex={hex}
          onChange={this.handleOnChange}
        />
      </div>
    );
  }
}

export default CustomColorPicker;
