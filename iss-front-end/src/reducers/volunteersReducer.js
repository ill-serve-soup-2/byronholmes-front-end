import {REGISTERING_VOLUNTEER, REGISTER_VOLUNTEER_SUCCESS, REGISTER_VOLUNTEER_FAILURE
  ,LOGGING_IN, LOGIN_SUCCESS, LOGIN_FAILURE,FETCHING, FETCH_VOLUNTEERS_SUCCESS,
   FETCH_VOLUNTEERS_FAILURE } from '../actions/volunteersActions'

const initialState = {
  registering: false,
  error:null,
  loggingIn: false,
  loginInfo: false,
  registration: null,
  isLoggedIn: null,
  fetching: false,
  foundVolunteers: false,
  volunteers: []
}


export default (state = initialState, action) =>{
  switch(action.type){
    case REGISTERING_VOLUNTEER:
      return { registering:true}
    case REGISTER_VOLUNTEER_SUCCESS:
      return {registering:false, registration: action.payload}
    case REGISTER_VOLUNTEER_FAILURE:
      return {registering: false, error: "Could not register user"}
    case LOGGING_IN:
      return {loggingIn:true }
    case LOGIN_SUCCESS:
      return {loggingIn: false, loginInfo: action.payload}
    case LOGIN_FAILURE:
      return { loggingIn: true, error: "Error logging in."}
    case FETCHING:
      return {fetching: true}
    case FETCH_VOLUNTEERS_SUCCESS:
      return {fetching: false, foundVolunteers: true, volunteers: action.payload }
    case FETCH_VOLUNTEERS_FAILURE:
      return {fetching: false, error: 'Error fetching volunteers'}
    default:
      return state
  }
}
