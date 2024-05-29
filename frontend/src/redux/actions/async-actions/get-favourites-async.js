import { request } from "../../../utils.js/request";
import { setFavouritesAction } from "../set-favourites-action";

export const getFavouritesAsync = (userId) => (dispatch) => {
	request(`/user/${userId}`, "GET").then((data) => {
		dispatch(setFavouritesAction(data.data));
	});
};
