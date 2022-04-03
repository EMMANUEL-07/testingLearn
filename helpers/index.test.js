import { getLetterMatchCount } from './index'

describe('get letter match count', () => {
   
   const secretWord = 'party';
   
   test('no matching letters', () => {
      const letterMatchCount = getLetterMatchCount('bones', secretWord)
      expect(letterMatchCount).toBe(0);
   })
   
   test('3 matching letters', () => {
      const letterMatchCount = getLetterMatchCount('train', secretWord)
      expect(letterMatchCount).toBe(3);
   })
   
   test('duplicate letters in guess', () => {
      const letterMatchCount = getLetterMatchCount('parka', secretWord)
      expect(letterMatchCount).toBe(3);
   })

})