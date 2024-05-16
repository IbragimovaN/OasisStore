import { request } from "../../../utils.js/request";
import { deleteComment } from "../delete-comment";

export const deleteCommentAsync = (productId, commentId) => (dispatch) => {
	request(`/products/${productId}/comments/${commentId}`, "DELETE").then(() => {
		dispatch(deleteComment(commentId));
	});
};
