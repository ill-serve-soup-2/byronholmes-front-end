import {REGISTERING_VOLUNTEER, REGISTER_VOLUNTEER_SUCCESS, REGISTER_VOLUNTEER_FAILURE
  ,LOGGING_IN, LOGIN_SUCCESS, LOGIN_FAILURE,FETCHING, FETCH_LOCATIONS_SUCCESS,
   FETCH_LOCATIONS_FAILURE } from '../actions/volunteersActions'

const initialState = {

}


export default (state = initialState, action) =>{
  switch(action.type){
    case REGISTERING_VOLUNTEER:
      return {}
    case REGISTER_VOLUNTEER_SUCCESS:
      return {}
    case REGISTER_VOLUNTEER_FAILURE:
      return {}
    case LOGGING_IN:
      return {}
    case LOGIN_SUCCESS:
      return {}
    case LOGIN_FAILURE:
      return {}
    case FETCHING:
      return {}
    case FETCH_LOCATIONS_SUCCESS:
      return {}
    case FETCH_LOCATIONS_FAILURE:
      return {}
    
    default:
      return state
  }
}
