import { SET_IS_LOADING } from "./constants/action-constants";

export const setIsLoading = (data) => {
	return {
		type: SET_IS_LOADING,
		payload: data,
	};
};
