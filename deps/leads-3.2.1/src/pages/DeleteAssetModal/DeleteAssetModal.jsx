import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import Button from '../../atoms/Button';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from '../../templates/Modal';
import Tooltip from '../../molecules/Tooltip';
import Checkbox from '../../atoms/Checkbox';
import withColor, { colors } from '../../theme/Color';
import withTypograpgy, { types } from '../../theme/Typography';
import styles from './DeleteAssetModal.css';

/*
  NOTE: Seeing this error? (Can remove after upgrade to react 16)

  Exception thrown by hook while
  handling onSetChildren: Invariant Violation:
  Expected onBeforeMountComponent() parent and onSetChildren()
  to be consistent (16 has parents 12 and 15).
  Invariant Violation: Expected onBeforeMountComponent() parent
  and onSetChildren() to be consistent (16 has parents 12 and 15).

  Dont worry it wont be a thing eventually :)

  https://github.com/facebook/react/issues/8692
*/

const Typography = withTypograpgy(props => <div {...props} />);
const ColorAndType = withColor(props => <Typography {...props} />);
export const DeleteModalContent = props => (
  <ColorAndType type={types.bodyDefault} color={colors.greyDark} {...props} />
);

export default class DeleteAssetModal extends Component {
  constructor(props) {
    super(props);

    this.setIsConfirmed = this.setIsConfirmed.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      isConfirmed: false
    };
  }

  setIsConfirmed({ target }) {
    this.setState(() => ({
      isConfirmed: target.checked
    }));
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.handleDelete();
  }

  render() {
    const {
      children,
      isOpen,
      needsConfirmation,
      assetType,
      assetName,
      alternate,
      details,
      handleClose,
      handleDelete,
      useAlternatDeletePhrase
    } = this.props;

    const { isConfirmed } = this.state;

    return (
      <Modal isOpen={isOpen} onRequestClose={handleClose}>
        <ModalHeader
          onClose={handleClose}
          title={`Delete ${assetType}`}
          className={css`
            text-transform: capitalize;
          `}
        />
        <form onSubmit={this.onSubmit}>
          <ModalBody>
            {children || (
              <div>
                <Typography type={types.headingDefault}>
                  You are about to{' '}
                  {useAlternatDeletePhrase ? 'discard' : 'delete'} the following{' '}
                  {assetType}:
                </Typography>
                <ColorAndType
                  className={styles.assetName}
                  type={types.bodyDefault}
                  color={colors.greyDark}
                  backgroundColor={colors.greyLighter}
                >
                  {assetName}
                </ColorAndType>
                {details && (
                  <ColorAndType
                    className={styles.detailsContainer}
                    type={types.bodyDefault}
                    color={colors.greyDark}
                  >
                    <ColorAndType
                      className="delete-modal__details-title"
                      type={types.bodyDefault}
                      color={colors.greyDark}
                    >
                      This cannot be undone. By{' '}
                      {useAlternatDeletePhrase ? 'discarding' : 'deleting'} your{' '}
                      {assetType},
                    </ColorAndType>
                    <ul className={styles.details}>
                      {details.map(detail => (
                        <li key={detail} className={styles.detail}>
                          <ColorAndType
                            color={colors.greyDark}
                            type={types.bodyDefault}
                          >
                            {detail}
                          </ColorAndType>
                        </li>
                      ))}
                    </ul>
                  </ColorAndType>
                )}
                {alternate && alternate()}
                {needsConfirmation && (
                  <div>
                    <Checkbox
                      id="confirmForDeleteAsset"
                      checked={isConfirmed}
                      labelContent="I understand the results of this action."
                      onChange={this.setIsConfirmed}
                    />
                  </div>
                )}
              </div>
            )}
          </ModalBody>
          <ModalFooter>
            <Button isSecondary onClick={handleClose}>
              {' '}
              Cancel{' '}
            </Button>
            <Tooltip
              tip={
                <div>
                  Please confirm that you
                  <br />
                  understand the results first.
                </div>
              }
              hidden={!needsConfirmation || isConfirmed}
            >
              <Button
                disabled={needsConfirmation && !isConfirmed}
                type="submit"
                isDanger
              >
                {' '}
                {useAlternatDeletePhrase ? 'Discard' : 'Delete'}{' '}
              </Button>
            </Tooltip>
          </ModalFooter>
        </form>
      </Modal>
    );
  }
}

DeleteAssetModal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  isOpen: PropTypes.bool,
  useAlternatDeletePhrase: PropTypes.bool,
  needsConfirmation: PropTypes.bool,
  assetType: PropTypes.string,
  assetName: PropTypes.string,
  alternate: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  details: PropTypes.arrayOf(PropTypes.string),
  handleClose: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};

DeleteAssetModal.defaultProps = {
  children: null,
  isOpen: false,
  useAlternatDeletePhrase: false,
  needsConfirmation: false,
  assetType: null,
  assetName: null,
  alternate: null,
  details: null
};
