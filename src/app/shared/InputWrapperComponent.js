import React from 'react'
import './InputWrapperComponent.scss'
function InputWrapperComponent(props) {
    let {iconUrl , placeholder , value , onChange ,onFieldBlur , inputType , name} = props
  return (
    <div className='input-box-border'>
       <div className='icon-box'>
        <img src = {iconUrl}></img>
       </div>
       <div className='input-box'>
            <input
            type = {inputType}
            onBlur={e => onFieldBlur && onFieldBlur(e.target.value)}
            onChange = {e => console.log(e.target.value) }
            placeholder={placeholder}
            name = {name}
            />
       </div>
    </div>
  )
}

export default InputWrapperComponent