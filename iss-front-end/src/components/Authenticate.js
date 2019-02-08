import React from 'react'
import Login from './LogIn'
import Register from'./Register'
import { compose } from 'redux'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'

const Authenticate = (App) =>
  class extends React.Component{
    constructor(){
      super();
      this.state={
        loggedIn: !(localStorage.getItem("token")===null)
      }
    }
   render(){
        return(
          <div>
          {this.state.loggedIn ? <App /> : <div><Login /><Register /></div>}
      </div>)
    }}
export default compose(withRouter, connect(state=>state.global, {}),Authenticate);
