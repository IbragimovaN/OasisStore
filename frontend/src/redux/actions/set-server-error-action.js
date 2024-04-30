import { SET_SERVER_ERROR_FORM } from "./constants/action-constants";

export const setServerErrorFormAction = (data) => {
	return {
		type: SET_SERVER_ERROR_FORM,
		payload: data,
	};
};
