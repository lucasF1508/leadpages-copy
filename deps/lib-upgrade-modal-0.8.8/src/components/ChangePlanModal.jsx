import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import { Modal } from '@lp/leads/Modal';

import ChangePlan from './ChangePlan';
import { COLORS, VERBIAGE } from '../constants';

const overlayClass = css`
  z-index: 9002;
`;

const confirmContainer = css`
  text-align: center;
`;

const confirmHeadline = css`
  color: ${COLORS.text.tundora};
  font-family: 'Apercu Pro';
  font-size: 32px;
  line-height: 28px;
  font-weight: 300;
  margin-top: 0;
`;

const confirmBody = css`
  font-family: 'Apercu Pro';
  font-size: 17px;
  line-height: 24px;
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  background: #ffffff;
  color: ${COLORS.text.darkBlue};
  border-radius: 4px;
  padding: 20px;
`;

const { confirmModal: lang } = VERBIAGE;

const ChangePlanModal = ({
  title,
  planTitle,
  confirmAction,
  cancelLabel,
  onCancel,
  processingMessage,
  isSubmitting,
  isOpen,
  ...props
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCancel}
      overlayClassName={overlayClass}
    >
      <div className={confirmContainer}>
        <div data-qa-selector="confirm-content">
          <div className={confirmBody}>
            <h2 className={confirmHeadline} data-qa-selector="title">
              {title}
            </h2>
            <ChangePlan
              {...props}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

ChangePlanModal.propTypes = {
  title: PropTypes.string,
  planTitle: PropTypes.string.isRequired,
  billingFrequency: PropTypes.string,
  processingMessage: PropTypes.string,
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
  confirmAction: PropTypes.func.isRequired,
  cancelAction: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

ChangePlanModal.defaultProps = {
  ...lang.default,
  billingFrequency: 'monthly',
};

export default ChangePlanModal;
