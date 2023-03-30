import React, { useState } from 'react'
import SignupForm from './SignupForm'
import SignupFormSuccess from './SignupFormSuccess';

const Form = () => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitForm = () => {
    setFormIsSubmitted(true);
  }
  return (
    <div>
        { !formIsSubmitted ? <SignupForm submitForm={submitForm} /> : <SignupFormSuccess submitForm={submitForm} /> }
    </div>
  )
}

export default Form