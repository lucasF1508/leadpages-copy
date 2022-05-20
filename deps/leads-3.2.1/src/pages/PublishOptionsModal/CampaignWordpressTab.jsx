import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ModalBody } from '../../templates/Modal';
import Button from '../../atoms/Button';
import UrlOptionsDisplayLabel from './UrlOptionsDisplayLabel';
import { types, TypographyComponent } from '../../theme/Typography';

import styles from './PublishOptionsModal.css';
import localStyles from './CampaignWordpressTab.css';

const CampaignWordpress = ({
  assetName,
  assetUrl,
  pluginUrl,
  pluginVersion
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
      <UrlOptionsDisplayLabel
        urlText={`${assetName} (Campaigns)`}
        urlLink={assetUrl}
      />
    </div>
    <TypographyComponent type={types.supportContent}>
      Don&#39;t have our Wordpress plugin yet?
      <Button
        isLinkText
        className={localStyles.downloadLink}
        href={pluginUrl}
        data-heap="campaigns-wordpress-download-now"
      >
        Download Now
      </Button>
      ({pluginVersion})
    </TypographyComponent>
  </ModalBody>
);

CampaignWordpress.propTypes = {
  assetName: PropTypes.string,
  assetUrl: PropTypes.string,
  pluginUrl: PropTypes.string.isRequired,
  pluginVersion: PropTypes.string.isRequired
};

CampaignWordpress.defaultProps = {
  assetName: '',
  assetUrl: null,
  pluginUrl: '#',
  pluginVersion: ''
};

export default CampaignWordpress;
