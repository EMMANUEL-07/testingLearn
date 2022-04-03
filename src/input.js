import React from 'react'
import PropTypes from 'prop-types'

const Input = ({success, secretWord}) => {

   const [currentGuess, setCurrentGuess] = React.useState("")

   if(success){
      return (<div data-test="component-input"></div>)
   }

   return (
      <div data-test="component-input">
         <form>
            <input data-test='input-box' type='text' placeholder='enter guess' value={currentGuess} onChange={(e) => setCurrentGuess(e.target.value)} />
            <button 
               data-test='submit-button' 
               type='submit' 
               onClick={(e) => {
                  e.preventDefault();
                  setCurrentGuess('')
               }}
            >
               Submit
            </button>
         </form>
      </div>
   )
}

Input.propTypes = {
   secretWord: PropTypes.string
}

export default Input;
