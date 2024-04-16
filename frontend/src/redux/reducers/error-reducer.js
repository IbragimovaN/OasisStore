import { SET_SERVER_ERROR } from "../actions/constants/action-constants";

const initialUserState = {
	serverError: null,
};

export const errorReducer = (state = initialUserState, action) => {
	const { type, payload } = action;
	switch (type) {
		case SET_SERVER_ERROR: {
			return {
				...state,
				user: payload,
			};
		}

		default:
			return state;
	}
};
