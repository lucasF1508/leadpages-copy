import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ModalBody } from '../../templates/Modal';
import { types, TypographyComponent } from '../../theme/Typography';
import Button from '../../atoms/Button';
import withCopyToClipboard from '../../molecules/CopyToClipboard';
import UrlOptionsDisplayLabel from './UrlOptionsDisplayLabel';

import styles from './PublishOptionsModal.css';
import localStyles from './TemplateTab.css';

const CopyTextButton = withCopyToClipboard(Button);

const Template = ({ assetName, assetUrl, tosUrl, className }) => (
  <ModalBody
    className={classnames(
      className,
      styles.publishOptionsModalContent,
      localStyles.templateContainer
    )}
  >
    <TypographyComponent type={types.headingDefault}>
      Share Page Template
    </TypographyComponent>
    <TypographyComponent
      className={classnames(styles.supportContent)}
      type={types.supportContent}
    >
      Share a template of this page with anyone (even if they&#39;re not a
      Leadpages customer).
    </TypographyComponent>
    <div className={localStyles.templateUrlCopyContainer}>
      <UrlOptionsDisplayLabel
        className={localStyles.templateUrlInput}
        urlText={assetName}
        urlLink={assetUrl}
      />
      <div className={localStyles.templateUrlCopy}>
        <CopyTextButton textToCopy={assetUrl}>Copy Link</CopyTextButton>
      </div>
    </div>
    <TypographyComponent type={types.supportContent}>
      By sharing this page, you agree to our
      <Button isLinkText href={tosUrl} className={localStyles.templateTOSLink}>
        terms of service.
      </Button>
    </TypographyComponent>
  </ModalBody>
);

Template.propTypes = {
  assetName: PropTypes.string.isRequired,
  className: PropTypes.string,
  assetUrl: PropTypes.string.isRequired,
  tosUrl: PropTypes.string.isRequired
};

Template.defaultProps = {
  className: ''
};

export default Template;
