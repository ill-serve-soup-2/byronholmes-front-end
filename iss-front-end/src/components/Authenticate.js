import React from 'react'
import Login from './LogIn'
import Register from './Register'
import { connect } from 'react-redux'


const Authenticate = (App) =>

  class extends React.Component{
    constructor(){
      super();
      this.state={
        loggedIn: false
      }
    }
    componentDidMount(){
      console.log('in Authenticate')
      this.setState({loggedIn: localStorage.getItem("token")})

      this.updateWithToken();
    }
    componentDidUpdate(){

    }

    updateWithToken = ()=>{
      try{}
      catch{}
      console.log('update with token')
      if(localStorage.hasOwnProperty("token")){
        
        this.setState({loggedIn: localStorage.getItem("token")})
      }
    }
    render(){
      return(
        <div>
        {this.state.loggedIn ?   <App /> :
        <div>  <Login /><Register/></div> }</div>)
      }
    }



export default Authenticate;
