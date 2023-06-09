import React, { Component } from 'react'
import Routes from '../routes/Routes';

export class Flow extends Component {
    componentDidMount(){
        if(!window.location.href.includes('/login')){
            this.props.validateToken()
        }
    }
  render() {
    let { userDetails } = this.props ;
    console.log(userDetails)
    return (
      <div className='routesContainer'>
        {userDetails && userDetails.isLoggedIn == false && <div className='unauthorized'>Not authorizesd</div> }
        {(window.location.href.includes('/login') || (userDetails && userDetails.isLoggedIn)) && <Routes /> }
      </div>
    )
  }
}

export default Flow