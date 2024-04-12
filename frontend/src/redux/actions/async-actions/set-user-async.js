import { request } from "../../../utils.js/request";
import { setUserAction } from "../set-user-action";

export const setUserAsync = (login, password) => (dispatch) => {
	console.log("action запущен");
	request("/login", "POST", { login, password }).then(({ user, error }) => {
		console.log(user);
		// if (error) {
		// 	setServerError(error);
		// 	return;
		// }
		dispatch(setUserAction(user));
		sessionStorage.setItem("userData", JSON.stringify(user));
	});
};
