import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button';
import LoadingButton from '../../organisms/LoadingButton';
import Input from '../../atoms/Input';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from '../../templates/Modal';
import { LOADING_STATES } from '../../molecules/LoadingState';
import PageUrlEdit from '../PublishOptionsModal/PageUrlEdit';
import { types, TypographyComponent } from '../../theme/Typography';

import styles from './RenameAssetModal.css';

export default class RenameAssetModal extends Component {
  constructor(props) {
    super(props);
    this.submitAsset = this.submitAsset.bind(this);
    this.cancelAndClose = this.cancelAndClose.bind(this);
  }

  submitAsset(e) {
    const { onSave } = this.props;

    e.preventDefault();
    onSave();
  }

  cancelAndClose(e) {
    const { onClose } = this.props;

    e.preventDefault();
    onClose();
  }

  render() {
    const {
      isOpen,
      onClose,
      handleOnChange,
      assetType,
      assetUrl,
      assetName,
      assetLastUpdatedString,
      onEditUrl,
      onSelectChange,
      selectOptions,
      selectValue,
      slugMessage,
      slugHasError,
      renameError,
      slugValue,
      slugPlaceholder,
      onSlugChange,
      hideUrlEdit,
      loadingState
    } = this.props;

    return (
      <Modal isOpen={isOpen} onRequestClose={onClose}>
        <ModalHeader title={`Rename ${assetType}`} onClose={onClose} />
        <form onSubmit={this.submitAsset}>
          <ModalBody>
            <div className={styles.content}>
              <TypographyComponent
                className={styles.firstSectionHeader}
                type={types.headingDefault}
              >
                {`${assetType} Name`}
              </TypographyComponent>
              <Input
                id="assetName"
                isSingleInput
                placeholder={assetName}
                value={assetName}
                onChange={handleOnChange}
                hasError={!!renameError}
                helperText={renameError}
              />
              {!hideUrlEdit && (
                <div>
                  <TypographyComponent
                    className={styles.sectionHeader}
                    type={types.headingDefault}
                  >
                    {assetType.toLowerCase() === 'funnel'
                      ? `${assetType} entry URL`
                      : `${assetType} URL`}
                  </TypographyComponent>
                  <PageUrlEdit
                    selectClassName={styles.renameModalSelect}
                    {...{
                      assetUrl,
                      assetName,
                      assetLastUpdatedString,
                      onEditUrl: true,
                      onSelectChange,
                      selectOptions,
                      selectValue,
                      slugMessage,
                      slugHasError,
                      slugValue,
                      slugPlaceholder,
                      onSlugChange
                    }}
                  />
                </div>
              )}
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.cancelAndClose} type="reset" isSecondary>
              Cancel
            </Button>
            <LoadingButton inverted loadingState={loadingState}>
              Save
            </LoadingButton>
          </ModalFooter>
        </form>
      </Modal>
    );
  }
}

RenameAssetModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  assetName: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  hideUrlEdit: PropTypes.bool,
  loadingState: PropTypes.string
};

RenameAssetModal.defaultProps = {
  isOpen: false,
  hideUrlEdit: false,
  loadingState: LOADING_STATES.success
};
