import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getLocations, getLocation, changeLoc,deleteLoc} from '../actions/locationActions'
import './location-table.css'

const LocationTable = props=>{
  const locations =   props.locations.map(location=>{
      return (<div className = "location">
        <div className = "location-name">{location.name}</div>
        <div className = "location-info">
        <div className = "address">{location.streetAddress} {location.city}, {location.state} {location.zipCode}</div>
        <div className = "contact"><span className = "contact-label">phone:</span> {location.phone} <span className = "email-label contact-label">email:</span> {location.email} </div><div>Volunteers Needed Right Now: <span className = "volunteers">{location.volunteersNeeded}</span></div></div>
      </div>)
      })
  return(
    <div className = {props.showTable ? "location-table": "location-table-hidden" }>
      <div className = "location-header"><h1>Locations Near You</h1>  <div className = "close-form-location" onClick = {props.closeForm}></div></div>
        {props.locations.length>0 ? locations : <h2>Sorry, No Volunteer Opportunities in Your Area</h2>}


    </div>

  )
}


export default LocationTable;
