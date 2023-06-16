import React from 'react'
import './SignUp.scss'
import { SignupInputSchema } from '../../shared/Schemas';
import InputWrapperComponent from '../../shared/InputWrapperComponent';
function SignUp() {

    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(e)
    }
  return (
    <div id = "signup-container">
        <div className='signup-header'>Sign Up</div>
        <p className='sinup-title'>Welcome to अपना हज़ारीबाग़ , SignUp to continue</p>
        <form 
         name = "signup-form"
         onSubmit={onFormSubmit}>
            {SignupInputSchema.map((obj , idx) => {
                return (
                    <div key = {idx}>
                        <InputWrapperComponent 
                        inputType = {obj.inputType}
                        placeholder = {obj.placeholder}
                        iconUrl = {obj.pngUrl}
                        name = {obj.name}
                        />
                    </div>
                )
            })}
             <div className='submit-inp-form'>
          <button className='submit' type = "submit">Sign Up</button>
        </div>
         </form>
         <div className='new-user' onClick = {() => window.location.href = '/login'}>Already have an account? <span className="create">Login</span></div>
    </div>
  )
}

export default SignUp