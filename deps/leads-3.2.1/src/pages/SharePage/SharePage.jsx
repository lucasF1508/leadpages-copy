import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import Button from '../../atoms/Button';
import Link from '../../atoms/Link';
import CopyLink from '../../molecules/CopyLink';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from '../../templates/Modal';

import { colors, typographyDefs } from '../../theme/Theme';

const modalClass = css`
  max-width: 600px;
`;

const infoClass = css`
  margin: 16px 0;
`;
const supportClass = css`
  ${typographyDefs.supportContent};
  margin-top: 8px;
`;

const linkClass = css`
  ${typographyDefs.supportContent};
  color: ${colors.greyDarker};

  &:visited {
    color: ${colors.greyDarker};
  }
`;

const SharePage = ({ isOpen, shareUrl, onClose, serviceTermsUrl }) => (
  <Modal
    ariaHideApp={false}
    className={modalClass}
    isOpen={isOpen}
    onRequestClose={onClose}
  >
    <ModalHeader onClose={onClose} title="Share Page Template" />
    <ModalBody>
      <p className={infoClass}>
        This unique url allows you to share your customized version of this
        template with anyone, even if they're not a Leadpages customer.
      </p>
      <CopyLink data-qa-selector="share-page-url" linkToCopy={shareUrl} />
      <p className={supportClass}>
        By sharing this page, you are agreeing to our{' '}
        <Link
          data-qa-selector="share-page-service-terms"
          className={linkClass}
          target="_blank"
          href={serviceTermsUrl}
        >
          terms of service
        </Link>{' '}
        and acknowledging that you own all content on the page.
      </p>
    </ModalBody>
    <ModalFooter>
      <Button data-qa-selector="share-page-done" onClick={onClose}>
        Done
      </Button>
    </ModalFooter>
  </Modal>
);

SharePage.propTypes = {
  isOpen: PropTypes.bool,
  shareUrl: PropTypes.string.isRequired,
  serviceTermsUrl: PropTypes.string.isRequired
};

SharePage.defaultProps = {
  isOpen: false
};

export default SharePage;
