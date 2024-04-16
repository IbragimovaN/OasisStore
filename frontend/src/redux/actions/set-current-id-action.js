import { SET_CURRENT_ID } from "./constants/action-constants";

export const setCurrentIdAction = (data) => {
	return {
		type: SET_CURRENT_ID,
		payload: data,
	};
};
