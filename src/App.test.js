/* eslint-disable testing-library/await-async-query */
import React from 'react';
import App from './App';
import { mount } from 'enzyme'
import { findByTestAttr, checkProps } from '../test/testUtils'

import  { getSecretWord as mockGetSecretWord } from './actions';
jest.mock('./actions')

//Factory function to create  a shallow wrapper for app component
const setup = () => mount(<App />)

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent).toHaveLength(1)
})

describe('get secret word', () =>{
  
  beforeEach( () => {
    mockGetSecretWord.mockClear();
  })

  test('get secret word on app mount', () =>{
    const wrapper = setup();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1)
  })
  
  test('get secret word doesnot run on update', () =>{
    const wrapper = setup();
    mockGetSecretWord.mockClear();

    wrapper.setProps();

    expect(mockGetSecretWord).toHaveBeenCalledTimes(0)
  })
}) 