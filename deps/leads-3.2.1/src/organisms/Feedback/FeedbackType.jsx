import React, { Fragment } from 'react';
import { css } from 'emotion';
import LoadingButton from '../../organisms/LoadingButton';
import { LOADING_STATES } from '../../molecules/LoadingState';
import IconButton from '../../molecules/IconButton';
import Select from '../../molecules/Select';
import Option from '../../atoms/Option';
import PropTypes from 'prop-types';

const bodyClassName = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 0 0 175px;
`;

const productCategoryClassName = css`
  margin-top: 30px;
`;

const footerClassName = css`
  display: flex;
  justify-content: space-between;
  flex-flow: row-reverse;
`;

const FeedbackType = props => {
  let loadingState = props.errorMessage
    ? LOADING_STATES.error
    : LOADING_STATES.success;

  if (props.isLoading) {
    loadingState = LOADING_STATES.loading;
  }

  return (
    <Fragment>
      <div className={bodyClassName}>
        <Select
          outerLabel="Feedback Type"
          onChange={props.setFeedbackType}
          placeholderText="Feedback Type"
        >
          {props.feedbackTypeOptions.map(option => (
            <Option
              key={option}
              primaryText={option}
              value={option}
              selected={props.feedbackType === option}
            />
          ))}
        </Select>
        <Select
          outerLabel="Product Category"
          onChange={props.setFeedbackProductCategory}
          placeholderText="Product Category"
          className={productCategoryClassName}
        >
          {props.feedbackProductCategoryOptions.map(option => (
            <Option
              key={option}
              primaryText={option}
              value={option}
              selected={props.feedbackProductCategory === option}
            />
          ))}
        </Select>
      </div>
      <div className={footerClassName}>
        <LoadingButton
          disabled={props.isLoading}
          loadingState={loadingState}
          onClick={props.submitFeedback}
        >
          Send Message
        </LoadingButton>
        <IconButton
          noBackground
          onClick={() => props.setCurrentView('feedback')}
          icon="left_arrow"
        />
      </div>
    </Fragment>
  );
};

export default FeedbackType;

FeedbackType.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  feedbackType: PropTypes.string,
  feedbackProductCategory: PropTypes.string,
  setFeedbackType: PropTypes.func.isRequired,
  setFeedbackProductCategory: PropTypes.func.isRequired,
  feedbackTypeOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  feedbackProductCategoryOptions: PropTypes.arrayOf(PropTypes.string)
    .isRequired,
  setCurrentView: PropTypes.func.isRequired,
  submitFeedback: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
};

FeedbackType.defaultProps = {
  feedbackType: null,
  feedbackProductCategory: null,
  errorMessage: ''
};
