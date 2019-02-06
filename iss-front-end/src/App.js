import React, { Component } from 'react';
import Login from './components/LogIn'
import Register from './components/Register'
import Inventory from './components/Inventory'
import LocationGrab from './components/LocationGrab'
import DisplayInventory from './components/DisplayInventory'
import Authenticate from './components/Authenticate'
import VolunteerRegister from './components/VolunteerRegister'
import VolunteersLogin from './components/VolunteersLogin'
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">

        <Route path ="/register" component = {Register}/>
        <Route path = "/display" component = {DisplayInventory} />
        <Route path = "/inventory" component = {Inventory} />
        <Route path = "/locations" component = {LocationGrab} />
        <Route path = "/volunteerRegister" component = {VolunteerRegister} />
        <Route path = "/volunteerLogin" component = {VolunteersLogin} />
      </div>
    );
  }
}

const WrappedComponent = Authenticate(App)

export default WrappedComponent;
