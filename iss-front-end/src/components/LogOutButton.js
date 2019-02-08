import React from 'react'
import Login from './LogIn'
import './logout-button.css'
import { compose } from 'redux'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import { logOut } from '../actions/userAcctActions'



  class LogOutButton extends React.Component {
    constructor(){
      super();
      this.state={
        loggedOut: false
      }
    }
    render(){  return (
        <div>
          {this.state.loggedOut ? <Login /> :         <div onClick = {this.props.logOut}>Log Out</div>
}
        </div>

      )}

}


const mapStateToProps = state=>{
  return {loggedOut: state.userAccounts.loginInfo}
}

export default connect(mapStateToProps, {logOut})(LogOutButton)
