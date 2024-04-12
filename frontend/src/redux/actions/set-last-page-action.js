import { SET_LAST_PAGE } from "./constants/action-constants";

export const setLastPageAction = (lastPage) => {
	return {
		type: SET_LAST_PAGE,
		payload: lastPage,
	};
};
