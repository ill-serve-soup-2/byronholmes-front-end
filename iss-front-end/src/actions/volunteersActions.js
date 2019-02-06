import axios from 'axios';


export const REGISTERING_VOLUNTEER = "REGISTERING_VOLUNTEER"
export const REGISTER_VOLUNTEER_SUCCESS = "REGISTER_VOLUNTEER_SUCCESS"
export const REGISTER_VOLUNTEER_FAILURE = "REGISTER_VOLUNTEER_FAILURE"
export const LOGGING_IN = "LOGGING_IN"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"
export const FETCHING = "FETCHING"
export const FETCH_LOCATIONS_SUCCESS = "FETCH_LOCATIONS_SUCCESS"
export const FETCH_LOCATIONS_FAILURE = "FETCH_LOCATIONS_FAILURE"

export const registerVolunteer = (volunteer) =>{
  const promise = axios.post(`https://ill-serve-soup2-db.herokuapp.com/api/volunteers/register`, volunteer)
  return dispatch =>{
    dispatch({type:REGISTERING_VOLUNTEER})
    promise
      .then(response=>{
        dispatch({type:REGISTER_VOLUNTEER_SUCCESS })
      })
      .catch(err=>{
        dispatch({type:REGISTER_VOLUNTEER_FAILURE})
      })
  }
}

export const loginVolunteer = (credentials) =>{
  const promise = axios.post(`https://ill-serve-soup2-db.herokuapp.com/api/volunteers/login`,credentials)
  return dispatch =>{
    dispatch({type:LOGGING_IN})
    promise
      .then(response=>{
        dispatch({type:LOGIN_SUCCESS})
      })
      .catch(err=>{
        dispatch({type:LOGIN_FAILURE})
      })
  }
}

export const findVolunteerPlaces = ()=>{
  const promise = axios.get(`https://ill-serve-soup2-db.herokuapp.com/api/locations`)
  return dispatch =>{
  dispatch({type:FETCHING})
  promise
    .then(response=>{
      dispatch({type:FETCH_LOCATIONS_SUCCESS})
    })
    .catch(err=>{
      dispatch({type:FETCH_LOCATIONS_FAILURE})
    })
}}
