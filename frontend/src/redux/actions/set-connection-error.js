import { SET_CONNECTION_ERROR } from "./constants/action-constants";

export const setConnectionError = (error) => {
	return {
		type: SET_CONNECTION_ERROR,
		payload: error,
	};
};
