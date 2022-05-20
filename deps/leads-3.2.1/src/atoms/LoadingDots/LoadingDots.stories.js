import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { StoryHeader, StoryRow, StoryColumn } from '../../../story-helpers';
import LoadingDots from './LoadingDots';
import Button from '../../atoms/Button';
import withLoadingState from '../../molecules/LoadingState';
import styles from './LoadingDots.stories.css';

const EmptyWithLoading = withLoadingState(() => null);
const TextWithLoading = withLoadingState(props => <span {...props}>Click Here</span>);

class LoadingDotsStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingStateSuccess: 'loading',
      loadingStateError: 'loading',
      clickLoadingStateSuccess: 'success',
    };
  }

  componentDidMount() {
    if (!this.previousSuccessInterval) {
      this.previousSuccessInterval = setInterval(() => {
        this.incrementLoadingStateToSuccess(this.state.loadingStateSuccess);
      }, 4000);
    }
    if (!this.previousErrorInterval) {
      this.previousErrorInterval = setInterval(() => {
        this.incrementLoadingStateToError(this.state.loadingStateError);
      }, 4000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.previousSuccessInterval);
    clearInterval(this.previousErrorInterval);
    this.previousSuccessInterval = null;
    this.previousErrorInterval = null;
  }


  incrementLoadingStateToSuccess(loadingStateSuccess) {
    if (loadingStateSuccess === 'success') {
      this.setState({ loadingStateSuccess: 'loading' });
    } else if (loadingStateSuccess === 'loading') {
      this.setState({ loadingStateSuccess: 'success' });
    }
  }

  incrementClickLoadingStateToSuccess() {
    clearTimeout(this.clickLoadingTimeout);
    this.setState(() => ({ clickLoadingStateSuccess: 'loading' }), () => {
      this.clickLoadingTimeout = setTimeout(() => {
        this.setState(() => ({ clickLoadingStateSuccess: 'success' }));
      }, 2000);
    });
  }

  incrementLoadingStateToError(loadingStateError) {
    if (loadingStateError === 'error') {
      this.setState({ loadingStateError: 'loading' });
    } else if (loadingStateError === 'loading') {
      this.setState({ loadingStateError: 'error' });
    }
  }

  render() {
    return (
      <div>
        <StoryHeader>Loading Dots</StoryHeader>
        <StoryRow className={styles.light} >
          <StoryColumn>
            <LoadingDots />
          </StoryColumn>
          <StoryColumn>
            <LoadingDots size="md" />
          </StoryColumn>
          <StoryColumn>
            <LoadingDots size="sm" />
          </StoryColumn>
          <StoryColumn>
            <LoadingDots size="xs" />
          </StoryColumn>
        </StoryRow>
        <StoryRow className={styles.dark} >
          <StoryColumn>
            <LoadingDots inverted />
          </StoryColumn>
          <StoryColumn>
            <LoadingDots inverted size="md" />
          </StoryColumn>
          <StoryColumn>
            <LoadingDots inverted size="sm" />
          </StoryColumn>
          <StoryColumn>
            <LoadingDots inverted size="xs" />
          </StoryColumn>
        </StoryRow>
        <StoryHeader>Conditional Loading Dots</StoryHeader>
        <StoryRow className={styles.light} >
          <StoryColumn>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '36px',
                overflow: 'hidden',
              }}
            >
              <EmptyWithLoading loadingState={this.state.loadingStateSuccess} />
            </div>
          </StoryColumn>
          <StoryColumn>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '36px',
                overflow: 'hidden',
              }}
            >
              <EmptyWithLoading loadingState={this.state.loadingStateError} size="md" />
            </div>
          </StoryColumn>
          <StoryColumn>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '36px',
                overflow: 'hidden',
              }}
            >
              <EmptyWithLoading loadingState={this.state.loadingStateSuccess} size="sm" />
            </div>
          </StoryColumn>
          <StoryColumn>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '36px',
                overflow: 'hidden',
              }}
            >
              <EmptyWithLoading loadingState={this.state.loadingStateError} size="xs" />
            </div>
          </StoryColumn>
        </StoryRow>
        <StoryRow className={styles.light} >
          <StoryColumn>
            <Button onClick={() => { this.incrementClickLoadingStateToSuccess(this.state.clickLoadingStateSuccess); }}>
              <TextWithLoading inverted size="sm" loadingState={this.state.clickLoadingStateSuccess} />
            </Button>
          </StoryColumn>
        </StoryRow>
      </div>
    );
  }
}

const stories = storiesOf('Atoms/LoadingDots', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => (
    <LoadingDotsStory />
  ))
);
