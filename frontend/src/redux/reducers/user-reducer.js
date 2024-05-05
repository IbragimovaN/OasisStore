import {
	SET_USER,
	SET_INFO_MESSAGE,
} from "../actions/constants/action-constants";

const initialUserState = {
	user: JSON.parse(sessionStorage.getItem("userData")),
	infoMessage: null,
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
		case SET_INFO_MESSAGE: {
			return {
				...state,
				infoMessage: payload,
			};
		}

		default:
			return state;
	}
};
