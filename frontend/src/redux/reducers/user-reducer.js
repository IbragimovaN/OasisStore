import { SET_USER } from "../actions/constants/action-constants";

const initialUserState = {
	user: JSON.parse(sessionStorage.getItem("userData")),
};

export const userReducer = (state = initialUserState, action) => {
	const { type, payload } = action;
	switch (type) {
		case SET_USER: {
			return {
				...state,
				user: payload,
			};
		}

		default:
			return state;
	}
};
