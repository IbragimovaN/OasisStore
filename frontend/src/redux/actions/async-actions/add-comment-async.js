import { request } from "../../../utils.js/request";
import { setCommentsCurrentProducts } from "../set-comments-current-products";

export const addCommentAsync = (productId, content) => (dispatch) => {
	request(`/products/${productId}/comments`, "POST", { content }).then(
		(commentData) => {
			dispatch(setCommentsCurrentProducts(commentData));
		},
	);
};
