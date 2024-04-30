import {
	SET_SERVER_ERROR_FORM,
	SET_ROUTE_ERROR,
	SET_CONNECTION_ERROR,
} from "../actions/constants/action-constants";

const initialUserState = {
	serverErrorForm: null,
	routeError: null,
	connectionError: null,
};

export const errorReducer = (state = initialUserState, action) => {
	const { type, payload } = action;
	switch (type) {
		case SET_SERVER_ERROR_FORM: {
			return {
				...state,
				serverErrorForm: payload,
			};
		}
		case SET_ROUTE_ERROR: {
			return {
				...state,
				routeError: payload,
			};
		}
		case SET_CONNECTION_ERROR: {
			return {
				...state,
				connectionError: payload,
			};
		}

		default:
			return state;
	}
};
