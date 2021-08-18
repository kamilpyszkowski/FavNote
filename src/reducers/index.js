/* eslint-disable no-underscore-dangle */
import { ADD_SUCCESS, REMOVE_SUCCESS, AUTH_SUCCESS, FETCH_SUCCESS, LOGOUT } from 'actions';

const initialState = {
	// userID: '60fc2fd534229a0a4742d5d1',
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case REMOVE_SUCCESS:
			return {
				...state,
				[action.payload.itemType]: [
					...state[action.payload.itemType].filter(
						(item) => item.id !== action.payload.itemId,
					),
				],
			};
		case ADD_SUCCESS:
			return {
				...state,
			};
		case AUTH_SUCCESS:
			return {
				...state,
				userID: action.payload.data._id,
			};
		case FETCH_SUCCESS:
			return {
				...state,
				[action.payload.itemType]: [...action.payload.data],
			};
		case LOGOUT:
			return {};
		default:
			return state;
	}
};

export default rootReducer;
