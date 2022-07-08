import React, { useState, useEffect } from 'react';
import { css, cx } from 'emotion';
import PropTypes from 'prop-types';

import { colors, typographyDefs } from '../../theme/Theme';
import withCopyToClipboard from '../CopyToClipboard';
import Link from '../../atoms/Link';

const buttonDefaultClass = css`
  display: flex;
  align-items: center;
  height: 100%;

  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;

  cursor: pointer;
  outline: none;

  justify-content: center;
  width: 100px;
  min-width: 100px;

  box-sizing: border-box;
`;

const buttonWithLinkClass = css`
  border-left: 1px solid ${colors.grey};
  border-right: none;

  border-top: none;
  border-bottom: none;

  padding: 0 16px;
`;

const copyLinkClass = css`
  display: inline-flex;
  align-items: center;

  width: 100%;
  max-width: 100%;
  min-width: 416px;

  height: 48px;
  border: 1px solid ${colors.grey};
  border-radius: 3px;
`;

const linkContainerClass = css`
  display: flex;
  align-items: center;
  flex: 1;

  height: 100%;
  overflow: hidden;
  padding: 0 16px;
`;

const linkClass = css`
  overflow-x: hidden;
  text-overflow: ellipsis;

  &:visited {
    color: ${colors.blue};
  }
`;

const button = ({ className, onClick, children }) => (
  <button onClick={onClick} className={cx(className)} data-qa-selector="copy-button">
    {children}
  </button>
);

const CopyTextButton = withCopyToClipboard(button);
const COPY_LINK = 'Copy Link';
const COPY_LINK_SUCCESS = 'Copied!';

export const CopyButton = ({ linkToCopy, className }) => {
  const [copyText, setCopyText] = useState(COPY_LINK);

  useEffect(
    () => {
      let timer;
      if (copyText === COPY_LINK_SUCCESS) {
        timer = setInterval(() => setCopyText(COPY_LINK), 1000);
      }

      return function cleanup() {
        if (timer) {
          clearInterval(timer);
        }
      };
    },
    [copyText],
  );

  return (
    <CopyTextButton
      className={cx(buttonDefaultClass, className)}
      textToCopy={linkToCopy}
      onCopySuccess={() => setCopyText(COPY_LINK_SUCCESS)}
    >
      <span data-qa-selector="copy-link-text" className={css({ ...typographyDefs.bodyDefault })}>
        {copyText}
      </span>
    </CopyTextButton>
  );
};

const CopyLink = ({ linkToCopy, className }) => {
  return (
    <div className={cx(copyLinkClass, className)}>
      <div className={linkContainerClass}>
        <Link data-qa-selector="copy-link" className={linkClass} href={linkToCopy} target="_blank">
          {linkToCopy}
        </Link>
      </div>
      <CopyButton linkToCopy={linkToCopy} className={buttonWithLinkClass} />
    </div>
  );
};

CopyLink.propTypes = {
  linkToCopy: PropTypes.string.isRequired,
  className: PropTypes.string,
};

CopyLink.defaultProps = {
  className: '',
};

export default CopyLink;
