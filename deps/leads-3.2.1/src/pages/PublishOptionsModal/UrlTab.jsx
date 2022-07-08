import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ModalBody } from '../../templates/Modal';
import { LOADING_STATES } from '../../molecules/LoadingState';
import Checkbox from '../../atoms/Checkbox';
import PageUrlEdit from './PageUrlEdit';

import UrlEdit from '../../pages/UrlEdit';

import { SupportContent } from '../../theme/Typography';
import styles from './PublishOptionsModal.css';
import localStyles from './UrlTab.css';

const PROPS = {
  assetUrl: PropTypes.string,
  headerComponent: PropTypes.node.isRequired,
  isEditingPageUrl: PropTypes.bool,
  pageUrlLoadingState: PropTypes.string,
  onPageUrlSaveClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  onRedirectPageChecked: PropTypes.func.isRequired,
  onRedirectUrlEditClosed: PropTypes.func,
  redirectPageChecked: PropTypes.bool,
  shouldRedirectDesktopOnly: PropTypes.bool,
  redirectUrl: PropTypes.string,
  onRedirectUrlSave: PropTypes.func,
  onRedirectToDesktopChanged: PropTypes.func,
  onSlugChange: PropTypes.func.isRequired,
  slugValue: PropTypes.string,
  slugMessage: PropTypes.func,
  hasSlugError: PropTypes.bool,
  onEditClick: PropTypes.func,
  onSelectChange: PropTypes.func.isRequired,
  selectClassName: PropTypes.string,
  onSelectClick: PropTypes.func.isRequired,
  selectPlaceHolder: PropTypes.string,
  selectValue: PropTypes.string,
  selectOptions: PropTypes.node.isRequired,
  hasRedirectError: PropTypes.bool,
  redirectErrorText: PropTypes.string,
  isRedirectSaveSuccess: PropTypes.bool
};

const DEFAULT_PROPS = {
  assetUrl: '',
  className: '',
  slugValue: '',
  isEditingPageUrl: false,
  pageUrlLoadingState: LOADING_STATES.success,
  slugMessage: () => {},
  hasSlugError: false,
  selectPlaceHolder: '',
  selectClassName: '',
  selectValue: '',
  hideFromSearchChecked: false,
  redirectPageChecked: false,
  shouldRedirectDesktopOnly: false,
  redirectUrl: 'https://',
  onRedirectUrlSave: undefined,
  onRedirectToDesktopChanged: () => {},
  onRedirectUrlEditClosed: () => {},
  onEditClick: undefined,
  hasRedirectError: false,
  redirectErrorText: '',
  isRedirectSaveSuccess: false
};

export default class Url extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onEditUrl: false,
      redirectUrl: props.redirectUrl
    };

    this.handleOnRedirectUrlSave = props.onRedirectUrlSave;
    this.handleOnRedirectUrlChange = this.onRedirectUrlChange.bind(this);
    this.handleOnRedirectCheckboxChanged = this.onRedirectCheckboxChanged.bind(
      this
    );
    this.handleOnRedirectToDesktopChanged = this.onRedirectToDesktopChanged.bind(
      this
    );
    this.handleOnPageUrlSaveClick = this.onPageUrlSaveClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectUrl !== this.state.redirectUrl) {
      this.setState(() => ({ redirectUrl: nextProps.redirectUrl }));
    }
  }

  onRedirectUrlChange(value) {
    this.props.onRedirectUrlSave(value);
    this.setState(() => ({ redirectUrl: value }));
  }

  onRedirectCheckboxChanged({ target }) {
    const { onRedirectPageChecked } = this.props;
    onRedirectPageChecked(target.checked);
  }

  onRedirectToDesktopChanged({ target }) {
    const { onRedirectToDesktopChanged } = this.props;
    onRedirectToDesktopChanged(target.checked);
  }

  onPageUrlSaveClick() {
    const { onPageUrlSaveClick } = this.props;
    onPageUrlSaveClick();
  }

  renderRedirectForm() {
    const {
      redirectPageChecked,
      onRedirectUrlEditClosed,
      shouldRedirectDesktopOnly,
      hasRedirectError,
      redirectErrorText,
      isRedirectSaveSuccess
    } = this.props;

    if (!redirectPageChecked) {
      return null;
    }

    return [
      <UrlEdit
        url={this.state.redirectUrl}
        onClose={onRedirectUrlEditClosed}
        onChange={this.handleOnRedirectUrlChange}
        hasError={hasRedirectError}
        subContent={redirectErrorText}
        isSuccess={isRedirectSaveSuccess}
      />,
      <div className={localStyles.checkboxContainer}>
        <Checkbox
          id="redirect-desktop-checkbox"
          className={localStyles.supportCheckbox}
          checked={shouldRedirectDesktopOnly}
          onChange={this.handleOnRedirectToDesktopChanged}
          labelContent={
            <SupportContent>Only redirect desktop traffic</SupportContent>
          }
        />
      </div>
    ];
  }

  render() {
    const {
      assetUrl,
      className,
      redirectPageChecked,
      onSlugChange,
      slugValue,
      slugMessage,
      hasSlugError,
      isEditingPageUrl,
      pageUrlLoadingState,
      onSelectChange,
      onEditClick,
      selectClassName,
      onSelectClick,
      selectPlaceHolder,
      selectValue,
      selectOptions,
      headerComponent
    } = this.props;

    return (
      <ModalBody
        className={classnames(className, styles.publishOptionsModalContent)}
      >
        <PageUrlEdit
          {...{
            assetUrl,
            headerComponent,
            onEditClick,
            isEditing: isEditingPageUrl,
            pageUrlLoadingState,
            onSaveClick: this.handleOnPageUrlSaveClick,
            onSlugChange,
            slugValue,
            slugMessage,
            hasSlugError,
            onSelectChange,
            selectClassName,
            onSelectClick,
            selectPlaceHolder,
            selectValue,
            selectOptions
          }}
        />{' '}
        {this.handleOnRedirectUrlSave ? (
          <div>
            <hr className={styles.modalContentDivision} />
            {
              // TODO: The code below will be released when we adapte this to work inside
              // of the Builer as well
              /* <div className={localStyles.checkboxContainer}>
            <Checkbox
              id="url-tab-hide-page-from-search-engines"
              onChange={onHideFromSearchChecked}
              checked={hideFromSearchChecked}
              labelContent="Hide From Search Engines"
              disabled={onEditUrl}
            />
            <SupportContent
              className={classnames(styles.supportContent, localStyles.checkboxSupportText)}
            >
              Hiding a page from search engines indexes is useful while it is being worked on.
              A hidden page is accessible to who has its link.
            </SupportContent>
          </div> */
            }
            <div className={localStyles.checkboxContainer}>
              <Checkbox
                id="url-tab-redirect-page-checkbox"
                onChange={this.handleOnRedirectCheckboxChanged}
                checked={redirectPageChecked}
                labelContent="Redirect This URL"
              />
              <SupportContent
                className={classnames(
                  styles.supportContent,
                  localStyles.checkboxSupportText
                )}
              >
                Redirecting a URL is useful when a campaign has ended and you
                need to send traffic to an alternate URL.
              </SupportContent>
            </div>
            {this.renderRedirectForm()}
          </div>
        ) : (
          <div />
        )}
      </ModalBody>
    );
  }
}

Url.propTypes = PROPS;
Url.defaultProps = DEFAULT_PROPS;
