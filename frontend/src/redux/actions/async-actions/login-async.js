import { request } from "../../../utils.js/request";
import { setServerErrorFormAction } from "../set-server-error-action";
import { setUserAction } from "../set-user-action";

export const loginAsync = (login, password) => (dispatch) => {
	return request("/login", "POST", { login, password }).then(
		({ user, error }) => {
			if (error) {
				dispatch(setServerErrorFormAction(error));
				return;
			}
			dispatch(setUserAction(user));
			sessionStorage.setItem("userData", JSON.stringify(user));
			return user.roleId;
		},
	);
};
