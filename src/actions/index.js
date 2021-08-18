import axios from 'axios';

export const ADD_REQUEST = 'ADD_REQUEST';
export const ADD_SUCCESS = 'ADD_SUCCESS';

export const REMOVE_REQUEST = 'REMOVE_REQUEST';
export const REMOVE_SUCCESS = 'REMOVE_SUCCESS';

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_REQUEST = 'AUTH_REQUEST';

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_REQUEST = 'FETCH_REQUEST';

export const LOGOUT = 'LOGOUT';

export const removeItem = (itemType, itemId) => (dispatch) => {
	dispatch({ type: REMOVE_REQUEST });
	axios
		.delete(`http://localhost:9000/api/note/${itemId}`)
		.then(() => {
			dispatch({
				type: REMOVE_SUCCESS,
				payload: { itemType, itemId },
			});
		})
		.catch((err) => {
			console.log(err);
		});
};

export const addItem = (itemType, content) => (dispatch, getState) => {
	dispatch({ type: ADD_REQUEST });
	axios
		.post(`http://localhost:9000/api/note/`, {
			userID: getState().userID,
			type: itemType,
			...content,
		})
		.then((response) => {
			console.log(response);
			dispatch({
				type: ADD_SUCCESS,
				payload: { itemType, response },
			});
		})
		.catch((err) => {
			console.log(err);
		});
};

export const authenticate = (data) => (dispatch) => {
	dispatch({ type: AUTH_REQUEST });
	return axios
		.post('http://localhost:9000/api/user/login', { ...data })
		.then((payload) => {
			console.log(payload);
			dispatch({ type: AUTH_SUCCESS, payload });
		})
		.catch((err) => {
			console.log(err);
		});
};

export const fetchItems = (itemType) => (dispatch, getState) => {
	dispatch({ type: FETCH_REQUEST });
	return axios
		.get('http://localhost:9000/api/notes/type', {
			params: {
				type: itemType,
				userID: getState().userID,
			},
		})
		.then(({ data }) => {
			dispatch({
				type: FETCH_SUCCESS,
				payload: {
					data,
					itemType,
				},
			});
		})
		.catch((err) => {
			console.log(err);
		});
};

export const logOut = () => (dispatch) => {
	dispatch({ type: LOGOUT });
};
