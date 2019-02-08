import axios from "axios";

export const FETCHING_LOC = "FETCHING_LOC";
export const FETCH_LOC_SUCCESS = "FETCH_LOC_SUCCESS";
export const FETCH_LOC_FAILURE = "FETCH_LOC_FAILURE";
export const FETCHING_SINGLE_LOC = "FETCHING_LOC_ITEM";
export const FETCH_SINGLE_LOC_SUCCESS = "FETCH_INV_ITEM_SUCCESS";
export const FETCH_SINGLE_LOC_FAILURE = "FETCH_INV_ITEM_FAILURE";
export const POSTING_LOC = "POSTING_INV";
export const POST_LOC_SUCCESS = "POST_INV_SUCCESS";
export const POST_LOC_FAILURE = "POST_INV_FAILURE";
export const DELETING_LOC = "DELETING_INV";
export const DELETE_LOC_SUCCESS = "DELETE_INV_SUCCESS";
export const DELETE_LOC_FAILURE = "DELETE_INV_FAILURE";
export const UPDATING_LOC = "UPDATING_INV";
export const UPDATE_LOC_SUCCESS = "UPDATE_INV_SUCCESS";
export const UPDATE_LOC_FAILURE = "UPDATE_FAILURE";

export const getLocations = () => {
	const promise = axios.get(
		`https://ill-serve-soup2-db.herokuapp.com/api/locations`
	);
	return dispatch => {
		console.log("location dispatch");

		dispatch({ type: FETCHING_LOC });
		promise
			.then(response => {
				console.log(response.data);

				dispatch({ type: FETCH_LOC_SUCCESS, payload: response.data });
			})
			.catch(err => {
				dispatch({ type: FETCH_LOC_FAILURE });
			});
	};
};

export const getLocation = id => {
	const promise = axios.get(
		`https://ill-serve-soup2-db.herokuapp.com/api/locations/${id}`
	);
	return dispatch => {
		console.log("getlocation dispatch");
		dispatch({ type: FETCHING_SINGLE_LOC });
		promise
			.then(response => {
				console.log(response.data);
				dispatch({
					type: FETCH_SINGLE_LOC_SUCCESS,
					payload: response.data,
				});
			})
			.catch(err => {
				dispatch({
					type: FETCH_SINGLE_LOC_FAILURE,
					error: "Could not find user",
				});
			});
	};
};

export const changeLoc = (location, locationId) => {
	const promise = axios.put(
		`https://ill-serve-soup2-db.herokuapp.com/api/locations/${locationId}`,
		location
	);
	return dispatch => {
		console.log("in change loc dispatch");
		dispatch({ type: UPDATING_LOC });
		promise
			.then(response => {
				console.log(response.data);
				dispatch({ type: UPDATE_LOC_SUCCESS, users: response.data });
			})
			.catch(err => {
				dispatch({ type: UPDATE_LOC_FAILURE });
			});
	};
};
export const deleteLoc = id => {
	const promise = axios.delete(
		`https://ill-serve-soup2-db.herokuapp.com/api/locations/${id}`
	);
	return dispatch => {
		console.log("in delete dispatch");
		dispatch({ type: DELETING_LOC });
		promise
			.then(response => {
				console.log(response.data);
				dispatch({ type: DELETE_LOC_SUCCESS, users: response.data });
			})
			.catch(err => {
				dispatch({ type: DELETE_LOC_FAILURE, error: "Error" });
			});
	};
};
