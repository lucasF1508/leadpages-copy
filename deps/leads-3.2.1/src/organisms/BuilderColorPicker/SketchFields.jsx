import React from 'react';
import tinycolor from 'tinycolor2';

import Input from '../../atoms/Input';
import { typographyDefs } from '../../theme/Theme';

import * as styles from './SketchFields.css';
class SketchFields extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hex: this.props.hex
    };
  }

  componentDidMount() {
    this.input.addEventListener('paste', this.handlePaste, false);
  }

  componentWillUnmount() {
    this.input.removeEventListener('paste', this.handlePaste, false);
  }

  componentDidUpdate(prevProps) {
    // allows any currently appiled color in builder to be default selection when the custom color picker is opened.
    if (prevProps.hex !== this.props.hex) {
      this.setState(() => ({ hex: this.props.hex }));
    }
  }

  handleChange = e => {
    const { value } = e.target;
    const color = tinycolor(value);
    const shouldSubmitColor =
      value &&
      value.length === 6 &&
      color.isValid() &&
      color.getFormat() === 'hex';

    this.setState(
      () => ({
        hex: value
      }),
      () => {
        if (shouldSubmitColor) {
          this.handleSubmit();
        }
      }
    );
  };

  handlePaste = e => {
    if (e && typeof e.preventDefault === 'function') {
      e.preventDefault();
    }
    const hex = (e.clipboardData || window.clipboardData).getData('text');
    this.setState(
      () => ({
        hex
      }),
      this.handleSubmit
    );
  };

  handleSubmit = e => {
    e && typeof e.preventDefault === 'function' && e.preventDefault();
    const { onChange } = this.props;
    const { hex } = this.state;

    let color = tinycolor(hex);
    if (color.isValid()) {
      return onChange(
        {
          r: color.toRgb().r,
          g: color.toRgb().g,
          b: color.toRgb().b,
          a: color.toRgb().a,
          source: 'rgb'
        },
        e
      );
    }

    color = tinycolor(`rgba(${hex})`);
    if (color.isValid()) {
      return onChange(
        {
          r: color.toRgb().r,
          g: color.toRgb().g,
          b: color.toRgb().b,
          a: color.toRgb().a,
          source: 'rgb'
        },
        e
      );
    }

    color = tinycolor(`rgb(${hex})`);
    if (color.isValid()) {
      return onChange(
        {
          r: color.toRgb().r,
          g: color.toRgb().g,
          b: color.toRgb().b,
          a: color.toRgb().a,
          source: 'rgb'
        },
        e
      );
    }
  };

  render() {
    const { hex } = this.state;

    return (
      <div className={styles.fields}>
        <div
          style={{
            ...typographyDefs.bodyDefault,
            color: '#B1BACC',
            flex: '0 0 90px'
          }}
        >
          Color Code
        </div>
        <form onSubmit={this.handleSubmit}>
          <Input
            inputSelfClass={styles.input}
            value={hex && hex.replace('#', '')}
            onChange={this.handleChange}
            onBlur={this.handleSubmit}
            inputRef={input => {
              this.input = input;
            }}
            data-heap="add-custom-color__color-code"
          />
        </form>
      </div>
    );
  }
}
export default SketchFields;
