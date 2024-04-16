import { SET_CURRENT_PRODUCT } from "./constants/action-constants";

export const setCurrentProductAction = (data) => {
	return {
		type: SET_CURRENT_PRODUCT,
		payload: data,
	};
};
