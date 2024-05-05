import { request } from "../../../utils.js/request";
import { setServerErrorFormAction } from "../set-server-error-action";
import { setUserAction } from "../set-user-action";

export const loginAsync = (email, password) => (dispatch) => {
	return request("/login", "POST", { email, password }).then(
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
