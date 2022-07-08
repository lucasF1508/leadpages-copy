import React from 'react';
import PropTypes from 'prop-types';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const NOOP = () => {};

export default WrappedComponent =>
  class withCopyToText extends React.Component {
    static displayName = `withCopyToText(${getDisplayName(WrappedComponent)})`;
    static propTypes = {
      children: PropTypes.node,
      onCopyError: PropTypes.func,
      onCopySuccess: PropTypes.func,
      textToCopy: PropTypes.string
    };
    static defaultProps = {
      children: null,
      onCopyError: NOOP,
      onCopySuccess: NOOP,
      textToCopy: ''
    };
    constructor(props) {
      super(props);
      this.state = {
        copied: false
      };
    }

    copyTextToClipboard(e) {
      const textArea = this.textArea;
      textArea.select();

      try {
        const successful = document.execCommand('copy');
        if (successful) {
          this.props.onCopySuccess(e);
        } else {
          throw new Error('Unable to copy to clipboard.');
        }
      } catch (err) {
        this.props.onCopyError(err);
      }
    }

    onClick = e => {
      this.copyTextToClipboard(e);
    };

    render() {
      // We want to avoid these styles getting overriden accidently,
      // so they are being applied inline to the element itself.
      const textStyle = {
        position: 'fixed',
        top: '-100%',
        left: '-100%',
        width: '2em',
        height: '2em',
        padding: 0,
        border: 'none',
        outline: 'none',
        boxShadow: 'none',
        background: 'transparent'
      };

      const { textToCopy, onCopyError, onCopySuccess, ...rest } = this.props;

      return (
        <WrappedComponent {...rest} onClick={this.onClick}>
          <textarea
            value={textToCopy}
            ref={textArea => {
              this.textArea = textArea;
            }}
            style={{ ...textStyle }}
            readOnly
          />
          {this.props.children}
        </WrappedComponent>
      );
    }
  };
