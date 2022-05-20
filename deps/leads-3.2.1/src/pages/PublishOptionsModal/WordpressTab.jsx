import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ModalBody } from '../../templates/Modal';
import Button from '../../atoms/Button';
import UrlOptionsDisplayLabel from './UrlOptionsDisplayLabel';
import { types, TypographyComponent } from '../../theme/Typography';

import styles from './PublishOptionsModal.css';
import localStyles from './WordpressTab.css';

const Wordpress = ({
  assetName,
  assetUrl,
  pluginUrl,
  pluginVersion,
  dynamicPageUrl,
  staticPageUrl
}) => (
  <ModalBody
    className={classnames(classnames, styles.publishOptionsModalContent)}
  >
    <TypographyComponent type={types.headingDefault}>
      Publish on Wordpress
    </TypographyComponent>
    <TypographyComponent
      className={classnames(styles.supportContent)}
      type={types.supportContent}
    >
      On the Leadpages tab in your Wordpress admin, select & publish:
    </TypographyComponent>
    <div className={localStyles.wordpressUrlContainer}>
      <UrlOptionsDisplayLabel urlText={assetName} urlLink={assetUrl} />
    </div>
    <TypographyComponent type={types.supportContent}>
      Don&#39;t have our Wordpress plugin yet?
      <Button isLinkText className={localStyles.downloadLink} href={pluginUrl}>
        Download Now
      </Button>
      ({pluginVersion})
    </TypographyComponent>
    <hr className={styles.modalContentDivision} />
    <TypographyComponent type={types.headingDefault}>
      Publish on Another Server
    </TypographyComponent>
    <TypographyComponent
      className={classnames(styles.supportContent)}
      type={types.supportContent}
    >
      A dynamic HTML copy of your Leadpage will automatically update anytime you
      make changes to your page.
    </TypographyComponent>
    <Button
      className={localStyles.wordpressDownloadButton}
      isSecondary
      href={dynamicPageUrl}
    >
      <i className="lp-icon">file_download</i>
      Download Dynamic HTML
    </Button>
    {!!staticPageUrl && (
      <TypographyComponent type={types.supportContent}>
        Or,
        <Button
          isLinkText
          className={localStyles.downloadLink}
          href={staticPageUrl}
        >
          download static HTML file.
        </Button>
        <b>Warning:</b>
        This will prevent analytics, split testing & the page builder from
        functioning normally. We cannot offer support for this.
      </TypographyComponent>
    )}
  </ModalBody>
);

Wordpress.propTypes = {
  className: PropTypes.string,
  assetName: PropTypes.string,
  assetUrl: PropTypes.string,
  pluginUrl: PropTypes.string.isRequired,
  pluginVersion: PropTypes.string.isRequired,
  dynamicPageUrl: PropTypes.string,
  staticPageUrl: PropTypes.string
};

Wordpress.defaultProps = {
  className: '',
  assetName: '',
  assetUrl: null,
  pluginUrl: '#',
  pluginVersion: '',
  dynamicPageUrl: '',
  staticPageUrl: ''
};

export default Wordpress;
