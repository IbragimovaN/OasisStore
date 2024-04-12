import { SET_PRODUCTS } from "./constants/action-constants";

export const setProductsAction = (data) => {
	return {
		type: SET_PRODUCTS,
		payload: data,
	};
};
