/* eslint-disable testing-library/await-async-query */
import React from 'react';
import Congrats from './congrats';
import Enzyme, { shallow } from 'enzyme'
import {findByTestAttr, checkProps} from '../test/testUtils'


const defaultProps = {success : false}

//Factory function to create  a shallow wrapper for app component
const setup = (props={}) => {
   const setupProps = {...defaultProps, ...props}    
   return shallow(<Congrats {...setupProps} />)
}

test('renders without error', () => {
  const wrapper = setup({success : false});
  const component = findByTestAttr(wrapper, "component-congrats")
  expect(component.length).toBe(1)
});

test('renders no text when success is false', () => {
   const wrapper = setup({success : false});
   const component = findByTestAttr(wrapper, "component-congrats")
   expect(component.text()).toBe('')
   
});

test('renders non empty congrats message', () => {
   const wrapper = setup({success : true});
   const message = findByTestAttr(wrapper, "congrats-message")
   expect(message.text().length).not.toBe('')
   
});

test('no error on correct props', () => {
   const expectedProps = setup({success:true});
   checkProps(Congrats, expectedProps) 
});