import {
	SET_USER,
	SET_INFO_MESSAGE,
	SET_FAVOURITES,
} from "../actions/constants/action-constants";

const initialUserState = {
	user: JSON.parse(sessionStorage.getItem("userData")),
	infoMessage: null,
	favourites: [],
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
		case SET_FAVOURITES: {
			return {
				...state,
				favourites: payload,
			};
		}

		default:
			return state;
	}
};
