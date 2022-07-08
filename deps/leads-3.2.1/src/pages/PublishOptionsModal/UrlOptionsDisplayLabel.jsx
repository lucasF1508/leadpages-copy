import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './UrlOptionsDisplayLabel.css';
import Button from '../../atoms/Button';
import Tooltip from '../../molecules/Tooltip';
import withCopyToClipboard from '../../molecules/CopyToClipboard';

const CopyTextButton = withCopyToClipboard(Button);

const PROPS = {
  className: PropTypes.string,
  editOnClick: PropTypes.func,
  isLink: PropTypes.bool,
  urlLink: PropTypes.string,
  urlText: PropTypes.string.isRequired,
  viewOnClick: PropTypes.func,
  'data-qa-selector': PropTypes.string
};

const DEFAULT_PROPS = {
  className: null,
  editOnClick: null,
  isLink: false,
  urlLink: null,
  viewOnClick: null,
  'data-qa-selector': 'url-options-display-label'
};

export const shouldDisplayLink = (text, link, isLink) => {
  if (link && isLink) {
    const displayText = text || link;

    return (
      <a
        className={styles.displayLabelText}
        data-qa-selector="url-link"
        href={link}
      >
        {displayText}
      </a>
    );
  }

  return text ? (
    <div className={styles.displayLabelText} data-qa-selector="url-text">
      {text}
    </div>
  ) : null;
};

const UrlOptionsDisplayLabel = ({
  urlText,
  urlLink,
  isLink,
  viewOnClick,
  editOnClick,
  className,
  'data-qa-selector': dataQaSelector
}) => (
  <div
    className={classnames(styles.urlDisplayLabelContainer, className)}
    data-qa-selector={dataQaSelector}
  >
    <Tooltip className={styles.urlDisplayToolTip} tip={urlText} top>
      {shouldDisplayLink(urlText, urlLink, isLink)}
    </Tooltip>
    <div>
      {viewOnClick && (
        <Tooltip tip="View Page" top>
          <Button
            noBackground
            data-qa-selector="view-page"
            icon="view"
            href={urlLink}
            target="_blank"
            onClick={viewOnClick}
          />
        </Tooltip>
      )}
      {isLink &&
        urlLink && (
          <Tooltip tip="Copy Link" top>
            <CopyTextButton
              noBackground
              data-qa-selector="copy-link"
              icon="link"
              textToCopy={urlLink}
            />
          </Tooltip>
        )}
      {editOnClick && (
        <Tooltip tip="Edit URL" top>
          <Button
            noBackground
            data-qa-selector="edit-url"
            icon="edit"
            onClick={editOnClick}
          />
        </Tooltip>
      )}
    </div>
  </div>
);

UrlOptionsDisplayLabel.propTypes = PROPS;
UrlOptionsDisplayLabel.defaultProps = DEFAULT_PROPS;

export default UrlOptionsDisplayLabel;
