import React from 'react'
import Authenticate from './Authenticate'
import {Route} from 'react-router-dom'


const Route = () =>{
  return(
    <Route path ="/register" component = {Register}/>
    <Route path = "/display" component = {DisplayInventory} />
    <Route path = "/inventory" component = {Inventory} />
    <Route path = "/locations" component = {LocationGrab} />

  )
}
