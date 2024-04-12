import { SET_SHOULD_SEARCH } from "./constants/action-constants";

export const setShouidSearchAction = (data) => {
	return { type: SET_SHOULD_SEARCH, payload: data };
};
