import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginVolunteer } from '../actions/volunteersActions'
import { BrowserRouter } from 'react-router-dom'
import { Redirect } from 'react-router'
let user = {"username": "", "password": ""};

class LogIn extends Component{
  constructor(){
    super()

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
    return(  <div>
              <h2>Volunteer Log In</h2>
              <form onSubmit = {this.logIn}>
                <input name = "username" onChange = {this.getInfo}  />
                <input name = "password" onChange = {this.getInfo}  />
                <input type = "submit" value = "Login" />
              </form>

    </div>  );


  }
}

const mapStateToProps = state => {
  return{
    loginInfo: state.volunteers.loginInfo,
    loggingIn: state.volunteers.loggingIn,
    error: state.volunteers.error,

  }
}
export default connect(mapStateToProps,{loginVolunteer})(LogIn);
