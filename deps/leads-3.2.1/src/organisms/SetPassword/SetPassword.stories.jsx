import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import Component from 'react-component-component';
import SetPassword from '../SetPassword';

const stories = storiesOf('Organisms/SetPassword', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about SetPassword (supports markdown).

    ~~~js
    <Component
      initialState={{
        password: '',
        hasCharacterCount: false,
        hasUppercase: false,
        hasNumber: false,
        hasLowercase: false,
      }}
    >
      {({state, setState}) => {
        const {
          password,
          hasCharacterCount,
          hasUppercase,
          hasNumber,
          hasLowercase,
        } = state;

        return (
          <SetPassword
            className="myClassName"
            onSubmit={() => console.log('I submitted the form', password)}
            password={password}
            onChange={(newPassword) => {
              setState(() => ({
                password: newPassword,
                hasCharacterCount: newPassword.length >= 8,
                hasUppercase: newPassword.toLowerCase() !== newPassword,
                hasNumber: /[0-9]/.test(newPassword),
                hasLowercase: newPassword.toUpperCase() !== newPassword,
              }));
            }}
            validations={[{
              content:() => (
                <Fragment>
                  <i className="lp-icon">check_circle</i>
                  <div>at least 8 characters</div>
                </Fragment>
              ),
              passedCheck: hasCharacterCount,
            }, {
              content:() => (
                <Fragment>
                  <i className="lp-icon">check_circle</i>
                  <div>an uppercase letter</div>
                </Fragment>
              ),
              passedCheck: hasUppercase,
            }, {
              content:() => (
                <Fragment>
                  <i className="lp-icon">check_circle</i>
                  <div>a number</div>
                </Fragment>
              ),
              passedCheck: hasNumber,
            }, {
              content:() => (
                <Fragment>
                  <i className="lp-icon">check_circle</i>
                  <div>a lowercase letter</div>
                </Fragment>
              ),
              passedCheck: hasLowercase,
            }]}
          />
        );
      }}
    </Component>
    ~~~

  `)(() => (
    <Component
      initialState={{
        password: '',
        hasCharacterCount: false,
        hasUppercase: false,
        hasNumber: false,
        hasLowercase: false
      }}
    >
      {({ state, setState }) => {
        const {
          password,
          hasCharacterCount,
          hasUppercase,
          hasNumber,
          hasLowercase
        } = state;

        return (
          <SetPassword
            className="myClassName"
            onSubmit={() => console.log('I submitted the form', password)}
            password={password}
            onChange={newPassword => {
              setState(() => ({
                password: newPassword,
                hasCharacterCount: newPassword.length >= 8,
                hasUppercase: newPassword.toLowerCase() !== newPassword,
                hasNumber: /[0-9]/.test(newPassword),
                hasLowercase: newPassword.toUpperCase() !== newPassword
              }));
            }}
            validations={[
              {
                content: () => (
                  <Fragment>
                    <i className="lp-icon">check_circle</i>
                    <div>at least 8 characters</div>
                  </Fragment>
                ),
                passedCheck: hasCharacterCount
              },
              {
                content: () => (
                  <Fragment>
                    <i className="lp-icon">check_circle</i>
                    <div>an uppercase letter</div>
                  </Fragment>
                ),
                passedCheck: hasUppercase
              },
              {
                content: () => (
                  <Fragment>
                    <i className="lp-icon">check_circle</i>
                    <div>a number</div>
                  </Fragment>
                ),
                passedCheck: hasNumber
              },
              {
                content: () => (
                  <Fragment>
                    <i className="lp-icon">check_circle</i>
                    <div>a lowercase letter</div>
                  </Fragment>
                ),
                passedCheck: hasLowercase
              }
            ]}
          />
        );
      }}
    </Component>
  ))
);
stories.add('Another example', () => <SetPassword>Children</SetPassword>);
stories.add('Pass a className', () => <SetPassword className="myClassName" />);
stories.add('How to force a style', () => (
  <SetPassword style={{ color: 'red' }} />
));
