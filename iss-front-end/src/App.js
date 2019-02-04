import React, { Component } from 'react';
import Login from './components/LogIn'
import Register from './components/Register'
import Inventory from './components/Inventory'
import LocationGrab from './components/LocationGrab'
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <Register />
        <Inventory />
        <LocationGrab />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    stuff: state
  }
}
export default connect(mapStateToProps, {})(App);
