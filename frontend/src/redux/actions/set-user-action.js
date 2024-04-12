import { SET_USER } from "./constants/action-constants";

export const setUserAction = (data) => {
	return {
		type: SET_USER,
		payload: data,
	};
};
