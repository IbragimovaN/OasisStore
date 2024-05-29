import { SET_FAVOURITES } from "./constants/action-constants";

export const setFavouritesAction = (data) => {
	return {
		type: SET_FAVOURITES,
		payload: data,
	};
};
