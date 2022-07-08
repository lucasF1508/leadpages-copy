import React, { Fragment } from 'react';
import { css } from 'emotion';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import PropTypes from 'prop-types';

const bodyClassName = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 0 0 175px;
`;

const textareaClassName = css`
  height: 170px;
  resize: none;
`;

const footerClassName = css`
  display: flex;
  justify-content: space-between;
  flex-flow: row-reverse;
`;

const helpClassName = css`
  margin-bottom: 15px;
`;

const Feedback = props => (
  <Fragment>
    <div className={bodyClassName}>
      <Input
        value={props.feedback}
        inputSelfClass={textareaClassName}
        inputComponent="textarea"
        placeholder="Share feedback or report a bug"
        onChange={props.setFeedback}
      />
    </div>
    <div className={helpClassName}>
      Need Help?{' '}
      <a
        href="https://support.leadpages.net/hc/en-us/requests/new"
        rel="noopener noreferrer"
        target="_blank"
      >
        Contact Support
      </a>
    </div>
    <div className={footerClassName}>
      <Button onClick={props.goToFeedbackType}>Next</Button>
    </div>
  </Fragment>
);

export default Feedback;

Feedback.propTypes = {
  feedback: PropTypes.string.isRequired,
  setFeedback: PropTypes.func.isRequired,
  goToFeedbackType: PropTypes.func.isRequired
};
