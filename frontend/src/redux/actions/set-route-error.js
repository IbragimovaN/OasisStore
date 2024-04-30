import { SET_ROUTE_ERROR } from "./constants/action-constants";

export const setRouteErrorAction = (error) => {
	return {
		type: SET_ROUTE_ERROR,
		payload: error,
	};
};
