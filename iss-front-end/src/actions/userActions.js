import axios from 'axios';



export const FETCHING_USERS = "FETCHING_USERS";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";
export const FETCHING_USER = "FETCHING_USER";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
export const UPDATING_USER = "UPDATING_USER";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE= "UPDATE_USER_FAILURE";
export const DELETING_USER = "DELETING_USER";
export const DELETE_USER_SUCCESS = "DELETE_INV_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_INV_FAILURE";

axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");

export const getUsers = () => {
    const promise = axios.get(`https://ill-serve-soup2-db.herokuapp.com/api/users`);
    return dispatch=>{
      dispatch({type: FETCHING_USERS});
      promise
        .then(response=>{
          dispatch({type:FETCH_USERS_SUCCESS, payload: response.data})
        })
        .catch(err=>{
          dispatch({type: FETCH_USERS_FAILURE})})


    }
}

export const getUser = (id) => {
    const promise = axios.get(`https://ill-serve-soup2-db.herokuapp.com/api/users${id}`)
    return dispatch=>{
      dispatch({type:FETCHING_USER});
      promise
        .then(response=>{
          dispatch({type: FETCH_USER_SUCCESS, payload: response.data})
        })
        .catch(err=>{
          dispatch({type: FETCH_USER_FAILURE, error: 'Could not find user'})
        })
    };
}

export const changeUser = (user, userId) => {
    const promise = axios.put(`https://ill-serve-soup2-db.herokuapp.com/api/users/${userId}`, user)
    return dispatch=>{
      dispatch({type: UPDATING_USER})
      promise
        .then(response=>{
          dispatch({type: UPDATE_USER_SUCCESS, users: response.data})
        })
        .catch(err=>{
          dispatch({type: UPDATE_USER_FAILURE})
        })
    }
}
export const deleteUser = (id) => {
    const promise = axios.delete(`https://ill-serve-soup2-db.herokuapp.com/api/users/${id}`)
    return dispatch =>{
      dispatch({type: DELETING_USER})
      promise
        .then(response =>{
          dispatch({type: DELETE_USER_SUCCESS, users: response.data})
        })
        .catch(err=>{
          dispatch({type: DELETE_USER_FAILURE, error: "Error"})
        })
     }
}
