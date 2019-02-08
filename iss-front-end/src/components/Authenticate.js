import React from 'react'
import Login from './LogIn'
import Register from './Register'
import { compose } from 'redux'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
let loggedInVar;
const Authenticate = (App) =>

  class extends React.Component{
    constructor(){
      super();
      this.state={
        loggedIn: !(localStorage.getItem("token")===null)
      }
    }
    componentWillMount(){

    }
   render(){
        console.log('rendering auth')
        console.log(this.props.loginInfo)
        return(
          <div>
          {this.state.loggedIn ? <App /> : <div><Login /></div>}
      </div>)


    }}


export default compose(withRouter, connect(state=>state.global, {}),Authenticate);


/*    componentDidMount(){
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
    }*/
