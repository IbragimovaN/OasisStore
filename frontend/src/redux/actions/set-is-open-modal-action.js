import { SET_IS_OPEN_MODAL } from "./constants/action-constants";

export const setIsOpenModal = (data) => {
	return {
		type: SET_IS_OPEN_MODAL,
		payload: data,
	};
};
