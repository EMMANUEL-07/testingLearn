/* eslint-disable testing-library/await-async-query */
import React from 'react';
import {mount} from 'enzyme';

import App from './App';
import { findByTestAttr, checkProps } from '../test/testUtils'

const setup = (state = {}) => {
   const  wrapper = mount(<App {...state} />)

   //add value to input box
   const inputBox = findByTestAttr(wrapper, 'input-box');
   inputBox.simulate('change',  {target: {value : 'train'}})

   //simulate butto click
   const submitButton = findByTestAttr(wrapper, 'submit-button');
   submitButton.simulate('click',  { preventDefault() {}})


   return wrapper;

} 

/* describe('invalid', () => {
   test.todo('guessedWords table doesnt had another row');
}) */

describe('no words guessed', () => {

   let wrapper;

   beforeEach(() => {
      wrapper = setup({
         secretWord: 'party',
         success: false,
         guessedWord: []
      })
   })

   test('create a guess words table with 1 row', () => {
      const guessedWordRows = findByTestAttr(wrapper, 'guessed-word')
      expect(guessedWordRows).toHaveLength(1)
   })

})

describe.skip('some words guessed', () => {
   let wrapper;

   beforeEach(() => {
      wrapper = setup({
         secretWord: 'party',
         success: false,
         guessedWord: [{ guessedWord: 'agile', letterMatchCount: 1 }]
      })
   })

   test('create a guess words table with some row', () => {
      const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word')
      expect(guessedWordNodes).toHaveLength(2)
   })

   test('no congrats shown', () => {
      const congrats = findByTestAttr(wrapper, 'component-congrats')
      expect(congrats).toHaveLength(0)
   })
})

describe.skip('secret word guessed', () => {
   let wrapper;

   beforeEach(() => {
      wrapper = setup({
         secretWord: 'party',
         success: true,
         guessedWord: [ { guessedWord: 'agile', letterMatchCount: 1 }]
      })

      const inputBox = findByTestAttr(wrapper, 'input-box')
      const mockEvent = {target: {value: 'party'}}
      inputBox.simulate('change', mockEvent)
      
      const submitButton = findByTestAttr(wrapper, 'submit-button')
      submitButton.simulate('click',  { preventDefault() {}})

   })


   test('add row to guessed words table', () => {
      const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word')
      expect(guessedWordNodes).toHaveLength(3)
   })
   
   test('congrats shown', () => {
      const congrats = findByTestAttr(wrapper, 'component-congrats')
      expect(congrats).toBeGreaterThan(0)
   })
   
   test('no input contents shown', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box')
      expect(inputBox.exists()).toBe(false)
      
      const submitButton = findByTestAttr(wrapper, 'submit-button')
      expect(submitButton.exists()).toBe(false)
   })
})