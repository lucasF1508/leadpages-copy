import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import Tooltip from '../../molecules/Tooltip';
import IconButton from '../../molecules/IconButton';
import OutsideClickHandler from '../../molecules/OutsideClickHandler';
import { colors, typographyDefs } from '../../theme/Theme';

import FeedbackView from './FeedbackView';
import FeedbackType from './FeedbackType';
import FeedbackSuccess from './FeedbackSuccess';

const { redDark } = colors;
const { headingDefault, supportContent } = typographyDefs;

const CURRENT_VIEW = {
  FEEDBACK: 'feedback',
  FEEDBACK_TYPE: 'feedbackType',
  FEEDBACK_SUCCESS: 'feedbackSuccess',
};

// choices match ndb model, do not change unless ndb model is updated
export const feedbackTypeChoices = {
  SUGGESTION: 'Suggestion',
  BUG: 'Bug',
  PRAISE: 'Praise',
};

export const feedbackTypeOptions = [
  feedbackTypeChoices.SUGGESTION,
  feedbackTypeChoices.BUG,
  feedbackTypeChoices.PRAISE,
];

export const feedbackProductCategoryChoices = {
  INTEGRATIONS: 'Integrations',
  POP_UP_FORMS: 'Pop-Up/Forms',
  BAR: 'Bar',
  WIDGETS: 'Widgets',
  PUBLISHING: 'Publishing',
  ANALYTICS: 'Analytics',
  SPLIT_TESTING: 'Split Testing',
  LEAD_MAGNET: 'Lead Magnet',
  LEADMETER: 'Leadmeter',
  PAGE_CUSTOMIZATION: 'Page Customization',
  ACCOUNT_MANAGEMENT_BILLING: 'Account Management/Billing',
  SITES: 'Sites',
  OTHER: 'Other',
};

export const feedbackProductCategoryOptions = [
  feedbackProductCategoryChoices.INTEGRATIONS,
  feedbackProductCategoryChoices.POP_UP_FORMS,
  feedbackProductCategoryChoices.BAR,
  feedbackProductCategoryChoices.WIDGETS,
  feedbackProductCategoryChoices.PUBLISHING,
  feedbackProductCategoryChoices.ANALYTICS,
  feedbackProductCategoryChoices.SPLIT_TESTING,
  feedbackProductCategoryChoices.LEAD_MAGNET,
  feedbackProductCategoryChoices.LEADMETER,
  feedbackProductCategoryChoices.PAGE_CUSTOMIZATION,
  feedbackProductCategoryChoices.ACCOUNT_MANAGEMENT_BILLING,
  feedbackProductCategoryChoices.SITES,
  feedbackProductCategoryChoices.OTHER,
];

const containerClassName = css`
  width: 240px;
  height: 298px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

const closeIconClassName = css`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const targetClassName = css`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9001;
`;

const errorMessageClassName = css`
  flex: 0 0 100%;
  display: block;
  height: 18px;
`;

export default class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: CURRENT_VIEW.FEEDBACK,
      feedback: props.feedback,
      feedbackType: props.feedbackType,
      feedbackProductCategory: props.feedbackProductCategory,
      errorMessage: '',
      isLoading: false,
    };

    this.closeTimeout = null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.state.currentView === nextState.currentView &&
      this.state.feedback === nextState.feedback &&
      this.state.feedbackType === nextState.feedbackType &&
      this.state.feedbackProductCategory === nextState.feedbackProductCategory &&
      this.state.errorMessage === nextState.errorMessage &&
      this.state.isLoading === nextState.isLoading
    ) {
      return false;
    }
    return true;
  }

  setCurrentView = currentView => {
    this.setState(
      () => ({
        currentView,
        errorMessage: '',
      }),
      () => {
        if (this.state.currentView === CURRENT_VIEW.FEEDBACK_SUCCESS) {
          this.closeTimeout = setTimeout(() => {
            this.props.unmount();
          }, 5000);
        }
      },
    );
  };

  setFeedback = ({ target }) =>
    this.setState(() => {
      const feedback = target.value;
      let errorMessage = '';

      if (target.value.length > 230) {
        errorMessage = `${target.value.length} of 250 left.`;
      }

      if (target.value.length > 250) {
        errorMessage = "You're over the 250 character limit.";
      }

      return { feedback, errorMessage };
    });

  setFeedbackType = ({ value }) => this.setState(() => ({ feedbackType: value, errorMessage: '' }));

  setFeedbackProductCategory = ({ value }) =>
    this.setState(() => ({ feedbackProductCategory: value, errorMessage: '' }));

  goToFeedbackType = () => {
    const { feedback } = this.state;
    if (feedback.length > 0 && feedback.length < 251) {
      this.setCurrentView(CURRENT_VIEW.FEEDBACK_TYPE);
    } else {
      this.setState(() => ({
        errorMessage: !feedback
          ? 'Please provide some feedback.'
          : "You're over the 250 character limit.",
      }));
    }
  };

  submitFeedback = async () => {
    const { feedback, feedbackType, feedbackProductCategory } = this.state;
    if (feedback && feedbackType && feedbackProductCategory) {
      this.setState(() => ({
        isLoading: true,
      }));
      let response;
      try {
        response = await this.props.onSubmitFeedback({
          feedback,
          feedbackType,
          feedbackProductCategory,
        });
      } catch (error) {
        response = error;
      }
      if (response.status !== 201) {
        return this.setState({
          errorMessage: response.msg || response.message || 'Oops, please try again later.',
          isLoading: false,
        });
      }
      return this.setCurrentView(CURRENT_VIEW.FEEDBACK_SUCCESS);
    }
    return this.setState({
      errorMessage: 'You need to select a type and category.',
      isLoading: false,
    });
  };

  closeFeedback = event => {
    event.stopPropagation();
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
    }
    this.props.unmount();
  };

  render() {
    const { currentView, errorMessage } = this.state;
    return (
      <Fragment>
        <OutsideClickHandler onOutsideClick={this.closeFeedback}>
          <Tooltip
            bottom
            hover={false}
            className={this.props.tooltipClassName}
            arrowClassName={this.props.arrowClassName}
            tip={
              <div className={containerClassName} onClick={e => e.stopPropagation()}>
                <div>
                  <div>
                    <div style={{ ...headingDefault, lineHeight: '36px' }}>Feedback</div>
                  </div>
                  <div className={closeIconClassName}>
                    <IconButton noBackground onClick={this.closeFeedback} icon="close" />
                  </div>
                  <div
                    className={errorMessageClassName}
                    style={{ ...supportContent, color: redDark }}
                    data-qa-selector="error-message"
                  >
                    {errorMessage}
                  </div>
                </div>
                {currentView === CURRENT_VIEW.FEEDBACK && (
                  <FeedbackView
                    feedback={this.state.feedback}
                    setFeedback={this.setFeedback}
                    goToFeedbackType={this.goToFeedbackType}
                  />
                )}
                {currentView === CURRENT_VIEW.FEEDBACK_TYPE && (
                  <FeedbackType
                    isLoading={this.state.isLoading}
                    feedbackType={this.state.feedbackType}
                    feedbackProductCategory={this.state.feedbackProductCategory}
                    setFeedbackType={this.setFeedbackType}
                    setFeedbackProductCategory={this.setFeedbackProductCategory}
                    setCurrentView={this.setCurrentView}
                    submitFeedback={this.submitFeedback}
                    feedbackTypeOptions={this.props.feedbackTypeOptions}
                    feedbackProductCategoryOptions={this.props.feedbackProductCategoryOptions}
                  />
                )}
                {currentView === CURRENT_VIEW.FEEDBACK_SUCCESS && <FeedbackSuccess />}
              </div>
            }
          >
            <div className={targetClassName} />
          </Tooltip>
        </OutsideClickHandler>
      </Fragment>
    );
  }
}
Feedback.propTypes = {
  tooltipClassName: PropTypes.string,
  arrowClassName: PropTypes.string,
  onSubmitFeedback: PropTypes.func.isRequired,
  unmount: PropTypes.func,
  feedback: PropTypes.string,
  feedbackType: PropTypes.string,
  feedbackProductCategory: PropTypes.string,
  feedbackTypeOptions: PropTypes.arrayOf(PropTypes.string),
  feedbackProductCategoryOptions: PropTypes.arrayOf(PropTypes.string),
};
Feedback.defaultProps = {
  tooltipClassName: '',
  arrowClassName: '',
  unmount: () => {},
  feedback: '',
  feedbackType: null,
  feedbackProductCategory: null,
  feedbackTypeOptions: feedbackTypeOptions,
  feedbackProductCategoryOptions: feedbackProductCategoryOptions,
};
