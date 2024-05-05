import { request } from "../../../utils.js/request";
import { setServerErrorFormAction } from "../set-server-error-action";
import { setUserAction } from "../set-user-action";

export const registerAsync = (email, password) => (dispatch) => {
	return request("/register", "POST", { email, password }).then(
		({ error, user }) => {
			if (error) {
				dispatch(setServerErrorFormAction(error));
				return { error: error };
			}

			dispatch(setUserAction(user));
			sessionStorage.setItem("userData", JSON.stringify(user));
			return { user: user };
		},
	);
};
