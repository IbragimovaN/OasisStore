import { SET_IS_UPDATED_PRODUCTS } from "./constants/action-constants";

export const setIsUpdatedProducts = (data) => {
	return {
		type: SET_IS_UPDATED_PRODUCTS,
		payload: data,
	};
};
