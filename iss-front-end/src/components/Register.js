import React, { Component } from 'react'
import { connect } from 'react-redux'
import { register } from '../actions/userAcctActions'
import './register.css'

class Register extends Component{
  constructor(props){
    super(props)
    this.state = {
      "username": "",
      "password": "",
      "name": "",
      "role": "",
      "email": "",
      "phone": ""
    }
  }
  register = event =>{
      event.preventDefault();
      this.props.register(this.state)
  }
  getInfo = event =>{
    this.setState({[event.target.name]: event.target.value})
  }
  render(){
    return(
      <div className="regFormContainer">
        <h2>Register</h2>
        <form className="registerForm" onSubmit = {this.register}>
          <input type="text" name = "username" onChange = {this.getInfo} value = {this.state.username} placeholder='Enter Username...' />
          <input type="password" name = "password" onChange = {this.getInfo} value = {this.state.password} placeholder='Enter Password...'/>
          <input name = "name" onChange = {this.getInfo} value = {this.state.name} placeholder='Enter Name...'/>
          <input name = "role" onChange = {this.getInfo} value = {this.state.role} placeholder='Enter Kitchen Role...'/>
          <input name = "email" type = "email" onChange = {this.getInfo} value = {this.state.email} placeholder='Enter Email...'/>
          <input name = "phone" onChange = {this.getInfo} value = {this.state.phone} placeholder='Enter Phone Number...'/>
          <input type = "submit" value = "Register" className="regButton"/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    stuff: []
  }
}

export default connect(mapStateToProps, {register})(Register)
