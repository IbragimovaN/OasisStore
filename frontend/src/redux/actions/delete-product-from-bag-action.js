import { DELETE_PRODUCT_FROM_BAG } from "./constants/action-constants";

export const deleteProductFromBagAction = (id) => {
	return {
		type: DELETE_PRODUCT_FROM_BAG,
		payload: id,
	};
};
