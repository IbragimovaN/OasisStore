import { request } from "../../../utils.js/request";
import { setServerErrorAction } from "../set-server-error-action";
import { setUserAction } from "../set-user-action";

export const loginAsync = (login, password) => (dispatch) => {
	return request("/login", "POST", { login, password }).then(
		({ user, error }) => {
			if (error) {
				dispatch(setServerErrorAction(error));
				return;
			}
			dispatch(setUserAction(user));
			sessionStorage.setItem("userData", JSON.stringify(user));
			return user.roleId;
		},
	);
};
