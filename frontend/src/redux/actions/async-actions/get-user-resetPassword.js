import { request } from "../../../utils.js/request";
import { setRouteErrorAction } from "../set-route-error";
import { setUserAction } from "../set-user-action";

export const getUserResetTokenAsync = (resetToken) => (dispatch) => {
	return request(`/password/${resetToken}`).then(({ user, error }) => {
		if (error) {
			dispatch(setRouteErrorAction(error));
			return error;
		} else if (user) {
			dispatch(setUserAction(user));
			return user;
		}
	});
};
