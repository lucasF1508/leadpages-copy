import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { css } from 'emotion';
import SetPassword from '../../organisms/SetPassword';
import Input from '../../atoms/Input';
import Survey from '../Survey';
import SurveyFooter from '../../molecules/SurveyFooter';
import Navbar from '../../templates/Navbar';

const stories = storiesOf('Templates/Survey', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about Survey (supports markdown).

    ~~~js
    <Survey>Render this</Survey>
    ~~~

  `)(() => (
    <Fragment>
      <Navbar />
      <Survey
        header="Welcome, Louis! Let's get started."
        subHeader="We just need a few details to get us rolling."
        iconSvg={svgStyle => (
          <svg className={svgStyle} viewBox="0 0 100 100">
            <rect width="100" height="100" rx="15" ry="15" />
          </svg>
        )}
      >
        <SetPassword />
      </Survey>
    </Fragment>
  ))
);

const formStyles = css`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const inputStyles = css`
  width: 40%;
`;
stories.add('Another example', () => (
  <Fragment>
    <Navbar />
    <Survey
      header="Welcome, Louis! Let's get started."
      subHeader="We just need a few details to get us rolling."
      iconSvg={svgStyle => (
        <svg className={svgStyle} viewBox="0 0 100 100">
          <rect width="100" height="100" rx="15" ry="15" />
        </svg>
      )}
      footer={{
        primaryProps: {
          onClick: () => {},
          children: 'Continue'
        },
        secondaryProps: {
          onClick: () => {},
          children: 'Back'
        }
      }}
    >
      <div className={formStyles}>
        <Input
          className={inputStyles}
          labelContent="Company Name"
          placeholder="Enter Company Name"
        />
        <Input
          className={inputStyles}
          labelContent="Company Website"
          subContent="We'll use this to pull in your brand and create the best experience"
          placeholder="Enter URL"
        />
      </div>
    </Survey>
  </Fragment>
));
stories.add('Pass a className', () => <Survey className="myClassName" />);
stories.add('How to force a style', () => <Survey style={{ color: 'red' }} />);
