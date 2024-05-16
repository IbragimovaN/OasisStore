import { SET_COMMENTS_CURRENT_PRODUCT } from "./constants/action-constants";

export const setCommentsCurrentProducts = (comment) => {
	return {
		type: SET_COMMENTS_CURRENT_PRODUCT,
		payload: comment,
	};
};
