import React from 'react';
import { shallow } from 'enzyme';

import PlanFeatureItem from '../PlanFeatureItem';

describe('PlanFeatureItem', () => {
  let props;
  let elem;

  beforeEach(() => {
    props = {
      plan: {
        included: true,
        label: '',
      },
      planKey: 'standard',
      tableItemClass: 'item-class',
      tableColumnClass: 'col-class',
      selectedBillingFrequency: 'ANNUAL',
    };

    elem = shallow(<PlanFeatureItem {...props} />);
  });

  it('should render PlanFeatureItem', () => {
    expect(elem).toBeDefined();
  });

  it('should have tableColClass on the container', () => {
    expect(elem.find('[data-qa-selector="feature-item-container"]').hasClass(props.tableColumnClass));
  });

  it('should have "highlighted" class on the container if it is a PRO plan', () => {
    props.planKey = 'pro';
    elem = shallow(<PlanFeatureItem {...props} />);
    expect(elem.find('[data-qa-selector="feature-item-container"]').hasClass('highlighted'));
  });


  it('should have tableItemClass on the wrapper div', () => {
    expect(elem.find('[data-qa-selector="feature-item"]').hasClass(props.tableItemClass));
  });

  it('should have a CheckSvg if it is included w/o a label', () => {
    expect(elem.find('CheckSvg')).toHaveLength(1);
  });

  it('should show the label if it is included', () => {
    props.plan.label = 'Label';
    elem = shallow(<PlanFeatureItem {...props} />);
    expect(elem.find('span').text()).toBe(props.plan.label);
  });

  it('should show a - if it is not included', () => {
    props.plan.included = false;
    elem = shallow(<PlanFeatureItem {...props} />);
    expect(elem.find('span').text()).toBe('—');
  });

  it('should show a - if it is included but only annual', () => {
    props.plan.annualOnly = true;
    props.selectedBillingFrequency = 'NOT_ANNUAL';

    elem = shallow(<PlanFeatureItem {...props} />);
    expect(elem.find('span').text()).toBe('—');
  });
});
