import React from 'react';
import { shallow, mount } from 'enzyme';

import Input from '../../../atoms/Input';
import Button from '../../../atoms/Button';
import Select from '../../../molecules/Select';
import Option from '../../../atoms/Option';
import UrlOptionsDisplayLabel from '../../PublishOptionsModal/UrlOptionsDisplayLabel';

import styles from '../UrlEdit.css';
import UrlEdit from '../UrlEdit';

describe('Molecules :: UrlEdit', () => {
  let props;

  beforeEach(() => {
    props = {
      url: 'https://neat.neat',
      onChange: jest.fn(),
    };
  });

  describe('View mode', () => {
    it('should render a UrlOptionsDisplayLabel with default values', () => {
      const wrapper = shallow(<UrlEdit {...props} />);
      const urlLabel = wrapper.find(UrlOptionsDisplayLabel);

      expect(urlLabel.length).toBe(1);

      const urlLabelProps = urlLabel.props();
      expect(urlLabelProps.editOnClick).not.toBeNull();
      expect(urlLabelProps.editOnClick).toEqual(wrapper.instance().handleEditOnClick);

      expect(urlLabelProps.urlText).toEqual('https://neat.neat');
      expect(urlLabelProps.urlLink).toEqual('https://neat.neat');
    });

    it('should use the url props protocol', () => {
      props.url = 'crazy://hi.there';
      const wrapper = shallow(<UrlEdit {...props} />);

      expect(wrapper.state().protocol).toEqual('crazy://');
    });

    it('should default to https:// if no protocol is found', () => {
      props.url = 'hi.there';
      const wrapper = shallow(<UrlEdit {...props} />);

      expect(wrapper.state().protocol).toEqual('https://');
    });

    it('should strip off the protocol for the editedUrl', () => {
      props.url = 'crazy://hi.there';
      const wrapper = shallow(<UrlEdit {...props} />);

      expect(wrapper.state().editedUrl).toEqual('hi.there');
    });

    it('should navigate the browser to the url', () => {
      const wrapper = shallow(<UrlEdit {...props} />);
      window.open = jest.fn();

      wrapper.instance().handleViewOnClick();
      expect(window.open).toBeCalledWith(props.url);
    });
  });

  it('should go into edit mode if there is no URL passed in', () => {
    props.url = undefined;
    const wrapper = shallow(<UrlEdit {...props} />);

    expect(wrapper.state().isEditing).toBeTruthy();
  });

  it('should go into edit mode if there hasError is passed', () => {
    props.url = undefined;
    props.hasError = true;
    const wrapper = shallow(<UrlEdit {...props} />);

    expect(wrapper.state().isEditing).toBeTruthy();
  });

  describe('Edit mode', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<UrlEdit {...props} />);
      wrapper.instance().editOnClick();
      wrapper.update();
    });

    it('should not show the UrlOptionsDiplayLabel when we go into edit mode', () => {
      const urlLabel = wrapper.find(UrlOptionsDisplayLabel);
      expect(urlLabel.length).toBe(0);
    });

    it('should render an input and a save button when in edit mode', () => {
      const inputWrapper = wrapper.find(Input);
      expect(inputWrapper.length).toBe(1);

      const saveButtonWrapper = wrapper.find(Button);
      expect(saveButtonWrapper.length).toBe(2); // Save AND cancel
    });

    it('should render an input with subContent when hasError is true', () => {
      props.subContent = 'Show subcontent';
      const subContent = mount(<UrlEdit {...props} />);

      subContent.setProps({ hasError: true });

      expect(subContent.find('.inputHelperText').text()).toBe(props.subContent);
    });

    it('should close editing mode when canceled', () => {
      const cancelButton = wrapper.find(Button).at(0);
      cancelButton.simulate('click');

      expect(wrapper.state().isEditing).toBeFalsy();
    });

    it('should reset the editing url to the given url when canceled', () => {
      wrapper.setState({ editedUrl: 'lol.gym' });
      const cancelButton = wrapper.find(Button).at(0);
      cancelButton.simulate('click');

      expect(wrapper.state().editedUrl).toEqual('neat.neat');
    });

    it('should close the editor when the success state is reported', () => {
      const saveButton = wrapper.find(Button).at(1);
      saveButton.simulate('click');

      wrapper.setProps({ isSuccess: true });

      expect(wrapper.state().isEditing).toBeFalsy();
    });

    it('should call the onChange prop to let parent know the URL has changed', () => {
      wrapper.setState({ editedUrl: 'yogabbagabba.tv' });
      const saveButton = wrapper.find(Button).at(1);
      saveButton.simulate('click');

      expect(props.onChange).toBeCalledWith('https://yogabbagabba.tv');
    });

    it('should update the editedUrl when the input changes', () => {
      const fakeEvent = {
        target: {
          value: 'jim!',
        },
      };
      const inputWrapper = wrapper.find(Input);
      inputWrapper.simulate('change', fakeEvent);

      expect(wrapper.state().editedUrl).toEqual(fakeEvent.target.value);
    });

    it('should render a select with http and https options', () => {
      const selectWrapper = wrapper.find(Select);

      expect(selectWrapper.length).toBe(1);
      expect(selectWrapper.props().className).toEqual(styles.urlEditSelect);

      const optionsWrapper = wrapper.find(Option);

      expect(optionsWrapper.length).toBe(2);
      expect(optionsWrapper.at(0).props().selected).toBeTruthy();
      expect(optionsWrapper.at(0).props().value).toEqual('https://');

      expect(optionsWrapper.at(1).props().selected).toBeFalsy();
      expect(optionsWrapper.at(1).props().value).toEqual('http://');
    });

    it('should update the state protocol when the Select changes', () => {
      const selectWrapper = wrapper.find(Select);

      selectWrapper.props().onChange({ id: null, value: 'tcp://' });

      expect(wrapper.state().protocol).toEqual('tcp://');
    });

    it('should revert to the url props protocol on close', () => {
      wrapper.setState({ protocol: 'crazy://', url: 'jim.bo' });
      wrapper.instance().closeEditor();

      expect(wrapper.state().protocol).toEqual('https://');
    });
  });
});
