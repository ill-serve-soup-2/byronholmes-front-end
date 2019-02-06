import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logIn } from '../actions/userAcctActions'
import './login.css'
let user = {"username": "", "password": ""};


class LogIn extends Component{
  constructor(){
    super()
    this.state = {}
  }
  componentWillUpdate(){

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
    //console.log(this.props.loginInfo)
    return(   <div className = "total-container">
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
