import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { logIn } from '../actions/userAcctActions'
import './login.css'
import './addform.css'
import { Redirect } from 'react-router'
let user = {"username": "", "password": ""};
let loggedInVar;
class LogIn extends Component{
  constructor(){
    super()
    this.state = {loggedIn:true}
  }
  componentWillMount(){


  }

  logIn = event =>{
    console.log('this.login')
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
    console.log('localstorage')

    console.log(this.state.loggedIn)
    return(
    

            (<div className = "form-container-wrapper">
              <div className = "login-form-container">
                  <div className = "form-header">
                    <h3>Enter Your Credentials</h3>
                  </div>
                  <div className = "form">
                    <form className = "form-form" onSubmit = {this.logIn}>
                      <input onChange = {this.getInfo} className = "text-input" name = "username" placeholder="Enter username..." />
                      <input type="password" onChange = {this.getInfo} className = "text-input" name = "password" placeholder="Enter password..." />
                      <input type = "submit" className = "submit-form" value = "Login" />
                    </form>
                  </div>
              </div>
            </div>)

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
