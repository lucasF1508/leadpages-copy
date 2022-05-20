import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button';
import withColor, { colors } from '../../theme/Color';
import { Modal, ModalHeader, ModalBody } from '../../templates/Modal';
import UrlOptionsDisplayLabel from '../PublishOptionsModal/UrlOptionsDisplayLabel';
import { types, TypographyComponent } from '../../theme/Typography';
import styles from './PublishModal.css';

const ModalHeaderWithColor = withColor(ModalHeader);
const ColorType = withColor(TypographyComponent);
const ButtonWithColor = withColor(Button);
const PublishModal = ({
  isOpen,
  onClose,
  pageUrl,
  onOpenAdvancedPublishingOptions,
  viewOnClick,
  linkOnClick,
  editOnClick,
  headerTitle,
  children,
  className
}) => (
  <Modal
    className={className}
    isOpen={isOpen}
    onRequestClose={onClose}
    data-qa-selector="publish-modal"
  >
    <ModalHeaderWithColor backgroundColor="blueLight" onClose={onClose} isHero>
      <div className={styles.modalHeaderContent}>
        <ColorType
          className={styles.title}
          color={colors.greyLighter}
          type={types.inPageHeading}
        >
          {headerTitle}
        </ColorType>
        <UrlOptionsDisplayLabel
          className={styles.urlOptionsDisplayLabel}
          isLink
          urlLink={pageUrl}
          urlText={pageUrl}
          viewOnClick={viewOnClick}
          linkOnClick={linkOnClick}
          editOnClick={editOnClick}
        />
        <ButtonWithColor
          className={styles.link}
          color={colors.greyLighter}
          noBackground
          linkText
          data-qa-selector="publishing-options-button"
          onClick={e => {
            e.preventDefault();
            onOpenAdvancedPublishingOptions();
          }}
        >
          <i className={`lp-icon ${styles.icon}`}>settings</i>Publishing Options
        </ButtonWithColor>
      </div>
    </ModalHeaderWithColor>
    <ModalBody isHero>
      <div className={styles.modalBodyContent}>{children}</div>
    </ModalBody>
  </Modal>
);

PublishModal.propTypes = {
  pageUrl: PropTypes.string.isRequired,
  headerTitle: PropTypes.string,
  viewOnClick: PropTypes.func.isRequired,
  linkOnClick: PropTypes.func.isRequired,
  editOnClick: PropTypes.func,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onOpenAdvancedPublishingOptions: PropTypes.func.isRequired,
  children: PropTypes.node,
  className: PropTypes.string
};

PublishModal.defaultProps = {
  headerTitle: 'Your Page is Published!',
  children: null,
  className: null
};

export default PublishModal;
