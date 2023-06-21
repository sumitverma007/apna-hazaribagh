import React from 'react'
import './Login.scss'
import InputWrapperComponent from '../../shared/InputWrapperComponent'
import { loginInputSchema } from '../../shared/Schemas'
// import '../../../i/msgInp.png'
function Login(props) {

  const onFormSubmit = (e) => {
  e.preventDefault();
  console.log(e)
  }
  return (
    <div id='login-container'>
        <div className='login-header'>Login</div>
        <p className='login-title'>Login to your account to continue</p>
        <form 
          name = "login-form"
          onSubmit = {onFormSubmit}>
        {loginInputSchema.map((obj , idx) => {
          return (
            <div key = {idx} >
              <InputWrapperComponent 
              inputType = {obj.inputType}
              placeholder = {obj.placeholder}
              iconUrl = {obj.pngUrl}
              name = {obj.name}
              />
            </div>
          )
        })}
        <span className='forget-password'>Forget Password?</span>
        <div className='submit-inp-form'>
          <button className='submit' type = "submit">LOGIN</button>
        </div>
        </form>
        <div className='new-user' onClick = {() => window.location.href = '/signup'}>Don't have an account? <span className="create">Create One!</span></div>
    </div>
  )
}

export default Login