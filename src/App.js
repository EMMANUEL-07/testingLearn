import React, {useEffect} from 'react'
import Congrats from './congrats'
import GuessedWords from './guessedWords'
import Input from './input'

import {getSecretWord} from './actions'

//activate global mock



function App() {


  const secretWord = 'party'
  const success = false
  const guessedWord = []


  useEffect(() => {
    getSecretWord() 
  }, [])
  

  return (
    <div className="App" data-test="component-app">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <Input success={success} secretWord={secretWord} />
      <GuessedWords guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]} />
    </div>
  );
}

export default App;
