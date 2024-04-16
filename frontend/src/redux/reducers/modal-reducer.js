import {
	SET_IS_OPEN_MODAL,
	SET_TEXT_MODAL,
	SET_CURRENT_ID,
} from "../actions/constants/action-constants";

const initialUserState = {
	isOpenModal: false,
	modalText: "",
	currentId: "",
};

export const modalReducer = (state = initialUserState, action) => {
	const { type, payload } = action;
	switch (type) {
		case SET_IS_OPEN_MODAL: {
			return {
				...state,
				isOpenModal: payload,
			};
		}
		case SET_TEXT_MODAL: {
			return {
				...state,
				modalText: payload,
			};
		}
		case SET_CURRENT_ID: {
			return {
				...state,
				currentId: payload,
			};
		}

		default:
			return state;
	}
};
