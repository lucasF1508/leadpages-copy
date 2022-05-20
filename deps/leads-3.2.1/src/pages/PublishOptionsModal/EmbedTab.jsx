import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import Button from '../../atoms/Button';
import { ModalBody } from '../../templates/Modal';
import withCopyToClipboard from '../../molecules/CopyToClipboard';

import { types, TypographyComponent } from '../../theme/Typography';

const CopyTextButton = withCopyToClipboard(Button);

const buttonClassName = css`
  display: block !important;
  margin: 0 auto;
`;

const embedCodeClassName = css`
  padding: 24px;
  margin: 24px 0;
  display: block;
  word-break: break-all;
  background: #4c515d;
  border: 1px solid #0069ff;
  border-radius: 3px;
  color: #f2f4f7;
  font-size: 0.875rem;
  font-weight: 100;
  line-height: 1.2;
  white-space: pre-wrap;
  text-align: left;
`;

const EmbedTab = ({
  children,
  copyButtonText,
  className,
  description,
  embedCode
}) => {
  return (
    <ModalBody className={className}>
      <TypographyComponent type={types.bodyDefault}>
        {description}
      </TypographyComponent>
      <code className={embedCodeClassName}>{embedCode}</code>
      {children}
      <CopyTextButton className={buttonClassName} textToCopy={embedCode}>
        {copyButtonText}
      </CopyTextButton>
    </ModalBody>
  );
};

EmbedTab.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  copyButtonText: PropTypes.string,
  description: PropTypes.string,
  embedCode: PropTypes.string
};

EmbedTab.defaultProps = {
  children: null,
  className: '',
  copyButtonText: 'Copy Code',
  description:
    'To use your bar copy and paste the following code before the closing </body> tag on your site or blog.',
  embedCode: ''
};

export default EmbedTab;
