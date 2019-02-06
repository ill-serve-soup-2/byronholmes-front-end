import React from 'react'
import Login from './LogIn'
import Register from './Register'
let loggedInVar;
const Authenticate = (App) =>

  class extends React.Component{
    constructor(){
      super();
      this.state={
        loggedIn: loggedInVar
      }
    }
    componentDidMount(){
      console.log('component did mount in auth')

      if(localStorage.getItem("token") !== null){
        this.setState({loggedIn: true}, ()=>{console.log(this.state.loggedIn)})
      }

    }
    
    checkIfLoggedIn = ()=>{
      if(localStorage.getItem("token") !== null){
        this.setState({loggedIn: true})
      }
    }
    render(){

      if(this.state.loggedIn){

        return <App />
      }
      else{
        return (<div><Login /> <Register /></div>
)
      }
    }
  }

export default Authenticate;
