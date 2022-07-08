import React, { useState } from 'react';
import { css } from 'emotion';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import Feedback from '../Feedback';

// TODO: fix after tool tip gets fixed
const tooltipClassName = css`
  position: absolute !important;
  top: 24px !important;
  left: 50% !important;
  z-index: 9001 !important;
`;

const FeedbackHandler = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={css`
        position: relative;
        background: rebeccapurple;
        height: 30px;
        max-width: 200px;
        margin: 0 auto;
        color: white;
        line-height: 30px;
      `}
      onClick={() => setIsOpen(true)}
    >
      <h3
        className={css`
          text-align: center;
          margin: 0;
        `}
      >
        Render Target
      </h3>
      {children({
        isOpen,
        unmount: () => setIsOpen(false),
        onSubmitFeedback: () =>
          new Promise(resolve =>
            setTimeout(() => resolve({ status: 201 }), 1000)
          )
      })}
    </div>
  );
};

const stories = storiesOf('Organisms/Feedback', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about Feedback (supports markdown).
  
    ~~~js
      <FeedbackHandler>
        {({ unmount, isOpen, onSubmitFeedback }) => isOpen && (
          <Feedback
            unmount={unmount}
            onSubmitFeedback={onSubmitFeedback}
          />
        )}
      </FeedbackHandler>
    ~~~
  
  `)(() => (
    <FeedbackHandler>
      {({ unmount, isOpen, onSubmitFeedback }) => {
        console.log('::::::::::::::::::::: ', tooltipClassName);
        return (
          isOpen && (
            <Feedback
              unmount={unmount}
              onSubmitFeedback={onSubmitFeedback}
              tooltipClassName={tooltipClassName}
            />
          )
        );
      }}
    </FeedbackHandler>
  ))
);
stories.add('Another example', () => <Feedback>Children</Feedback>);
stories.add('Pass a className', () => <Feedback className="myClassName" />);
stories.add('How to force a style', () => (
  <Feedback style={{ color: 'red' }} />
));
