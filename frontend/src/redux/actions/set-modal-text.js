import { SET_TEXT_MODAL } from "./constants/action-constants";

export const setModalText = (data) => {
	return {
		type: SET_TEXT_MODAL,
		payload: data,
	};
};
