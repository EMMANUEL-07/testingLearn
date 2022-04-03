/* eslint-disable testing-library/await-async-query */
import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'


Enzyme.configure({ adapter: new EnzymeAdapter() });

//Factory function to create  a shallow wrapper for app component
const setup = () => shallow(<App />)

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

test('renders non empty component without crashing', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app")
  expect(appComponent.length).toBe(1)

});

test('renders increment button', () => {
  const wrapper = setup();
  const buttonComponent = findByTestAttr(wrapper, "increment-button")
  expect(buttonComponent.length).toBe(1)
})

test('renders cointer display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display")
  expect(counterDisplay.length).toBe(1)
})

test('counter starts at zero', () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, "count").text()
  expect(count).toBe("0")
})

test('clicking button increments counter display', () => {
  const wrapper = setup();
  const buttonComponent = findByTestAttr(wrapper, "increment-button")

  buttonComponent.simulate('click');

  const count = findByTestAttr(wrapper, "count").text()
  expect(count).toBe("1")

})