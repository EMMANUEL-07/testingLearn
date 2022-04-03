/* eslint-disable testing-library/await-async-query */
import React from 'react';
import GuessedWords from './guessedWords';
import { shallow } from 'enzyme'
import { findByTestAttr, checkProps } from '../test/testUtils'


const defaultProps = {
   guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }]
}

//Factory function to create  a shallow wrapper for app component
const setup = (props = {}) => {
   const setupProps = { ...defaultProps, ...props }
   return shallow(<GuessedWords {...setupProps} />)
}

test('no error on correct props', () => {
   checkProps(GuessedWords, defaultProps)
});


describe('if there are no words guessed', () => {

   let wrapper;

   beforeEach(() => {
      wrapper = setup({ guessedWords: [] })
   })

   test('renders wihout error', () => {
      const component = findByTestAttr(wrapper, "component-guessedWords")
      expect(component.length).toBe(1)
   })

   test('renders instructions to guess word error', () => {
      const component = findByTestAttr(wrapper, "component-guessedWords")
   })
})

describe('if there are words guessed', () => {

   let wrapper;

   let guessedWords = [
      {guessedWord: 'train', letterMatchCount: 3},
      {guessedWord: 'agile', letterMatchCount: 1},
      {guessedWord: 'party', letterMatchCount: 5},
   ]

   beforeEach(() => {
      wrapper = setup({ guessedWords})
   })


   test('renders without error', () => {
      const component = findByTestAttr(wrapper, "component-guessedWords")
      expect(component.length).toBe(1)
   }) 

   test('render guessed words section', () => {
      const guessedWordNode = findByTestAttr(wrapper, "guessed-words")
      expect(guessedWordNode.length).toBe(1)
   })

   test('correct number of guessed words', () => {
      const guessedWordNodes = findByTestAttr(wrapper, "guessed-word")
      expect(guessedWordNodes.length).toBe(guessedWords.length)
   }) 
})