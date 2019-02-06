import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logIn } from '../actions/userAcctActions'
import './login.css'
import { Redirect } from 'react-router-dom'
let user = {"username": "", "password": ""};
let loggedInVar;
class LogIn extends Component{
  constructor(){
    super()
    this.state = {loggedIn:loggedInVar}
  }
  componentWillMount(){
    this.redirectToApp();
  }
  componentWillUpdate(){
    console.log('updating')
    this.redirectToApp()
  }
  redirectToApp = () =>{
    console.log('in redirect app')
    console.log(loggedInVar)
    if(loggedInVar){
      return <Redirect to = "/" />
    }
  }
  logIn = event =>{
    event.preventDefault()
  this.props.logIn(user, this.props.history)

  /*setTimeout(function(){
    localStorage.setItem("token", this.props.loginInfo)
  }, 300)*/

  }
  getInfo = event =>{
    user[event.target.name]  = event.target.value
    console.log(event.target.value)
    console.log(user)
  }

  render() {

    loggedInVar = this.props.loginInfo;
    console.log(this.props.loginInfo)
    return(
       <div className = "total-container">
              {this.redirectToApp()}
                <div className = "login-div">
                  <h2>Log In</h2>
                  <form className = "login-form" onSubmit = {this.logIn}>
                    <input className = "text-input" name = "username" onChange = {this.getInfo} placeholder = "username" />
                    <input className = "text-input" name = "password" onChange = {this.getInfo} placeholder = "password" />
                    <input className = "form-input" type = "submit" value = "Login" />
                  </form>

                </div>
              </div>
     );


  }
}

const mapStateToProps = state => {
  return{
    loginInfo: state.userAccounts.loginInfo,
    loggingIn: state.userAccounts.loggingIn,
    error: state.userAccounts.error,

  }
}
export default connect(mapStateToProps,{logIn})(LogIn);
