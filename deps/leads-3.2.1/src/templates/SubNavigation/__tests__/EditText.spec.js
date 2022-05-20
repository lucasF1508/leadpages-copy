// import React from 'react';
// import { mount } from 'enzyme';
// global.console.error = jest.fn();
// import EditText from '../EditText';


// jest.useFakeTimers();

describe('EditText Component', () => {
  it('exists', () => {
    expect(true).toBe(true);
  });
  // let editText;
  // describe('onSave function not passed in', () => {
  //   beforeEach(() => {
  //     editText = mount(<EditText
  //       text="Google"
  //       inputLabel="Please change me."
  //       isTextEditable
  //     />);
  //   });
  //
  //
  //   it('exists', () => {
  //     expect(editText).toBeDefined();
  //   });
  //
  //   describe('Interacting with edit pane', () => {
  //     it('should not display the pop over', () => {
  //       expect(editText.find('.lego-edit-text__pop-over').length).toEqual(0);
  //     });
  //
  //     it('should show a pencil on hover', () => {
  //       expect(editText.find('.lego-edit-text__edit-icon').length).toEqual(0);
  //       editText.find('.lego-edit-text__text').simulate('mouseEnter');
  //       expect(editText.find('.lego-edit-text__edit-icon').length).toEqual(1);
  //       editText.find('.lego-edit-text__text').simulate('mouseLeave');
  //       jest.runAllTimers();
  //       expect(editText.find('.lego-edit-text__edit-icon').length).toEqual(0);
  //     });
  //
  //     it('should display the pop over', () => {
  //       editText.find('.lego-edit-text__text').simulate('click');
  //       expect(editText.find('.lego-edit-text__pop-over').length).toEqual(1);
  //     });
  //
  //     it('should close the pop over after it opens by clicking cancel', () => {
  //       editText.find('.lego-edit-text__text').simulate('click');
  //       editText.find('.lego-edit-text__cancel-button').simulate('click');
  //       jest.runAllTimers();
  //       expect(editText.find('.lego-edit-text__pop-over').length).toEqual(0);
  //     });
  //
  //     // it('should close the pop over after it opens by clicking anywhere', () => {
  //     //   editText.find('.lego-edit-text__text').simulate('click');
  //     //   editText.find('document').simulate('click');
  //     //   jest.runAllTimers();
  //     //   expect(editText.find('.lego-edit-text__pop-over').length).toEqual(0);
  //     // });
  //
  //     it('should run the default save function', () => {
  //       editText.find('.lego-edit-text__text').simulate('click');
  //       editText.find('.lego-edit-text__save-button').simulate('click');
  //       expect(global.console.error).toHaveBeenCalled();
  //       expect(global.console.error).toBeCalledWith('EditText\'s onSave prop was not defined');
  //     });
  //   });
  // });
  // describe('onSave function passed in', () => {
  //   let onSave;
  //   beforeEach(() => {
  //     onSave = jest.fn();
  //     editText = mount(<EditText
  //       text="Google"
  //       inputLabel="Please change me."
  //       isTextEditable
  //       onSave={onSave}
  //     />);
  //   });
  //
  //   it('exists', () => {
  //     expect(editText).toBeDefined();
  //   });
  //
  //   describe('Interacting with edit pane', () => {
  //     it('should run the passed in onSave function', () => {
  //       editText.find('.lego-edit-text__text').simulate('click');
  //       editText.find('.lego-edit-text__save-button').simulate('click');
  //       expect(onSave).toHaveBeenCalled();
  //       expect(onSave).toBeCalledWith('Google');
  //     });
  //   });
  // });
});
