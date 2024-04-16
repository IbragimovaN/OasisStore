import { request } from "../../../utils.js/request";
import { setServerErrorAction } from "../set-server-error-action";
import { setUserAction } from "../set-user-action";

export const registerAsync = (login, password) => (dispatch) => {
	return request("/register", "POST", { login, password }).then(
		({ error, user }) => {
			if (error) {
				dispatch(setServerErrorAction(error));
				return;
			}

			dispatch(setUserAction(user));
			sessionStorage.setItem("userData", JSON.stringify(user));
		},
	);
};
