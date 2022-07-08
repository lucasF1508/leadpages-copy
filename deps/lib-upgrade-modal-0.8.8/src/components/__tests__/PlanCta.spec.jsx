import React from 'react';
import { shallow } from 'enzyme';

import PlanCta from '../PlanCta';

describe('PlanCta', () => {
  let props;
  let elem;
  let button;

  beforeEach(() => {
    props = {
      planKey: 'standard',
      planId: 'std',
      label: 'label',
      tableItemClass: 'item-class',
      tableColumnClass: 'col-class',
      onClick: jest.fn(),
      buttonText: 'Upgrade',
      isCurrentPlan: false,
    };

    elem = shallow(<PlanCta {...props} />);
    button = elem.find('button');
  });

  it('should render PlanCta', () => {
    expect(elem).toBeDefined();
  });

  it('should render a button with button label', () => {
    expect(button).toHaveLength(1);
    expect(button.text()).toEqual(props.buttonText);
  });

  it('should call onClick when button is clicked', () => {
    button.simulate('click', { preventDefault() {} });
    expect(props.onClick).toHaveBeenCalledWith(props.planId);
  });

  it('should render a label', () => {
    expect(elem.find('[data-qa-selector="cta-label"]').text()).toEqual(props.label);
  });

  it('should not render a button if it is the current plan', () => {
    props.isCurrentPlan = true;
    elem = shallow(<PlanCta {...props} />);
    expect(elem.find('button')).toHaveLength(0);
  });

  it('should set most-popular class on button if plan is pro', () => {
    props.planKey = 'pro';
    elem = shallow(<PlanCta {...props} />);
    expect(elem.find('button').hasClass('most-popular'));
  });
});
