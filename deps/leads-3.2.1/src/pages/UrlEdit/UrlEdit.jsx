import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import Select from '../../molecules/Select';
import Option from '../../atoms/Option';

import { DefaultHeading } from '../../theme/Typography';
import UrlOptionsDisplayLabel from '../PublishOptionsModal/UrlOptionsDisplayLabel';

import styles from './UrlEdit.css';

const PROPS = {
  url: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onClose: PropTypes.func,
  subContent: PropTypes.string,
  hasError: PropTypes.bool,
  isSuccess: PropTypes.bool,
};

const DEFAULT_PROPS = {
  url: '',
  onClose: () => {},
  subContent: '',
  hasError: false,
  isSuccess: false,
};

const getProtocol = (url) => {
  const protocolIndex = url.indexOf('://');
  return protocolIndex > -1
    ? url.substring(0, protocolIndex + 3)
    : 'https://';
};

export default class UrlEdit extends Component {
  static propTypes = PROPS;
  static defaultProps = DEFAULT_PROPS;

  constructor(props) {
    super(props);

    this.state = {
      isEditing: !this.props.url || this.props.hasError,
      ...this.getStateFromUrl(),
    };

    this.handleEditOnClick = this.editOnClick.bind(this);
    this.handleViewOnClick = this.viewOnClick.bind(this);
    this.handleOnProtocolSelect = this.onProtocolSelect.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hasError) {
      this.setState(() => ({ isEditing: true }));
    }

    if (nextProps.isSuccess) {
      this.setState(() => ({ isEditing: false }));
    }
  }

  onProtocolSelect({ value }) {
    this.setState(() => ({ protocol: value }));
  }

  getStateFromUrl() {
    const { url } = this.props;
    const urlProtocol = getProtocol(url);
    return {
      editedUrl: url.replace(urlProtocol, ''),
      protocol: urlProtocol,
    };
  }

  editOnClick() {
    this.setState(() => ({ isEditing: true }));
  }

  viewOnClick() {
    // TODO: Url validation?
    const { editedUrl, protocol } = this.state;
    window.open(`${protocol}${editedUrl}`);
  }

  closeEditor() {
    const { onClose } = this.props;

    this.setState(() => ({
      isEditing: false,
      ...this.getStateFromUrl(),
    }));
    onClose();
  }

  saveUrl() {
    const { onChange } = this.props;
    const { protocol, editedUrl } = this.state;

    onChange(`${protocol}${editedUrl}`);
  }

  updateEditedUrl(event) {
    const value = event.target.value;
    this.setState(() => ({ editedUrl: value }));
  }

  renderOptions() {
    const { protocol: stateProtocol } = this.state;
    return ['https://', 'http://'].map(protocol => (
      <Option
        key={protocol}
        selected={protocol === stateProtocol}
        value={protocol}
        primaryText={protocol}
      >{protocol}</Option>
    ));
  }

  renderEditor() {
    const { hasError, subContent } = this.props;
    const { protocol, editedUrl } = this.state;

    return (
      <div>
        <DefaultHeading>
          <Button
            noBackground
            icon="left_angle"
            onClick={() => this.closeEditor()}
          />
          Edit URL
        </DefaultHeading>
        <div className={styles.editUrlContent}>
          <Select
            onChange={this.handleOnProtocolSelect}
            value={protocol}
            className={styles.urlEditSelect}
          >
            { this.renderOptions() }
          </Select>
          <div className={styles.editSlug}>
            <Input
              value={editedUrl}
              hasError={hasError}
              subContent={subContent}
              onChange={e => this.updateEditedUrl(e)}
            />
          </div>
          <div className={styles.editUrlSave}>
            <Button
              data-heap="publish-options-url-save"
              onClick={() => this.saveUrl()}
            >
              Save URL
            </Button>
          </div>
        </div>
      </div>
    );
  }

  renderUrlOptions() {
    const { editedUrl, protocol } = this.state;
    return (
      <UrlOptionsDisplayLabel
        editOnClick={this.handleEditOnClick}
        viewOnClick={() => {}}
        urlText={`${protocol}${editedUrl}`}
        urlLink={`${protocol}${editedUrl}`}
      />
    );
  }

  render() {
    const { isEditing } = this.state;
    return isEditing
      ? this.renderEditor()
      : this.renderUrlOptions();
  }
}
