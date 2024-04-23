import { ADD_PRODUCT_TO_BAG } from "./constants/action-constants";

export const addProductToBag = (data) => {
	return {
		type: ADD_PRODUCT_TO_BAG,
		payload: data,
	};
};
