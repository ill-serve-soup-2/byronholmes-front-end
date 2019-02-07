import React, { Component } from 'react';
import Register from './components/Register'
import Inventory from './components/Inventory'
import LocationGrab from './components/LocationGrab'
import DisplayInventory from './components/DisplayInventory'
import Authenticate from './components/Authenticate'
import VolunteerRegister from './components/VolunteerRegister'
import VolunteersLogin from './components/VolunteersLogin'
import LocationFinder from './components/LocationFinder'
import './App.css';
import { Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">


        <Route path = "/display" component = {DisplayInventory} />
        <Route path = "/inventory" component = {Inventory} />
        <Route path = "/locations" component = {LocationFinder} />
        <Route path = "/volunteerRegister" component = {VolunteerRegister} />
        <Route path = "/volunteerLogin" component = {VolunteersLogin} />

      </div>
    );
  }
}

const WrappedComponent = Authenticate(App)

export default WrappedComponent;
