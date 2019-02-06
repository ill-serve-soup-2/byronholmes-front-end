import React from 'react'
import Login from './LogIn'
import Register from './Register'

const Authenticate = (App) =>

  class extends React.Component{
    constructor(){
      super();
      this.state={
        loggedIn: false
      }
    }
    componentDidMount(){
      this.setState({loggedIn: localStorage.getItem("token")})
    }
    render(){
      if(this.state.loggedIn){
        return <App />
      }
      else{
        return (<div><Login />        <Register/></div>
)
      }
    }
  }

export default Authenticate;
