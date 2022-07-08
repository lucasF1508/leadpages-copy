import React from 'react';
import renderer from 'react-test-renderer';
import SurveyFooter from '../../SurveyFooter';

describe('SurveyFooter', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<SurveyFooter>Children</SurveyFooter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
