import { SET_INFO_MESSAGE } from "./constants/action-constants";

export const setInfoMessage = (message) => {
	return {
		type: SET_INFO_MESSAGE,
		payload: message,
	};
};
