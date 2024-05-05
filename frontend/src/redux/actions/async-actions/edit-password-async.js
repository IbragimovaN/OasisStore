import { request } from "../../../utils.js/request";
import { setRouteErrorAction } from "../set-route-error";
import { setUserAction } from "../set-user-action";

export const editPasswordAsync = (token, id, password) => (dispatch) => {
	return request(`/password/${token}/${id}`, "PATCH", {
		password,
	}).then(({ user, error }) => {
		if (error) {
			dispatch(setRouteErrorAction(error));
		} else if (user) {
			dispatch(setUserAction(user));
		}
	});
};
