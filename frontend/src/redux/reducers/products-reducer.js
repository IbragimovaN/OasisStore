import {
	SET_FILTERED_PRODUCTS,
	SET_PRODUCTS,
} from "../actions/constants/action-constants";

const initialProductsState = {
	products: [],
	filteredProducts: [],
};

export const productsReducer = (state = initialProductsState, action) => {
	const { type, payload } = action;
	switch (type) {
		case SET_PRODUCTS: {
			return {
				...state,
				products: payload,
			};
		}
		case SET_FILTERED_PRODUCTS: {
			return {
				...state,
				filteredProducts: payload,
			};
		}
		default:
			return state;
	}
};
