import { request } from "../../../utils.js/request";

export const logoutAsync = () => (dispatch) => {
	request("/logout", "POST");
};
