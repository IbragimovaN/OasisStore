import {
	SET_FILTERED_PRODUCTS,
	SET_PRODUCTS,
	SET_IS_UPDATED_PRODUCTS,
	SET_CURRENT_PRODUCT,
} from "../actions/constants/action-constants";

const initialProductsState = {
	products: [],
	filteredProducts: [],
	isUpdatedProducts: false,
	currentProduct: "",
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
		case SET_IS_UPDATED_PRODUCTS: {
			return {
				...state,
				isUpdatedProducts: payload,
			};
		}
		case SET_FILTERED_PRODUCTS: {
			return {
				...state,
				filteredProducts: payload,
			};
		}
		case SET_CURRENT_PRODUCT: {
			return {
				...state,
				currentProduct: payload,
			};
		}
		default:
			return state;
	}
};
