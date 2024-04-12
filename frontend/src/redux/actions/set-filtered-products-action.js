import { SET_FILTERED_PRODUCTS } from "./constants/action-constants";

export const setFilteredProductsAction = (products) => {
	return {
		type: SET_FILTERED_PRODUCTS,
		payload: products,
	};
};
