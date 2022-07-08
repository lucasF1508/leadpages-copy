import React, { Fragment } from 'react';
import { css } from 'emotion';
import { typographyDefs } from '../../theme/Theme';

const { bodyHeading, bodyDefault } = typographyDefs;

const bodyClassName = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 0 0 175px;
`;

const footerClassName = css`
  display: flex;
  justify-content: space-between;
  flex-flow: row-reverse;
`;

const FeedbackSuccess = () => (
  <Fragment>
    <div className={bodyClassName}>
      <h5 style={{ ...bodyHeading }}>Feedback sent!</h5>
      <p style={{ ...bodyDefault }}>
        Thanks so much for sharing your<br />thoughts on how we can improve.
      </p>
    </div>
    <div className={footerClassName} />
  </Fragment>
);

export default FeedbackSuccess;
