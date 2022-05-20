// These will need to be adjusted for this environment but were working when
// written in Builder

import React from 'react';
import { shallow } from 'enzyme';
import Flyout from '../Flyout';
import styles from '../Flyout.css';

describe('Flyout Component', () => {
  let props;
  beforeEach(() => {
    props = {};
  });

  it('should render open if open property is supplied', () => {
    props.open = true;
    const wrapper = shallow(<Flyout {...props} />);
    expect(wrapper.hasClass(styles.open)).toBe(true);
  });

  it('should not render open if open property is not supplied', () => {
    props.open = false;
    const wrapper = shallow(<Flyout {...props} />);
    expect(wrapper.hasClass(styles.open)).toBe(false);
  });

  it('should render children when supplied', () => {
    const wrapper = shallow(
      <Flyout {...props}>
        <span>foo</span>
      </Flyout>,
    );
    expect(wrapper.contains(<span>foo</span>)).toEqual(true);
  });

  it('should not render children when none are supplied', () => {
    const wrapper = shallow(<Flyout {...props} />);
    expect(wrapper.contains(<span>foo</span>)).toEqual(false);
  });
});
