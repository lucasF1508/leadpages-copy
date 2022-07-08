import React from 'react';
import renderer from 'react-test-renderer';
import Survey from '../../Survey';

describe('Survey', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Survey>Children</Survey>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders with a iconSvg correctly', () => {
    const tree = renderer
      .create(
        <Survey
          header="Welcome, Louis! Let's get started."
          subHeader="We just need a few details to get us rolling."
          iconSvg={svgStyle => (
            <svg className={svgStyle} viewBox="0 0 100 100">
              <rect width="100" height="100" rx="15" ry="15" />
            </svg>
          )}
        >
          Children
        </Survey>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders without a iconSvg correctly', () => {
    const tree = renderer
      .create(
        <Survey
          header="Welcome, Louis! Let's get started."
          subHeader="We just need a few details to get us rolling."
        >
          Children
        </Survey>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders without a footer', () => {
    const tree = renderer
      .create(
        <Survey
          header="Welcome, Louis! Let's get started."
          subHeader="We just need a few details to get us rolling."
          iconSvg={svgStyle => (
            <svg className={svgStyle} viewBox="0 0 100 100">
              <rect width="100" height="100" rx="15" ry="15" />
            </svg>
          )}
        >
          Children
        </Survey>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders with a footer', () => {
    const tree = renderer
      .create(
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
          Children
        </Survey>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
