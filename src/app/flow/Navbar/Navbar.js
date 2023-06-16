import React from 'react'
import { navbarSchema } from './schema'
import './Navbar.scss'
function Navbar(props) {
  return (
    <div className='navbar-container'>
        <div className='navbar'>
            {navbarSchema.map((obj ,idx) => {
                return (
                    <div className='nabarObj' onClick={() => window.location.href = obj.url}>
                        <img src = {obj.icon} />
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Navbar