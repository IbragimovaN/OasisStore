import { DELETE_COMMENT } from "./constants/action-constants";

export const deleteComment = (id) => {
	return {
		type: DELETE_COMMENT,
		payload: id,
	};
};
