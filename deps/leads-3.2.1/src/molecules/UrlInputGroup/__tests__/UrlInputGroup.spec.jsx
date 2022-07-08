import React from 'react';
import { mount } from 'enzyme';

import UrlInputGroup, { selectors } from '../UrlInputGroup';

const getQa = selector => ({ 'data-qa-selector': selector });

describe('urlInputGroup', () => {
  const options = [
    {
      name: 'https://mylpdomain.com/',
      id: 'mylpdomain.com'
    },
    {
      name: 'https://mycustomdomain.com/',
      id: 'mycustomdomain.com'
    }
  ];

  let props;
  let urlInputGroup;

  beforeEach(() => {
    props = {
      options,
      getOptionDisplay: jest.fn(opt => opt.name),
      getOptionValue: jest.fn(opt => opt.id),
      onUpdateSelect: jest.fn(),
      selectValue: options[0].id,
      allowInputSelection: false,
      className: '',
      selectLabel: 'Select Label',
      selectError: 'Select Error'
    };
  });

  describe('select', () => {
    beforeEach(() => {
      urlInputGroup = mount(<UrlInputGroup {...props} />);
    });

    it('should render a select label', () => {
      expect(urlInputGroup.find(getQa(selectors.SELECT_LABEL)).text()).toEqual(
        props.selectLabel
      );
    });

    it('should render a select error', () => {
      expect(urlInputGroup.find(getQa(selectors.SELECT_ERROR)).text()).toEqual(
        props.selectError
      );
    });
  });

  describe('multiple select options', () => {
    let select;

    beforeEach(() => {
      urlInputGroup = mount(<UrlInputGroup {...props} />);
      select = urlInputGroup.find(getQa(selectors.MULTI_OPTION_SELECT));
    });

    it('should render a select containing 2 options', () => {
      expect(select).toHaveLength(1);

      const opts = select.find('Option');

      expect(opts.at(0).text()).toEqual(options[0].name);
      expect(opts.at(0).props().value).toEqual(options[0].id);

      expect(opts.at(1).text()).toEqual(options[1].name);
      expect(opts.at(1).props().value).toEqual(options[1].id);
    });

    it('should call onUpdateSelect when an option is clicked', () => {
      select
        .find('Option')
        .at(1)
        .simulate('click');

      expect(props.onUpdateSelect).toHaveBeenCalledWith(options[1].id);
    });
  });

  describe('single option', () => {
    let select;

    beforeEach(() => {
      urlInputGroup = mount(
        <UrlInputGroup {...props} options={[options[0]]} />
      );
      select = urlInputGroup.find(getQa(selectors.SINGLE_OPTION_SELECT));
    });

    it('should display the single selection', () => {
      expect(select).toHaveLength(1);
      expect(select.text()).toEqual(options[0].name);
    });
  });

  describe('no input field', () => {
    it('should not display an input field if not enabled', () => {
      urlInputGroup = mount(<UrlInputGroup {...props} />);
      expect(urlInputGroup.find(getQa(selectors.INPUT))).toHaveLength(0);
    });
  });

  describe('input field', () => {
    let inputProps;
    let input;

    beforeEach(() => {
      inputProps = {
        allowInputSelection: true,
        inputValue: 'my-slug',
        onUpdateInput: jest.fn(),
        inputPlaceholder: 'my-input-here',
        inputLabel: 'Input Label',
        inputError: 'Input Error'
      };
      urlInputGroup = mount(<UrlInputGroup {...props} {...inputProps} />);
      input = urlInputGroup.find(getQa(selectors.INPUT));
    });

    it('should render an input label', () => {
      expect(urlInputGroup.find(getQa(selectors.INPUT_LABEL)).text()).toEqual(
        inputProps.inputLabel
      );
    });

    it('should render an input error', () => {
      expect(urlInputGroup.find(getQa(selectors.INPUT_ERROR)).text()).toEqual(
        inputProps.inputError
      );
    });

    it('should render an input with the input value', () => {
      expect(input.at(1).props().value).toEqual(inputProps.inputValue);
    });

    it('should call onUpdateInput on change', () => {
      input.at(1).simulate('change', { target: { value: 'new-slug' } });
      expect(inputProps.onUpdateInput).toHaveBeenCalledWith('new-slug');
    });
  });

  describe('copy link button', () => {
    it('should not render if allowCopyLink is false', () => {
      urlInputGroup = mount(<UrlInputGroup {...props} />);
      expect(urlInputGroup.find(getQa(selectors.COPY_LINK))).toHaveLength(0);
    });

    it('should render with a link to copy if allowCopyLink is true', () => {
      urlInputGroup = mount(<UrlInputGroup {...props} allowCopyLink />);
      expect(
        urlInputGroup.find(getQa(selectors.COPY_LINK)).props().linkToCopy
      ).toEqual(options[0].name);
    });

    it('should append any input value to the linkToCopy', () => {
      urlInputGroup = mount(
        <UrlInputGroup {...props} inputValue="/my-slug" allowCopyLink />
      );
      expect(
        urlInputGroup.find(getQa(selectors.COPY_LINK)).props().linkToCopy
      ).toEqual(`${options[0].name}/my-slug`);
    });
  });
});
