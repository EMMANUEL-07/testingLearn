/* eslint-disable testing-library/await-async-query */
import React from 'react';
import Input from './input';
import { shallow } from 'enzyme'
import { findByTestAttr, checkProps } from '../test/testUtils'

/* const mockSetCurrentGuess = jest.fn();
jest.mock('react', () => ({
   ...jest.requireActual('react'),
   useState: (initialState) => [initialState, mockSetCurrentGuess] 
}))
 */

const defaultProps = {

}

//Factory function to create  a shallow wrapper for app component
const setup = ( success=false, secretWord = 'party') => {
   return shallow(<Input success={success} secretWord={secretWord} />)
}

describe('render', () => {

   describe('success is true', () => {


      let wrapper;

      beforeEach(() => {
         wrapper =setup(true)
      })

      test('renders wihout error', () => {
         const component = findByTestAttr(wrapper, "component-input")
         expect(component.length).toBe(1)
      })
      
      test('no input box', () => {
         const component = findByTestAttr(wrapper, "input-box")
         expect(component.exists()).toBe(false)
      })
      
      test('no submit button', () => {
         const component = findByTestAttr(wrapper, "submit-button")
         expect(component.exists()).toBe(false)
      })

   })

   describe('success is false', () => {

      let wrapper;

      beforeEach(() => {
         wrapper =setup(false)
      })

      test('renders wihout error', () => {
         const component = findByTestAttr(wrapper, "component-input")
         expect(component.length).toBe(1)
      })
      
      test('no input box', () => {
         const component = findByTestAttr(wrapper, "input-box")
         expect(component.exists()).toBe(true)
      })
      
      test('no submit button', () => {
         const component = findByTestAttr(wrapper, "submit-button")
         expect(component.exists()).toBe(true)
      })

   })

})

test('no error on correct props', () => {
   checkProps(Input, defaultProps)
});




test('doesnt throw wrning wih expeced props', () => {
   checkProps(Input, { secretWord: 'party' })
})


describe('state controlled input field', () => {

   let mockSetCurrentGuess = jest.fn();
   let wrapper;
   let orignalUseState;

   beforeEach(() => {
      mockSetCurrentGuess.mockClear();
      orignalUseState = React.useState;
      React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
      wrapper = setup();
   })

   afterEach(() => {
      React.useState = orignalUseState
   })

   test('state updates with input val on change', () => {

      const inputBox = findByTestAttr(wrapper, "input-box")

      const mockEvent = { target: { value: 'train' } };
      inputBox.simulate('change', mockEvent);

      expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')
   })

   test('field is cleared upon submit click', () => {

      const submitButton = findByTestAttr(wrapper, "submit-button")

      submitButton.simulate('click', { preventDefault() { } });
      expect(mockSetCurrentGuess).toHaveBeenCalledWith('')
   })
})
