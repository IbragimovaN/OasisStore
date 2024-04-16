import { SET_SERVER_ERROR } from "./constants/action-constants";

export const setServerErrorAction = (data) => {
	return {
		type: SET_SERVER_ERROR,
		payload: data,
	};
};
